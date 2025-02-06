import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PurchaseModel {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  customerId: string;

  @Field()
  productId: string;

  @Field()
  buyAt: Date;
}
