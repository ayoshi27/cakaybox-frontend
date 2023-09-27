import { useQuery, gql } from "@apollo/client";

const AllPayersQuery = gql`
  query {
    payers {
      id
      name
    }
  }
`;

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
