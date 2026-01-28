"use client";

import * as React from "react";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  AlertCircle,
  Check,
  CheckCircle,
  Copy,
  Info,
  AlertTriangle,
} from "lucide-react";

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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/vitality/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/vitality/ui/dropdown-menu";
import { Input } from "@/registry/vitality/ui/input";
import { Label } from "@/registry/vitality/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/vitality/ui/popover";
import { Progress } from "@/registry/vitality/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/registry/vitality/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/vitality/ui/select";
import { Separator } from "@/registry/vitality/ui/separator";
import { Skeleton } from "@/registry/vitality/ui/skeleton";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/vitality/ui/tooltip";

const components: { name: string; isOfficial: boolean }[] = [
  { name: "Theming", isOfficial: true },
  { name: "Avatar", isOfficial: true },
  { name: "Badge", isOfficial: true },
  { name: "Breadcrumb", isOfficial: false },
  { name: "Button", isOfficial: true },
  { name: "Calendar", isOfficial: true },
  { name: "Callout", isOfficial: true },
  { name: "Card", isOfficial: false },
  { name: "Checkbox", isOfficial: true },
  { name: "Dialog", isOfficial: true },
  { name: "Dropdown Menu", isOfficial: true },
  { name: "Input", isOfficial: true },
  { name: "Label", isOfficial: true },
  { name: "Popover", isOfficial: true },
  { name: "Progress", isOfficial: true },
  { name: "Radio Group", isOfficial: true },
  { name: "Select", isOfficial: true },
  { name: "Separator", isOfficial: true },
  { name: "Skeleton", isOfficial: true },
  { name: "Sonner", isOfficial: true },
  { name: "Spinner", isOfficial: true },
  { name: "Status Badge", isOfficial: true },
  { name: "Switch", isOfficial: true },
  { name: "Table", isOfficial: true },
  { name: "Tabs", isOfficial: true },
  { name: "Textarea", isOfficial: true },
  { name: "Tooltip", isOfficial: true },
];

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

  return (
    <Card id={id} className="scroll-mt-20">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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

        {/* Sticky Sidebar */}
        <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-background p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">Components</h2>
          <nav className="space-y-1">
            {components.map(({ name, isOfficial }) => (
              <a
                key={name}
                href={`#${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
              >
                {name}
                {isOfficial && <Badge variant="neutral">Official</Badge>}
              </a>
            ))}
          </nav>
          <Separator className="my-4" />
          <p className="text-xs text-muted-foreground">
            Press{" "}
            <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">
              Shift+C
            </kbd>{" "}
            to toggle theme
          </p>
        </aside>

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
                <CardTitle>Theming</CardTitle>
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
          </div>
        </main>
      </div>
    </TooltipProvider>
  );
}
