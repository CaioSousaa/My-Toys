import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterCreditCardInput {
  @Field({ nullable: false })
  customerId: string;

  @Field()
  cvv: number;

  @Field()
  cardNumber: number;

  @Field()
  expirationDate: string;
}
