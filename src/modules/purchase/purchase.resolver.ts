import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PurchaseModel } from './dto/models/purchase-model';
import { CustomerPurchaseProduct } from './services/customer-purchase-product.service';
import { PurchaseInput } from './dto/input/purchase-input';

@Resolver(() => PurchaseModel)
export class PurchaseResolver {
  constructor(private customerPurchaseProduct: CustomerPurchaseProduct) {}

  @Query(() => String)
  hello() {
    return 'hello';
  }

  @Mutation(() => PurchaseModel)
  async customerPurchaseAProduct(
    @Args('purchaseData') purchaseData: PurchaseInput,
  ): Promise<PurchaseModel> {
    const newPurchase =
      await this.customerPurchaseProduct.execute(purchaseData);

    return {
      ...newPurchase,
      id: newPurchase.id ?? '',
    };
  }
}
