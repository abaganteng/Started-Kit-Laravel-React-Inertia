import { cn } from "@/lib/utils";
import { InertiaLinkProps, Link, usePage } from "@inertiajs/react";
import React from "react";
import { Logo } from "./logo";
import { Container } from "./container";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./theme-provider";

export function Navbar() {
    const { setTheme } = useTheme();
    const { auth } = usePage<any>().props;
    return (
        <nav className="border-b py-3 bg-background shadow-sm ">
            <Container>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <Link href="/">
                            <Logo />
                            <span className="sr-only">Go to home page.</span>
                        </Link>

                        <NavLink
                            current={route().current("home")}
                            href={route("home")}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            current={route().current("dashboard")}
                            href={route("dashboard")}
                        >
                            Dashbaord
                        </NavLink>
                        <NavLink
                            current={route().current("users.index")}
                            href={route("users.index")}
                        >
                            Users
                        </NavLink>
                    </div>

                    {auth.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex group focus:outline-none text-sm text-muted-foreground hover:text-foreground data-[state=open]:text-foreground items-center gap-x-2">
                                {auth.user.name}
                                <ChevronDown className="size-4 duration-300 transition-transform group-data-[state=open]:rotate-180" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>
                                    <div>{auth.user.name}</div>
                                    <div className="text-muted-foreground">
                                        {auth.user.email}
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger>
                                        Switch Theme
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuPortal>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem
                                                onSelect={(e) =>
                                                    setTheme("system")
                                                }
                                            >
                                                System
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onSelect={(e) =>
                                                    setTheme("light")
                                                }
                                            >
                                                Light
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onSelect={(e) =>
                                                    setTheme("dark")
                                                }
                                            >
                                                Dark
                                            </DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuItem asChild>
                                    <Link href={route("dashboard")}>
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={route("profile.edit")}>
                                        Edit Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log out
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div className="flex items-center">
                            <NavLink href={route("login")}>Login</NavLink>
                            <NavLink href={route("register")}>Register</NavLink>
                        </div>
                    )}
                </div>
            </Container>
        </nav>
    );
}

interface NavLinkProps extends InertiaLinkProps {
    current?: boolean;
    className?: string;
}

export function NavLink({ current, className, ...props }: NavLinkProps) {
    return (
        <Link
            className={cn(
                "text-sm px-3 py-1.5 tracking-tight duration-300 transition-colors rounded-full hover:bg-secondary hover:text-secondary-foreground",
                current
                    ? "bg-blue-600 text-blue-50 hover:bg-blue-500 hover:text-blue-50 font-semibold"
                    : "text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}
