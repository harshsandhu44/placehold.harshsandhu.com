import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { PlaceholderImage } from "@/components/placeholder-image";
import { clampInt } from "@/lib/utils";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  // NextRequest supports query params via request.nextUrl.searchParams. [web:15]
  const params = req.nextUrl.searchParams;

  const width = clampInt(Number(params.get("w") ?? "600"), 16, 2000);
  const height = clampInt(Number(params.get("h") ?? "400"), 16, 2000);

  const bg = params.get("bg") ?? "#f3f4f6";
  const fg = params.get("fg") ?? "#9ca3af";

  const bgColor = bg.startsWith("#") ? bg : `#${bg}`;
  const fgColor = fg.startsWith("#") ? fg : `#${fg}`;

  return new ImageResponse(
    <PlaceholderImage
      width={width}
      height={height}
      bg={bgColor}
      fg={fgColor}
    />,
    {
      width,
      height,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    },
  );
}
