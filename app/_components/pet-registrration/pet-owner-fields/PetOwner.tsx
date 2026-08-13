
import { UseFormRegister, FieldErrors } from "react-hook-form"
import { InputField } from "../../form-ui/input/InputField"
import { petFormType } from "@/app/_components/pet-registrration/schema"


interface PetOwnerProps {
  register: UseFormRegister<petFormType>
  errors?: FieldErrors<petFormType>
}

export function PetOwner({ register, errors }: PetOwnerProps) {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-12 px-6 md:px-10 mt-8 md:mt-14">
      {/* Header com título */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">Dados do Tutor</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-[#00C8B3] to-[#00a88f] rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome completo */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700">Nome Completo *</label>
          <InputField
            type="text"
            placeholder="Digite seu nome completo"
            {...register("owner.name")}
            className="h-12 px-4 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200 w-full"
          />
          {errors?.owner?.name && (
            <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.owner.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700">Email *</label>
          <InputField
            type="email"
            placeholder="seu.email@exemplo.com"
            {...register("owner.email")}
            className="h-12 px-4 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200 w-full"
          />
          {errors?.owner?.email && (
            <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.owner.email.message}</p>
          )}
        </div>

        {/* Telefone */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700">Telefone *</label>
          <InputField
            type="tel"
            placeholder="(11) 99999-9999"
            {...register("owner.phone")}
            onChange={(e) => {
              e.target.value = e.target.value
                .replace(/\D/g, "")
                .replace(/^(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2")
                .slice(0, 15)
            }}
            className="h-12 px-4 text-base rounded-lg border border-zinc-300"
          />
          {errors?.owner?.phone && (
            <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.owner.phone.message} </p>
          )}
        </div>

        {/* CEP */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700">CEP *</label>
          <InputField
            type="text"
            placeholder="12345-678"
            {...register("owner.zipCode")}
            onChange={(e) => {
              e.target.value = e.target.value
                .replace(/\D/g, "")
                .replace(/^(\d{5})(\d)/, "$1-$2")
                .slice(0, 9)
            }}
            className="h-12 px-4 text-base rounded-lg border border-zinc-300" />
                {errors?.owner?.zipCode && (
            <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.owner.zipCode.message} </p>
          )}
        </div>

        {/* Endereço */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700">Endereço * </label>
          <InputField
            type="text"
            placeholder="Rua, número e complemento"
            {...register("owner.adress")}
            className="h-12 px-4 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200 w-full" />
             {errors?.owner?.adress && (
            <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.owner.adress.message} </p>
          )}
        </div>

        {/* Cidade */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-zinc-700">Cidade * </label>
          <InputField
            type="text"
            placeholder="Sua cidade"
            {...register("owner.city")}
            className="h-12 px-4 text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200 w-full" />
              {errors?.owner?.city && (
            <p className="text-red-500 text-xs font-medium mt-1">⚠️ {errors.owner.city.message} </p>
          )}
        </div>
      </div>
    </section>
  )
}