// app/api/send/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // 1. Email to you (the site owner) - This is fine
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'abhijeetkadam656@gmail.com',
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `<p>You have a new message from your contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    // 2. Confirmation email to the user
    await resend.emails.send({
      // --- FIX IS HERE ---
      // Replace with your verified domain. For example, if your domain is my-app.com,
      // you could use "noreply@my-app.com" or "contact@my-app.com".
      from: 'abhijeet.portfolio.com', 
      to: email, // The user's email address
      subject: 'Thank You for Contacting Us!',
      html: `<h1>Hey ${name},</h1>
             <p>Thanks for reaching out! We've received your message and will get back to you as soon as possible.</p>
             <p>In the meantime, feel free to browse our site.</p>
             <p>Best,</p>
             <p>Abhijeet</p>`, // It's nice to sign off with your name
    });

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error sending emails.' }, { status: 500 });
  }
}