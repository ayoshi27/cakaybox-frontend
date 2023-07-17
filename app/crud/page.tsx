"use client";

import dayjs from "dayjs";
import { useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import styles from "./crud.module.scss";

// queries
const AllExpendsQuery = gql`
  query {
    expends {
      id
      date
      description
      Category {
        name
      }
      Budget {
        name
      }
    }
  }
`;

const UpdateExpendMutation = gql`
  mutation updateExpend($id: Int!, $description: String!) {
    updateExpend(id: $id, description: $description) {
      id
      description
    }
  }
`;

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

const DeleteExpendMutation = gql`
  mutation deleteExpend($id: Int!) {
    deleteExpend(id: $id) {
      id
    }
  }
`;

export default function CrudExpend() {
  const {
    data: expends,
    loading: loadingExpends,
    error: errorWhileloadingExpends,
    refetch,
  } = useQuery(AllExpendsQuery);

  const [createExpend, { loading: loadingCreate, error: errorWhileCreating }] =
    useMutation(CreateExpendMutation);
  const [updateExpend, { loading, error }] = useMutation(UpdateExpendMutation);
  const [
    deleteExpend,
    { loading: loadingDeletion, error: errorWhileDeletion },
  ] = useMutation(DeleteExpendMutation);

  const [selectedId, setSelectedId] = useState(0);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addDate, setAddDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [addPrice, setAddPrice] = useState("0");

  const addExpend = async () => {
    const variables = {
      price: Number(addPrice),
      description: addDescription,
      date: addDate,
      categoryId: 24,
      payerId: 3,
      budgetId: 4,
      paymentMethodId: 6,
      processed: false,
    };
    await createExpend({ variables });
    refetch();
  };

  const clickUpdateButton = () => {
    const variables = {
      id: selectedId,
      description: selectedDescription,
    };
    updateExpend({ variables });
  };

  const clickDeleteExpend = async (id: number) => {
    const variables = {
      id: Number(id),
    };
    await deleteExpend({ variables });
    refetch();
  };

  if (loadingExpends || loadingCreate || loadingDeletion || loading)
    return <p>Loading...</p>;
  if (errorWhileloadingExpends)
    return <p>Oh no... {errorWhileloadingExpends.message}</p>;
  if (errorWhileCreating) return <p>Oh no... {errorWhileCreating.message}</p>;
  if (errorWhileDeletion) return <p>Oh no... {errorWhileDeletion.message}</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <h1>支出管理</h1>
      <section className={styles.section}>
        <h2>支出更新</h2>
        <p>
          id:{" "}
          <input
            type="number"
            value={selectedId}
            onChange={(e) => setSelectedId(Number(e.currentTarget.value))}
          />
        </p>
        <p>
          description:{" "}
          <input
            type="text"
            value={selectedDescription}
            onChange={(e) => setSelectedDescription(e.currentTarget.value)}
          />
        </p>
        <button onClick={clickUpdateButton}>更新</button>
      </section>
      <section className={styles.section}>
        <h2>支出追加</h2>
        <div>
          <p>
            date:{" "}
            <input
              type="date"
              value={addDate}
              onChange={(e) => setAddDate(e.currentTarget.value)}
            />
          </p>
          <p>
            price:{" "}
            <input
              type="text"
              value={addPrice}
              onChange={(e) => setAddPrice(e.currentTarget.value)}
            />
          </p>
          <p>
            description:{" "}
            <input
              type="text"
              value={addDescription}
              onChange={(e) => setAddDescription(e.currentTarget.value)}
            />
          </p>
          <button onClick={addExpend}>追加</button>
        </div>
      </section>
      <section className={styles.section}>
        <h2>支出一覧</h2>
        <ul>
          {expends.expends.map((expend: any) => (
            <li className={styles.expendItem} key={expend.id}>
              {expend.id} {dayjs(expend.date).format("YYYY/MM/DD")}{" "}
              {expend.description} {expend.Category.name} {expend.Budget.name}
              <button
                className={styles.editButton}
                onClick={() => setSelectedId(Number(expend.id))}
              >
                編集
              </button>
              <button
                className={styles.deleteButton}
                onClick={() => clickDeleteExpend(expend.id)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
