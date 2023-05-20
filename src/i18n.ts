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
      genericError_title: "Something went wrong...",
      hero_title0:"Visualise your application sitemap structure",
      hero_desc0:"with a comprehensive & user-friendly interface, combined with a range of useful features, to help facilitate a rapid streamlined development process.",
      cookies_label: "Cookies",
      privacy_label: "Privacy Policy",
      cookie_textContent:"We use cookies to enhance your browsing experience. By continuing to use our website, you agree to our use of cookies. Our cookies are safe and don't contain any personal or sensitive information.",
      accept_label:"Accept",
      reject_label:"Reject",
      learnMore_label:"Learn More"
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
