"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import styles from "./expends.module.scss";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import ControlPanel from "./components/control-panel/ControlPanel";
import { useDialog } from "../../shared/dialog";
import AddExpendsDialog from "./components/add-expends-dialog/addExpendsDialog";
import UpdateExpendsDialog from "./components/update-expends-dialog/updateExpendsDialog";
import FilterDialog from "./components/filter-dialog/FilterDialog";
import SkeletonTable from "@/app/shared/skeleton-table/SkeltonTable";
import { formatPrice } from "@/app/utils/stringUtils";
import { useAllExpendsQuery } from "../../shared/hooks/useAllExpendsQuery";
import { useCreateExpendMutation } from "./hooks/useCreateExpendMutation";
import { useAllCategoriesQuery } from "@/app/shared/hooks/useAllCategoriesQuery";
import { useAllPayersQuery } from "@/app/shared/hooks/useAllPayersQuery";
import { useAllBudgetsQuery } from "@/app/shared/hooks/useAllBudgetsQuery";
import { useAllPaymentMethodsQuery } from "@/app/shared/hooks/useAllPaymentMethodsQuery";
import { useDeleteExpendMutation } from "./hooks/useDeleteExpendMutation";
import { useUpdateExpendMutation } from "./hooks/useUpdateExpendMutation";

