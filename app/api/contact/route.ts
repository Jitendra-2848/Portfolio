import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please enter your name." },
        { status: 400 }
      );
    }

    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 3) {
      return NextResponse.json(
        { success: false, message: "Please write a message with at least 3 characters." },
        { status: 400 }
      );
    }

    // 2. Retrieve Telegram Bot Credentials
    const botToken = process.env.TOKEN || process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.ID || process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials missing in environment variables.");
      return NextResponse.json(
        {
          success: false,
          message: "Message dispatch service is temporarily unavailable. Please email directly.",
        },
        { status: 500 }
      );
    }

    // 3. Format message for Telegram
    const nowIST = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const text = [
      `<b>NEW PORTFOLIO INQUIRY</b>`,
      ``,
      `<b>Sender:</b> ${escapeHtml(name.trim())}`,
      `<b>Email:</b> <code>${escapeHtml(email.trim())}</code>`,
      ``,
      `<b>Message:</b>`,
      `${escapeHtml(message.trim())}`,
      ``,
      `<i>${nowIST} (IST)</i>`,
    ].join("\n");

    // 4. Send to Telegram Bot API
    const tgUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const tgResponse = await fetch(tgUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
      signal: AbortSignal.timeout(8000),
    });

    const tgData = await tgResponse.json();

    if (!tgResponse.ok || !tgData.ok) {
      console.error("Telegram API Error:", tgData);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to dispatch note. Please try again or reach out via direct email.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Note dispatched successfully!",
    });
  } catch (error: any) {
    console.error("Contact API exception:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your note.",
      },
      { status: 500 }
    );
  }
}
