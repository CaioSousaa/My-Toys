import { ProductCategory } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class Product {
  id?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  priceInCents: number;

  @IsNotEmpty()
  @IsString()
  scaleHW: string;

  @IsNotEmpty()
  @IsEnum(ProductCategory)
  category: ProductCategory;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  description: string;

  @IsOptional()
  mark?: string;

  constructor({
    category,
    description,
    name,
    priceInCents,
    scaleHW,
    mark,
  }: Product) {
    Object.assign(this, {
      category,
      description,
      name,
      priceInCents,
      scaleHW,
      mark,
    });
  }

  static create({
    category,
    description,
    name,
    priceInCents,
    scaleHW,
    mark,
  }: Product) {
    const product = new Product({
      category,
      description,
      name,
      priceInCents,
      scaleHW,
      mark,
    });

    return product;
  }
}
