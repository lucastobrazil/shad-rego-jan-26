"use client";

import * as React from "react";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  AlertCircle,
  Bold,
  Check,
  CheckCircle,
  ChevronsUpDown,
  Copy,
  FolderOpen,
  Info,
  Italic,
  AlertTriangle,
  Underline,
  Calculator,
  Calendar as CalendarIcon,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/vitality/ui/accordion";
import { AspectRatio } from "@/registry/vitality/ui/aspect-ratio";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/vitality/ui/avatar";
import { Badge } from "@/registry/vitality/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/vitality/ui/breadcrumb";
import { Button } from "@/registry/vitality/ui/button";
import { Calendar } from "@/registry/vitality/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/vitality/ui/carousel";
import {
  Callout,
  CalloutTitle,
  CalloutDescription,
} from "@/registry/vitality/ui/callout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/vitality/ui/card";
import { Checkbox } from "@/registry/vitality/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/vitality/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/registry/vitality/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/vitality/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/vitality/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/vitality/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/vitality/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/vitality/ui/hover-card";
import { Input } from "@/registry/vitality/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/registry/vitality/ui/input-otp";
import { Label } from "@/registry/vitality/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/registry/vitality/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/vitality/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/vitality/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/vitality/ui/popover";
import { Progress } from "@/registry/vitality/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/registry/vitality/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/vitality/ui/resizable";
import { ScrollArea } from "@/registry/vitality/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/vitality/ui/select";
import { Separator } from "@/registry/vitality/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/vitality/ui/sheet";
import { Skeleton } from "@/registry/vitality/ui/skeleton";
import { Slider } from "@/registry/vitality/ui/slider";
import { Spinner } from "@/registry/vitality/ui/spinner";
import { StatusBadge } from "@/registry/vitality/ui/status-badge";
import { Switch } from "@/registry/vitality/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/vitality/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/vitality/ui/tabs";
import { Textarea } from "@/registry/vitality/ui/textarea";
import { Toggle } from "@/registry/vitality/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/registry/vitality/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/vitality/ui/tooltip";
import { Kbd } from "@/registry/vitality/ui/kbd";
import {
  Empty,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
} from "@/registry/vitality/ui/empty";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
} from "@/registry/vitality/ui/typography";
import { SidebarNav, components } from "@/components/sidebar-nav";

const REGISTRY_URL = "https://lucastobrazil.github.io/shad-rego-jan-26";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="h-8 w-8 p-0 shrink-0"
      onClick={copy}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy to clipboard</span>
    </Button>
  );
}

// Helper to look up isOfficial status by component title
function getIsOfficial(title: string): boolean {
  const component = components.find((c) => c.name === title);
  return component?.isOfficial ?? false;
}

