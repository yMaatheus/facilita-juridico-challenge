export enum ErrorTypes {
  CreateCustomerError = 'CreateCustomerError',
  GetCustomerError = 'GetCustomerError',
  SearchCustomerError = 'SearchCustomerError',
}

export type ErrorCatalog = {
  [key in ErrorTypes]: {
    error: string;
    httpStatus: number
  }
};

export const errorCatalog: ErrorCatalog = {
  CreateCustomerError: {
    error: 'Error when trying to create the Customer',
    httpStatus: 500,
  },
  GetCustomerError: {
    error: 'Error when trying to search for customers',
    httpStatus: 500,
  },
  SearchCustomerError: {
    error: 'Error when trying to filter customer search results',
    httpStatus: 500,
  },
};