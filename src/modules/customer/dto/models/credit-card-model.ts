import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreditCardModel {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  cvv: number;

  @Field()
  cardNumber: number;

  @Field()
  expirationDate: string;

  @Field()
  addsAt: Date;

  @Field()
  customerId: string;
}
