"use client";

import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import ControlPanel from "./components/control-panel/ControlPanel";
import styles from "./countings.module.scss";
import { useAllCategoriesQuery } from "@/app/shared/hooks/useAllCategoriesQuery";

export default function Counting({
  params,
}: {
  params: { yearMonth: string };
}) {
  const { yearMonth } = params;
  const router = useRouter();

  const { categories, loadingCategories, errorWhileLoadingCategories } =
    useAllCategoriesQuery();

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

  if (loadingCategories) return <p>Now Loading...</p>;

  console.log(categories)

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
              </tr>
            </thead>
            <tbody>
              {categories.length &&
                categories.map((category: any) => (
                  <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>9,000</td>
                    <td>1,000</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
