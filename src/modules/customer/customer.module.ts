import { Module } from '@nestjs/common';
import { CreateCustomerService } from './services/create-customer.service';
import { GetAllCustomers } from './services/get-all-customers.service';
import { CustomerResolver } from './customer.resolver';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';
import { BcryptHash } from './providers/hash/implementations/bcrypt-hash';

@Module({
  imports: [],
  controllers: [],
  providers: [
    CreateCustomerService,
    CustomerResolver,
    PrismaCustomerRepository,
    BcryptHash,
    GetAllCustomers,
  ],
})
export class CustomerModule {}
