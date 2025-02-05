import { Module } from '@nestjs/common';
import { CreateCustomerService } from './services/create-customer.service';
import { GetAllCustomers } from './services/get-all-customers.service';
import { CustomerResolver } from './customer.resolver';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';
import { CustomerRegisterCreditCardService } from './services/customer-register-credit-card.service';
import { BcryptHash } from './providers/hash/implementations/bcrypt-hash';
import { PrismaCreditCardRepository } from '../../external/repositories/prisma-credit-card-repository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    CreateCustomerService,
    CustomerResolver,
    PrismaCustomerRepository,
    BcryptHash,
    GetAllCustomers,
    CustomerRegisterCreditCardService,
    PrismaCreditCardRepository,
  ],
})
export class CustomerModule {}
