import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaProductRepository } from 'src/external/repositories/prisma-product-repository';
import { PrismaStockRepository } from '../../../external/repositories/prisma-stock-repository';

@Injectable()
export class DeleteProductService {
  constructor(
    private prismaProductRepository: PrismaProductRepository,
    private prismaStockRepository: PrismaStockRepository,
  ) {}
  async execute(id: string): Promise<boolean> {
    const productExists = await this.prismaProductRepository.findById(id);

    if (!productExists) {
      throw new NotAcceptableException('product does not exists!!!');
    }

    await this.prismaStockRepository.deleteProdcutInStock(id);
    await this.prismaProductRepository.deleteProduct(id);

    return true;
  }
}
