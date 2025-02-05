import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerModel {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  createdAt: Date;
}
