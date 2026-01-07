"use client"

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Header } from "./_components/header/Header";
import { PetOwner } from "./_components/pet-owner-fields/PetOwner";
import { PetField } from "./_components/pet-fields/PetField";
import { PetScheduling } from "./_components/pet-scheduling/PetScheduling";
import { petFormSchema, petFormType } from "./schema/pet-form/schema";

export default function Home() {
   const { register, handleSubmit } = useForm<petFormType>({
    resolver: zodResolver(petFormSchema)
  })

  const handleSubmitPet = (data: petFormType) => {
    return console.log(data)
  }
 
  return (
    <div className="bg-[#0b9280] min-h-screen flex justify-center p-1" >
      <div className="bg-[#F4F6F8] rounded-2xl w-full max-w-2xl md:max-w-6xl shadow-lg flex flex-col gap-9 mt-9">
        <Header />
        <form onSubmit={handleSubmit(handleSubmitPet)}>
          <PetOwner register={register} />
           <PetField register={register}/>
           <PetScheduling />
            <button
            type="submit"
            className=" bg-[#00C8B3] text-zinc-900 font-semibold px-6 py-3 rounded-xl ml-10 mt-6">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
