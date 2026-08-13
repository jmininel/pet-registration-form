import { Controller, Control, FieldErrors } from "react-hook-form";

import { CheckBoxField } from "../../form-ui/checkbox/CheckBoxField";
import { Calendar } from "../../ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

import { petFormType } from "../schema";

interface PetSchedulingProps {
  control: Control<petFormType>;
  errors: FieldErrors<petFormType>;
}

export function PetScheduling({
  control,
  errors,
}: PetSchedulingProps) {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-12 px-6 md:px-10 mt-8 md:mt-14 pb-12">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold text-zinc-800">
          Agendamento
        </h2>

        <div className="h-1 w-16 bg-gradient-to-r from-[#00C8B3] to-[#00a88f] rounded-full" />
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Tipo de Agendamento */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-700">
                Tipo de Agendamento *
              </label>

              <Controller
                name="schedule.scheduleType"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="h-12 w-full text-base rounded-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-50 focus:from-[#f0fffe] focus:to-white focus:border-[#00C8B3] focus:ring-2 focus:ring-[#00C8B3]/20 transition-all duration-200">
                      <SelectValue placeholder="Selecione o tipo de agendamento" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="consultation">
                          🔍 Consulta
                        </SelectItem>

                        <SelectItem value="followUp">
                          📋 Retorno
                        </SelectItem>

                        <SelectItem value="vaccine">
                          💉 Vacina
                        </SelectItem>

                        <SelectItem value="petGrooming">
                          🛁 Banho e Tosa
                        </SelectItem>

                        <SelectItem value="petSurgery">
                          🏥 Cirurgia
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.schedule?.scheduleType && (
                <p className="text-red-500 text-xs font-medium mt-1">
                  ⚠️ {errors.schedule.scheduleType.message}
                </p>
              )}
            </div>

            {/* Calendário */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-zinc-700">
                Data Preferida
              </label>

              <div className="flex items-center justify-center bg-gradient-to-b from-white to-zinc-50 rounded-lg border border-zinc-300 p-6">
                <Controller
                  name="schedule.date"
                  control={control}
                  render={({ field }) => (
                    <Calendar
                      mode="single"
                      selected={field.value ?? undefined}
                      onSelect={field.onChange}
                      className="mx-auto"
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {/* Preferências */}
          <div className="mt-8 space-y-6">
            <div className="bg-white rounded-lg border border-zinc-200 p-4 hover:border-[#00C8B3] transition-colors">
              <Controller
                name="schedule.reminder"
                control={control}
                render={({ field }) => (
                  <CheckBoxField
                    id="reminder"
                    label="Desejo receber lembretes do agendamento por SMS/Email"
                    checked={field.value ?? false}
                    onChange={(value) =>
                      field.onChange(value === true)
                    }
                    error={errors.schedule?.reminder?.message}
                  />
                )}
              />
            </div>

            {/* Política de Privacidade */}
            <div className="bg-white rounded-lg border border-zinc-200 p-4 hover:border-[#00C8B3] transition-colors">
              <Controller
                name="privacyPolicy"
                control={control}
                render={({ field }) => (
                  <CheckBoxField
                    id="privacyPolicy"
                    label="Aceitar política de privacidade e termos de uso"
                    checked={field.value ?? false}
                    onChange={(value) =>
                      field.onChange(value === true)
                    }
                    error={errors.privacyPolicy?.message}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}