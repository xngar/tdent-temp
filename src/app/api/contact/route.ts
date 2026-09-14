import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Error: La variable de entorno RESEND_API_KEY no está configurada.");
    return NextResponse.json(
      { error: "Configuración del servidor incompleta. Verifica la variable RESEND_API_KEY." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    // Usar el remitente configurado en variables de entorno o el dominio de prueba por defecto
    const fromEmail = process.env.RESEND_FROM_EMAIL || "T-DENT Contacto <onboarding@resend.dev>";
    // Destinatario configurable
    const toEmail = process.env.CONTACT_TO_EMAIL || "clinicadentaltdent@gmail.com";

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `T-DENT Consulta: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 12px;">
          <div style="background-color: #2563eb; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">T-DENT</h1>
            <p style="color: #bfdbfe; margin: 8px 0 0; font-size: 14px;">Nuevo mensaje desde el formulario de contacto</p>
          </div>
          <div style="background-color: white; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
            <h2 style="color: #1e293b; font-size: 18px; margin-top: 0;">Detalles del contacto</h2>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Nombre</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 15px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 15px;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 120px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Teléfono</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none; font-size: 15px;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; vertical-align: top;">Mensaje</td>
                <td style="padding: 12px 0; color: #1e293b; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb;">
              <p style="margin: 0; color: #64748b; font-size: 13px;">Este mensaje fue enviado desde el formulario de contacto del sitio web de T-DENT.</p>
            </div>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 12px; margin-top: 16px;">© ${new Date().getFullYear()} T-DENT · Av. Ossa 235 of 835, La Reina, Santiago, Chile</p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { 
          error: error.message || "Error al enviar el mensaje. Inténtalo de nuevo.",
          details: error
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Error interno del servidor.";
    console.error("Server error:", err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
