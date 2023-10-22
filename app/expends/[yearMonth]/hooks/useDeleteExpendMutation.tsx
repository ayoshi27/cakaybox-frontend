import { useMutation, gql } from "@apollo/client";

const DeleteExpendMutation = gql`
  mutation deleteExpend($id: Int!) {
    deleteExpend(id: $id) {
      id
    }
  }
`;

export function useDeleteExpendMutation() {
  const [
    deleteExpend,
    { loading: loadingDeletion, error: errorWhileDeletion },
  ] = useMutation(DeleteExpendMutation);

  return {
    deleteExpend,
    loadingDeletion,
    errorWhileDeletion
  };
}
