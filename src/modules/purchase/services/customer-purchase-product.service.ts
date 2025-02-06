import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';
import { PrismaStockRepository } from 'src/external/repositories/prisma-stock-repository';
import { PrismaProductRepository } from 'src/external/repositories/prisma-product-repository';
import { PrismaPurchaseRepository } from 'src/external/repositories/prisma-purchase-repository';
import { PurchaseInput } from '../dto/input/purchase-input';
import { Purchase } from 'src/domain/entities/purchase';

@Injectable()
export class CustomerPurchaseProduct {
  constructor(
    private prismaCustomerRepository: PrismaCustomerRepository,
    private prismaStockRepository: PrismaStockRepository,
    private prismaProductRepository: PrismaProductRepository,
    private prismaPurchaseRepository: PrismaPurchaseRepository,
  ) {}

  async execute({
    amountProductsPurchase,
    customerId,
    productId,
  }: PurchaseInput): Promise<Purchase> {
    const customer =
      await this.prismaCustomerRepository.findCusomerById(customerId);

    const product = await this.prismaProductRepository.findById(productId);

    if (!customer || !product) {
      throw new NotFoundException('ops, something went wrong');
    }

    const productInStock =
      await this.prismaStockRepository.findProductInStockByid(productId);

    if (!productInStock) {
      throw new NotAcceptableException(
        'Unfortunately the product is no longer in our stock, sorry for the inconvenience',
      );
    }

    if (productInStock.amountProduct === 0) {
      throw new NotAcceptableException('there are no more products available');
    }

    if (amountProductsPurchase > productInStock.amountProduct) {
      throw new NotAcceptableException(
        'unfortunately the number exceeds what we have in our stock',
      );
    }

    const newAmountProductInStock =
      productInStock.amountProduct - amountProductsPurchase;

    await this.prismaStockRepository.removeAmountProductInStock(
      newAmountProductInStock,
      productId,
    );

    const purchase: Purchase = Purchase.create({
      customerId,
      productId,
      buyAt: new Date(),
    });

    const newPurchase =
      await this.prismaPurchaseRepository.createPurchse(purchase);

    return newPurchase;
  }
}
