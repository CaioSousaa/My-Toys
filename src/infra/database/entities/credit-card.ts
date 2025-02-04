import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryColumn,
  JoinColumn,
} from 'typeorm';
import { Customer } from './customer';

@Entity()
export class CreditCard {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  cvv: string;

  @Column({ type: 'date' })
  expirationDate: Date;

  @Column()
  cardNumber: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  addsAt: Date;

  @ManyToOne(() => Customer, (customer) => customer.creditCards)
  @JoinColumn({ name: 'customerId' })
  customer: Customer;
}
