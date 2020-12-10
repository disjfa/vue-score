import { createI18n } from 'vue-i18n';
import en from '@/locales/en';
import nl from '@/locales/nl';

let locale = window.localStorage.getItem('_locale');
if (!locale) {
  locale = 'en';
}

const i18n = createI18n({
  legacy: true,
  locale,
  fallbackLocale: 'en',
  messages: {
    en,
    nl,
  },
});

export default i18n;
