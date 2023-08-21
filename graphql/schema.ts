import "./types/Category"
import "./types/Expend"
import "./types/Payer"
import "./types/Budget"
import "./types/PaymentMethod"
import "./types/CountingItem"
import "./types/PaymentMethodCountingItem"
import "./types/PayerCountingItem"
import "./types/BudgetCountingItem"
import { builder } from "./builder";

export const schema = builder.toSchema()