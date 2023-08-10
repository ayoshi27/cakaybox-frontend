import { useQuery, gql } from "@apollo/client";

const AllExpendsQuery = gql`
  query ($yearMonth: String) {
    expends(yearMonth: $yearMonth) {
      id
      date
      price
      description
      Category {
        name
      }
      Budget {
        name
      }
      Payer {
        name
      }
      PaymentMethod {
        name
      }
      Budget {
        name
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
