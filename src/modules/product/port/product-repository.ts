import { Product } from 'src/domain/entities/product';

export interface ProductRepository {
  create(product: Product): Promise<Product>;
  findByName(name: string): Promise<boolean>;
  findById(id: string): Promise<Product | null>;
  updateProduct(product: Product): Promise<Product>;
  deleteProduct(id: string): Promise<void>;
}
