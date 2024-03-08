import { pool } from "../../database/connection";
import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import { ICustomerResponseDTO } from "../dto/ICustomerResponseDTO";

class CustomerRepository {
  async create({ name, email, phone, x, y }: ICreateCustomerDTO) {
    const query =
      "INSERT INTO customers (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    try {
      const { rows } = await pool.query<ICustomerResponseDTO>(query, [
        name,
        email,
        phone,
        x,
        y,
      ]);

      return rows[0];
    } catch (error) {
      console.error(error);
    }
  }

  async getAll() {
    const query = "SELECT id, name, email, phone, x, y FROM customers";
    try {
      const { rows } = await pool.query<ICustomerResponseDTO>(query);

      return rows;
    } catch (error) {
      console.error(error);
    }
  }

  async searchByField(field: string) {
    const query =
      "SELECT id, name, email, phone, x, y FROM customers WHERE name LIKE $1 OR email LIKE $1 OR phone LIKE $1";
    try {
      const { rows } = await pool.query<ICustomerResponseDTO>(query, [`%${field}%`]);

      return rows;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new CustomerRepository();
