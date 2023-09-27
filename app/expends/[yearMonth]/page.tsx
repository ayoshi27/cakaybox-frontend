"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { gql, useMutation } from "@apollo/client";
import styles from "./expends.module.scss";
import ControlPanel from "./components/control-panel/ControlPanel";
import { useDialog } from "../../shared/dialog";
import AddExpendsDialog from "./components/add-expends-dialog/addExpendsDialog";
import { useAllExpendsQuery } from "./hooks/useAllExpendsQuery";
import { useCreateExpendMutation } from "./hooks/useCreateExpendMutation";
import { useAllCategoriesQuery } from "@/app/shared/hooks/useAllCategoriesQuery";
import { useAllPayersQuery } from "@/app/shared/hooks/useAllPayersQuery";
import { useAllBudgetsQuery } from "@/app/shared/hooks/useAllBudgetsQuery";
import { useAllPaymentMethodsQuery } from "@/app/shared/hooks/useAllPaymentMethodsQuery";

// const UpdateExpendMutation = gql`
//   mutation updateExpend($id: Int!, $description: String!) {
//     updateExpend(id: $id, description: $description) {
//       id
//       description
//     }
//   }
// `;

const DeleteExpendMutation = gql`
  mutation deleteExpend($id: Int!) {
    deleteExpend(id: $id) {
      id
    }
  }
`;

export default function Expends({ params }: { params: { yearMonth: string } }) {
  const { yearMonth } = params;
  const router = useRouter();
  const { Dialog, open: openDialog, close: closeDialog } = useDialog();

  const {
    expends,
    loading: loadingExpends,
    error: errorWhileloadingExpends,
    refetch,
  } = useAllExpendsQuery({ yearMonth: yearMonth });

  const { categories, loadingCategories, errorWhileLoadingCategories } =
    useAllCategoriesQuery();

  const { payers, loadingPayers, errorWhileLoadingPayers } =
    useAllPayersQuery();

  const { budgets, loadingBudgets, errorWhileLoadingBudgets } =
    useAllBudgetsQuery();

  const {
    paymentMethods,
    loadingPaymentMethods,
    errorWhileLoadingPaymentMethods,
  } = useAllPaymentMethodsQuery();

  const { createExpend, loadingCreate, errorWhileCreating } =
    useCreateExpendMutation();

  // const [updateExpend, { loading, error }] = useMutation(UpdateExpendMutation);
  const [
    deleteExpend,
    { loading: loadingDeletion, error: errorWhileDeletion },
  ] = useMutation(DeleteExpendMutation);

  const selectItemLoading =
    loadingCategories ||
    loadingPayers ||
    loadingBudgets ||
    loadingPaymentMethods;

  /**
   * 支出レコードを新規追加する
   * @param variables - 新規追加するレコードの値
   */
  const addExpend = async (variables: {
    date: string;
    price: number;
    description: string;
    categoryId: number;
    payerId: number;
    budgetId: number;
    paymentMethodId: number;
    processed: boolean;
  }) => {
    await createExpend({ variables });
    await refetch();
    closeDialog();
  };

  /**
   * 指定されたidの支出レコードを削除する
   * @param id - 支出レコードのid
   */
  const clickDeleteExpend = async (id: number) => {
    const variables = {
      id: Number(id),
    };
    await deleteExpend({ variables });
    refetch();
  };

  /**
   * 引数に応じて前月または翌月に移動する
   * @param direction - "prev" or "next"
   */
  function moveToAdjacentMonth(direction: "prev" | "next"): void {
    const current = dayjs(yearMonth);
    const adjacent =
      direction === "prev"
        ? current.subtract(1, "month")
        : current.add(1, "month");
    router.push(`/expends/${adjacent.format("YYYY-MM")}`);
  }

  /** 表示している年月の支出集計画面に遷移する */
  function navigateToCountingPage(): void {
    router.push(`/countings/${yearMonth}`);
  }

  if (errorWhileloadingExpends)
    return <p>Oh no... {errorWhileloadingExpends.message}</p>;
  if (errorWhileCreating) return <p>Oh no... {errorWhileCreating.message}</p>;
  if (errorWhileDeletion) return <p>Oh no... {errorWhileDeletion.message}</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <ControlPanel
        yearMonth={yearMonth}
        moveToAdjacentMonth={moveToAdjacentMonth}
        navigateToCountingPage={navigateToCountingPage}
      />
      <div className={styles.contentsContainer}>
        <button className={styles.addExpendButton} onClick={openDialog}>
          支出追加
        </button>
        <div className={styles.tableWrapper}>
          <table className={styles.expendsTable}>
            <thead>
              <tr>
                <th>日付</th>
                <th>料金</th>
                <th>内容</th>
                <th>カテゴリー</th>
                <th>支払者</th>
                <th>支払方法</th>
                <th>支払元</th>
                <th>精算済</th>
                <th>編集</th>
                <th>削除</th>
              </tr>
            </thead>
            <tbody>
              {expends &&
                expends.map((expend: any) => (
                  <tr key={expend.id}>
                    <td>{dayjs(expend.date).format("YYYY/MM/DD")}</td>
                    <td>{expend.price}</td>
                    <td>{expend.description}</td>
                    <td>{expend.category.name}</td>
                    <td>{expend.payer.name}</td>
                    <td>{expend.paymentMethod.name}</td>
                    <td>{expend.budget.name}</td>
                    <td>{expend.processed ? "済" : "未"}</td>
                    <td>
                      <button
                        className={styles.tableButton}
                        onClick={() => console.log(expend.id)}
                      >
                        編集
                      </button>
                    </td>
                    <td>
                      <button
                        className={styles.tableButton}
                        onClick={() => clickDeleteExpend(expend.id)}
                      >
                        削除
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {!selectItemLoading && (
        <AddExpendsDialog
          dialog={Dialog}
          categories={categories}
          payers={payers}
          budgets={budgets}
          paymentMethods={paymentMethods}
          addExpend={addExpend}
        />
      )}
    </>
  );
}
