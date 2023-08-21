import { gql, useQuery } from "@apollo/client";

const AllCountingItemsQuery = gql`
  query {
    countingItem {
      id
      code
      name
      PayerCountingItem {
        payer {
          id
        }
      }
      BudgetCountingItem {
        budget {
          id
        }
      }
      PaymentMethodCountingItem {
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
    data: countingItems,
    loading: loadingCountingItems,
    error: errorWhileLoadingCountingItems,
  } = useQuery(AllCountingItemsQuery);

  console.log("countingItems: ", countingItems);

  return {
    countingItems: countingItems?.countingItem,
    loadingCountingItems,
    errorWhileLoadingCountingItems,
  };
}
