import {  useQuery } from "@apollo/client";
import { graphql } from '@/src/gql/'

const allCountingItemsQueryDocument = graphql(/* GraphQL */ 
  `
    query AllCountingItemsQuery {
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
  `,
);

/** 登録されているすべての集計項目を取得する */
export function useAllCountingItemsQuery() {
  const {
    data,
    loading: loadingCountingItems,
    error: errorWhileLoadingCountingItems,
  } = useQuery(allCountingItemsQueryDocument);

  return {
    countingItems: data?.countingItem,
    loadingCountingItems,
    errorWhileLoadingCountingItems,
  };
}
