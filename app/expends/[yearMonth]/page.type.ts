/** 支出一覧のフィルター条件 */
export type FilterCondition = {
  categoryIdList: number[];
  budgetIdList: number[];
  paymentMethodIdList: number[];
  isProcessedList: boolean[];
}