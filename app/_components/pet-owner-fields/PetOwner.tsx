
import { UseFormRegister } from "react-hook-form"
import { InputField } from "../form/input/InputField"
import { petFormType } from "@/app/schema/pet-form/schema"


interface PetOwnerProps {
  register: UseFormRegister<petFormType>
}


export function PetOwner({ register }: PetOwnerProps) {
  return (
    <section className="w-full flex flex-col gap-6 md:gap-10 px-6 md:px-10">
      <h2 className="text-lg md:text-xl font-semibold text-zinc-700">Dados do Tutor</h2>
    
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          type="text"
          placeholder="Nome completo"
         {...register("name")}
        />

        <InputField
          type="text"
           placeholder="Endereço"
          {...register("adress")}
        />

        <InputField
          type="text"
          placeholder="Cidade"
          {...register("city")}

        />

        <InputField
          type="text"
          placeholder="Cep"
          {...register("zipCode")}
        />

         <InputField
          type="text"
          placeholder="Telefone (XX) - XXXX-XXX"
          {...register("phone")}
        />


        <InputField
          type="text"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
      </div>
    </section>
  )
}