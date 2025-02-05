import { CreditCard } from 'src/domain/entities/credit-card';
import { CreditCardRepository } from 'src/modules/customer/port/credit-card-repositoy';
import prisma from '../../infra/prisma/prisma';

export class PrismaCreditCardRepository implements CreditCardRepository {
  async create({
    cardNumber,
    cvv,
    expirationDate,
    customerId,
  }: CreditCard): Promise<CreditCard> {
    const creditCard = await prisma.creditCard.create({
      data: {
        cardNumber,
        cvv,
        expirationDate,
        customerId,
        addsAt: new Date(),
      },
    });

    return creditCard;
  }

  async findByCredentials(cvv: number, cardNumber: number): Promise<boolean> {
    const cvvAlreadyExists = await prisma.creditCard.findFirst({
      where: { cvv },
    });

    const cardNumberAlreadyExists = await prisma.creditCard.findFirst({
      where: { cardNumber },
    });

    if (cardNumberAlreadyExists || cvvAlreadyExists) {
      return false;
    }

    return true;
  }
}
