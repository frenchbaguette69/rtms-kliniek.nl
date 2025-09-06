import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // haal exact de keys op die je client verstuurt
    const {
      service,
      location,
      preferredDate,
      preferredTime,
      firstName,
      infix,
      lastName,
      email,
      phone,
      dob,
      postcode,
      city,
      message,
      consent,
    } = data || {};

    // server-side minimale validatie
    const missing = [];
    if (!service) missing.push("service");
    if (!location) missing.push("location");
    if (!preferredDate) missing.push("preferredDate");
    if (!firstName) missing.push("firstName");
    if (!lastName) missing.push("lastName");
    if (!email) missing.push("email");
    if (!phone) missing.push("phone");
    if (!dob) missing.push("dob");
    if (!postcode) missing.push("postcode");
    if (!city) missing.push("city");
    if (!consent) missing.push("consent");

    if (missing.length) {
      return NextResponse.json(
        { success: false, message: `Ontbrekende velden: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const fullName = [firstName, infix, lastName].filter(Boolean).join(" ");
    const niceDate = preferredDate || "-";
    const niceTime = preferredTime || "-";

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.com",
      port: 465,        // gebruik 587 + secure:false als je TLS/startTLS wilt
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const text = `
Nieuwe afspraak aanvraag

Service: ${service}
Locatie: ${location}
Gewenste datum: ${niceDate}
Gewenste tijd: ${niceTime}

Persoonlijke gegevens:
Naam: ${fullName}
Email: ${email}
Telefoon: ${phone}
Geboortedatum: ${dob}
Postcode: ${postcode}
Plaats: ${city}

${message ? `Opmerking:\n${message}` : ""}
`.trim();

    const html = `
<h2>Nieuwe afspraak aanvraag</h2>

<h3>Service informatie</h3>
<p><strong>Service:</strong> ${service}</p>
<p><strong>Locatie:</strong> ${location}</p>
<p><strong>Gewenste datum:</strong> ${niceDate}</p>
<p><strong>Gewenste tijd:</strong> ${niceTime}</p>

<h3>Persoonlijke gegevens</h3>
<p><strong>Naam:</strong> ${fullName}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Telefoon:</strong> ${phone}</p>
<p><strong>Geboortedatum:</strong> ${dob}</p>
<p><strong>Postcode:</strong> ${postcode}</p>
<p><strong>Plaats:</strong> ${city}</p>
${message ? `<h3>Opmerking</h3><p>${String(message).replace(/\n/g, "<br/>")}</p>` : ""}
`.trim();

    await transporter.sendMail({
      from: `"Website afspraak" <${process.env.SMTP_USER!}>`,
      to: process.env.MAIL_TO || "marcowammes@outlook.com",
      replyTo: email,
      subject: `Nieuwe afspraakaanvraag – ${fullName}`,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("APPOINTMENT_MAIL_ERROR", error);
    return NextResponse.json({ success: false, message: "Versturen mislukt." }, { status: 500 });
  }
}
