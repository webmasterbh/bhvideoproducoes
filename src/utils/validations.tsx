import {z} from "zod" 

export const validationsSchema = z.object({
    name: z.string({
     required_error: "insira seu nome.",
    }),
    email: z
     .string({
       required_error: "Insira seu Email.",
    })
    .email(),
    message: z.string({
        required_error: "Insira sua menssagem.",
    }),
});