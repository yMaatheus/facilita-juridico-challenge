import { findNearestCustomer } from "../../utils/optimized-route.util";
import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import { ICustomer } from "../dto/ICustomer";
import { ICustomerResponseDTO } from "../dto/ICustomerResponseDTO";
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

  // k-nearest neighbors (KNN) algorithm
  async calculateOptimizedRoute() {
    const allCustomers = await this.getAll();
    const customers = [{ name: 'Enterprise', x: 0, y: 0 }, ...allCustomers]

    let route: ICustomer[] = [customers[0]];
    let remainingCustomers = customers.slice(1);

    while (remainingCustomers.length > 0) {
        const currentCustomer = route[route.length - 1];
        const nearestCustomer = findNearestCustomer(currentCustomer, remainingCustomers);
        route.push(nearestCustomer);
        remainingCustomers = remainingCustomers.filter(customer => customer !== nearestCustomer);
    }
  
    return route.slice(1) as ICustomerResponseDTO[];
  }
}

export default new CustomerService();