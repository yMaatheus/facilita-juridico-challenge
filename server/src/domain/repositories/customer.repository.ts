import { pool } from "../../database/connection";
import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import { ICustomerResponseDTO } from "../dto/ICustomerResponseDTO";

class CustomerRepository {
  async create({ name, email, phone, x, y }: ICreateCustomerDTO) {
    const query = 'INSERT INTO customers(name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    try {
      const { rows } = await pool.query<ICustomerResponseDTO>(query, [name, email, phone, x, y]);
  
      return rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  async getAll() {
    const query = 'SELECT * FROM customers';
    try {
      const { rows } = await pool.query<ICustomerResponseDTO>(query);
  
      return rows;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CustomerRepository();