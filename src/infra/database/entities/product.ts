import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';

enum ProductCategory {
  PLUSH = 'plush',
  ACTION_FIGURES = 'action_figures',
  COLLECTIBLES = 'collectibles',
  CHILDREN = 'children',
  BOARD = 'board',
  AUTOMOBILES = 'automobiles',
}

@Entity()
export class Product {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  priceInCents: number;

  @Column()
  scaleHW: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ProductCategory,
  })
  category: ProductCategory;
}
