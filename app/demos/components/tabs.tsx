import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/vitality/ui/tabs";
import type { Demo } from "../types";

export const tabsDemo: Demo = {
  id: "tabs",
  title: "Tabs",
  description: "A set of layered sections of content displayed one at a time.",
  componentName: "tabs",
  isOfficial: true,
  render: () => (
    <Tabs defaultValue="account" className="w-full max-w-[400px]">
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
  ),
};
