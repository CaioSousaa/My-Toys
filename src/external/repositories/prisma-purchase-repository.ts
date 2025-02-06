import { Purchase } from 'src/domain/entities/purchase';
import prisma from 'src/infra/prisma/prisma';
import { PurchaseRepository } from 'src/modules/purchase/port/purchase-repository';

export class PrismaPurchaseRepository implements PurchaseRepository {
  async createPurchse({ productId, customerId }: Purchase): Promise<Purchase> {
    const purchase = await prisma.purchase.create({
      data: {
        productId,
        customerId,
        buyAt: new Date(),
      },
    });

    return purchase;
  }
}
