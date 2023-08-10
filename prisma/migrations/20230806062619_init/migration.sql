/*
  Warnings:

  - You are about to drop the column `countingItemId` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `countingItemId` on the `Payer` table. All the data in the column will be lost.
  - You are about to drop the column `countingItemId` on the `PaymentMethod` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_countingItemId_fkey";

-- DropForeignKey
ALTER TABLE "Payer" DROP CONSTRAINT "Payer_countingItemId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentMethod" DROP CONSTRAINT "PaymentMethod_countingItemId_fkey";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "countingItemId";

-- AlterTable
ALTER TABLE "Payer" DROP COLUMN "countingItemId";

-- AlterTable
ALTER TABLE "PaymentMethod" DROP COLUMN "countingItemId";

-- CreateTable
CREATE TABLE "PaymentMethodCountingItem" (
    "id" SERIAL NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    "countingItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentMethodCountingItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethodCountingItem_paymentMethodId_countingItemId_key" ON "PaymentMethodCountingItem"("paymentMethodId", "countingItemId");

-- AddForeignKey
ALTER TABLE "PaymentMethodCountingItem" ADD CONSTRAINT "PaymentMethodCountingItem_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethodCountingItem" ADD CONSTRAINT "PaymentMethodCountingItem_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
