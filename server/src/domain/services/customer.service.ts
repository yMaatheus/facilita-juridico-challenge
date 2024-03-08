import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import customerRepository from "../repositories/customer.repository";

class CustomerService {

  async create(customer: ICreateCustomerDTO) {
    const customerCreated = await customerRepository.create(customer);

    return customerCreated.id;
  }

  async getAll() {
    const getAllCustomers = await customerRepository.getAll();

    return getAllCustomers;
  }

  async searchByField(field: string) {
    const searchCustomers = await customerRepository.searchByField(field);

    return searchCustomers;
  }
}

export default new CustomerService();