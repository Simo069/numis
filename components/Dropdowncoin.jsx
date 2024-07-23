import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export function Dropdowncoin() {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {

    
    const fetchCurrenciesItemCatalog = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/catalog/getItemcatalog`);
        setCurrency(response.data);
      } catch (error) {
        console.error("error fetching currency", error);
      }
    };
    fetchCurrenciesItemCatalog();
  },[]);

  console.log("currency---::::",currency)

  return (
    <DropdownMenu className="z-[200]">
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <button className="text-sm font-semibold">Coins</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[200]">
        <DropdownMenuLabel>Bank note</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/catalog" className="transform hover:scale-110">
            <DropdownMenuItem>catalog</DropdownMenuItem>
          </Link>
          {currency.map((item, index) =>  (
                  <Link href={`/catalog/${encodeURIComponent(item.title)}?id=${item.id}`} key={index}>
                    <DropdownMenuItem>{item.title}</DropdownMenuItem>
                  </Link>
              ))
            }
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
