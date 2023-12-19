import { useQuery, gql } from "@apollo/client";

const AllExpendsQuery = gql`
  query ($yearMonth: String) {
    expends(yearMonth: $yearMonth) {
      id
      date
      price
      description
      category {
        name
        id
      }
      budget {
        name
        id
      }
      payer {
        name
      }
      paymentMethod {
        name
        id
      }
      budget {
        name
        id
      }
      processed
    }
  }
`;

/**
 * 指定した年月の支出を全件取得する
 * @param variables - yearMonth (e.g. 2021-01)
 */
export function useAllExpendsQuery(variables: { yearMonth: string }) {
  const { data, loading, error, refetch } = useQuery(AllExpendsQuery, {
    variables,
  });

  return {
    expends: data?.expends,
    loading,
    error,
    refetch,
  };
}
