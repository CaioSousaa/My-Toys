import { Product } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Stock {
  id?: number;

  @IsNumber()
  amountProduct: number;

  @IsString()
  @IsNotEmpty()
  productId: string;

  product?: Product;

  constructor({ amountProduct, productId }: Stock) {
    Object.assign(this, {
      amountProduct,
      productId,
    });
  }

  static create({ amountProduct, productId }: Stock) {
    const stock: Stock = new Stock({
      amountProduct,
      productId,
    });

    return stock;
  }
}
