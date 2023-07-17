"use client";

import { gql, useMutation } from "@apollo/client";

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

export default function PostExpend() {
  const [createExpend, { loading, error }] = useMutation(CreateExpendMutation);
  const clickHandler = () => {
    const variables = {
      price: 1000,
      description: "mutation test",
      date: "2023-07-02T07:15:34.669Z",
      categoryId: 24,
      payerId: 3,
      budgetId: 4,
      paymentMethodId: 6,
      processed: false,
    };
    createExpend({ variables });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <button onClick={clickHandler}>submit</button>;
}
