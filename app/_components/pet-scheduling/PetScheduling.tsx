
import { CheckBoxField } from "../form/checkbox/CheckBoxField";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function PetScheduling() {
  return (
    <section className="w-full flex flex-col gap-8 md:gap-12 px-6 md:px-10 mt-12">
      <h2 className="text-lg md:text-xl font-semibold text-zinc-700">
        Agendamento
      </h2>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Grid principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-6">

            {/* Coluna esquerda */}
            <div className="flex flex-col gap-6">
              <h3 className="text-base font-medium text-zinc-600">
                Tipo de agendamento
              </h3>

              <Select>
                <SelectTrigger className="h-12 w-full md:max-w-[500px]">
                  <SelectValue placeholder="Selecione o tipo de agendamento" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="consulta">Consulta</SelectItem>
                    <SelectItem value="retorno">Retorno</SelectItem>
                    <SelectItem value="vacina">Vacina</SelectItem>
                    <SelectItem value="banho_tosa">Banho e tosa</SelectItem>
                    <SelectItem value="cirurgia">Cirurgia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <CheckBoxField id="castrado">
                Castrado
              </CheckBoxField>
            </div>

            {/* Coluna direita */}
          <div className="flex justify-center">
 <div className="w-full max-w-[320px] h-[360px] flex items-center justify-center">
    <Calendar className="mx-auto" />
  </div>
</div>
          </div>

          {/* Ações */}
          <div className="mt-12 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox
                id="terms"
                className="h-5 w-5 border-2 border-[#00C8B3] data-[state=checked]:bg-[#00C8B3] data-[state=checked]:text-white" />
              <Label
                htmlFor="terms"
                className="text-sm md:text-base text-zinc-600">
                Aceitar política de privacidade
              </Label>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}