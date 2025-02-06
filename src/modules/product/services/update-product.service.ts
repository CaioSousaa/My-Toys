import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaProductRepository } from 'src/external/repositories/prisma-product-repository';
import { UpdateProductInput } from '../dto/input/update-product-input';

@Injectable()
export class UpdateProductService {
  constructor(private prismaProductRepository: PrismaProductRepository) {}

  async execute({ id, category, priceInCents }: UpdateProductInput) {
    const product = await this.prismaProductRepository.findById(id);

    if (!product) {
      throw new NotAcceptableException('product does not exists');
    }

    if (category === undefined) {
      category = product.category;
    }

    if (priceInCents === undefined) {
      priceInCents = product.priceInCents;
    }

    const updatedProduct = {
      ...product,
      category,
      priceInCents,
    };

    const newProduct =
      await this.prismaProductRepository.updateProduct(updatedProduct);

    return newProduct;
  }
}
