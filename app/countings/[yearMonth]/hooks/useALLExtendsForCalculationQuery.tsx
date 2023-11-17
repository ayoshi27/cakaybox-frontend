import { useQuery, gql } from "@apollo/client";
import { graphql } from '@/src/gql/'

const AllExtendsForCountingQuery = graphql(`
  query AllExtendsForCountingQuery ($yearMonth: String) {
    expends(yearMonth: $yearMonth) {
      price
      description
      category {
        id
        name
      }
      paymentMethod {
        id
        name
      }
      budget {
        id
        name
      }
      payer {
        id
        name
      }
      processed
    }
  }
`);

/**
 * 指定した年月の支出（集計用）を全件取得する
 * @param variables - yearMonth (e.g. 2021-01)
 */
export function useALLExtendsForCalculationQuery(variables: { yearMonth: string }) {
  const { data, loading, error, refetch } = useQuery(AllExtendsForCountingQuery, {
    variables,
  });

  return {
    expends: data?.expends,
    loadingExpends: loading,
    errorWhileLoadingExpends: error,
    refetch,
  };
}
