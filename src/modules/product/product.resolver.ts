import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductModel } from './dto/models/product-model';
import { RegisteringProductInStock } from './services/registering-product-in-stock.service';
import { CreateProductInput } from './dto/input/create-product-input';
import { UpdateProductService } from '../product/services/update-product.service';
import { DeleteProductService } from '../product/services/delete-product.service';
import { UpdateProductInput } from './dto/input/update-product-input';

@Resolver(() => ProductModel)
export class ProductResolver {
  constructor(
    private registeringProductInStock: RegisteringProductInStock,
    private updateProductService: UpdateProductService,
    private deleteProductService: DeleteProductService,
  ) {}

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

  @Mutation(() => ProductModel)
  async updateProduct(
    @Args('updateProductDataInput') updateProductDataInput: UpdateProductInput,
  ): Promise<ProductModel> {
    const newDataUpdateProduct = await this.updateProductService.execute(
      updateProductDataInput,
    );

    return {
      ...newDataUpdateProduct,
      id: newDataUpdateProduct.id ?? '',
    };
  }

  @Mutation(() => Boolean)
  async deleteProductAndProductInStock(
    @Args('id') id: string,
  ): Promise<boolean> {
    await this.deleteProductService.execute(id);
    return true;
  }
}
