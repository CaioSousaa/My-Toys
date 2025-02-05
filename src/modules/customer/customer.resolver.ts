import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerModel } from './dto/models/customer-model';
import { CreateCustomerService } from './services/create-customer.service';
import { GetAllCustomers } from './services/get-all-customers.service';
import { CustomerRegisterCreditCardService } from './services/customer-register-credit-card.service';
import { CustomerInput } from './dto/input/customer-input';
import { CreditCardModel } from './dto/models/credit-card-model';
import { RegisterCreditCardInput } from './dto/input/register-credit-card-input';
import { FindCustomerByIdService } from './services/find-customer-by-id.service';

@Resolver(() => CustomerModel)
export class CustomerResolver {
  constructor(
    private readonly createCustomerService: CreateCustomerService,
    private readonly getAllCustomerService: GetAllCustomers,
    private readonly customerRegisterCreditCardService: CustomerRegisterCreditCardService,
    private readonly findCustomerByIdService: FindCustomerByIdService,
  ) {}

  @Query(() => [CustomerModel])
  async getAllCustomer() {
    const customers = await this.getAllCustomerService.execute();

    return customers;
  }

  @Query(() => CustomerModel)
  async findCustomerById(@Args('id') id: string): Promise<CustomerModel> {
    const customer = await this.findCustomerByIdService.execute(id);

    return {
      ...customer,
      id: customer.id ?? '',
    };
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

  @Mutation(() => CreditCardModel)
  async addCreditCard(
    @Args('registerCardCredit') registerCardCredit: RegisterCreditCardInput,
  ): Promise<CreditCardModel> {
    const creditCard =
      await this.customerRegisterCreditCardService.execute(registerCardCredit);

    return creditCard;
  }
}
