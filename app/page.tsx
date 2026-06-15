import Image from "next/image";
import appScreenshotImage from "@/public/images/candoa-normal-tabs.png";
import {
  ArrowDownToLine,
  BatteryFull,
  ChevronRight,
  Command,
  GalleryVerticalEnd,
  Globe2,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getDownloadInfo } from "@/lib/download";
import type { DownloadInfo } from "@/lib/download";

const features = [
  {
    icon: GalleryVerticalEnd,
    title: "Spaces for every mission",
    body: "Separate projects, writing, research, and everyday browsing so each context is ready when you are.",
  },
  {
    icon: Globe2,
    title: "Everything at your fingertips",
    body: "Keep Google, Gmail, YouTube, docs, and research in one command-ready workspace instead of a pile of windows.",
  },
  {
    icon: Command,
    title: "Keyboard-first speed",
    body: "Open, switch, pin, close, and copy tabs with shortcuts that make browsing feel instant.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    body: "A personal browser workspace that keeps your tabs yours and avoids turning your web into another feed.",
  },
];

export default function Home() {
  const downloadInfo = getDownloadInfo();

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header downloadInfo={downloadInfo} />
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-20 pt-20 text-center sm:px-8 lg:pb-28 lg:pt-24">
        <Badge
          variant="outline"
          className="mb-8 h-7 border-border bg-card px-3 text-foreground"
        >
          <Sparkles className="size-3.5 text-candoa-accent" />
          WebKit-native Mac browser
        </Badge>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
          Candoa
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
          A lightweight Mac browser workspace for people who live in tabs.
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-11 w-full rounded-full px-5 sm:w-auto"
          >
            <a href={downloadInfo.href} download={downloadInfo.fileName}>
              <ArrowDownToLine className="size-4" />
              Download for macOS
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="h-11 w-full rounded-full border border-border px-5 sm:w-auto"
          >
            <a href="#features">
              Learn more
              <ChevronRight className="size-4" />
            </a>
          </Button>
        </div>

        <AppScreenshot />
      </section>

      <FeatureSection />
      <ValuesSection />
      <DownloadSection downloadInfo={downloadInfo} />
      <Footer downloadInfo={downloadInfo} />
    </main>
  );
}

function Header({ downloadInfo }: { downloadInfo: DownloadInfo }) {
  return (
    <header className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="#" className="flex items-center gap-2.5 text-sm font-medium">
        <span className="flex size-7 items-center justify-center rounded-full border border-border bg-card">
          <Globe2 className="size-3.5 text-candoa-accent" />
        </span>
        Candoa
      </a>
      <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
        <a href="#features" className="transition-colors hover:text-foreground">
          Features
        </a>
        <a href="#values" className="transition-colors hover:text-foreground">
          Values
        </a>
        <a
          href={downloadInfo.href}
          download={downloadInfo.fileName}
          className="transition-colors hover:text-foreground"
        >
          Download
        </a>
      </nav>
      <Button asChild variant="outline" size="sm" className="rounded-full">
        <a href={downloadInfo.href} download={downloadInfo.fileName}>
          Get Candoa
          <ArrowDownToLine className="size-4" />
        </a>
      </Button>
    </header>
  );
}

function AppScreenshot() {
  return (
    <div className="mt-12 w-full max-w-6xl overflow-hidden rounded-[28px] border border-border bg-card shadow-2xl shadow-foreground/10 sm:mt-14">
      <div className="overflow-hidden rounded-[26px] border border-border bg-muted">
        <Image
          src={appScreenshotImage}
          alt="Candoa browser showing Google open with Gmail and YouTube in the sidebar"
          preload
          placeholder="blur"
          quality={70}
          sizes="(min-width: 1280px) 1152px, 100vw"
          className="h-auto w-[820px] max-w-none -translate-x-28 sm:w-full sm:translate-x-0"
        />
      </div>
    </div>
  );
}

function FeatureSection() {
  return (
    <section
      id="features"
      className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]"
    >
      <div>
        <p className="text-sm font-medium text-candoa-accent">Productivity</p>
        <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">
          Move through the web at command speed.
        </h2>
        <p className="mt-5 max-w-md leading-7 text-muted-foreground">
          Vertical tabs, spaces, pinned tabs, and keyboard-first navigation keep
          projects close without weighing down your Mac.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <feature.icon className="mb-5 size-5 text-candoa-accent" />
            <h3 className="text-lg font-medium text-foreground">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {feature.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section id="values" className="border-y border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-3">
        <ValueItem
          icon={BatteryFull}
          title="Lighter on battery"
          body="Candoa is designed to use less memory and energy than heavyweight Chromium and Firefox-based browsers."
        />
        <ValueItem
          icon={Command}
          title="Unapologetically Mac-first"
          body="Built only for macOS with native Apple technologies, so it feels like a real Mac app."
        />
        <ValueItem
          icon={Lock}
          title="Apple-native foundations"
          body="Candoa leans on system WebKit, Keychain, iCloud, and macOS conventions instead of rebuilding everything from scratch."
        />
      </div>
    </section>
  );
}

function ValueItem({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Globe2;
  title: string;
  body: string;
}) {
  return (
    <div>
      <Icon className="mb-5 size-5 text-candoa-accent" />
      <h3 className="text-xl font-medium text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{body}</p>
    </div>
  );
}

function DownloadSection({ downloadInfo }: { downloadInfo: DownloadInfo }) {
  return (
    <section
      id="download"
      className="mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-8"
    >
      <Badge
        variant="secondary"
        className="mb-6 h-7 px-3"
      >
        Early prototype
      </Badge>
      <h2 className="text-balance text-4xl font-semibold tracking-normal text-foreground sm:text-6xl">
        built for people who live in the browser
      </h2>
      <p className="mt-6 max-w-xl text-pretty leading-7 text-muted-foreground">
        Candoa is still early. The first public site should show the browser as
        it is: native-feeling, opinionated, and focused on making everyday web
        work feel faster.
      </p>
      <Button
        asChild
        size="lg"
        className="mt-8 h-11 rounded-full px-5"
      >
        <a href={downloadInfo.href} download={downloadInfo.fileName}>
          <ArrowDownToLine className="size-4" />
          Download for macOS
        </a>
      </Button>
      <p className="mt-4 text-sm text-muted-foreground">
        Version {downloadInfo.version}. Open the DMG, drag Candoa into
        Applications, then launch it from Applications.
      </p>
    </section>
  );
}

function Footer({ downloadInfo }: { downloadInfo: DownloadInfo }) {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 pb-10 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
      <p>Candoa</p>
      <div className="flex gap-5">
        <a href="https://x.com/AlexAmancio6" className="hover:text-foreground">
          X
        </a>
        <a href="https://github.com/aamancio/candoa" className="hover:text-foreground">
          GitHub
        </a>
        <a href="#features" className="hover:text-foreground">
          Features
        </a>
        <a
          href={downloadInfo.href}
          download={downloadInfo.fileName}
          className="hover:text-foreground"
        >
          Download
        </a>
      </div>
    </footer>
  );
}
