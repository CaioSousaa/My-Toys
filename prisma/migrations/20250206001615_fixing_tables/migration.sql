/*
  Warnings:

  - You are about to drop the column `stockId` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `amountProducts` on the `stock` table. All the data in the column will be lost.
  - You are about to drop the column `idProduct` on the `stock` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[productId]` on the table `stock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amountProduct` to the `stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `stock` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_stockId_fkey";

-- AlterTable
ALTER TABLE "product" DROP COLUMN "stockId";

-- AlterTable
CREATE SEQUENCE stock_id_seq;
ALTER TABLE "stock" DROP COLUMN "amountProducts",
DROP COLUMN "idProduct",
ADD COLUMN     "amountProduct" INTEGER NOT NULL,
ADD COLUMN     "productId" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('stock_id_seq');
ALTER SEQUENCE stock_id_seq OWNED BY "stock"."id";

-- CreateIndex
CREATE UNIQUE INDEX "stock_productId_key" ON "stock"("productId");

-- AddForeignKey
ALTER TABLE "stock" ADD CONSTRAINT "stock_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