function ComponentCard({
  id,
  title,
  description,
  componentName,
  children,
}: {
  id: string;
  title: string;
  description: string;
  componentName: string;
  children: React.ReactNode;
}) {
  const installCommand = `npx shadcn@latest add ${REGISTRY_URL}/r/${componentName}.json`;
  const isOfficial = getIsOfficial(title);

  return (
    <Card id={id} className="scroll-mt-20">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>{title}</CardTitle>
          {isOfficial && <Badge variant="neutral">Official</Badge>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
        <div className="mt-4 pt-4 border-t">
          <p className="text-xs text-muted-foreground mb-2">Install</p>
          <div className="flex items-center gap-2 bg-muted px-3 py-2 rounded-md">
            <code className="text-xs font-mono overflow-x-auto flex-1">
              {installCommand}
            </code>
            <CopyButton text={installCommand} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function HomeContent({ globalsCss }: { globalsCss: string }) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [progress, setProgress] = React.useState(33);
  const [airplaneMode, setAirplaneMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <TooltipProvider>
      <div className="flex min-h-screen">
        <ThemeToggle />

        <SidebarNav />

        {/* Main Content */}
        <main className="ml-64 flex-1 p-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2">
                Vitality Component Registry
              </h1>
              <p className="text-muted-foreground">
                A custom shadcn/ui component library built with the vitality
                theme.
              </p>
            </div>

            {/* Theming */}
            <Card id="theming" className="scroll-mt-20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CardTitle>Theming</CardTitle>
                  <Badge variant="neutral">Official</Badge>
                </div>
                <CardDescription>
                  Add these CSS variables to your globals.css file to use the
                  Vitality theme.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs font-mono max-h-96 overflow-y-auto">
                    <code>{globalsCss}</code>
                  </pre>
                  <div className="absolute top-2 right-2">
                    <CopyButton text={globalsCss} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accordion */}
            <ComponentCard
              id="accordion"
              title="Accordion"
              description="A vertically stacked set of interactive headings that reveal content."
              componentName="accordion"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It comes with default styles that match the other components.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ComponentCard>

            {/* Aspect Ratio */}
            <ComponentCard
              id="aspect-ratio"
              title="Aspect Ratio"
              description="Displays content within a desired ratio."
              componentName="aspect-ratio"
            >
              <div className="w-[450px]">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground">16:9</span>
                </AspectRatio>
              </div>
            </ComponentCard>

            {/* Avatar */}
            <ComponentCard
              id="avatar"
              title="Avatar"
              description="An image element with a fallback for representing the user."
              componentName="avatar"
            >
              <div className="space-y-4">
                <div className="flex items-end gap-4">
                  <Avatar size="xs">
                    <AvatarFallback>XS</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  <Avatar size="md">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <Avatar size="lg">
                    <AvatarFallback>LG</AvatarFallback>
                  </Avatar>
                  <Avatar size="xl">
                    <AvatarFallback>XL</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex gap-4">
                  <Avatar variant="neutral">
                    <AvatarFallback>N</AvatarFallback>
                  </Avatar>
                  <Avatar variant="primary">
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </ComponentCard>

            {/* Badge */}
            <ComponentCard
              id="badge"
              title="Badge"
              description="Displays a badge or a component that looks like a badge."
              componentName="badge"
            >
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="neutral">Neutral</Badge>
                <Badge>3</Badge>
                <Badge variant="neutral">42</Badge>
              </div>
            </ComponentCard>

            {/* Breadcrumb */}
            <ComponentCard
              id="breadcrumb"
              title="Breadcrumb"
              description="Displays the path to the current resource using a hierarchy of links."
              componentName="breadcrumb"
            >
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </ComponentCard>

            {/* Button */}
            <ComponentCard
              id="button"
              title="Button"
              description="Displays a button or a component that looks like a button."
              componentName="button"
            >
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
              </div>
            </ComponentCard>

            {/* Calendar */}
            <ComponentCard
              id="calendar"
              title="Calendar"
              description="A date field component that allows users to enter and edit date."
              componentName="calendar"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </ComponentCard>

            {/* Callout */}
            <ComponentCard
              id="callout"
              title="Callout"
              description="Displays important messages with severity variants."
              componentName="callout"
            >
              <div className="space-y-4">
                <Callout>
                  <Info className="size-4" />
                  <CalloutTitle>Muted</CalloutTitle>
                  <CalloutDescription>
                    This is a muted callout for general information.
                  </CalloutDescription>
                </Callout>
                <Callout variant="info">
                  <Info className="size-4" />
                  <CalloutTitle>Info</CalloutTitle>
                  <CalloutDescription>
                    This is an info callout for helpful information.
                  </CalloutDescription>
                </Callout>
                <Callout variant="success">
                  <CheckCircle className="size-4" />
                  <CalloutTitle>Success</CalloutTitle>
                  <CalloutDescription>
                    This is a success callout for positive feedback.
                  </CalloutDescription>
                </Callout>
                <Callout variant="warning">
                  <AlertTriangle className="size-4" />
                  <CalloutTitle>Warning</CalloutTitle>
                  <CalloutDescription>
                    This is a warning callout for cautionary messages.
                  </CalloutDescription>
                </Callout>
                <Callout variant="destructive">
                  <AlertCircle className="size-4" />
                  <CalloutTitle>Destructive</CalloutTitle>
                  <CalloutDescription>
                    This is a destructive callout for errors.
                  </CalloutDescription>
                </Callout>
                <Callout variant="info" size="compact">
                  <CalloutDescription>
                    Compact inline callout
                  </CalloutDescription>
                </Callout>
                <Callout variant="warning" size="blockCompact">
                  <AlertTriangle className="size-3" />
                  <CalloutTitle>Block Compact</CalloutTitle>
                  <CalloutDescription>
                    A smaller block-level callout.
                  </CalloutDescription>
                </Callout>
              </div>
            </ComponentCard>

            {/* Card */}
            <ComponentCard
              id="card"
              title="Card"
              description="Displays a card with header, content, and footer."
              componentName="card"
            >
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Your project will be deployed to a production environment.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            </ComponentCard>

            {/* Carousel */}
            <ComponentCard
              id="carousel"
              title="Carousel"
              description="A carousel with motion and swipe built using Embla."
              componentName="carousel"
            >
              <div className="w-full max-w-xs mx-auto">
                <Carousel>
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <span className="text-4xl font-semibold">{index + 1}</span>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </ComponentCard>

            {/* Checkbox */}
            <ComponentCard
              id="checkbox"
              title="Checkbox"
              description="A control that allows the user to toggle between checked and not checked."
              componentName="checkbox"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" defaultChecked />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
              </div>
            </ComponentCard>

            {/* Collapsible */}
            <ComponentCard
              id="collapsible"
              title="Collapsible"
              description="An interactive component which expands/collapses a panel."
              componentName="collapsible"
            >
              <Collapsible className="w-[350px] space-y-2">
                <div className="flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  @radix-ui/primitives
                </div>
                <CollapsibleContent className="space-y-2">
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-3 font-mono text-sm">
                    @stitches/react
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </ComponentCard>

            {/* Command */}
            <ComponentCard
              id="command"
              title="Command"
              description="Fast, composable, unstyled command menu for React."
              componentName="command"
            >
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                      <Smile className="mr-2 h-4 w-4" />
                      <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                      <Calculator className="mr-2 h-4 w-4" />
                      <span>Calculator</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </ComponentCard>

            {/* Context Menu */}
            <ComponentCard
              id="context-menu"
              title="Context Menu"
              description="Displays a menu located at the pointer, triggered by a right-click."
              componentName="context-menu"
            >
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                  Right click here
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                  <ContextMenuItem>Back</ContextMenuItem>
                  <ContextMenuItem>Forward</ContextMenuItem>
                  <ContextMenuItem>Reload</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </ComponentCard>

            {/* Dialog */}
            <ComponentCard
              id="dialog"
              title="Dialog"
              description="A window overlaid on either the primary window or another dialog window."
              componentName="dialog"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button>Cancel</Button>
                    <Button variant="primary">Continue</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ComponentCard>

            {/* Drawer */}
            <ComponentCard
              id="drawer"
              title="Drawer"
              description="A drawer component for React."
              componentName="drawer"
            >
              <Drawer>
                <DrawerTrigger asChild>
                  <Button>Open Drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Are you sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="ghost">Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </ComponentCard>

            {/* Dropdown Menu */}
            <ComponentCard
              id="dropdown-menu"
              title="Dropdown Menu"
              description="Displays a menu to the user triggered by a button."
              componentName="dropdown-menu"
            >
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ComponentCard>

            {/* Empty */}
            <ComponentCard
              id="empty"
              title="Empty"
              description="Empty state placeholder for when there is no data to display."
              componentName="empty"
            >
              <Empty className="min-h-[250px]">
                <EmptyIcon>
                  <FolderOpen className="h-10 w-10 text-muted-foreground" />
                </EmptyIcon>
                <EmptyTitle>No projects found</EmptyTitle>
                <EmptyDescription>
                  Get started by creating a new project.
                </EmptyDescription>
                <Button>Create Project</Button>
              </Empty>
            </ComponentCard>

            {/* Hover Card */}
            <ComponentCard
              id="hover-card"
              title="Hover Card"
              description="For sighted users to preview content available behind a link."
              componentName="hover-card"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link">@nextjs</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </ComponentCard>

            {/* Input */}
            <ComponentCard
              id="input"
              title="Input"
              description="Displays a form input field or a component that looks like an input field."
              componentName="input"
            >
              <div className="space-y-4 max-w-sm">
                <Input placeholder="Email" type="email" />
                <Input placeholder="Password" type="password" />
                <Input placeholder="Disabled" disabled />
              </div>
            </ComponentCard>

            {/* Input OTP */}
            <ComponentCard
              id="input-otp"
              title="Input OTP"
              description="Accessible one-time password component with copy paste functionality."
              componentName="input-otp"
            >
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </ComponentCard>

            {/* Kbd */}
            <ComponentCard
              id="kbd"
              title="Kbd"
              description="Displays keyboard keys or shortcuts."
              componentName="kbd"
            >
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <Kbd>⌘</Kbd>
                  <Kbd>K</Kbd>
                </div>
                <div className="flex items-center gap-1">
                  <Kbd>Ctrl</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>C</Kbd>
                </div>
                <div className="flex items-center gap-1">
                  <Kbd>Shift</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>Enter</Kbd>
                </div>
                <Kbd>Esc</Kbd>
              </div>
            </ComponentCard>

            {/* Label */}
            <ComponentCard
              id="label"
              title="Label"
              description="Renders an accessible label associated with controls."
              componentName="label"
            >
              <div className="space-y-4 max-w-sm">
                <div className="space-y-2">
                  <Label htmlFor="email-label">Email</Label>
                  <Input id="email-label" placeholder="Enter your email" />
                </div>
              </div>
            </ComponentCard>

            {/* Menubar */}
            <ComponentCard
              id="menubar"
              title="Menubar"
              description="A visually persistent menu common in desktop applications."
              componentName="menubar"
            >
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New Tab</MenubarItem>
                    <MenubarItem>New Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Share</MenubarItem>
                    <MenubarItem>Print</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Undo</MenubarItem>
                    <MenubarItem>Redo</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </ComponentCard>

            {/* Navigation Menu */}
            <ComponentCard
              id="navigation-menu"
              title="Navigation Menu"
              description="A collection of links for navigating websites."
              componentName="navigation-menu"
            >
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">Introduction</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Re-usable components built with Radix UI and Tailwind CSS.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 w-[400px]">
                        <li>
                          <NavigationMenuLink asChild>
                            <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">Alert Dialog</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                A modal dialog that interrupts the user.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </ComponentCard>

            {/* Pagination */}
            <ComponentCard
              id="pagination"
              title="Pagination"
              description="Pagination with page navigation, next and previous links."
              componentName="pagination"
            >
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" size="default" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" size="default">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" size="default" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" size="default">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" size="default" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </ComponentCard>

            {/* Popover */}
            <ComponentCard
              id="popover"
              title="Popover"
              description="Displays rich content in a portal, triggered by a button."
              componentName="popover"
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Button>Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </ComponentCard>

            {/* Progress */}
            <ComponentCard
              id="progress"
              title="Progress"
              description="Displays an indicator showing the completion progress of a task."
              componentName="progress"
            >
              <div className="space-y-4 max-w-md">
                <Progress value={progress} />
                <Progress value={25} />
                <Progress value={75} />
              </div>
            </ComponentCard>

            {/* Radio Group */}
            <ComponentCard
              id="radio-group"
              title="Radio Group"
              description="A set of checkable buttons where no more than one can be checked at a time."
              componentName="radio-group"
            >
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three">Option Three</Label>
                </div>
              </RadioGroup>
            </ComponentCard>

            {/* Resizable */}
            <ComponentCard
              id="resizable"
              title="Resizable"
              description="Accessible resizable panel groups and layouts with keyboard support."
              componentName="resizable"
            >
              <ResizablePanelGroup
                orientation="horizontal"
                className="max-w-md rounded-lg border"
              >
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-[200px] items-center justify-center p-6">
                    <span className="font-semibold">Two</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ComponentCard>

            {/* Scroll Area */}
            <ComponentCard
              id="scroll-area"
              title="Scroll Area"
              description="Augments native scroll functionality for custom, cross-browser styling."
              componentName="scroll-area"
            >
              <ScrollArea className="h-72 w-48 rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div key={i} className="text-sm py-1">
                      Tag {i + 1}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </ComponentCard>

            {/* Select */}
            <ComponentCard
              id="select"
              title="Select"
              description="Displays a list of options for the user to pick from."
              componentName="select"
            >
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="grape">Grape</SelectItem>
                </SelectContent>
              </Select>
            </ComponentCard>

            {/* Separator */}
            <ComponentCard
              id="separator"
              title="Separator"
              description="Visually or semantically separates content."
              componentName="separator"
            >
              <div className="space-y-4">
                <div>
                  <p className="text-sm">Above the separator</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm">Below the separator</p>
                </div>
              </div>
            </ComponentCard>

            {/* Sheet */}
            <ComponentCard
              id="sheet"
              title="Sheet"
              description="Extends the Dialog component to display content that complements the main content of the screen."
              componentName="sheet"
            >
              <Sheet>
                <SheetTrigger asChild>
                  <Button>Open Sheet</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                      Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Enter your username" />
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </ComponentCard>

            {/* Skeleton */}
            <ComponentCard
              id="skeleton"
              title="Skeleton"
              description="Use to show a placeholder while content is loading."
              componentName="skeleton"
            >
              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </ComponentCard>

            {/* Slider */}
            <ComponentCard
              id="slider"
              title="Slider"
              description="An input where the user selects a value from within a given range."
              componentName="slider"
            >
              <div className="w-full max-w-sm space-y-4">
                <Slider defaultValue={[50]} max={100} step={1} />
                <Slider defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </ComponentCard>

            {/* Sonner / Toast */}
            <ComponentCard
              id="sonner"
              title="Toast (Sonner)"
              description="An opinionated toast component for React."
              componentName="sonner"
            >
              <div className="flex gap-2">
                <Button onClick={() => toast("Event has been created")}>
                  Show Toast
                </Button>
                <Button
                  onClick={() =>
                    toast.success("Success!", {
                      description: "Your changes have been saved.",
                    })
                  }
                >
                  Success Toast
                </Button>
                <Button
                  onClick={() =>
                    toast.error("Error!", {
                      description: "Something went wrong.",
                    })
                  }
                >
                  Error Toast
                </Button>
              </div>
            </ComponentCard>

            {/* Spinner */}
            <ComponentCard
              id="spinner"
              title="Spinner"
              description="A loading spinner with size and variant options."
              componentName="spinner"
            >
              <div className="space-y-4">
                <div className="flex items-end gap-4">
                  <Spinner size="xs" />
                  <Spinner size="sm" />
                  <Spinner size="md" />
                  <Spinner size="lg" />
                  <Spinner size="xl" />
                </div>
                <div className="flex gap-4">
                  <Spinner variant="default" />
                  <div className="bg-primary p-2 rounded">
                    <Spinner variant="inverse" />
                  </div>
                </div>
              </div>
            </ComponentCard>

            {/* Status Badge */}
            <ComponentCard
              id="status-badge"
              title="Status Badge"
              description="A rectangular badge component for displaying status indicators."
              componentName="status-badge"
            >
              <div className="flex flex-wrap gap-2">
                <StatusBadge>Default</StatusBadge>
                <StatusBadge variant="neutral">Neutral</StatusBadge>
              </div>
            </ComponentCard>

            {/* Switch */}
            <ComponentCard
              id="switch"
              title="Switch"
              description="A control that allows the user to toggle between on and off."
              componentName="switch"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="airplane-mode"
                    checked={airplaneMode}
                    onCheckedChange={setAirplaneMode}
                  />
                  <Label htmlFor="airplane-mode">Airplane Mode</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="notifications"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                  <Label htmlFor="notifications">Notifications</Label>
                </div>
              </div>
            </ComponentCard>

            {/* Table */}
            <ComponentCard
              id="table"
              title="Table"
              description="A responsive table component."
              componentName="table"
            >
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV002</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>INV003</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ComponentCard>

            {/* Tabs */}
            <ComponentCard
              id="tabs"
              title="Tabs"
              description="A set of layered sections of content displayed one at a time."
              componentName="tabs"
            >
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Make changes to your account here.
                  </p>
                </TabsContent>
                <TabsContent value="password" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Change your password here.
                  </p>
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Manage your settings here.
                  </p>
                </TabsContent>
              </Tabs>
            </ComponentCard>

            {/* Textarea */}
            <ComponentCard
              id="textarea"
              title="Textarea"
              description="Displays a form textarea or a component that looks like a textarea."
              componentName="textarea"
            >
              <div className="max-w-sm">
                <Textarea placeholder="Type your message here." />
              </div>
            </ComponentCard>

            {/* Toggle */}
            <ComponentCard
              id="toggle"
              title="Toggle"
              description="A two-state button that can be either on or off."
              componentName="toggle"
            >
              <div className="flex gap-2">
                <Toggle aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
            </ComponentCard>

            {/* Toggle Group */}
            <ComponentCard
              id="toggle-group"
              title="Toggle Group"
              description="A set of two-state buttons that can be toggled on or off."
              componentName="toggle-group"
            >
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </ComponentCard>

            {/* Tooltip */}
            <ComponentCard
              id="tooltip"
              title="Tooltip"
              description="A popup that displays information related to an element."
              componentName="tooltip"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip</p>
                </TooltipContent>
              </Tooltip>
            </ComponentCard>

            {/* Typography */}
            <ComponentCard
              id="typography"
              title="Typography"
              description="Styles for headings, paragraphs, and other text elements."
              componentName="typography"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <TypographyH1>Heading 1</TypographyH1>
                  <TypographyH2>Heading 2</TypographyH2>
                  <TypographyH3>Heading 3</TypographyH3>
                  <TypographyH4>Heading 4</TypographyH4>
                </div>
                <div className="space-y-2">
                  <TypographyLead>
                    A lead paragraph stands out from regular text.
                  </TypographyLead>
                  <TypographyP>
                    The king, seeing how much happier his subjects were, realized the error of his ways.
                  </TypographyP>
                  <TypographyMuted>
                    This is muted text for secondary information.
                  </TypographyMuted>
                </div>
                <TypographyBlockquote>
                  &ldquo;After all,&rdquo; he said, &ldquo;everyone deserves a second chance.&rdquo;
                </TypographyBlockquote>
                <div className="flex flex-wrap gap-4">
                  <TypographyLarge>Large</TypographyLarge>
                  <TypographySmall>Small</TypographySmall>
                  <TypographyInlineCode>inline code</TypographyInlineCode>
                </div>
              </div>
            </ComponentCard>
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
