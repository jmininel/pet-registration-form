"use client"

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Header } from "./_components/pet-registrration/header/Header";
import { PetOwner } from "./_components/pet-registrration/pet-owner-fields/PetOwner";
import { PetField } from "./_components/pet-registrration/pet-fields/PetField";
import { PetScheduling } from "./_components/pet-registrration/pet-scheduling/PetScheduling";
import { petFormSchema, petFormType } from "./_components/pet-registrration/schema";

import { saveFormData, getFormData, clearFormData } from "./_lib/localStorageManager";
import { extractFormErrors, getFieldLabel, hasErrors, countErrors } from "./_lib/errorManager";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./_components/ui/dialog";


export default function Home() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    clearErrors,

    formState: { errors, isDirty },
  } = useForm<petFormType>({
    resolver: zodResolver(petFormSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      owner: {
        name: "",
        adress: "",
        city: "",
        zipCode: "",
        email: "",
        phone: "",
      },
      pet: {
        petName: "",
        petAge: "",
        species: undefined,
        castrated: false,
        observation: "",
      },
      schedule: {
        scheduleType: undefined,
        date: undefined,
        reminder: false,
      },
      privacyPolicy: false,
    },
  });

  const formValues = watch();

  // Carrega os dados salvos
  useEffect(() => {
    const savedData = getFormData();

    if (savedData) {
      reset(savedData);
    }
  }, [reset]);

  // Autosave
  useEffect(() => {
  const timeout = setTimeout(() => {
    saveFormData(formValues);
  }, 500);

  return () => clearTimeout(timeout);
}, [formValues]);

  const handleSubmitPet = (data: petFormType) => {
    console.log("✅ Formulário enviado:", data);
    reset(undefined);
    clearErrors();
    clearFormData();

    setShowSuccessMessage(true);
  }

  return (
    <div className="bg-gradient-to-br from-[#0b9280] to-[#095146] min-h-screen flex justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl md:max-w-6xl shadow-2xl flex flex-col gap-6 md:gap-8 my-6 md:my-12 overflow-hidden">
        <Header />

        {hasErrors(errors) && (
          <div className="bg-red-50 border-l-4 border-red-500 mx-6 md:mx-10 mt-6 rounded-lg p-6">
            <div className="mb-4">
              <p className="font-bold text-red-800 text-lg">
                ⚠️ Erros de validação
              </p>

              <p className="text-sm text-red-700 mt-1">
                Total de {countErrors(errors)} erro(s). Por favor, corrija-os antes de enviar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {extractFormErrors(errors).map((error, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded border border-red-200 hover:border-red-300 transition">
                  <p className="font-semibold text-red-800 text-sm">
                    {getFieldLabel(error.field)}
                  </p>

                  <p className="text-xs text-red-700 mt-1">
                    → {error.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <form
          onSubmit={handleSubmit(handleSubmitPet)}
          className="flex flex-col gap-6 md:gap-8">
          <PetOwner
            register={register}
            errors={errors}
          />

          <PetField
            register={register}
            control={control}
            errors={errors}
          />

          <PetScheduling
            control={control}
            errors={errors}
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-6 md:px-10 mb-8">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-[#00C8B3] to-[#00a88f] text-white font-bold px-12 py-4 rounded-xl hover:shadow-lg hover:from-[#00b39d] hover:to-[#009580] transition-all duration-200 transform hover:scale-105"
            >
              ✓ Enviar Formulário
            </button>
          </div>
        </form>

        <Dialog open={showSuccessMessage} onOpenChange={setShowSuccessMessage}>
          <DialogContent className="sm:max-w-md rounded-2xl">
            <DialogHeader className="items-center text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-5xl mb-4">
                🐾
              </div>

              <DialogTitle className="text-3xl font-bold text-[#00b39d]">
                Cadastro realizado!
              </DialogTitle>

              <DialogDescription className="text-base mt-2">
                Os dados do pet foram enviados com sucesso.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="sm:justify-center mt-4">
              <button
                type="button"
                onClick={() => setShowSuccessMessage(false)}
                className="bg-[#00C8B3] hover:bg-[#00b39d] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
              >
                OK
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

