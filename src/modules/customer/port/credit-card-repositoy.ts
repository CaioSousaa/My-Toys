import { CreditCard } from 'src/domain/entities/credit-card';

export interface CreditCardRepository {
  create(creditCard: CreditCard): Promise<CreditCard>;
  findByCredentials(cvv: number, cardNumber: number): Promise<boolean>;
}
