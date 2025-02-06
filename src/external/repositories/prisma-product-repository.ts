import { Product } from 'src/domain/entities/product';
import prisma from 'src/infra/prisma/prisma';
import { ProductRepository } from 'src/modules/product/port/product-repository';

export class PrismaProductRepository implements ProductRepository {
  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({ where: { id } });

    if (!product) {
      return null;
    }

    return product;
  }

  async updateProduct({
    category,
    description,
    mark,
    name,
    priceInCents,
    scaleHW,
    id,
  }: Product): Promise<Product> {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        category,
        description,
        mark,
        name,
        priceInCents,
        scaleHW,
      },
    });

    return updatedProduct;
  }

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
    const product = await prisma.product.findFirst({
      where: {
        name,
      },
    });

    if (!product) {
      return true;
    }

    return false;
  }
}
