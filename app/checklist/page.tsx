import type { Metadata } from "next";
import { DemoPage } from "@/app/demo-pages";

export const metadata: Metadata = {
  title: "Release Checklist",
  description:
    "Internal release checklist page for the Candoa marketing site and launch workflow.",
  alternates: {
    canonical: "/checklist",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ChecklistPage() {
  return (
    <DemoPage
      eyebrow="Release checklist"
      title="Move from idea to shipped with less friction"
      description="Candoa is shaped for repeated work: review the plan, keep references open, and move with keyboard actions."
      accent="#7d8cff"
      timeline={[
        "Finalize product page",
        "Record clean walkthrough",
        "Connect candoa.app deployment",
      ]}
      items={[
        {
          title: "Homepage",
          body: "Show the native-feeling productivity story before technical details.",
        },
        {
          title: "Walkthrough",
          body: "Use intentional Candoa pages so the video feels polished and owned.",
        },
        {
          title: "Deploy",
          body: "Point the remaining Vercel project at this standalone site.",
        },
      ]}
    />
  );
}
