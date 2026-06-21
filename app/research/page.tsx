import type { Metadata } from "next";
import { DemoPage } from "@/app/demo-pages";

export const metadata: Metadata = {
  title: "Research Space",
  description:
    "Internal research workspace page for the Candoa launch site and positioning notes.",
  alternates: {
    canonical: "/research",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResearchPage() {
  return (
    <DemoPage
      eyebrow="Research space"
      title="Keep every thread close to the work"
      description="Use one window for reference pages, notes, launch assets, and quick follow-up actions without losing the thread."
      accent="#9aa8ff"
      timeline={[
        "Compare browser positioning",
        "Collect visual references",
        "Summarize launch notes with Ask",
      ]}
      items={[
        {
          title: "Pinned context",
          body: "Keep the pages that matter visible inside a focused project space.",
        },
        {
          title: "Ask while browsing",
          body: "Turn page context into summaries, next steps, and quick decisions.",
        },
        {
          title: "Less cleanup",
          body: "Spaces keep work grouped so tab management feels lighter.",
        },
      ]}
    />
  );
}
