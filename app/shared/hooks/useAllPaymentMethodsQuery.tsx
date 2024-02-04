import { client } from "@/lib/query";

/** 登録されているすべての支払方法を取得する */
export function useAllPaymentMethodsQuery() {
  const { data, isLoading, error, refetch } =
    client.paymentMethods.getList.useQuery(["paymentMethods"]);

  return {
    data: data?.body,
    isLoading,
    error,
    refetch,
  };
}
