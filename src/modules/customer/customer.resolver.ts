import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerModel } from './dto/models/customer-model';
import { CreateCustomerService } from './services/create-customer.service';
import { CustomerInput } from './dto/input/customer-input';

@Resolver(() => CustomerModel)
export class CustomerResolver {
  constructor(private readonly createCustomerService: CreateCustomerService) {}

  @Query(() => String)
  hello() {
    return 'Hello, world!';
  }

  @Mutation(() => CustomerModel)
  async createCustomer(
    @Args('newCustomerData') newCustomerData: CustomerInput,
  ): Promise<CustomerModel> {
    const customer = await this.createCustomerService.execute(newCustomerData);

    return {
      ...customer,
      id: customer.id ?? '',
    };
  }
}
