import dayjs from "dayjs";
import styles from "./ControlPanel.module.scss";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ControlPanel(props: {
  yearMonth: string;
  moveToAdjacentMonth: (direction: "prev" | "next") => void;
}) {
  return (
    <div className={styles.controlPanel}>
      <button
        className={styles.prevButton}
        onClick={() => props.moveToAdjacentMonth("prev")}
      >
        <ChevronLeftIcon />
        前月
      </button>
      <span className={styles.currentYearMonth}>
        {dayjs(props.yearMonth).format("YYYY年MM月")}の支出一覧
      </span>
      <button
        className={styles.nextButton}
        onClick={() => props.moveToAdjacentMonth("next")}
      >
        次月
        <ChevronRightIcon />
      </button>
      <button className={styles.toCountingButton}>
        {dayjs(props.yearMonth).format("YYYY年MM月")}の支出集計
      </button>
    </div>
  );
}
