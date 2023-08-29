import { useQuery, gql } from "@apollo/client";

const AllExtendsForCountingQuery = gql`
  query ($yearMonth: String) {
    expends(yearMonth: $yearMonth) {
      price
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
`;

/**
 * 指定した年月の支出（集計用）を全件取得する
 * @param variables - yearMonth (e.g. 2021-01)
 */
export function useALLExtendsForCalcurationQuery(variables: { yearMonth: string }) {
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
