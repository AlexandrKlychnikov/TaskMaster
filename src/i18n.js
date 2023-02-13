import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import TRANSLATION_EN from './constants/locales/translation_en';
import TRANSLATION_RU from './constants/locales/translation_ru';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: TRANSLATION_EN,
      },
      ru: {
        translation: TRANSLATION_RU,
      },
    },
  });

export default i18n;
