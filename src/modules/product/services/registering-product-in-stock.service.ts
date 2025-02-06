import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaProductRepository } from 'src/external/repositories/prisma-product-repository';
import { CreateProductInput } from '../dto/input/create-product-input';
import { Product } from 'src/domain/entities/product';
import { PrismaStockRepository } from 'src/external/repositories/prisma-stock-repository';
import { Stock } from 'src/domain/entities/stock';

@Injectable()
export class RegisteringProductInStock {
  constructor(
    private prismaProductRepository: PrismaProductRepository,
    private prismaStockRepository: PrismaStockRepository,
  ) {}

  async execute({
    category,
    description,
    name,
    priceInCents,
    scaleHW,
    mark,
    amountProduct,
  }: CreateProductInput): Promise<Product> {
    const uppercaseName = name.toUpperCase();

    if (!(await this.prismaProductRepository.findByName(uppercaseName))) {
      throw new NotAcceptableException('product already registered');
    }

    if (mark === null) {
      mark = '';
    }

    const createProduct: Product = Product.create({
      category,
      description,
      name,
      priceInCents,
      scaleHW,
      mark,
    });

    const product = await this.prismaProductRepository.create(createProduct);

    const registerProductInStock: Stock = Stock.create({
      productId: product.id,
      amountProduct,
    });

    await this.prismaStockRepository.create(registerProductInStock);

    return product;
  }
}
