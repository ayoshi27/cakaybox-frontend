"use client";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const DeleteExpendMutation = gql`
  mutation deleteExpend($id: Int!) {
    deleteExpend(id: $id) {
      id
    }
  }
`;

export default function DeleteExpend() {
  const [deleteExpend, { loading, error }] = useMutation(DeleteExpendMutation);
  const [selectedId, setSelectedId] = useState(0);

  const clickHandler = () => {
    const variables = {
      id: selectedId,
    };
    deleteExpend({ variables });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <p>
        <input
          type="text"
          value={selectedId}
          onChange={(e) => setSelectedId(Number(e.currentTarget.value))}
        />
      </p>
      <button onClick={clickHandler}>delete</button>
    </>
  );
}
