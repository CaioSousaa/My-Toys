import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { PrismaStockRepository } from 'src/external/repositories/prisma-stock-repository';
import { PrismaProductRepository } from 'src/external/repositories/prisma-product-repository';
import { RegisteringProductInStock } from './services/registering-product-in-stock.service';

@Module({
  providers: [
    ProductResolver,
    PrismaStockRepository,
    PrismaProductRepository,
    RegisteringProductInStock,
  ],
})
export class ProductModule {}
