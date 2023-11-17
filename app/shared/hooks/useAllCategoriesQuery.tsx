import { useQuery } from "@apollo/client";
import { graphql } from "@/src/gql/";

const AllCategoriesQuery = graphql(`
  query AllCategoriesQuery {
    categories {
      id
      name
      limit
    }
  }
`);

/** 登録されているすべてのカテゴリーを取得する */
export function useAllCategoriesQuery() {
  const {
    data: categories,
    loading: loadingCategories,
    error: errorWhileLoadingCategories,
  } = useQuery(AllCategoriesQuery);

  return {
    categories: categories?.categories,
    loadingCategories,
    errorWhileLoadingCategories,
  };
}
