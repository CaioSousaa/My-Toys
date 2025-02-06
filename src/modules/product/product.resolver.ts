import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductModel } from './dto/models/product-model';
import { RegisteringProductInStock } from './services/registering-product-in-stock.service';
import { CreateProductInput } from './dto/input/create-product-input';

@Resolver(() => ProductModel)
export class ProductResolver {
  constructor(private registeringProductInStock: RegisteringProductInStock) {}

  @Query(() => String)
  hello() {
    return 'hello';
  }

  @Mutation(() => ProductModel)
  async createProduct(
    @Args('dataProductInput') dataProductInput: CreateProductInput,
  ): Promise<ProductModel> {
    const newProduct =
      await this.registeringProductInStock.execute(dataProductInput);

    return {
      ...newProduct,
      id: newProduct.id ?? '',
    };
  }
}
