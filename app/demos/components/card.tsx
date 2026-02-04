import { Button } from "@/registry/vitality/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/vitality/ui/card";
import type { Demo } from "../types";

export const cardDemo: Demo = {
  id: "card",
  title: "Card",
  description: "Displays a card with header, content, and footer.",
  componentName: "card",
  isOfficial: false,
  filePath: "app/demos/components/card.tsx",
  render: () => (
    <Card className="w-full max-w-[350px]">
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
  ),
};
