import { DemoPage } from "@/app/demo-pages";

export default function BriefPage() {
  return (
    <DemoPage
      eyebrow="Launch brief"
      title="A browser workspace for superhuman speed"
      description="Position Candoa around fast Mac productivity: fewer scattered windows, clearer project context, and command-driven browsing."
      accent="#8aa2ff"
      timeline={[
        "Tighten homepage copy",
        "Capture app walkthrough",
        "Prepare first public download",
      ]}
      items={[
        {
          title: "Primary promise",
          body: "A faster way to work across research, planning, and execution.",
        },
        {
          title: "Audience",
          body: "Indie builders, developers, writers, and people who live in tabs all day.",
        },
        {
          title: "First CTA",
          body: "Invite people to follow development while the app moves toward release.",
        },
      ]}
    />
  );
}
