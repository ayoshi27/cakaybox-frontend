"use client";

import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UpdateExpendMutation = gql`
  mutation updateExpend($id: Int!, $description: String!) {
    updateExpend(id: $id, description: $description) {
      id
      description
    }
  }
`;

export default function UpdateExpend() {
  const [updateExpend, { loading, error }] = useMutation(UpdateExpendMutation);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");

  const clickHandler = () => {
    const variables = {
      id: selectedId,
      description: selectedDescription,
    };
    updateExpend({ variables });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <p>
        <input
          type="number"
          value={selectedId}
          onChange={(e) => setSelectedId(Number(e.currentTarget.value))}
        />
        <input
          type="text"
          value={selectedDescription}
          onChange={(e) => setSelectedDescription(e.currentTarget.value)}
        />
      </p>
      <button onClick={clickHandler}>update</button>
    </>
  );
}
