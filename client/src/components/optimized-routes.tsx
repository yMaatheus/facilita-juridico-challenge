import { CustomersTable } from "@/app/components/customers-table";
import { getCustomers } from "@/data/get-customers";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export async function OptimizedRoutes() {
  const customers = await getCustomers();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          Calcular Rotas
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-none w-1/2">
        <CustomersTable customers={customers} />
      </DialogContent>
    </Dialog>
  );
}
