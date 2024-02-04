import { client } from "@/lib/query";

/** 登録されているすべての集計項目を取得する */
export function useAllCountingItemsQuery() {
  const { data, isLoading, error, refetch } =
    client.countingItems.getList.useQuery(["countingItems"]);

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
