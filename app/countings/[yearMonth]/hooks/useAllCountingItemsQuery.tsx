import { gql, useQuery } from "@apollo/client";

const AllCountingItemsQuery = gql`
  query {
    countingItem {
      id
      code
      name
      payers {
        payer {
          id
        }
      }
      budgets {
        budget {
          id
        }
      }
      paymentMethods {
        paymentMethod {
          id
        }
      }
    }
  }
`;

/** 登録されているすべての集計項目を取得する */
export function useAllCountingItemsQuery() {
  const {
    data,
    loading: loadingCountingItems,
    error: errorWhileLoadingCountingItems,
  } = useQuery(AllCountingItemsQuery);

  return {
    countingItems: data?.countingItem,
    loadingCountingItems,
    errorWhileLoadingCountingItems,
  };
}
