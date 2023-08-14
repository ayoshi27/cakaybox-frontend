"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function Expends() {
  const roeuter = useRouter();
  const currentYearMonth = dayjs().format("YYYY-MM");
  roeuter.push(`/expends/${currentYearMonth}`);
}
