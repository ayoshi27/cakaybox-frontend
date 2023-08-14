import { useMutation, gql } from "@apollo/client";

const CreateExpendMutation = gql`
  mutation createExpend(
    $price: Int!
    $description: String!
    $date: String!
    $categoryId: Int!
    $payerId: Int!
    $budgetId: Int!
    $paymentMethodId: Int!
    $processed: Boolean!
  ) {
    createExpend(
      price: $price
      description: $description
      date: $date
      categoryId: $categoryId
      payerId: $payerId
      budgetId: $budgetId
      paymentMethodId: $paymentMethodId
      processed: $processed
    ) {
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

export function useCreateExpendMutation() {
  const [createExpend, { loading: loadingCreate, error: errorWhileCreating }] =
    useMutation(CreateExpendMutation);

  return {
    createExpend,
    loadingCreate,
    errorWhileCreating,
  };
}
