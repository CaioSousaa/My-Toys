import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaCreditCardRepository } from 'src/external/repositories/prisma-credit-card-repository';
import { RegisterCreditCardInput } from '../dto/input/register-credit-card-input';
import { PrismaCustomerRepository } from 'src/external/repositories/prisma-customer-repository';
import { regexValidate } from '../utils/functions/date-regex';
import { CreditCard } from 'src/domain/entities/credit-card';

@Injectable()
export class CustomerRegisterCreditCardService {
  constructor(
    private prismaCardRepository: PrismaCreditCardRepository,
    private prismaCustomerRepository: PrismaCustomerRepository,
  ) {}

  async execute({
    cardNumber,
    customerId,
    cvv,
    expirationDate,
  }: RegisterCreditCardInput) {
    const customerExists =
      await this.prismaCustomerRepository.findCusomerById(customerId);

    if (customerExists === null) {
      throw new NotAcceptableException('customer does not exists!!!');
    }

    const dateCorrectFormat = regexValidate(expirationDate);

    if (dateCorrectFormat) {
      throw new NotAcceptableException(
        'expiration date is not in the proper format, use xx-xxxx',
      );
    }

    const createCardCredit: CreditCard = CreditCard.create({
      customerId,
      cvv,
      expirationDate,
      cardNumber,
      addsAt: new Date(),
    });

    const creditCard = await this.prismaCardRepository.create(createCardCredit);

    return creditCard;
  }
}
