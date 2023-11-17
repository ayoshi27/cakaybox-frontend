import { useQuery, gql } from "@apollo/client";
import { graphql } from '@/src/gql/'

const AllPayersQuery = graphql(`
  query AllPayersQuery {
    payers {
      id
      name
    }
  }
`);

/** 登録されているすべての支払者を取得する */
export function useAllPayersQuery() {
  const {
    data: payers,
    loading: loadingPayers,
    error: errorWhileLoadingPayers,
  } = useQuery(AllPayersQuery);

  return {
    payers: payers?.payers,
    loadingPayers,
    errorWhileLoadingPayers,
  };
}
