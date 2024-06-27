import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import { siteConfig } from "../config/site";
import { ThemeSwitch } from "./theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  FacebookIcon,
  CartIcon,
  AccountIcon,
} from "./icons";
import { Image } from "@nextui-org/image";
import LightLogo from "../assets/images/gg-logo.png";
import DarkLogo from "../assets/images/gg-logo-dark.png";
import { useTheme } from "../hooks/use-theme";
import { Dropdown, DropdownMenu, DropdownTrigger, DropdownItem } from "@nextui-org/react";
import React from "react";
import NavbarItemMenu from "./NavbarItemMenu";

export default function Navbar() {

  const { isLight } = useTheme();

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar className="bg-background" maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link color="foreground" href="/">
            <Image className="max-w-[200px] rounded-none" alt="GG Logo" src={isLight ? LightLogo : DarkLogo} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="center">
        <div className="hidden lg:flex gap-4">
          {siteConfig.navItems.map(
            (item) => (
              <NavbarItem key={item.href}>
                {item.navItems ? (
                  <NavbarItemMenu item={item} />
                ) : (
                  <Link
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "p-2 data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </NavbarItem>
            ))}
        </div>
      </NavbarContent>



      {/* // {siteConfig.navItems.map((item) => (
          //   item.navItems ? (
          //     <Dropdown isOpen={isOpen} key={item.href}>
          //       <DropdownTrigger>
          //         <Button variant="bordered"
          //           onMouseEnter={() => {
          //             setIsOpen(true);
          //           }}
          //           onMouseLeave={() => {
          //             setIsOpen(false);
          //           }}>{item.label}
          //         </Button>
          //       </DropdownTrigger>
          //       <DropdownMenu aria-label="Link Actions">
          //         {item.navItems.map((subItem) => (
          //           <DropdownItem key={subItem.label} href={subItem.href}>
          //             {subItem.label}
          //           </DropdownItem>
          //         ))}
          //       </DropdownMenu>
          //     </Dropdown>
          //   ) : (
          //     <NavbarItem key={item.href}>
          //       <Link
          //         className={clsx(
          //           linkStyles({ color: "foreground" }),
          //           "data-[active=true]:text-primary data-[active=true]:font-medium",
          //         )}
          //         color="foreground"
          //         href={item.href}
          //       >
          //         {item.label}
          //       </Link>
          //     </NavbarItem>
          //   )
          // ))}

          // {siteConfig.navItems.map((item) => (
          //   <NavbarItem key={item.href}>

          //     <Link
          //       className={clsx(
          //         linkStyles({ color: "foreground" }),
          //         "data-[active=true]:text-primary data-[active=true]:font-medium",
          //       )}
          //       color="foreground"
          //       href={item.href}
          //     >
          //       {item.label}
          //     </Link>
          //   </NavbarItem>
          // ))} */}

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end" >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link> */}
          <ThemeSwitch className="mr-2" />
          <Link isExternal href={siteConfig.links.discord}>
            <AccountIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <CartIcon className="text-default-500" />
          </Link>
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        {/* <NavbarItem className="md:flex">
          <Button
            isExternal
            as={Link}
            className="hidden text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
