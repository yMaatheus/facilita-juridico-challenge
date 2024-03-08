import { ICreateCustomerDTO } from "./ICreateCustomerDTO";

export interface ICustomerResponseDTO extends ICreateCustomerDTO {
  id: string;
}