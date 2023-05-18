import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";

const supportedLanguages = ["en"];

const resources = {
  en: {
    translation: {
      home_label: "Home",
      features_label: "Features",
      pricing_label: "Pricing",
      about_label: "About",
      more_label: "More",
      signIn_label: "Sign in",
      openApp_label: "Open App",
      notFound_label: "Page not found",
      genericError_title: "Something went wrong..."
    },
  },
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
