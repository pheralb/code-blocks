import path from "path";
import fs from "fs/promises";

import { ImageResponse } from "next/og";
import { getDocument } from "@/utils/docs";

// Template
import DocumentOgImage from "@/components/docs/doc-og-image";

// Settings
const cacheTime = 60 * 60 * 24;
const isDevMode = process.env.NODE_ENV === "development";
const cacheControl = `public, no-transform, max-age=${cacheTime}, immutable`;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("folder");
  const document = searchParams.get("document");

  if (!document || !folder) {
    return new Response(
      `|- api/og - Missing folder or document parameter. Folder: ${folder}, Document: ${document}.`,
      { status: 400 },
    );
  }

  const docData = getDocument({
    folder: folder,
    document: document,
  });

  if (!docData) {
    return new Response(`|- api/og - ${document} document not found.`, {
      status: 404,
    });
  }

  return new ImageResponse(
    <DocumentOgImage title={docData.title} description={docData.description} />,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          style: "normal",
          data: await fs.readFile(
            path.join(process.cwd(), "src/styles/fonts/Geist-Regular.ttf"),
          ),
        },
        {
          name: "Onest",
          style: "normal",
          data: await fs.readFile(
            path.join(process.cwd(), "src/styles/fonts/Onest-SemiBold.ttf"),
          ),
        },
      ],
      headers: {
        "Cache-Control": isDevMode ? "no-cache" : cacheControl,
      },
    },
  );
}
