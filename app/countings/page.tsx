"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function Countings() {
  const roeuter = useRouter();
  const currentYearMonth = dayjs().format("YYYY-MM");
  roeuter.push(`/countings/${currentYearMonth}`);
}
