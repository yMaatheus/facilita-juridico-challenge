import { CreateCustomer } from "@/components/create-customer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getCustomers } from "@/data/get-customers";
import { MagnifyingGlass, MapPin } from "@phosphor-icons/react/dist/ssr";
import { CustomersTable } from "./customers-table";

export async function CustomerArea() {
  const customers = await getCustomers();

  return (
    <div className="w-full flex flex-col space-y-8 flex-1 p-12 bg-[#F5F4F4]">
      <section className="w-full h-20 items-center shadow-md rounded-lg flex p-4 justify-between bg-background">
        <div className="relative">
          <MagnifyingGlass className="absolute text-muted-foreground right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            className="w-96 pr-7"
            placeholder="Pesquise por nome, e-mail, telefone"
          />
        </div>

        <div className="flex gap-2">
          <CreateCustomer />

          <Button className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Calcular Rotas
          </Button>
        </div>
      </section>

      <CustomersTable customers={customers} />
    </div>
  );
}
