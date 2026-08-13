import { z } from 'zod'

export const petFormSchema = z.object({
  owner: z.object({
    name: z
      .string()
      .min(2, "Nome precisa ter no mínimo 2 caracteres"),

    adress: z
      .string()
      .min(5, "Endereço incompleto"),

    city: z
      .string()
      .min(5, "O endereço é obrigatório"),

    zipCode: z
      .string()
      .regex(/^\d{5}-\d{3}$/, "CEP inválido"),

    email: z
      .email({ message: "Email inválido" }),

    phone: z
      .string()
      .min(10, "Telefone inválido"),
  }),


  pet: z.object({
    petName: z
      .string()
      .min(2, "Nome do pet é obrigatótio"),

    petAge: z
      .string()
      .min(1, "Idade do pet é obrigatória"),

    species: z
      .enum(["dog", "cat", "bird", "other"])
      .optional()
      .refine((value) => value !== undefined, {
        message: "Selecione uma espécie",
      }),

    castrated: z.boolean(),

    observation: z
      .string()
      .optional(),
  }),

  schedule: z.object({
    scheduleType: z.enum(["consultation", "followUp", "vaccine", "petGrooming", "petSurgery"], {
      message: "Selecione o tipo de agendamento"
    }),

    date: z.date({
      message: "Selecione uma data",
    }),

    reminder: z
      .boolean(),
  }),

  privacyPolicy: z.boolean().refine((value) => value, {
    message: "É necessário aceitar a política de privacidade",
  }),

})

export type petFormType = z.infer<typeof petFormSchema>

