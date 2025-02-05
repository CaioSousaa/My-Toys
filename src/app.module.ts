import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    CustomerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/infra/schema.gql'),
      playground: true,
      debug: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
