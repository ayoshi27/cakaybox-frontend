import { client } from "@/lib/query";

/** 登録されているすべてのカテゴリーを取得する */
export function useAllCategoriesQuery() {
  const { data, isLoading, error, refetch } = client.categories.getList.useQuery([
    "categories",
  ]);

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}