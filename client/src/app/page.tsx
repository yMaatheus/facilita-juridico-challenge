import { CreateCustomer } from "@/components/create-customer";
import { Navbar } from "@/components/navbar";
import { OptimizedRoutes } from "@/components/optimized-routes";
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
    <main className="flex flex-1">
      <Navbar />
      <div className="w-full flex flex-col space-y-8 flex-1 p-12 bg-[#F5F4F4]">
        <section className="w-full h-20 items-center shadow-md rounded-lg flex p-4 justify-between bg-background">
          <CustomerSearch />

          <div className="flex gap-2">
            <CreateCustomer />

            <OptimizedRoutes />
          </div>
        </section>

        <CustomersTable customers={customers} />
      </div>
    </main>
  );
}
