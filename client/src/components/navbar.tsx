'use client'

import { cn } from "@/lib/utils";
import { List, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setOpen] = useState(true);
  return (
    <nav className={cn("max-w-[60px] hidden flex-col flex-1 h-screen bg-primary transition-all lg:flex", isOpen && 'lg:max-w-[292px]')}>
      <Button variant='link' className="self-end" onClick={() => setOpen(!isOpen)}>
        <List className="w-8 h-8" color="white" />
      </Button>
      <Link href='/' className="h-10 w-[96%] bg-white/30 rounded-r-full mt-24 pl-4 flex items-center gap-2">
        <User className="w-6 h-6" color="white" />
        {
          isOpen && (<span className="hidden text-white text-base lg:flex">Clientes</span>)
        }
      </Link>
    </nav>
  );
}
