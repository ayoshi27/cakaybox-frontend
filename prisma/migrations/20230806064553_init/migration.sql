-- CreateTable
CREATE TABLE "PayerCountingItem" (
    "id" SERIAL NOT NULL,
    "payerId" INTEGER NOT NULL,
    "countingItemId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayerCountingItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PayerCountingItem_payerId_countingItemId_key" ON "PayerCountingItem"("payerId", "countingItemId");

-- AddForeignKey
ALTER TABLE "PayerCountingItem" ADD CONSTRAINT "PayerCountingItem_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "Payer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PayerCountingItem" ADD CONSTRAINT "PayerCountingItem_countingItemId_fkey" FOREIGN KEY ("countingItemId") REFERENCES "CountingItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
