import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICustomerResponse } from "@/interfaces/responses/ICustomerResponse";

type CustomersTableProps = {
  customers: ICustomerResponse[];
};

export function CustomersTable({ customers }: CustomersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead>Coordenadas (X,Y)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.id || customer.name}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.email}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>
              ({customer.x}, {customer.y})
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
