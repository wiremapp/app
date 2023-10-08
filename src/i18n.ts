import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";

import en_jsonData from "@/locales/en.json";
import fr_jsonData from "@/locales/fr.json";
import zh_jsonData from "@/locales/zh.json";
import es_jsonData from "@/locales/es.json";
import eo_jsonData from "@/locales/eo.json";
import ro_jsonData from "@/locales/ro.json";
import ar_jsonData from "@/locales/ar.json";

export const supportedLanguages = ["en", "fr", "ar","eo","fr"];

const resources = {
  en: {
    translation: en_jsonData,
  },
  fr: {
    translation: fr_jsonData,
  },
  ar: {
    translation: ar_jsonData,
  },
  ro: {
    translation: ro_jsonData,
  },
  es: {
    translation: es_jsonData,
  },
  zh: {
    translation: zh_jsonData,
  },
  eo: {
    translation: eo_jsonData,
  }
};

i18n
  .use(LanguageDetector)
  .use(LocalStorageBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    supportedLngs: supportedLanguages,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources,
  });

export default i18n;
