import { CreateCustomer } from "@/components/create-customer";
import { Navbar } from "@/components/navbar";
import { OptimizedRoutes } from "@/components/optimized-routes";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { getCustomers } from "@/data/get-customers";
import { CustomerSearch } from "./components/customer-search";
import { CustomersTable } from "./components/customers-table";

type PageProps = {
  searchParams?: {
    q?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const query = searchParams?.q || "";

  const customers = await getCustomers(query);

  return (
    <main className="w-full h-screen flex flex-1">
      <Navbar />
      <div className="w-full flex flex-col space-y-8 flex-1 md:p-12 bg-[#F5F4F4]">
        <section className="w-full items-center shadow-md rounded-lg flex flex-col justify-between bg-background p-4 gap-4 md:flex-row md:h-20">
          <CustomerSearch />

          <div className="w-full flex flex-col gap-2 md:flex-row lg:w-auto">
            <CreateCustomer />

            <OptimizedRoutes />
          </div>
        </section>

        <ScrollArea className="h-[calc(100vh-130px)] lg:h-[calc(100vh-260px)]">
          <CustomersTable customers={customers} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </main>
  );
}
