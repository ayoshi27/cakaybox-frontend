import { useQuery, gql } from "@apollo/client";

const AllPaymentMethodsQuery = gql`
  query {
    paymentMethods {
      id
      name
      payerId
    }
  }
`;

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
