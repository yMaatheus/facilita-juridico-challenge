import { pool } from "../../database/connection";
import { ICreateCustomerDTO } from "../dto/ICreateCustomerDTO";
import { ICustomerResponseDTO } from "../dto/ICustomerResponseDTO";
import { ErrorTypes } from "../errors/errors";

class CustomerRepository {
  async create({ name, email, phone, x, y }: ICreateCustomerDTO) {
    try {
      const query =
        "INSERT INTO customers (name, email, phone, x, y) VALUES ($1, $2, $3, $4, $5) RETURNING *";
      const { rows } = await pool.query<ICustomerResponseDTO>(query, [
        name,
        email,
        phone,
        x,
        y,
      ]);

      return rows[0];
    } catch (error) {
      throw ErrorTypes.CreateCustomerError;
    }
  }

  async getAll() {
    try {
      const query = "SELECT id, name, email, phone, x, y FROM customers";
      const { rows } = await pool.query<ICustomerResponseDTO>(query);

      return rows;
    } catch (error) {
      throw ErrorTypes.GetCustomerError;
    }
  }

  async searchByField(field: string) {
    try {
      const query =
        "SELECT id, name, email, phone, x, y FROM customers WHERE name LIKE $1 OR email LIKE $1 OR phone LIKE $1";
      const { rows } = await pool.query<ICustomerResponseDTO>(query, [
        `%${field}%`,
      ]);

      return rows;
    } catch (error) {
      throw ErrorTypes.SearchCustomerError;
    }
  }
}

export default new CustomerRepository();
