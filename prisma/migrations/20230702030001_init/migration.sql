/*
  Warnings:

  - You are about to drop the column `budget_id` on the `Expend` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `Expend` table. All the data in the column will be lost.
  - You are about to drop the column `payer_id` on the `Expend` table. All the data in the column will be lost.
  - You are about to drop the column `payment_method_id` on the `Expend` table. All the data in the column will be lost.
  - Added the required column `budgetId` to the `Expend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Expend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerId` to the `Expend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentMethodId` to the `Expend` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expend" DROP COLUMN "budget_id",
DROP COLUMN "category_id",
DROP COLUMN "payer_id",
DROP COLUMN "payment_method_id",
ADD COLUMN     "budgetId" INTEGER NOT NULL,
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "payerId" INTEGER NOT NULL,
ADD COLUMN     "paymentMethodId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Expend" ADD CONSTRAINT "Expend_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expend" ADD CONSTRAINT "Expend_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expend" ADD CONSTRAINT "Expend_budgetId_fkey" FOREIGN KEY ("budgetId") REFERENCES "Budget"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expend" ADD CONSTRAINT "Expend_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
