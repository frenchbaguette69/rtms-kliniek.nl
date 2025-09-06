import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const {
      service,
      location,
      preferredDate,
      preferredTime,
      name,
      email,
      phone,
      birthDate,
      address,
      postalCode,
      city,
      message,
      honeypot,
    } = await req.json()

    if (honeypot) {
      return NextResponse.json({ success: false, error: "Spam detected" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.com",
      port: 465, // of 587 als je liever TLS gebruikt
      secure: true, // true voor 465, false voor 587
      auth: {
        user: process.env.SMTP_USER, // bv. info@jouwdomein.nl
        pass: process.env.SMTP_PASS, // mailbox wachtwoord
      },
    })

    const emailText = `
Nieuwe afspraak aanvraag

Service: ${service}
Locatie: ${location}
Gewenste datum: ${preferredDate}
Gewenste tijd: ${preferredTime}

Persoonlijke gegevens:
Naam: ${name}
Email: ${email}
Telefoon: ${phone}
Geboortedatum: ${birthDate}
Adres: ${address}
Postcode: ${postalCode}
Plaats: ${city}

${message ? `Bericht: ${message}` : ""}
    `.trim()

    const emailHtml = `
      <h2>Nieuwe afspraak aanvraag</h2>
      
      <h3>Service informatie</h3>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Locatie:</strong> ${location}</p>
      <p><strong>Gewenste datum:</strong> ${preferredDate}</p>
      <p><strong>Gewenste tijd:</strong> ${preferredTime}</p>
      
      <h3>Persoonlijke gegevens</h3>
      <p><strong>Naam:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Telefoon:</strong> ${phone}</p>
      <p><strong>Geboortedatum:</strong> ${birthDate}</p>
      <p><strong>Adres:</strong> ${address}</p>
      <p><strong>Postcode:</strong> ${postalCode}</p>
      <p><strong>Plaats:</strong> ${city}</p>
      
      ${message ? `<h3>Bericht</h3><p>${message}</p>` : ""}
    `

    await transporter.sendMail({
      from: `"Website afspraak" <${process.env.SMTP_USER}>`,
      to: "marcowammes@outlook.com",
      subject: "Nieuwe afspraak aanvraag",
      text: emailText,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
