/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query AllExtendsForCountingQuery ($yearMonth: String) {\n    expends(yearMonth: $yearMonth) {\n      price\n      description\n      category {\n        id\n        name\n      }\n      paymentMethod {\n        id\n        name\n      }\n      budget {\n        id\n        name\n      }\n      payer {\n        id\n        name\n      }\n      processed\n    }\n  }\n": types.AllExtendsForCountingQueryDocument,
    "\n    query AllCountingItemsQuery {\n      countingItem {\n        id\n        code\n        name\n        payers {\n          payer {\n            id\n          }\n        }\n        budgets {\n          budget {\n            id\n          }\n        }\n        paymentMethods {\n          paymentMethod {\n            id\n          }\n        }\n      }\n    }\n  ": types.AllCountingItemsQueryDocument,
    "\n  query AllCustomCountingItemsQuery {\n    customCountingItem {\n      id\n      name\n      terms {\n        id\n        sign\n        coefficient\n        categories {\n          category {\n            id\n          }\n        }\n        budgets {\n          budget {\n            id\n          }\n        }\n        payers {\n          payer {\n            id\n          }\n        }\n        paymentMethods {\n          paymentMethod {\n            id\n          }\n        }\n        processed\n      }\n    }\n  }\n": types.AllCustomCountingItemsQueryDocument,
    "\n  query AllExpendsQuery ($yearMonth: String) {\n    expends(yearMonth: $yearMonth) {\n      id\n      date\n      price\n      description\n      category {\n        name\n      }\n      budget {\n        name\n      }\n      payer {\n        name\n      }\n      paymentMethod {\n        name\n      }\n      budget {\n        name\n      }\n      processed\n    }\n  }\n": types.AllExpendsQueryDocument,
    "\n  mutation createExpend(\n    $price: Int!\n    $description: String!\n    $date: String!\n    $categoryId: Int!\n    $payerId: Int!\n    $budgetId: Int!\n    $paymentMethodId: Int!\n    $processed: Boolean!\n  ) {\n    createExpend(\n      price: $price\n      description: $description\n      date: $date\n      categoryId: $categoryId\n      payerId: $payerId\n      budgetId: $budgetId\n      paymentMethodId: $paymentMethodId\n      processed: $processed\n    ) {\n      price\n      description\n      date\n      categoryId\n      payerId\n      budgetId\n      paymentMethodId\n      processed\n    }\n  }\n": types.CreateExpendDocument,
    "\n  mutation deleteExpend($id: Int!) {\n    deleteExpend(id: $id) {\n      id\n    }\n  }\n": types.DeleteExpendDocument,
    "\n  query AllBudgetsQuery {\n    budgets {\n      id\n      name\n    }\n  }\n": types.AllBudgetsQueryDocument,
    "\n  query AllCategoriesQuery {\n    categories {\n      id\n      name\n      limit\n    }\n  }\n": types.AllCategoriesQueryDocument,
    "\n  query AllPayersQuery {\n    payers {\n      id\n      name\n    }\n  }\n": types.AllPayersQueryDocument,
    "\n  query AllPaymentMethodsQuery {\n    paymentMethods {\n      id\n      name\n      payerId\n    }\n  }\n": types.AllPaymentMethodsQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
