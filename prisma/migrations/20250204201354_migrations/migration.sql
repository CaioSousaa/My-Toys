-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('ACTION_FIGURES', 'PLUSH', 'BOARDS', 'COLLECTABLES', 'SPORTS', 'KIDS');

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "creditCard" (
    "id" TEXT NOT NULL,
    "cvv" INTEGER NOT NULL,
    "cardNumber" INTEGER NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "addsAt" TIMESTAMP(3) NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "creditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "buyAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stock" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "idProduct" TEXT NOT NULL,
    "amountProducts" INTEGER NOT NULL,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "scaleHW" TEXT NOT NULL,
    "category" "ProductCategory" NOT NULL,
    "description" TEXT NOT NULL,
    "mark" TEXT,
    "stockId" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_id_key" ON "customer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "creditCard_id_key" ON "creditCard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "purchase_id_key" ON "purchase"("id");

-- CreateIndex
CREATE UNIQUE INDEX "stock_id_key" ON "stock"("id");

-- CreateIndex
CREATE UNIQUE INDEX "product_id_key" ON "product"("id");

-- AddForeignKey
ALTER TABLE "creditCard" ADD CONSTRAINT "creditCard_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
