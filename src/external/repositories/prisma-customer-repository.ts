import { Customer } from 'src/domain/entities/customer';
import { customerRepository } from 'src/modules/customer/port/customer-repository';
import prisma from '../../infra/prisma/prisma';

export class PrismaCustomerRepository implements customerRepository {
  async findCusomerByEmail(email: string): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({
      where: { email },
    });

    if (!customer) {
      return null;
    }

    return customer;
  }

  async createCustomer({ email, name, password }: Customer): Promise<Customer> {
    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        password,
        createdAt: new Date(),
      },
    });

    return customer;
  }

  async getAllCustomer(): Promise<Customer[]> {
    const customers = await prisma.customer.findMany();

    return customers;
  }

  async findCusomerById(id: string): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({
      where: {
        id,
      },
    });

    if (!customer) {
      return null;
    }
    return customer;
  }
}
