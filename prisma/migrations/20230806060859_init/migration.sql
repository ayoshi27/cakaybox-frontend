-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "countingItemId" INTEGER;

-- AlterTable
ALTER TABLE "Payer" ADD COLUMN     "countingItemId" INTEGER;

-- AlterTable
ALTER TABLE "PaymentMethod" ADD COLUMN     "countingItemId" INTEGER;

-- CreateTable
CREATE TABLE "CountingItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "processed" BOOLEAN[] DEFAULT ARRAY[]::BOOLEAN[],

    CONSTRAINT "CountingItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CountingItem_code_key" ON "CountingItem"("code");

-- AddForeignKey
ALTER TABLE "Payer" ADD CONSTRAINT "Payer_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentMethod" ADD CONSTRAINT "PaymentMethod_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
