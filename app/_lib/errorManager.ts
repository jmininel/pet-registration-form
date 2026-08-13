import { FieldError, FieldValues } from 'react-hook-form';

export interface FormError {
  field: string;
  message: string | undefined;
  section: 'owner' | 'pet' | 'schedule' | 'privacyPolicy';
}

/**
 * Extrai todos os erros do formulário e organiza por seção
 */
export const extractFormErrors = (errors: any): FormError[] => {
  const errorsList: FormError[] = [];

  // Erros do proprietário
  if (errors.owner) {
    Object.entries(errors.owner).forEach(([field, error]: [string, any]) => {
      errorsList.push({
        field,
        message: error?.message,
        section: 'owner',
      });
    });
  }

  // Erros do pet
  if (errors.pet) {
    Object.entries(errors.pet).forEach(([field, error]: [string, any]) => {
      errorsList.push({
        field,
        message: error?.message,
        section: 'pet',
      });
    });
  }

  // Erros do agendamento
  if (errors.schedule) {
    Object.entries(errors.schedule).forEach(([field, error]: [string, any]) => {
      errorsList.push({
        field,
        message: error?.message,
        section: 'schedule',
      });
    });
  }

  // Erro da política de privacidade
  if (errors.privacyPolicy) {
    errorsList.push({
      field: 'privacyPolicy',
      message: errors.privacyPolicy?.message,
      section: 'privacyPolicy',
    });
  }

  return errorsList;
};

/**
 * Traduz os nomes dos campos para português
 */
export const getFieldLabel = (field: string): string => {
  const fieldLabels: Record<string, string> = {
    // Proprietário
    name: 'Nome do proprietário',
    adress: 'Endereço',
    city: 'Cidade',
    zipCode: 'CEP',
    email: 'Email',
    phone: 'Telefone',

    // Pet
    petName: 'Nome do pet',
    petAge: 'Idade do pet',
    species: 'Espécie',
    castrated: 'Status de castração',
    petImage: 'Foto do pet',
    observation: 'Observação',

    // Agendamento
    scheduleType: 'Tipo de agendamento',
    reminder: 'Lembrete',

    // Política
    privacyPolicy: 'Política de privacidade',
  };

  return fieldLabels[field] || field;
};

/**
 * Verifica se há erros no formulário
 */
export const hasErrors = (errors: any): boolean => {
  return Object.keys(errors).length > 0;
};

/**
 * Conta o número total de erros
 */
export const countErrors = (errors: any): number => {
  return extractFormErrors(errors).length;
};
