"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import ControlPanel from "./components/control-panel/ControlPanel";

export default function Counting({ children }: { children: React.ReactNode }) {
  const [yearMonth, setYearMonth] = useState(dayjs().format("YYYY-MM"));
  const router = useRouter();

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
    setYearMonth(adjacent.format("YYYY-MM"));
  }

  /** 表示している年月の支出一覧画面に遷移する */
  function navigateToExpnedsPage(): void {
    router.push("/expends");
  }

  return (
    <>
      <ControlPanel
        yearMonth={yearMonth}
        moveToAdjacentMonth={moveToAdjacentMonth}
        navigateToExpnedsPage={navigateToExpnedsPage}
      />
      <p>this is coutning page</p>
    </>
  );
}
