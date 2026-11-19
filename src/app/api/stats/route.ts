import { NextResponse } from "next/server";
import { getDynamicStats } from "@/lib/api/football-api";

export async function GET() {
  try {
    const stats = await getDynamicStats();
    return NextResponse.json(stats, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=43200, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("API /api/stats failed:", error);
    return NextResponse.json(
      { error: "Failed to fetch dynamic stats" },
      { status: 500 }
    );
  }
}
