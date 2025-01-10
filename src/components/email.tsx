import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Você tem uma nova mensagem!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Você recebeu o e-mail de <strong>{name}</strong>. O e-mail é{" "}
              {email}. Mensagem: <br />
              {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};