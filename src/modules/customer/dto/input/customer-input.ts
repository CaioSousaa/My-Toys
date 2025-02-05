import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CustomerInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
