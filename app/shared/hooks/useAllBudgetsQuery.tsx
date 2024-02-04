import { client } from "@/lib/query";

/** 登録されているすべての支出元を取得する */
export function useAllBudgetsQuery() {
  const { data, isLoading, error, refetch } = client.budgets.getList.useQuery([
    "budgets",
  ]);

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
