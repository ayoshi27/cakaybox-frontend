import { useQuery, gql } from "@apollo/client";
import { graphql } from '@/src/gql/'

const AllPaymentMethodsQuery = graphql(`
  query AllPaymentMethodsQuery {
    paymentMethods {
      id
      name
      payerId
    }
  }
`);

/** 登録されているすべての支払方法を取得する */
export function useAllPaymentMethodsQuery() {
  const {
    data: paymentMethods,
    loading: loadingPaymentMethods,
    error: errorWhileLoadingPaymentMethods,
  } = useQuery(AllPaymentMethodsQuery);

  return {
    paymentMethods: paymentMethods?.paymentMethods,
    loadingPaymentMethods,
    errorWhileLoadingPaymentMethods,
  };
}
