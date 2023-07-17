"use client";

import { gql, useQuery } from "@apollo/client";
import type { Category } from "@prisma/client";

const AllCategoriesQuery = gql`
  query {
    categories {
      id
      name
    }
  }
`;

export default function GetExpend() {
  const { data, loading, error } = useQuery(AllCategoriesQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data.categories.map((category: Category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
}
