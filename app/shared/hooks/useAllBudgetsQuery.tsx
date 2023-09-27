import { useQuery, gql } from "@apollo/client";

const AllBudgetsQuery = gql`
  query {
    budgets {
      id
      name
    }
  }
`;

/** 登録されているすべての支出元を取得する */
export function useAllBudgetsQuery() {
  const {
    data: budgets,
    loading: loadingBudgets,
    error: errorWhileLoadingBudgets,
  } = useQuery(AllBudgetsQuery);

  return {
    budgets: budgets?.budgets,
    loadingBudgets,
    errorWhileLoadingBudgets,
  };
}
