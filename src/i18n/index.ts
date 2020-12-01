import { createI18n } from 'vue-i18n';
import en from '@/locales/en';
import nl from '@/locales/nl';

const index = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    nl,
  },
});

export default index;
