"use client"

import { UseFormRegister, Control, FieldErrors, useWatch } from "react-hook-form"
import { Textarea } from "../../ui/textarea";
import { petFormType } from "@/app/_components/pet-registrration/schema";
import { InputField } from "../../form-ui/input/InputField";
import { SelectField } from "../../form-ui/select/SelectField";
import { Controller } from "react-hook-form";
import { CheckBoxField } from "../../form-ui/checkbox/CheckBoxField";

interface PetFieldProps {
    register: UseFormRegister<petFormType>;
    control: Control<petFormType>;
    errors?: FieldErrors<petFormType>;
}

export function PetField({ register, control, errors }: PetFieldProps) {
    // Observa o valor do nome do pet em tempo real
    const petName = useWatch({
        control,
        name: "pet.petName",
        defaultValue: ""
    });

    return (
        <section className="w-full flex flex-col gap-8 md:gap-12 px-6 md:px-10 mt-8 md:mt-14 pb-12">
            {/* Header com título e nome do pet */}
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Dados do Pet</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#00C8B3] to-[#00a88f] rounded-full"></div>
            </div>

           {/* Grid de campos */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coluna esquerda */}
              <div className="flex flex-col gap-6">
                {/* Nome do Pet */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-700">Nome do Pet *</label>
                  <InputField
                      type="text"
                      placeholder="Digite o nome do seu pet"
                      {...register("pet.petName")}
                      className="h-12 px-4 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200 w-full"
                  />
                  {errors?.pet?.petName && (
                    <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.pet.petName.message}</p>
                  )}
                </div>

                {/* Idade do Pet */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-700">Idade do Pet *</label>
                  <InputField
                      type="text"
                      placeholder="Ex: 3 anos"
                      {...register("pet.petAge")}
                      className="h-12 px-4 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200 w-full"
                  />
                  {errors?.pet?.petAge && (
                    <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.pet.petAge.message}</p>
                  )}
                </div>
                
                {/* Castração */}
                <div className="flex flex-col gap-3 pt-2">
                  <Controller
                    name="pet.castrated"
                    control={control}
                    render={({ field }) => (
                      <CheckBoxField
                        id="castrated"
                        label="Castrado"
                        checked={field.value ?? false}
                        onChange={(value) => field.onChange(value === true)}
                      />
                    )}
                  />
                  {errors?.pet?.castrated && (
                    <p className="text-red-500 text-xs font-medium">⚠️ {errors.pet.castrated.message}</p>
                  )}
                </div>
              </div>

              {/* Coluna direita */}
              <div className="flex flex-col gap-6">
                {/* Espécie do Pet */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-zinc-700">Tipo do Pet *</label>
                  <SelectField.Root<petFormType>
                      name="pet.species"
                      control={control}
                      placeholder="Selecione o tipo do pet"
                      className="h-12 px-4 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200">
                      <SelectField.Item value="dog" label="🐕 Cachorro" />
                      <SelectField.Item value="cat" label="🐱 Gato" />
                      <SelectField.Item value="bird" label="🐦 Pássaro" />
                      <SelectField.Item value="other" label="🐾 Outro" />
                  </SelectField.Root>
                  {errors?.pet?.species && (
                    <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.pet.species.message}</p>
                  )}
                </div>

                {/* Espaço vazio para balancear layout */}
                <div className="flex-1"></div>
              </div>
            </div>

            {/* Observações */}
            <div className="w-full flex flex-col gap-2">
                <label className="text-sm font-semibold text-zinc-700">Observações (Opcional)</label>
                <Textarea 
                  className="w-full min-h-32 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200 p-4 resize-none" 
                  placeholder="Digite observações adicionais sobre o seu pet..."
                  {...register("pet.observation")}
                />
                {errors?.pet?.observation && (
                  <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.pet.observation.message}</p>
                )}
            </div>
        </section>
    )
}