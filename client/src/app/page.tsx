import { Navbar } from "@/components/navbar";
import { CustomerArea } from "./components/customer-area";

export default function Home() {
  
  return (
    <main className="flex flex-1">
      <Navbar />
      <CustomerArea />
    </main>
  );
}
