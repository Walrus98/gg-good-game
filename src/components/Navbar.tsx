import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { AcmeLogo } from "../assets/AcmeLogo.tsx";

export default function Navbar() {
  return (
    <NextUINavbar position="static">
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Link color="foreground" href="#">
                Giochi di Carte
              </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="magic">Magic</DropdownItem>
              <DropdownItem key="yu-gi-oh">Yu-Gi-Oh!</DropdownItem>
              <DropdownItem key="pokemon">Pokémon</DropdownItem>
              <DropdownItem key="digimon">Digimon</DropdownItem>
              <DropdownItem key="one-piece">One Piece</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Manga
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Link color="foreground" href="#">
                Modellismo
              </Link>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownItem key="magic">Wargames</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Commissioni
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Gadget
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="hidden" href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
