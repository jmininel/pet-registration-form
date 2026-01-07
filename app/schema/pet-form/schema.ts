import { z } from 'zod'

export const petFormSchema  = z.object({
    name: z.string().min(2, "Nome precisa ter no mínimo 2 caracteres"),
    adress: z.string().min(2, "Endereço incompleto"),
    city: z.string(),
    zipCode: z.number(),
    email: z.email(),
    phone: z.number(),

   

    petName: z.string(),
    petAge: z.number(),

    species: z.union([
      z.literal("dog"),
      z.literal("cat"),
      z.literal("bird"),
      z.literal("other") 
    ],{
         message: "Selecione uma espécie"
    }),

    castrated: z.boolean({
      message: "Informe se o pet é castrado"  
    }),

    observation: z.string(),

    scheduleType: z.union([
        z.literal("consultation"),
        z.literal("followUp"),
        z.literal("vaccine"),
        z.literal("petGrooming"),
        z.literal("petSurgery")
    ]),

      reminder: z.boolean({
        message: "Receber lembrete de agendamentos via WhatsApp."
       }),
      
       privacyPolicy: z.boolean({
        message: "Concordo com a política de privacidade."
       })

})

  export type petFormType = z.infer<typeof petFormSchema >
    
