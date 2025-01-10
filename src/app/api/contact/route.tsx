import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { transporter, smtpEmail } from "@/utils/nodemailer";
import { Email } from "@/components/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validação simples (substituir por uma validação mais robusta, se necessário)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios." },
        { status: 400 }
      );
    }

    const emailHtml = render(
      <Email name={name} email={email} message={message} />
    );

    const options = {
      from: smtpEmail,
      to: smtpEmail,
      subject: "Novo email",
      html: emailHtml,
    };

    // Envio do e-mail
    await transporter.sendMail(options);

    return NextResponse.json({ message: "E-mail enviado com sucesso." }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { error: "Falha ao enviar o e-mail." },
      { status: 500 }
    );
  }
}
