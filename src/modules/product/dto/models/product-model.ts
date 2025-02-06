import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from '@prisma/client';

@ObjectType()
export class ProductModel {
  @Field(() => ID, { nullable: true })
  id: string;

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
