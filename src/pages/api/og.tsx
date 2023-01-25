import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);

        const hasTitle = searchParams.has("title");
        const title = hasTitle
            ? searchParams.get("title")?.slice(0, 100)
            : "nula";

        const hasPath = searchParams.has("path");
        const path = hasPath ? searchParams.get("path")?.slice(0, 100) : "";

        const fontData = await fetch(
            new URL("../../../public/Inter-Bold.ttf", import.meta.url)
        ).then((res) => res.arrayBuffer());

        return new ImageResponse(
            (
                <div
                    style={{
                        fontFamily: '"Inter"',
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "40px",
                        backgroundColor: "#fff",
                        letterSpacing: "-0.1em",
                    }}
                >
                    <div
                        style={{
                            width: "auto",
                            fontSize: 160,
                            padding: "10px 0",
                            lineHeight: 1.0,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            width: "auto",
                            fontSize: 30,
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "700",
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                            />
                        </svg>
                        <span
                            style={{
                                padding: "0 10px",
                                letterSpacing: "-0.025em",
                            }}
                        >
                            {`github.com/ekqt/nula${path}`}
                        </span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: "Inter",
                        data: fontData,
                        style: "normal",
                    },
                ],
            }
        );
    } catch (error) {
        return new Response(`Failed to generate the image`, {
            status: 500,
        });
    }
}
