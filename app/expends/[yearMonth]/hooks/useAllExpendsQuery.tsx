import { useQuery, gql } from "@apollo/client";
import { graphql } from '@/src/gql/'

const AllExpendsQuery = graphql(`
  query AllExpendsQuery ($yearMonth: String) {
    expends(yearMonth: $yearMonth) {
      id
      date
      price
      description
      category {
        name
      }
      budget {
        name
      }
      payer {
        name
      }
      paymentMethod {
        name
      }
      budget {
        name
      }
      processed
    }
  }
`);

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
