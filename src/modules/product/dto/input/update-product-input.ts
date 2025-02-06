import { Field, InputType } from '@nestjs/graphql';
import { ProductCategory } from '@prisma/client';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateProductInput {
  @IsNotEmpty()
  @Field()
  id: string;

  @IsOptional()
  @Field({ nullable: true })
  priceInCents?: number;

  @IsOptional()
  @Field({ nullable: true })
  category?: ProductCategory;
}
