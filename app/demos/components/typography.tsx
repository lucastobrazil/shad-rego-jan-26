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
import type { Demo } from "../types";

export const typographyDemo: Demo = {
  id: "typography",
  title: "Typography",
  description: "Styles for headings, paragraphs, and other text elements.",
  componentName: "typography",
  isOfficial: true,
  render: () => (
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
          The king, seeing how much happier his subjects were, realized the
          error of his ways.
        </TypographyP>
        <TypographyMuted>
          This is muted text for secondary information.
        </TypographyMuted>
      </div>
      <TypographyBlockquote>
        &ldquo;After all,&rdquo; he said, &ldquo;everyone deserves a second
        chance.&rdquo;
      </TypographyBlockquote>
      <div className="flex flex-wrap gap-4">
        <TypographyLarge>Large</TypographyLarge>
        <TypographySmall>Small</TypographySmall>
        <TypographyInlineCode>inline code</TypographyInlineCode>
      </div>
    </div>
  ),
};
