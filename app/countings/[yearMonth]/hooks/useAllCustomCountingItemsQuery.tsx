import { client } from "@/lib/query";

/** 登録されているすべてのカスタム集計項目を取得する */
export function useAllCustomCountingItemsQuery() {
  const { data, isLoading, error, refetch } =
    client.customCountingItems.getList.useQuery(["customCountingItems"]);

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
