import { Product } from 'src/domain/entities/product';
import prisma from 'src/infra/prisma/prisma';
import { ProductRepository } from 'src/modules/product/port/product-repository';

export class PrismaProductRepository implements ProductRepository {
  async create({
    category,
    description,
    name,
    priceInCents,
    scaleHW,
    mark,
  }: Product): Promise<Product> {
    const product = await prisma.product.create({
      data: {
        category,
        description,
        name,
        priceInCents,
        scaleHW,
        mark,
      },
    });

    return product;
  }

  async findByName(name: string): Promise<boolean> {
    const product = await prisma.product.findFirst({ where: { name } });

    if (!product) {
      return true;
    }

    return false;
  }
}