export default function Expends({ params }: { params: { yearMonth: string } }) {
  const { yearMonth } = params;
  const router = useRouter();
  const {
    Dialog,
    open: openAddExpendDialog,
    close: closeAddExpendDialog,
  } = useDialog();
  const {
    Dialog: updateExpendDialog,
    open: openUpdateExpendDialog,
    close: closeUpdateExpendDialog,
  } = useDialog();
  const {
    Dialog: filterDialog,
    open: openFilterDialog,
    close: closeFilterDialog,
  } = useDialog();

  const [updateExpendDialogId, setUpdateExpendDialogId] = useState(nanoid());
  const [initialValueForUpdateDialog, setInitialValueForUpdateDialog] =
    useState<{
      id: number;
      date: string;
      price: number;
      description: string;
      categoryId: number;
      payerId: number;
      budgetId: number;
      paymentMethodId: number;
      processed: boolean;
    }>({
      id: 0,
      date: "",
      price: 0,
      description: "",
      categoryId: 0,
      payerId: 0,
      budgetId: 0,
      paymentMethodId: 0,
      processed: false,
    });

  const [filterConditions, setFilterConditions] = useState<{
    categoryIdList: number[];
    budgetIdList: number[];
    paymentMethodIdList: number[];
    isProcessedList: boolean[];
  }>({
    categoryIdList: [],
    budgetIdList: [],
    paymentMethodIdList: [],
    isProcessedList: [true, false],
  });

  const {
    data: expends,
    isLoading: isLoadingExpends,
    error: errorWhileloadingExpends,
    refetch,
  } = useAllExpendsQuery({ yearMonth: yearMonth });

  /**フィルターで指定した条件で絞り込まれた支出レコードリスト */
  const filteredExpends = expends?.filter((expend) => {
    const isCategoryMatched =
      filterConditions.categoryIdList.length === 0 ||
      filterConditions.categoryIdList.includes(expend.category.id);
    const isBudgetMatched =
      filterConditions.budgetIdList.length === 0 ||
      filterConditions.budgetIdList.includes(expend.budget.id);
    const isPaymentMethodMatched =
      filterConditions.paymentMethodIdList.length === 0 ||
      filterConditions.paymentMethodIdList.includes(expend.paymentMethod.id);
    const isProcessedMatched =
      filterConditions.isProcessedList.length === 0 ||
      filterConditions.isProcessedList.includes(expend.processed);
    return (
      isCategoryMatched &&
      isBudgetMatched &&
      isPaymentMethodMatched &&
      isProcessedMatched
    );
  });

  const {
    data: budgets,
    isLoading: loadingBudgets,
    error: errorWhileLoadingBudgets,
  } = useAllBudgetsQuery();

  const {
    data: categories,
    isLoading: loadingCategories,
    error: errorWhileLoadingCategories,
  } = useAllCategoriesQuery();

  const {
    data: payers,
    isLoading: loadingPayers,
    error: errorWhileLoadingPayers,
  } = useAllPayersQuery();

  const {
    data: paymentMethods,
    isLoading: loadingPaymentMethods,
    error: errorWhileLoadingPaymentMethods,
  } = useAllPaymentMethodsQuery();

  const {
    mutateAsync: createExpend,
    isPending: loadingCreate,
    error: errorWhileCreating,
  } = useCreateExpendMutation();

  const { deleteExpend, loadingDeletion, errorWhileDeletion } =
    useDeleteExpendMutation();

  const { updateExpend, loadingUpdate, errorWhileUpdating } =
    useUpdateExpendMutation();

  const selectItemLoading =
    loadingCategories ||
    loadingPayers ||
    loadingBudgets ||
    loadingPaymentMethods;

  /**
   * 引数で渡される条件でフィルターを適用する
   * @param payload - フィルター条件
   */
  function applyFilterConditions(payload: any): void {
    setFilterConditions(payload);
    closeFilterDialog();
  }

  /**
   * フィルター条件をリセットする
   */
  function resetFilterConditions(): void {
    setFilterConditions({
      categoryIdList: [],
      budgetIdList: [],
      paymentMethodIdList: [],
      isProcessedList: [true, false],
    });
  }

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
    await createExpend({
      body: variables,
    });
    refetch();
    closeAddExpendDialog();
  };

  /**
   * 支出レコードを更新する
   * @param variables - 更新するレコードの値
   */
  const onUpdateExpend = async (variables: {
    date: string;
    price: number;
    description: string;
    categoryId: number;
    payerId: number;
    budgetId: number;
    paymentMethodId: number;
    processed: boolean;
  }) => {
    await updateExpend({ variables });
    refetch();
    closeUpdateExpendDialog();
  };

  /**
   * 指定されたidの支出レコードを更新するダイアログを表示する
   * @param expendsId - 支出レコードのid
   */
  function onClickUpdateButton(expendsId: number): void {
    setUpdateExpendDialogId(nanoid());
    const targetExpend = expends?.find((expend) => expend.id === expendsId);
    if (!targetExpend) return;

    const {
      date,
      price,
      description,
      category,
      payer,
      budget,
      paymentMethod,
      processed,
    } = targetExpend;
    setInitialValueForUpdateDialog({
      id: expendsId,
      date,
      price,
      description,
      categoryId: category.id,
      payerId: payer.id,
      budgetId: budget.id,
      paymentMethodId: paymentMethod.id,
      processed,
    });
    openUpdateExpendDialog();
  }

  /**
   * 指定されたidの支出レコードを削除する
   * @param id - 支出レコードのid
   */
  const clickDeleteExpend = async (id: number) => {
    const variables = { id };
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
    return <p>Oh no... {errorWhileloadingExpends.status}</p>;
  if (errorWhileCreating) return <p>Oh no... {errorWhileCreating.status}</p>;
  if (errorWhileDeletion) return <p>Oh no... {errorWhileDeletion.message}</p>;

  return (
    <>
      <ControlPanel
        yearMonth={yearMonth}
        moveToAdjacentMonth={moveToAdjacentMonth}
        navigateToCountingPage={navigateToCountingPage}
      />
      <div className={styles.contentsContainer}>
        <div className={styles.tableControlContainer}>
          <button
            className={styles.addExpendButton}
            onClick={openAddExpendDialog}
          >
            支出追加
          </button>
          <div className={styles.filterButtonContainer}>
            <button
              className={styles.filterButton}
              onClick={resetFilterConditions}
            >
              <FilterAltOffIcon color="primary" fontSize="small" />
            </button>
            <button className={styles.filterButton} onClick={openFilterDialog}>
              <FilterAltIcon color="primary" fontSize="small" />
              フィルター
            </button>
          </div>
        </div>
        {isLoadingExpends ? (
          <SkeletonTable />
        ) : (
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
                {filteredExpends &&
                  filteredExpends.map((expend) => (
                    <tr key={expend.id}>
                      <td>{dayjs(expend.date).format("YYYY/MM/DD")}</td>
                      <td>{formatPrice(expend.price)}</td>
                      <td>{expend.description}</td>
                      <td>{expend.category.name}</td>
                      <td>{expend.payer.name}</td>
                      <td>{expend.paymentMethod.name}</td>
                      <td>{expend.budget.name}</td>
                      <td>{expend.processed ? "済" : "未"}</td>
                      <td>
                        <button
                          className={styles.tableButton}
                          onClick={() => onClickUpdateButton(expend.id)}
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
        )}
      </div>

      {!selectItemLoading && (
        <AddExpendsDialog
          dialog={Dialog}
          isLoading={loadingCreate}
          categories={categories}
          payers={payers}
          budgets={budgets}
          paymentMethods={paymentMethods}
          addExpend={addExpend}
        />
      )}
      {!selectItemLoading && (
        <UpdateExpendsDialog
          key={updateExpendDialogId} // NOTE: 編集ボタンをクリックする度にダイアログを初期化する
          dialog={updateExpendDialog}
          isLoading={loadingUpdate}
          categories={categories}
          payers={payers}
          budgets={budgets}
          paymentMethods={paymentMethods}
          initialValue={initialValueForUpdateDialog}
          updateExpend={onUpdateExpend}
        />
      )}
      {!selectItemLoading && (
        <FilterDialog
          dialog={filterDialog}
          isLoading={loadingCreate}
          categories={categories}
          payers={payers}
          budgets={budgets}
          paymentMethods={paymentMethods}
          applyFilterConditions={applyFilterConditions}
        />
      )}
    </>
  );
}
