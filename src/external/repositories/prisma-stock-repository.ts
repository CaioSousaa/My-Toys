import { NotAcceptableException } from '@nestjs/common';
import { Stock } from 'src/domain/entities/stock';
import prisma from 'src/infra/prisma/prisma';
import { StockRepository } from 'src/modules/product/port/stock-repository';

export class PrismaStockRepository implements StockRepository {
  async removeAmountProductInStock(
    newAmount: number,
    productId: string,
  ): Promise<void> {
    await prisma.stock.update({
      where: { productId },
      data: {
        amountProduct: newAmount,
      },
    });
  }

  async findProductInStockByid(productId: string): Promise<Stock | null> {
    const productInStock = await prisma.stock.findUnique({
      where: { productId },
    });

    if (!productInStock) {
      return null;
    }

    return productInStock;
  }

  async deleteProdcutInStock(productId: string): Promise<void> {
    await prisma.stock.delete({
      where: {
        productId,
      },
    });
  }

  async create({ amountProduct, productId }: Stock): Promise<Stock> {
    if (productId === undefined) {
      throw new NotAcceptableException('productId is undefined');
    }

    const newItemInStock = await prisma.stock.create({
      data: {
        amountProduct,
        productId,
      },
    });

    return newItemInStock;
  }
}
