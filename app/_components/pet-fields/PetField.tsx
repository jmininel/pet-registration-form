
import { useForm, UseFormRegister } from "react-hook-form"

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Textarea } from "../ui/textarea";
import { petFormSchema, petFormType } from "@/app/schema/pet-form/schema";
import { InputField } from "../form/input/InputField";
import { SelectField } from "../form/select/SelectField";
import { zodResolver } from "@hookform/resolvers/zod";

interface PetFieldProps {
    register: UseFormRegister<petFormType>
}

export function PetField({ register }: PetFieldProps) {
    const { control } = useForm<petFormType>({
        resolver: zodResolver(petFormSchema)
    })

    return (
        <section className="w-full flex flex-col gap-6 md:gap-10 px-6 md:px-10 mt-8 md:mt-14">
            <h2 className="text-lg md:text-xl font-semibold text-zinc-700">Dados do Pet</h2>

            <div className="flex flex-row flex-wrap items-center justify-center gap-10 mb-8" >
                <Avatar className="overflow-hidden h-36 w-36 rounded-full">
                    <AvatarImage src="./avatar.PNG"  className="h-full w-full object-cover" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>Nome pet</div>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

                <InputField
                    type="text"
                    placeholder="Nome do pet"
                    {...register("petName")}
                />

                <InputField
                    type="text"
                    placeholder="Idade do pet"
                    {...register("petAge")}
                />

                <div className="flex flex-col gap-6">
                    <SelectField.Root <petFormType>
                        name="species"
                        control={control}
                        placeholder="Tipo do pet"
                        className="py-4 px-4  md:w-[500px]"
                    >
                        <SelectField.Item value="dog" label="Cachorro" />
                        <SelectField.Item value="cat" label="Gato" />
                        <SelectField.Item value="bird" label="Pássaro" />
                        <SelectField.Item value="other" label="Outro" />
                    </SelectField.Root>


                    <div className="flex items-center gap-3">
                        <Checkbox className="h-6 w-6 border-2 border-[#00C8B3] data-[state=checked]:bg-[#00C8B3] data-[state=checked]:text-white " />
                        <Label htmlFor="terms">Castrado</Label>
                    </div>
                </div>



            </div>
            <div className="flex items-center justify-center">
                <Textarea className="w-[800px] h-40" placeholder="Observações"></Textarea>
            </div>
        </section>
    )
}