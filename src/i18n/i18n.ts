import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import enUI from '@/locales/en/ui.json';
import zhUI from '@/locales/zh-TW/ui.json';
import enResume from '@/locales/en/resume.json';
import zhResume from '@/locales/zh-TW/resume.json';

const resources = {
  en: {
    resume: enResume,
    ui: enUI
  },
  zh_tw: {
    resume: zhResume,
    ui: zhUI
  },
}

 i18n
 .use(initReactI18next)
 .init({
   resources,
   lng: 'en',
   ns: ['resume', 'ui'],
   defaultNS: 'ui',
   fallbackLng: 'en',
   interpolation: {
     escapeValue: false,
   },

})

export default i18n