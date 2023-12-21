import { useMutation, gql } from "@apollo/client";

/** 対象のidのデータを更新する */
const UpdateExpendMutation = gql`
  mutation updateExpend(
    $id: Int!
    $price: Int!
    $description: String!
    $date: String!
    $categoryId: Int!
    $payerId: Int!
    $budgetId: Int!
    $paymentMethodId: Int!
    $processed: Boolean!
  ) {
    updateExpend(
      id: $id
      price: $price
      description: $description
      date: $date
      categoryId: $categoryId
      payerId: $payerId
      budgetId: $budgetId
      paymentMethodId: $paymentMethodId
      processed: $processed
    ) {
      id
      price
      description
      date
      categoryId
      payerId
      budgetId
      paymentMethodId
      processed
    }
  }
`;

export function useUpdateExpendMutation() {
  const [updateExpend, { loading: loadingUpdate, error: errorWhileUpdating }] =
    useMutation(UpdateExpendMutation);

  return {
    updateExpend,
    loadingUpdate,
    errorWhileUpdating,
  };
}
