import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import React from "react";

export default function NavbarItemMenu({ item }: any) {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className="p-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <Dropdown key={item.href} isOpen={isOpen}>
                <DropdownTrigger>
                    <Link
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                            linkStyles({ color: "foreground" }),
                            "data-[active=true]:text-primary data-[active=true]:font-medium"
                        )}
                        color="foreground"
                        href={item.href}
                    >
                        {item.label}
                    </Link>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Link Actions">
                    {item.navItems.map((subItem: any) => (
                        <DropdownItem
                            key={subItem.label}
                            href={item.href + subItem.href}>
                            {subItem.label}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}