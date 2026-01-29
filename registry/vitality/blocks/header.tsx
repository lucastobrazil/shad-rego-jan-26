"use client";

import * as React from "react";
import { Search, User, Settings, LogOut, Bell } from "lucide-react";

import { cn } from "@/lib/utils";
import { Input } from "@/registry/vitality/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/vitality/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/vitality/ui/dropdown-menu";
import { Button } from "../ui/button";

interface HeaderUserMenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

interface HeaderUserProps {
  name: string;
  email?: string;
  avatarSrc?: string;
  avatarFallback?: string;
  menuItems?: HeaderUserMenuItem[];
}

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  actions?: React.ReactNode;
  user?: HeaderUserProps;
}

function Header({
  className,
  logo,
  searchPlaceholder = "Search...",
  onSearch,
  actions,
  user,
  ...props
}: HeaderProps) {
  const defaultUserMenuItems: HeaderUserMenuItem[] = [
    { label: "Profile", icon: <User className="h-4 w-4" /> },
    { label: "Settings", icon: <Settings className="h-4 w-4" /> },
  ];

  const userMenuItems: HeaderUserMenuItem[] =
    user?.menuItems || defaultUserMenuItems;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
      {...props}
    >
      <div className="container flex items-center gap-4 p-2">
        {logo && <div className="flex items-center shrink-0">{logo}</div>}
        {/* Search - centered */}
        <div className="relative flex-1 flex justify-center">
          <div className="relative w-full max-w-[480px]">
            <div className="bg-muted focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border rounded-xl text-center gap-sm flex justify-center items-center">
              <Search className="text-muted-foreground pointer-events-none" />
              <Input
                type="search"
                placeholder={searchPlaceholder}
                className="border-none max-w-fit px-1 focus:max-w-[480px] focus:ring-none bg-transparent"
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {actions}
          {/* User info */}
          <div className="flex flex-col items-end gap-0.5">
            <p className="text-sm font-semibold leading-tight">
              Dr Andrew Demo
            </p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <span>Brisbane Medical Centres</span>
              <span>·</span>
              <span>GTU99999</span>
            </div>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="rounded-full p-2">
            <Bell className="size-5 text-muted-foreground" />
            <span className="sr-only">Notifications</span>
          </Button>

          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  <Avatar size="md">
                    {user.avatarSrc && (
                      <AvatarImage src={user.avatarSrc} alt={user.name} />
                    )}
                    <AvatarFallback variant="primary">
                      {user.avatarFallback || user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">{user.name}</p>
                    {user.email && (
                      <p className="text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    )}
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {userMenuItems.map((item, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={item.onClick}
                    asChild={!!item.href}
                  >
                    {item.href ? (
                      <a href={item.href}>
                        {item.icon}
                        {item.label}
                      </a>
                    ) : (
                      <>
                        {item.icon}
                        {item.label}
                      </>
                    )}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header, type HeaderProps, type HeaderUserProps };
