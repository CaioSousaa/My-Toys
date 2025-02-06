import { Purchase } from 'src/domain/entities/purchase';

export interface PurchaseRepository {
  createPurchse(purchase: Purchase): Promise<Purchase>;
}
