/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
};

export type Budget = {
  __typename?: 'Budget';
  Expend: Array<Expend>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BudgetOnCountingItem = {
  __typename?: 'BudgetOnCountingItem';
  budget: Budget;
  countingItem: CountingItem;
  id: Scalars['ID']['output'];
};

export type BudgetOnCustomCountingItemTerm = {
  __typename?: 'BudgetOnCustomCountingItemTerm';
  budget: Budget;
  createdAt: Scalars['DateTime']['output'];
  customCountingItemTerm: CustomCountingItemTerm;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Category = {
  __typename?: 'Category';
  Expend: Array<Expend>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  limit: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CategoryOnCustomCountingItemTerm = {
  __typename?: 'CategoryOnCustomCountingItemTerm';
  category: Category;
  createdAt: Scalars['DateTime']['output'];
  customCountingItemTerm: CustomCountingItemTerm;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CountingItem = {
  __typename?: 'CountingItem';
  budgets: Array<BudgetOnCountingItem>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  payers: Array<PayerOnCountingItem>;
  paymentMethods: Array<PaymentMethodOnCountingItem>;
  processed: Array<Scalars['Boolean']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomCountingItem = {
  __typename?: 'CustomCountingItem';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  terms: Array<CustomCountingItemTerm>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomCountingItemTerm = {
  __typename?: 'CustomCountingItemTerm';
  CustomCountingItem: CustomCountingItem;
  budgets: Array<BudgetOnCustomCountingItemTerm>;
  categories: Array<CategoryOnCustomCountingItemTerm>;
  coefficient: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  payers: Array<PayerOnCustomCountingItemTerm>;
  paymentMethods: Array<PaymentMethodOnCustomCountingItemTerm>;
  processed: Array<Scalars['Boolean']['output']>;
  sign: Scalars['String']['output'];
};

export type Expend = {
  __typename?: 'Expend';
  budget: Budget;
  budgetId: Scalars['Int']['output'];
  category: Category;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  payer: Payer;
  payerId: Scalars['Int']['output'];
  paymentMethod: PaymentMethod;
  paymentMethodId: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  processed: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createExpend: Expend;
  deleteExpend: Expend;
  updateExpend: Expend;
};


export type MutationCreateExpendArgs = {
  budgetId: Scalars['Int']['input'];
  categoryId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  payerId: Scalars['Int']['input'];
  paymentMethodId: Scalars['Int']['input'];
  price: Scalars['Int']['input'];
  processed: Scalars['Boolean']['input'];
};


export type MutationDeleteExpendArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateExpendArgs = {
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type Payer = {
  __typename?: 'Payer';
  Expend: Array<Expend>;
  PaymentMethod: Array<PaymentMethod>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PayerOnCountingItem = {
  __typename?: 'PayerOnCountingItem';
  countingItem: CountingItem;
  id: Scalars['ID']['output'];
  payer: Payer;
};

export type PayerOnCustomCountingItemTerm = {
  __typename?: 'PayerOnCustomCountingItemTerm';
  createdAt: Scalars['DateTime']['output'];
  customCountingItemTerm: CustomCountingItemTerm;
  id: Scalars['ID']['output'];
  payer: Payer;
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  Expend: Array<Expend>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  payer: Payer;
  payerId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentMethodOnCountingItem = {
  __typename?: 'PaymentMethodOnCountingItem';
  countingItem: CountingItem;
  id: Scalars['ID']['output'];
  paymentMethod: PaymentMethod;
};

export type PaymentMethodOnCustomCountingItemTerm = {
  __typename?: 'PaymentMethodOnCustomCountingItemTerm';
  createdAt: Scalars['DateTime']['output'];
  customCountingItemTerm: CustomCountingItemTerm;
  id: Scalars['ID']['output'];
  paymentMethod: PaymentMethod;
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  budgets: Array<Budget>;
  categories: Array<Category>;
  countingItem: Array<CountingItem>;
  customCountingItem: Array<CustomCountingItem>;
  expends: Array<Expend>;
  ok: Scalars['Boolean']['output'];
  payers: Array<Payer>;
  paymentMethods: Array<PaymentMethod>;
};


export type QueryExpendsArgs = {
  yearMonth?: InputMaybe<Scalars['String']['input']>;
};

export type AllExtendsForCountingQueryQueryVariables = Exact<{
  yearMonth?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllExtendsForCountingQueryQuery = { __typename?: 'Query', expends: Array<{ __typename?: 'Expend', price: number, description: string, processed: boolean, category: { __typename?: 'Category', id: string, name: string }, paymentMethod: { __typename?: 'PaymentMethod', id: string, name: string }, budget: { __typename?: 'Budget', id: string, name: string }, payer: { __typename?: 'Payer', id: string, name: string } }> };

export type AllCountingItemsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCountingItemsQueryQuery = { __typename?: 'Query', countingItem: Array<{ __typename?: 'CountingItem', id: string, code: string, name: string, payers: Array<{ __typename?: 'PayerOnCountingItem', payer: { __typename?: 'Payer', id: string } }>, budgets: Array<{ __typename?: 'BudgetOnCountingItem', budget: { __typename?: 'Budget', id: string } }>, paymentMethods: Array<{ __typename?: 'PaymentMethodOnCountingItem', paymentMethod: { __typename?: 'PaymentMethod', id: string } }> }> };

export type AllCustomCountingItemsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCustomCountingItemsQueryQuery = { __typename?: 'Query', customCountingItem: Array<{ __typename?: 'CustomCountingItem', id: string, name: string, terms: Array<{ __typename?: 'CustomCountingItemTerm', id: string, sign: string, coefficient: number, processed: Array<boolean>, categories: Array<{ __typename?: 'CategoryOnCustomCountingItemTerm', category: { __typename?: 'Category', id: string } }>, budgets: Array<{ __typename?: 'BudgetOnCustomCountingItemTerm', budget: { __typename?: 'Budget', id: string } }>, payers: Array<{ __typename?: 'PayerOnCustomCountingItemTerm', payer: { __typename?: 'Payer', id: string } }>, paymentMethods: Array<{ __typename?: 'PaymentMethodOnCustomCountingItemTerm', paymentMethod: { __typename?: 'PaymentMethod', id: string } }> }> }> };

export type AllExpendsQueryQueryVariables = Exact<{
  yearMonth?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllExpendsQueryQuery = { __typename?: 'Query', expends: Array<{ __typename?: 'Expend', id: string, date: string, price: number, description: string, processed: boolean, category: { __typename?: 'Category', name: string }, budget: { __typename?: 'Budget', name: string }, payer: { __typename?: 'Payer', name: string }, paymentMethod: { __typename?: 'PaymentMethod', name: string } }> };

export type CreateExpendMutationVariables = Exact<{
  price: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  date: Scalars['String']['input'];
  categoryId: Scalars['Int']['input'];
  payerId: Scalars['Int']['input'];
  budgetId: Scalars['Int']['input'];
  paymentMethodId: Scalars['Int']['input'];
  processed: Scalars['Boolean']['input'];
}>;


export type CreateExpendMutation = { __typename?: 'Mutation', createExpend: { __typename?: 'Expend', price: number, description: string, date: string, categoryId: number, payerId: number, budgetId: number, paymentMethodId: number, processed: boolean } };

export type DeleteExpendMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteExpendMutation = { __typename?: 'Mutation', deleteExpend: { __typename?: 'Expend', id: string } };

export type AllBudgetsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBudgetsQueryQuery = { __typename?: 'Query', budgets: Array<{ __typename?: 'Budget', id: string, name: string }> };

export type AllCategoriesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQueryQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, limit: number }> };

export type AllPayersQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPayersQueryQuery = { __typename?: 'Query', payers: Array<{ __typename?: 'Payer', id: string, name: string }> };

export type AllPaymentMethodsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPaymentMethodsQueryQuery = { __typename?: 'Query', paymentMethods: Array<{ __typename?: 'PaymentMethod', id: string, name: string, payerId: number }> };


export const AllExtendsForCountingQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllExtendsForCountingQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yearMonth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"yearMonth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yearMonth"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<AllExtendsForCountingQueryQuery, AllExtendsForCountingQueryQueryVariables>;
export const AllCountingItemsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCountingItemsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countingItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"payers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"budgets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllCountingItemsQueryQuery, AllCountingItemsQueryQueryVariables>;
export const AllCustomCountingItemsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCustomCountingItemsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customCountingItem"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"terms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sign"}},{"kind":"Field","name":{"kind":"Name","value":"coefficient"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"budgets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"payers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]}}]} as unknown as DocumentNode<AllCustomCountingItemsQueryQuery, AllCustomCountingItemsQueryQueryVariables>;
export const AllExpendsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllExpendsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yearMonth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expends"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"yearMonth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yearMonth"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"payer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"budget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<AllExpendsQueryQuery, AllExpendsQueryQueryVariables>;
export const CreateExpendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createExpend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"budgetId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"processed"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createExpend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"Argument","name":{"kind":"Name","value":"categoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"payerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"budgetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"budgetId"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}},{"kind":"Argument","name":{"kind":"Name","value":"processed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"processed"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"payerId"}},{"kind":"Field","name":{"kind":"Name","value":"budgetId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"processed"}}]}}]}}]} as unknown as DocumentNode<CreateExpendMutation, CreateExpendMutationVariables>;
export const DeleteExpendDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteExpend"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteExpend"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteExpendMutation, DeleteExpendMutationVariables>;
export const AllBudgetsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllBudgetsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"budgets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllBudgetsQueryQuery, AllBudgetsQueryQueryVariables>;
export const AllCategoriesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCategoriesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}}]} as unknown as DocumentNode<AllCategoriesQueryQuery, AllCategoriesQueryQueryVariables>;
export const AllPayersQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPayersQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllPayersQueryQuery, AllPayersQueryQueryVariables>;
export const AllPaymentMethodsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllPaymentMethodsQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentMethods"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"payerId"}}]}}]}}]} as unknown as DocumentNode<AllPaymentMethodsQueryQuery, AllPaymentMethodsQueryQueryVariables>;