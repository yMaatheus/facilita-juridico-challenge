import { List, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="flex flex-col flex-1 h-screen max-w-[336px] bg-primary">
      <Button variant='link' className="self-end m-2">
        <List className="w-8 h-8" color="white" />
      </Button>
      <Link href='/' className="h-10 w-[96%] bg-white/30 rounded-r-full mt-24 pl-4 flex items-center gap-2">
        <User className="w-6 h-6" color="white" />
        <span className="text-white text-base">Clientes</span>
      </Link>
    </nav>
  );
}
