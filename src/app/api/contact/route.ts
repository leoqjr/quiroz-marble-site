import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, city, projectType, timeline, message } =
      body || {};

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 },
      );
    }

    // For now, just log the data on the server.
    console.log("New contact submission:", {
      name,
      email,
      phone,
      city,
      projectType,
      timeline,
      message,
    });

    // TODO: send an email here using Resend or another provider.

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
