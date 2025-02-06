import { Stock } from 'src/domain/entities/stock';

export interface StockRepository {
  create(stock: Stock): Promise<Stock>;
  deleteProdcutInStock(productId: string): Promise<void>;
  removeAmountProductInStock(
    newAmount: number,
    productId: string,
  ): Promise<void>;
  findProductInStockByid(productId: string): Promise<Stock | null>;
}
