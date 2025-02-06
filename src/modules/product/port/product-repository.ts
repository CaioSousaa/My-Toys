import { Product } from 'src/domain/entities/product';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  findByName(name: string): Promise<boolean>;
}
