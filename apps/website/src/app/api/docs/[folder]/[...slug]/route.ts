import type { NextRequest } from "next/server";

import { getDocument } from "@/utils/docs";
import { NextResponse } from "next/server";

interface ApiDocsPageProps {
  params: Promise<{ folder: string; slug: string[] }>;
}

export async function GET(request: NextRequest, { params }: ApiDocsPageProps) {
  const { folder, slug } = await params;
  const document = slug.join("/");
  const data = getDocument({
    folder,
    document,
  });

  if (!data) {
    return new NextResponse("Document not found", { status: 404 });
  }

  return new NextResponse(data.content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
