import { pt_BR } from './pt-BR';
import { en_US } from './en-US';

const translations = {
  'en-US': en_US,
  'pt-BR': pt_BR
}

export const i18nConfig = translations[navigator.language] || en_US;
