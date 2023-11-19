import { useQuery, gql } from "@apollo/client";

const AllCategoriesQuery = gql`
  query {
    categories {
      id
      name
      limit
    }
  }
`;

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