// export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllExtendsForCountingQuery ($yearMonth: String) {\n    expends(yearMonth: $yearMonth) {\n      price\n      description\n      category {\n        id\n        name\n      }\n      paymentMethod {\n        id\n        name\n      }\n      budget {\n        id\n        name\n      }\n      payer {\n        id\n        name\n      }\n      processed\n    }\n  }\n"): (typeof documents)["\n  query AllExtendsForCountingQuery ($yearMonth: String) {\n    expends(yearMonth: $yearMonth) {\n      price\n      description\n      category {\n        id\n        name\n      }\n      paymentMethod {\n        id\n        name\n      }\n      budget {\n        id\n        name\n      }\n      payer {\n        id\n        name\n      }\n      processed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query AllCountingItemsQuery {\n      countingItem {\n        id\n        code\n        name\n        payers {\n          payer {\n            id\n          }\n        }\n        budgets {\n          budget {\n            id\n          }\n        }\n        paymentMethods {\n          paymentMethod {\n            id\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query AllCountingItemsQuery {\n      countingItem {\n        id\n        code\n        name\n        payers {\n          payer {\n            id\n          }\n        }\n        budgets {\n          budget {\n            id\n          }\n        }\n        paymentMethods {\n          paymentMethod {\n            id\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCustomCountingItemsQuery {\n    customCountingItem {\n      id\n      name\n      terms {\n        id\n        sign\n        coefficient\n        categories {\n          category {\n            id\n          }\n        }\n        budgets {\n          budget {\n            id\n          }\n        }\n        payers {\n          payer {\n            id\n          }\n        }\n        paymentMethods {\n          paymentMethod {\n            id\n          }\n        }\n        processed\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllCustomCountingItemsQuery {\n    customCountingItem {\n      id\n      name\n      terms {\n        id\n        sign\n        coefficient\n        categories {\n          category {\n            id\n          }\n        }\n        budgets {\n          budget {\n            id\n          }\n        }\n        payers {\n          payer {\n            id\n          }\n        }\n        paymentMethods {\n          paymentMethod {\n            id\n          }\n        }\n        processed\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllExpendsQuery ($yearMonth: String) {\n    expends(yearMonth: $yearMonth) {\n      id\n      date\n      price\n      description\n      category {\n        name\n      }\n      budget {\n        name\n      }\n      payer {\n        name\n      }\n      paymentMethod {\n        name\n      }\n      budget {\n        name\n      }\n      processed\n    }\n  }\n"): (typeof documents)["\n  query AllExpendsQuery ($yearMonth: String) {\n    expends(yearMonth: $yearMonth) {\n      id\n      date\n      price\n      description\n      category {\n        name\n      }\n      budget {\n        name\n      }\n      payer {\n        name\n      }\n      paymentMethod {\n        name\n      }\n      budget {\n        name\n      }\n      processed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createExpend(\n    $price: Int!\n    $description: String!\n    $date: String!\n    $categoryId: Int!\n    $payerId: Int!\n    $budgetId: Int!\n    $paymentMethodId: Int!\n    $processed: Boolean!\n  ) {\n    createExpend(\n      price: $price\n      description: $description\n      date: $date\n      categoryId: $categoryId\n      payerId: $payerId\n      budgetId: $budgetId\n      paymentMethodId: $paymentMethodId\n      processed: $processed\n    ) {\n      price\n      description\n      date\n      categoryId\n      payerId\n      budgetId\n      paymentMethodId\n      processed\n    }\n  }\n"): (typeof documents)["\n  mutation createExpend(\n    $price: Int!\n    $description: String!\n    $date: String!\n    $categoryId: Int!\n    $payerId: Int!\n    $budgetId: Int!\n    $paymentMethodId: Int!\n    $processed: Boolean!\n  ) {\n    createExpend(\n      price: $price\n      description: $description\n      date: $date\n      categoryId: $categoryId\n      payerId: $payerId\n      budgetId: $budgetId\n      paymentMethodId: $paymentMethodId\n      processed: $processed\n    ) {\n      price\n      description\n      date\n      categoryId\n      payerId\n      budgetId\n      paymentMethodId\n      processed\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteExpend($id: Int!) {\n    deleteExpend(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation deleteExpend($id: Int!) {\n    deleteExpend(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllBudgetsQuery {\n    budgets {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query AllBudgetsQuery {\n    budgets {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCategoriesQuery {\n    categories {\n      id\n      name\n      limit\n    }\n  }\n"): (typeof documents)["\n  query AllCategoriesQuery {\n    categories {\n      id\n      name\n      limit\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPayersQuery {\n    payers {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query AllPayersQuery {\n    payers {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllPaymentMethodsQuery {\n    paymentMethods {\n      id\n      name\n      payerId\n    }\n  }\n"): (typeof documents)["\n  query AllPaymentMethodsQuery {\n    paymentMethods {\n      id\n      name\n      payerId\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;