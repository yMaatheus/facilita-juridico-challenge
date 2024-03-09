"use client";

import { Input } from "@/components/ui/input";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { debounce } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CustomerSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const handleSearchDebouce = debounce(handleSearch, 500);
  const { replace } = useRouter();

  function handleSearch(query: string) {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="w-full relative lg:w-96">
      <MagnifyingGlass className="absolute text-muted-foreground right-2 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        className="w-full lg:pr-7"
        placeholder="Pesquise por nome, e-mail, telefone"
        onChange={(e) => handleSearchDebouce(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}
