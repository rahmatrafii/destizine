"use client";
import { initReactI18next } from "react-i18next";
import enTranslation from "./../public/locales/en/translation.json";
import idTranslation from "./../public/locales/id/translation.json";
import zhTranslation from "./../public/locales/zh/translation.json";
import i18next from "i18next";
const lang = localStorage.getItem("lang") || "id";
i18next.use(initReactI18next).init({
  fallbackLng: "id",
  debug: true,
  lng: lang,
  resources: {
    en: {
      translation: enTranslation,
    },
    id: {
      translation: idTranslation,
    },
    zh: {
      translation: zhTranslation,
    },
  },
  interpolation: {
    escapeValue: false,
  },
  ns: "translation",
  defaultNS: "translation",
});
export default i18next;
