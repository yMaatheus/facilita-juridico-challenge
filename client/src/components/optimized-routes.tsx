import { CustomersTable } from "@/app/components/customers-table";
import { getCustomersRoute } from "@/data/get-customers-route";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export async function OptimizedRoutes() {
  const customers = await getCustomersRoute();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full flex items-center gap-2 lg:w-auto">
          <MapPin className="w-5 h-5" />
          Calcular Rotas
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-none w-[90%] xl:w-1/2">
        <ScrollArea className="h-[600px] gap-6 md:m-6">
          <CustomersTable customers={customers} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
