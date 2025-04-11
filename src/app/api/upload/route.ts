import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // This functionality has been temporarily disabled
  return NextResponse.json(
    {
      success: false,
      error: "Picture upload functionality has been temporarily disabled",
    },
    { status: 403 }
  );
}
