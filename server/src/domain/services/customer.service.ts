import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import customerRepository from "../repositories/customer.repository";

class CustomerService {

  async create(customer: ICreateCustomerDTO) {
    const customerCreated = await customerRepository.create(customer);

    if (!customerCreated) throw new Error('Error creating customer')

    return customerCreated.id;
  }

  async getAll() {
    const getAllCustomers = await customerRepository.getAll();

    if (!getAllCustomers) throw new Error('Error get all customers')

    return getAllCustomers;
  }
}

export default new CustomerService();