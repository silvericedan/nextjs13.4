import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL("http://localhost:3100/api/news"); // Target API URL

  try {
    const response = await fetch(url, req.clone()); // Clone the request

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch news" },
        { status: response.status }
      );
    }

    const newsData = await response.json();
    return NextResponse.json(newsData); // Pass the fetched data
  } catch (error) {
    return NextResponse.json({ error: "Error fetching news" }, { status: 500 });
  }
}
