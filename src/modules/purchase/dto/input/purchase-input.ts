import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class PurchaseInput {
  @IsNotEmpty()
  @IsString()
  @Field()
  customerId: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  @Field()
  amountProductsPurchase: number;
}
