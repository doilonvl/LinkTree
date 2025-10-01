import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const fontBold = await readFile(
    join(process.cwd(), "src/fonts/Caladea/Caladea-Bold.ttf")
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "#0b8518",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 50,
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <img
            alt={"avatar"}
            src={"https://github.com/shadcn.png"}
            style={{ width: 300, height: 300, borderRadius: "50%" }}
          />
          <h2 style={{ fontSize: 80, margin: 0, padding: 0 }}>
            Doilonvl Web Dev
          </h2>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Caladea",
          data: fontBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
