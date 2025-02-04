import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Customer {
  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  createdAt: Date;

  constructor({ createdAt, email, name, password }: Customer) {
    Object.assign(this, {
      createdAt,
      name,
      email,
      password,
    });
  }

  static create({ email, name, password }: Customer) {
    const customer = new Customer({
      email,
      name,
      password,
      createdAt: new Date(),
    });

    return customer;
  }
}
