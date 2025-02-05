import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';

@Injectable()
export class FindCustomerByIdService {
  constructor(private prisma: PrismaCustomerRepository) {}

  async execute(id: string) {
    const customerExists = await this.prisma.findCusomerById(id);

    if (!customerExists) {
      throw new NotFoundException('customer does not exists!!!');
    }

    return customerExists;
  }
}
