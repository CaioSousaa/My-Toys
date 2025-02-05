import { Customer } from 'src/domain/entities/customer';

export interface customerRepository {
  createCustomer(customer: Customer): Promise<Customer>;
  getAllCustomer(): Promise<Customer[]>;
  findCusomerById(id: string): Promise<Customer | null>;
  findCusomerByEmail(email: string): Promise<Customer | null>;
}
