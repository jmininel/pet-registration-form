import Cookies from 'js-cookie';

const FORM_DATA_COOKIE_KEY = 'petFormData';
const FORM_IMAGE_STORAGE_KEY = 'petFormImage'; // Usar localStorage para a imagem
const COOKIE_EXPIRATION_DAYS = 7;

export interface FormDataCookie {
  owner: {
    name: string;
    adress: string;
    city: string;
    zipCode: string;
    email: string;
    phone: string;
  };
  pet: {
    petName: string;
    petAge: string;
    species: string;
    castrated: boolean;
    petImage?: string;
    observation: string;
  };
  schedule: {
    scheduleType: string;
    reminder: boolean;
  };
  privacyPolicy: boolean;
  timestamp: string;
}

/**
 * Salva os dados do formulário nos cookies
 * A imagem é salva em localStorage para evitar limite de tamanho de cookies
 */
export const saveFormDataToCookie = (formData: any): void => {
  try {
    // Separar a imagem do restante dos dados
    let dataToSave = { ...formData };
    const petImage = dataToSave.pet.petImage;
    
    // Salvar a imagem em localStorage se existir (apenas no cliente)
    if (petImage && typeof window !== 'undefined') {
      console.log(`📸 Salvando imagem em localStorage (${(petImage.length / 1024).toFixed(2)}KB)...`);
      try {
        localStorage.setItem(FORM_IMAGE_STORAGE_KEY, petImage);
        console.log('✅ Imagem salva em localStorage com sucesso!');
      } catch (storageError) {
        console.error('❌ Erro ao salvar imagem em localStorage:', storageError);
      }
      // Remover a imagem dos dados que serão salvos em cookies
      dataToSave.pet.petImage = undefined;
    }
    
    const dataWithTimestamp: FormDataCookie = {
      ...dataToSave,
      timestamp: new Date().toISOString(),
    };
    
    const jsonString = JSON.stringify(dataWithTimestamp);
    const jsonSizeInKB = (jsonString.length / 1024).toFixed(2);
    console.log(`📊 Tamanho do JSON para cookies: ${jsonSizeInKB}KB (limite: ~4KB)`);
    
    Cookies.set(
      FORM_DATA_COOKIE_KEY,
      jsonString,
      { expires: COOKIE_EXPIRATION_DAYS }
    );
    console.log('✅ Dados salvos nos cookies com sucesso');
    
    // Verificar o que foi salvo
    const savedCookie = Cookies.get(FORM_DATA_COOKIE_KEY);
    if (savedCookie) {
      const savedData = JSON.parse(savedCookie);
      console.log('🔍 Dados salvos nos cookies:', savedData);
    }
  } catch (error) {
    console.error('❌ Erro ao salvar dados nos cookies:', error);
  }
};

/**
 * Recupera os dados do formulário dos cookies e localStorage
 */
export const getFormDataFromCookie = (): FormDataCookie | null => {
  try {
    const cookie = Cookies.get(FORM_DATA_COOKIE_KEY);
    if (!cookie) return null;
    
    const data = JSON.parse(cookie);
    
    // Recuperar a imagem do localStorage se existir (apenas no cliente)
    if (typeof window !== 'undefined') {
      const savedImage = localStorage.getItem(FORM_IMAGE_STORAGE_KEY);
      if (savedImage) {
        console.log(`📸 Recuperando imagem do localStorage (${(savedImage.length / 1024).toFixed(2)}KB)...`);
        data.pet.petImage = savedImage;
        console.log('✅ Imagem recuperada do localStorage!');
      }
    }
    
    return data;
  } catch (error) {
    console.error('❌ Erro ao recuperar dados dos cookies:', error);
    return null;
  }
};

/**
 * Remove os dados do formulário dos cookies e localStorage
 */
export const clearFormDataFromCookie = (): void => {
  try {
    Cookies.remove(FORM_DATA_COOKIE_KEY);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(FORM_IMAGE_STORAGE_KEY);
    }
    console.log('✅ Cookies e localStorage limpos com sucesso');
  } catch (error) {
    console.error('❌ Erro ao limpar dados:', error);
  }
};

/**
 * Verifica se há dados salvos nos cookies
 */
export const hasFormDataInCookie = (): boolean => {
  return Cookies.get(FORM_DATA_COOKIE_KEY) !== undefined;
};
