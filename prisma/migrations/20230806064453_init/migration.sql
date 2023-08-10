-- CreateTable
CREATE TABLE "BudgetCountingItem" (
    "id" SERIAL NOT NULL,
    "budgetId" INTEGER NOT NULL,
    "countingItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BudgetCountingItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BudgetCountingItem_budgetId_countingItemId_key" ON "BudgetCountingItem"("budgetId", "countingItemId");

-- AddForeignKey
ALTER TABLE "BudgetCountingItem" ADD CONSTRAINT "BudgetCountingItem_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BudgetCountingItem" ADD CONSTRAINT "BudgetCountingItem_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
