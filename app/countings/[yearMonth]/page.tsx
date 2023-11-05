"use client";

import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import ControlPanel from "./components/control-panel/ControlPanel";
import styles from "./countings.module.scss";
import { useAllCategoriesQuery } from "@/app/shared/hooks/useAllCategoriesQuery";
import { useAllCountingItemsQuery } from "./hooks/useAllCountingItemsQuery";
import { useAllCustomCountingItemsQuery } from "./hooks/useAllCustomCountingItemsQuery";
import { useALLExtendsForCalculationQuery } from "./hooks/useALLExtendsForCalculationQuery";

export default function Counting({
  params,
}: {
  params: { yearMonth: string };
}) {
  const { yearMonth } = params;
  const router = useRouter();

  const { categories, loadingCategories } = useAllCategoriesQuery();
  const { countingItems, loadingCountingItems } = useAllCountingItemsQuery();
  const { customCountingItems, loadingCustomCountingItems } =
    useAllCustomCountingItemsQuery();
  const { expends, loadingExpends } = useALLExtendsForCalculationQuery({
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
              ? countingItem.payers
                  .map((item: any) => item.payer.id)
                  .includes(expend.payer.id)
              : false;

          const budgetFilter =
            countingItem.budgets.length > 0
              ? countingItem.budgets
                  .map((item: any) => item.budget.id)
                  .includes(expend.budget.id)
              : false;

          const paymentMethodFilter =
            countingItem.paymentMethods.length > 0
              ? countingItem.paymentMethods
                  .map((item: any) => item.paymentMethod.id)
                  .includes(expend.paymentMethod.id)
              : false;

          return payerFilter && budgetFilter && paymentMethodFilter;
        }
      );

      records[countingItem.code] = getSumPrice(filteredExpendsByCountingItem);
    });
    return records;
  });

  const customCountingItemsTableRecords = customCountingItems?.map(
    (customCountingItem: any) => {
      const sum = customCountingItem.terms.reduce((acc: any, term: any) => {
        console.log("term", term);
        const filteredExpendsByCustomCountingItem = expends?.filter(
          (expend: any) => {
            console.log("------------------");
            console.log(expend.description);
            const categoryFilter =
              term.categories.length > 0
                ? term.categories
                    .map((item: any) => item.category.id)
                    .includes(expend.category.id)
                : false;
            const payerFilter =
              term.payers.length > 0
                ? term.payers
                    .map((item: any) => item.payer.id)
                    .includes(expend.payer.id)
                : false;
            const budgetFilter =
              term.budgets.length > 0
                ? term.budgets
                    .map((item: any) => item.budget.id)
                    .includes(expend.budget.id)
                : false;
            const paymentMethodFilter =
              term.paymentMethods.length > 0
                ? term.paymentMethods
                    .map((item: any) => item.paymentMethod.id)
                    .includes(expend.paymentMethod.id)
                : false;
            const processedFilter = term.processed.includes(expend.processed);

            console.log("categoryFilter", categoryFilter);
            console.log("payerFilter", payerFilter);
            console.log("budgetFilter", budgetFilter);
            console.log("paymentMethodFilter", paymentMethodFilter);
            console.log("processedFilter", processedFilter);

            return (
              categoryFilter &&
              payerFilter &&
              budgetFilter &&
              paymentMethodFilter &&
              processedFilter
            );
          }
        );

        return (
          acc +
          getSumPrice(filteredExpendsByCustomCountingItem) *
            (term.sign === "PLUS" ? term.coefficient : -term.coefficient)
        );
      }, 0);

      return {
        id: customCountingItem.id,
        name: customCountingItem.name,
        sum,
      };
    }
  );

  console.log(customCountingItemsTableRecords);

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

  if (
    loadingCategories ||
    loadingCountingItems ||
    loadingCustomCountingItems ||
    loadingExpends
  )
    return <p>Now Loading...</p>;

  return (
    <>
      <ControlPanel
        yearMonth={yearMonth}
        moveToAdjacentMonth={moveToAdjacentMonth}
        navigateToExpnedsPage={navigateToExpnedsPage}
      />
      <div className={styles.contentsContainer}>

        {/* カスタム集計項目 */}
        <section className={styles.tableSection}>
          <h2 className={styles.tableTitle}>カスタム集計項目</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>カスタム集計項目名</th>
                  <th>値</th>
                </tr>
              </thead>
              <tbody>
                {customCountingItemsTableRecords &&
                  customCountingItemsTableRecords.map((record: any) => (
                    <tr key={record.id}>
                      <td>{record.name}</td>
                      <td>{record.sum}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* カテゴリー別集計項目 */}
        <section className={styles.tableSection}>
          <h2 className={styles.tableTitle}>カテゴリー別集計項目</h2>
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
        </section>
      </div>
    </>
  );
}
