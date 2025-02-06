import { Field, InputType } from '@nestjs/graphql';
import { ProductCategory } from '@prisma/client';

@InputType()
export class CreateProductInput {
  @Field()
  amountProduct: number;

  @Field()
  name: string;

  @Field()
  priceInCents: number;

  @Field()
  scaleHW: string;

  @Field()
  category: ProductCategory;

  @Field()
  description: string;

  @Field()
  mark: string;
}
