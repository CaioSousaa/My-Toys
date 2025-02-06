export class Purchase {
  id?: string;
  customerId: string;
  productId: string;
  buyAt: Date;

  constructor({ buyAt, customerId, productId }: Purchase) {
    Object.assign(this, {
      buyAt,
      customerId,
      productId,
    });
  }

  static create({ customerId, productId }: Purchase) {
    const purchase: Purchase = new Purchase({
      customerId,
      productId,
      buyAt: new Date(),
    });

    return purchase;
  }
}
