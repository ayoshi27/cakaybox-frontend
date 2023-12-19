import styles from "./FilterDialog.module.scss";
import { useState } from "react";

export default function FilterDialog(props: {
  dialog: any;
  isLoading: boolean;
  categories: any;
  payers: any;
  budgets: any;
  paymentMethods: any;
  applyFilterConditions: (newValue: any) => void;
}) {
  const {
    dialog: Dialog,
    isLoading,
    categories,
    budgets,
    paymentMethods,
    applyFilterConditions,
  } = props;

  const [categoryIdList, setCategoryIdList] = useState<number[]>([]);
  const [budgetIdList, setBudgetIdList] = useState<number[]>([]);
  const [paymentMethodIdList, setPaymentMethodIdList] = useState<number[]>([]);
  const [isProcessedList, setIsProcessedList] = useState([true, false]);

  /** 表示ボタンを押した時の処理 */
  function handleDisplayButton(): void {
    applyFilterConditions({
      categoryIdList: categoryIdList,
      budgetIdList: budgetIdList,
      paymentMethodIdList: paymentMethodIdList,
      isProcessedList: isProcessedList,
    });
    resetFormValue();
  }

  function onChangeCategory(e: any): void {
    const newValue = [...e.target.options]
      .filter((option: any) => option.selected)
      .map((option: any) => option.value);
    setCategoryIdList(newValue);
  }

  function onChangePaymentMethod(e: any): void {
    const newValue = [...e.target.options]
      .filter((option: any) => option.selected)
      .map((option: any) => option.value);
    setPaymentMethodIdList(newValue);
  }

  function onChangeBudget(e: any): void {
    const newValue = [...e.target.options]
      .filter((option: any) => option.selected)
      .map((option: any) => option.value);
    setBudgetIdList(newValue);
  }

  function onChangeIsProcessed(e: any): void {
    const newValue = [...e.target.options]
      .filter((option: any) => option.selected)
      .map((option: any) => (option.value === "true" ? true : false));
    setIsProcessedList(newValue);
  }

  /** フォームの値をリセットする */
  function resetFormValue(): void {
    setCategoryIdList([]);
    setIsProcessedList([]);
    setBudgetIdList([]);
    setPaymentMethodIdList([]);
  }

  return (
    <Dialog isLoading={isLoading}>
      <h2 className={styles.dialogTitle}>支出を絞り込んで表示する</h2>

      <div className={styles.formItem}>
        カテゴリー:
        <select onChange={(e) => onChangeCategory(e)} multiple>
          {categories.map((category: any) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formItem}>
        支払方法:
        <select onChange={(e) => onChangePaymentMethod(e)} multiple>
          {paymentMethods.map((paymentMethod: any) => (
            <option key={paymentMethod.id} value={paymentMethod.id}>
              {paymentMethod.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formItem}>
        支出元:
        <select onChange={(e) => onChangeBudget(e)} multiple>
          {budgets.map((budget: any) => (
            <option key={budget.id} value={budget.id}>
              {budget.name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.formItem}>
        精算済:
        <select onChange={(e) => onChangeIsProcessed(e)} multiple>
          {[
            { label: "精算済", value: true },
            { label: "未精算", value: false },
          ].map((isProcessed: any) => (
            <option key={isProcessed.label} value={isProcessed.value}>
              {isProcessed.label}
            </option>
          ))}
        </select>
      </div>

      <button className={styles.displayButton} onClick={handleDisplayButton}>
        表示
      </button>
    </Dialog>
  );
}
