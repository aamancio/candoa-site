import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.candoa.app"),
  title: {
    default: "Candoa | Mac Browser Workspace",
    template: "%s | Candoa",
  },
  description:
    "Candoa is a WebKit-native Mac browser workspace with spaces, vertical tabs, and keyboard-first navigation designed to feel lighter on battery and easier to work from all day.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Candoa",
    title: "Candoa | Mac Browser Workspace",
    description:
      "A WebKit-native browser workspace for macOS with spaces, vertical tabs, and keyboard-first navigation.",
    images: [
      {
        url: "/images/candoa-normal-tabs.png",
        width: 5120,
        height: 2820,
        alt: "Candoa browser workspace showing a Mac-native browsing layout with vertical tabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candoa | Mac Browser Workspace",
    description:
      "A WebKit-native browser workspace for macOS with spaces, vertical tabs, and keyboard-first navigation.",
    images: ["/images/candoa-normal-tabs.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className="flex min-h-full flex-col bg-background">
        {children}
      </body>
    </html>
  );
}
