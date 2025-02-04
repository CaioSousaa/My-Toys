import { Column, Entity, OneToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Product } from './product';

@Entity()
export class Stock {
  @PrimaryColumn()
  productId: string;

  @Column()
  amountProducts: number;

  @OneToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Product;
}
