/*
  Warnings:

  - You are about to drop the column `name` on the `Expend` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Expend` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Expend` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `Payer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code]` on the table `PaymentMethod` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `code` to the `Budget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Expend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Expend` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Payer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Budget_name_key";

-- DropIndex
DROP INDEX "Category_name_key";

-- DropIndex
DROP INDEX "Payer_name_key";

-- DropIndex
DROP INDEX "PaymentMethod_name_key";

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Expend" DROP COLUMN "name",
DROP COLUMN "user_id",
DROP COLUMN "value",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Payer" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PaymentMethod" ADD COLUMN     "code" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Budget_code_key" ON "Budget"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Category_code_key" ON "Category"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Payer_code_key" ON "Payer"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentMethod_code_key" ON "PaymentMethod"("code");
