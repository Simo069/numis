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
import Link from "next/link";

export function Dropdowncoin() {
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
          <Link href="#RIFF">
            <DropdownMenuItem>RIFF</DropdownMenuItem>
          </Link>
          <Link href="#TANGIER">
            <DropdownMenuItem>TANGIER</DropdownMenuItem>
          </Link>
          <Link href="#PROTECTORAT DE LA FRANCE AU MAROC">
            <DropdownMenuItem>
              PROTECTORAT DE LA FRANCE AU MAROC
            </DropdownMenuItem>
          </Link>
          <Link href="#EMPIRE CHERIFIEN">
            <DropdownMenuItem>EMPIRE CHERIFIEN</DropdownMenuItem>
          </Link>
          <Link href="#BANQUE D'ÉTAT DU MAROC">
            <DropdownMenuItem>BANQUE D'ÉTAT DU MAROC</DropdownMenuItem>
          </Link>
          <Link href="#BANQUE DU MAROC">
            <DropdownMenuItem>BANQUE DU MAROC</DropdownMenuItem>
          </Link>
          <Link href="#BANK AL-MAGHRIB">
            <DropdownMenuItem>BANK AL-MAGHRIB</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
