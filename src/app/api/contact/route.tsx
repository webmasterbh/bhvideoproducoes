import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { transporter, smtpEmail } from "@/utils/nodemailer";
import { Email } from "@/components/email";

export async function POST(req: NextRequest) {
  try {
    // Parse o corpo da requisição
    const body = await req.json();
    const { name, email, message } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos os campos (name, email, message) são obrigatórios." },
        { status: 400 }
      );
    }

    // Renderiza o conteúdo do e-mail
    const emailHtml = render(
      <Email name={name} email={email} message={message} />
    );

    // Configurações do e-mail
    const options = {
      from: smtpEmail,
      to: smtpEmail,
      subject: "Novo email recebido",
      html: emailHtml,
    };

    // Envia o e-mail
    await transporter.sendMail(options);

    // Retorna uma resposta de sucesso
    return NextResponse.json(
      { message: "E-mail enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);

    // Retorna uma resposta de erro
    return NextResponse.json(
      { error: "Ocorreu um erro ao enviar o e-mail." },
      { status: 500 }
    );
  }
}
