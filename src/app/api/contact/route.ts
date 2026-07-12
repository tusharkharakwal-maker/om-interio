import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // ──────────────────────────────────────────────────────
    // TODO: Plug in your email service here.
    //
    // Example with Resend:
    //   import { Resend } from 'resend';
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'Designco interior <noreply@abc.com>',
    //     to: ['abc@gmail.com'],
    //     subject: `New enquiry from ${data.name}`,
    //     html: `<p>Name: ${data.name}</p>
    //            <p>Phone: ${data.phone}</p>
    //            <p>Email: ${data.email}</p>
    //            <p>Service: ${data.service}</p>
    //            <p>Message: ${data.message}</p>`,
    //   });
    //
    // Example with Formspree:
    //   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    // ──────────────────────────────────────────────────────

    // For now, log the submission
    console.log("📩 New contact form submission:", data);

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
