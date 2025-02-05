import { Injectable, NotFoundException } from '@nestjs/common';
import { Customer } from 'src/domain/entities/customer';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';

@Injectable()
export class GetAllCustomers {
  constructor(private prisma: PrismaCustomerRepository) {}

  async execute(): Promise<Customer[]> {
    const customers = await this.prisma.getAllCustomer();

    if (customers.length === 0) {
      throw new NotFoundException('no registered customers');
    }

    return customers;
  }
}
