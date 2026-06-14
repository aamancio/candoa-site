import { readFileSync } from "node:fs";
import { join } from "node:path";

type DownloadManifest = {
  version?: string;
  fileName?: string;
  downloadURL?: string;
  archiveURL?: string;
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
  const href =
    normalizeDownloadHref(manifest?.archiveURL) ||
    normalizeDownloadHref(manifest?.downloadURL) ||
    `/downloads/Candoa-${version}.dmg`;

  return {
    href,
    version,
    fileName,
  };
}

function normalizeDownloadHref(value: string | undefined): string | undefined {
  const href = value?.trim();

  if (!href) {
    return undefined;
  }

  try {
    const url = new URL(href);

    if (url.hostname === "candoa.app" || url.hostname === "www.candoa.app") {
      return url.pathname;
    }
  } catch {
    return href;
  }

  return href;
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
