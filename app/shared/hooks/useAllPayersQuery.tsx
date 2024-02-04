import { client } from "@/lib/query";

/** 登録されているすべての支払者を取得する */
export function useAllPayersQuery() {
  const { data, isLoading, error, refetch } = client.payers.getList.useQuery([
    "payers",
  ]);

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
