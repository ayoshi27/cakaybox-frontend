import { useQuery, gql } from "@apollo/client";
import { graphql } from '@/src/gql/'

const AllBudgetsQuery = graphql(`
  query AllBudgetsQuery {
    budgets {
      id
      name
    }
  }
`);

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
