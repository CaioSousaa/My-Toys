import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreditCard {
  id?: string;

  @IsNotEmpty()
  @IsNumber()
  cvv: number;

  @IsNotEmpty()
  @IsString()
  cardNumber: number;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  expirationDate: string;

  @IsString()
  @IsNotEmpty()
  customerId: string;

  addsAt: Date;

  constructor({
    addsAt,
    cardNumber,
    cvv,
    expirationDate,
    customerId,
  }: CreditCard) {
    Object.assign(this, {
      addsAt,
      cvv,
      cardNumber,
      expirationDate,
      customerId,
    });
  }

  static create({ cardNumber, cvv, expirationDate, customerId }: CreditCard) {
    const creditCard = new CreditCard({
      cardNumber,
      cvv,
      expirationDate,
      customerId,
      addsAt: new Date(),
    });

    return creditCard;
  }
}
