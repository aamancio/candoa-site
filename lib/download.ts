import { readFileSync } from "node:fs";
import { join } from "node:path";

type DownloadManifest = {
  version?: string;
  fileName?: string;
};

export type DownloadInfo = {
  href: string;
  version: string;
  fileName: string;
};

const fallbackVersion = "0.1.0";

export function getDownloadInfo(): DownloadInfo {
  const manifest = readDownloadManifest();
  const version = manifest?.version?.trim() || fallbackVersion;
  const fileName = manifest?.fileName?.trim() || `Candoa ${version}.dmg`;

  return {
    href: "/downloads/Candoa.dmg",
    version,
    fileName,
  };
}

function readDownloadManifest(): DownloadManifest | undefined {
  try {
    const manifestPath = join(
      process.cwd(),
      "public",
      "downloads",
      "latest.json",
    );
    return JSON.parse(readFileSync(manifestPath, "utf8")) as DownloadManifest;
  } catch {
    return undefined;
  }
}
