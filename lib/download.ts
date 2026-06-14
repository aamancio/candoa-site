import manifest from "@/public/downloads/latest.json";

type DownloadManifest = {
  version?: string;
  fileName?: string;
  downloadURL?: string;
  archiveURL?: string;
  stableDownloadURL?: string;
};

export type DownloadInfo = {
  href: string;
  version: string;
  fileName: string;
};

const fallbackVersion = "0.1.0";

export function getDownloadInfo(): DownloadInfo {
  const downloadManifest = manifest as DownloadManifest;
  const version = downloadManifest.version?.trim() || fallbackVersion;
  const fileName = downloadManifest.fileName?.trim() || `Candoa ${version}.dmg`;
  const href =
    normalizeDownloadHref(downloadManifest.stableDownloadURL) ||
    "/downloads/Candoa.dmg";

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
