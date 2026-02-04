import * as React from "react";

export interface Demo {
  id: string;
  title: string;
  description: string;
  componentName: string;
  isOfficial: boolean;
  filePath: string;
  render: () => React.ReactNode;
}

export interface BlockDemo extends Demo {
  className?: string;
}
