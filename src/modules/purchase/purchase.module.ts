import { Module } from '@nestjs/common';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';
import { PrismaStockRepository } from 'src/external/repositories/prisma-stock-repository';
import { PrismaProductRepository } from 'src/external/repositories/prisma-product-repository';
import { PrismaPurchaseRepository } from 'src/external/repositories/prisma-purchase-repository';
import { CustomerPurchaseProduct } from './services/customer-purchase-product.service';
import { PurchaseResolver } from './purchase.resolver';

@Module({
  providers: [
    PrismaCustomerRepository,
    PrismaProductRepository,
    PrismaPurchaseRepository,
    PrismaStockRepository,
    CustomerPurchaseProduct,
    PurchaseResolver,
  ],
})
export class PurchaseModule {}
