import { Column, Entity, Generated, OneToMany, PrimaryColumn } from 'typeorm';
import { CreditCard } from './credit-card';

@Entity()
export class Customer {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => CreditCard, (creditCard) => creditCard.customer)
  creditCards: CreditCard[];
}
