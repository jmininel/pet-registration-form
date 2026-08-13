import { petFormType } from "../_components/pet-registrration/schema";

const STORAGE_KEY = "pet-registration-form";

export const saveFormData = (data: petFormType) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getFormData = (): petFormType | null => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  return JSON.parse(data);
};

export const clearFormData = () => {
  localStorage.removeItem(STORAGE_KEY);
};