import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// Send email
export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const { name, email, message } = payload;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message From ${name}`,

      text: `
Name: ${name}

Email: ${email}

Message:
${message}
      `,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Message From Portfolio</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <div style="
            padding: 15px;
            background: #f4f4f4;
            border-radius: 8px;
            white-space: pre-wrap;
          ">
            ${message}
          </div>
        </div>
      `,

      // When you click Reply in Gmail,
      // the reply will go to the visitor's email.
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}
