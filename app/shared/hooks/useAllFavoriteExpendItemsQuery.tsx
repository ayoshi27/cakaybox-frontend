import { client } from "@/lib/query";

/** 登録されているすべてのお気に入り支出を取得する */
export function useAllFavoriteExpendItemsQuery() {
  const { data, isLoading, error, refetch } = client.favoriteExpendItem.getList.useQuery([
    "favoriteExpendItem",
  ]);

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}