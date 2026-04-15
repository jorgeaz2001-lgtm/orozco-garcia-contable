import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Nombre, email y teléfono son obligatorios" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Orozco & Garcia Website <onboarding@resend.dev>",
      to: ["contacto@orozcogarcia.com"],
      subject: "Nuevo lead desde el sitio web",
      replyTo: email,
      html: `
        <h2 style="color:#0f1f3d;">Nuevo mensaje desde orozcogarcia.com</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;"><strong>Nombre:</strong></td><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;">${escapeHtml(
            name
          )}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;"><strong>Email:</strong></td><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;">${escapeHtml(
            email
          )}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;"><strong>Teléfono:</strong></td><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;">${escapeHtml(
            phone
          )}</td></tr>
          <tr><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;"><strong>Servicio de interés:</strong></td><td style="padding:8px 0;border-bottom:1px solid #e2e2e2;">${escapeHtml(
            service || "No especificado"
          )}</td></tr>
          <tr><td style="padding:8px 0;vertical-align:top;"><strong>Mensaje:</strong></td><td style="padding:8px 0;">${escapeHtml(
            message || "Sin mensaje"
          )}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#666;">Enviado automáticamente desde el formulario de contacto del sitio web.</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
