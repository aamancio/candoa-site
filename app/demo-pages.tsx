import { ArrowLeft, Check, CircleDot, Clock3 } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type DemoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  items: Array<{
    title: string;
    body: string;
  }>;
  timeline: Array<string>;
};

export function DemoPage({
  eyebrow,
  title,
  description,
  accent,
  items,
  timeline,
}: DemoPageProps) {
  return (
    <main className="min-h-screen bg-background px-6 py-8 text-foreground">
      <div className="mx-auto max-w-5xl">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="mb-10 rounded-full text-muted-foreground"
        >
          <Link href="/">
            <ArrowLeft className="size-4" />
            Candoa
          </Link>
        </Button>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge
              variant="outline"
              className="mb-6 border-border bg-card text-foreground"
            >
              <CircleDot className="size-3" style={{ color: accent }} />
              {eyebrow}
            </Badge>
            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.95] tracking-normal sm:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-medium">Today</h2>
              <Clock3 className="size-4 text-candoa-accent" />
            </div>
            <div className="space-y-3">
              {timeline.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </section>

        <Separator className="my-12" />

        <section className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border bg-card p-5"
            >
              <Check className="mb-5 size-5" style={{ color: accent }} />
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
