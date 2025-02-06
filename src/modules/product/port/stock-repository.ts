import { Stock } from 'src/domain/entities/stock';

export interface StockRepository {
  create(stock: Stock): Promise<Stock>;
}
