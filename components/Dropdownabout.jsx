import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";

export function Dropdownabout() {
  const items = [
    {
      title: "Bank Al-Maghrib",
      link: "/about/bank_al_maghrib",
    },
    {
      title: "Government Representative at Bank Al-Maghrib",
      link: "/about/government_representative",
    },
    {
      title: "History of Moroccan Money",
      link: "/about/moroccan_dirham",
    },
    {
      title: "Dar As-Sikkah: The Issuer of Moroccan Banknotes",
      link: "/about/dar_al_sikkah",
    },
  ];

  return (
    <DropdownMenu className="z-[200]">
      <DropdownMenuTrigger asChild>
        <button className="text-sm font-semibold">About</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[200]">
        <DropdownMenuLabel>About</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items.map((item, index) => (
            <Link href={item.link} key={index} passHref>
              <DropdownMenuItem>{item.title}</DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
