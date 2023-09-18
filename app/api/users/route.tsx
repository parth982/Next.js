import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// Even though here we don't use request, declaring it to avoid caching.
// If we remove it the GET request will give cached data for next requests.
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Steve" },
    { id: 2, name: "Beast" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
