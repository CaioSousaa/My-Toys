import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';
import { CustomerInput } from '../dto/input/customer-input';
import { BcryptHash } from '../providers/hash/implementations/bcrypt-hash';
import { IHash } from '../providers/hash/contract/IHash';
import { Customer } from 'src/domain/entities/customer';

@Injectable()
export class CreateCustomerService {
  constructor(
    private prisma: PrismaCustomerRepository,
    @Inject(BcryptHash) private readonly hashPassword: IHash,
  ) {}

  async execute({ email, name, password }: CustomerInput): Promise<Customer> {
    const customerAlreadyExists = await this.prisma.findCusomerByEmail(email);

    if (customerAlreadyExists) {
      throw new ConflictException(
        'the email has already been registered by another customer, please try again',
      );
    }

    const passwordHash: string =
      await this.hashPassword.generatedHash(password);

    const createCustomer: Customer = Customer.create({
      email,
      name,
      password: passwordHash,
      createdAt: new Date(),
    });

    const customer = await this.prisma.createCustomer(createCustomer);

    return customer;
  }
}
