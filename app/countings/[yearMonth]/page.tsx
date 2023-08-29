"use client";

import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import ControlPanel from "./components/control-panel/ControlPanel";
import styles from "./countings.module.scss";
import { useAllCategoriesQuery } from "@/app/shared/hooks/useAllCategoriesQuery";
import { useAllCountingItemsQuery } from "./hooks/useAllCountingItemsQuery";
import { useALLExtendsForCalcurationQuery } from "./hooks/useALLExtendsForCalcurationQuery";
export default function Counting({
  params,
}: {
  params: { yearMonth: string };
}) {
  const { yearMonth } = params;
  const router = useRouter();

  const { categories, loadingCategories } = useAllCategoriesQuery();
  const { countingItems, loadingCountingItems } = useAllCountingItemsQuery();
  const { expends, loadingExpends } = useALLExtendsForCalcurationQuery({
    yearMonth,
  });

  /**
   * 引数で渡される支出の合計金額を算出する
   * @param expends - 支出一覧
   */
  const getSumPrice = (expends: any) => {
    return expends?.reduce((acc: number, expend: any) => acc + expend.price, 0);
  };

  /**
   * 引数で渡されるカテゴリーIDに紐づく支出一覧を返す
   * @param categoryId - カテゴリーID
   */
  const filterExpendsByCategory = (categoryId: string) => {
    return expends?.filter((expend: any) => expend.category.id === categoryId);
  };

  const tableRecords = categories?.map((category: any) => {
    const filteredExpendsByCategory = filterExpendsByCategory(category.id);
    const sum = getSumPrice(filteredExpendsByCategory);
    const records: any = {
      id: category.id,
      name: category.name,
      sum,
      rest: category.limit - sum,
    };

    countingItems?.forEach((countingItem: any) => {
      const filteredExpendsByCountingItem = filteredExpendsByCategory?.filter(
        (expend: any) => {
          const payerFilter =
            countingItem.payers.length > 0
              ? countingItem.payers.map(
                  (item: any) => item.id
                ).includes(expend.payer.id)
              : true;

          const budgetFilter =
            countingItem.budgets.length > 0
              ? countingItem.budgets.map(
                  (item: any) => item.id
                ).includes(expend.budget.id)
              : true;

          const paymentMethodFilter =
            countingItem.paymentMethods.length > 0
              ? countingItem.paymentMethods.map(
                  (item: any) => item.id
                ).includes(expend.paymentMethod.id)
              : true;

          return payerFilter && budgetFilter && paymentMethodFilter;
        }
      );

      records[countingItem.code] = getSumPrice(filteredExpendsByCountingItem);
    });
    return records;
  });

  /**
   * 引数に応じて前月または翌月に移動する
   * @param direction - "prev" or "next"
   */
  function moveToAdjacentMonth(direction: "prev" | "next"): void {
    const current = dayjs(yearMonth);
    const adjacent =
      direction === "prev"
        ? current.subtract(1, "month")
        : current.add(1, "month");
    router.push(`/countings/${adjacent.format("YYYY-MM")}`);
  }

  /** 表示している年月の支出一覧画面に遷移する */
  function navigateToExpnedsPage(): void {
    router.push(`/expends/${yearMonth}`);
  }

  if (loadingCategories || loadingCountingItems || loadingExpends)
    return <p>Now Loading...</p>;

  return (
    <>
      <ControlPanel
        yearMonth={yearMonth}
        moveToAdjacentMonth={moveToAdjacentMonth}
        navigateToExpnedsPage={navigateToExpnedsPage}
      />
      <div className={styles.contentsContainer}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>カテゴリー</th>
                <th>合計</th>
                <th>残り</th>
                {countingItems.map((countingItem: any) => (
                  <th key={countingItem.id}>{countingItem.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRecords.length &&
                tableRecords.map((record: any) => (
                  <tr key={record.id}>
                    {Object.keys(record).map((key, index) => {
                      if (key === "id") return null;
                      return <td key={index}>{record[key]}</td>;
                    })}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
