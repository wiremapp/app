import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";

const supportedLanguages = ["en"];

const resources = {
  en: {
    translation: {
      site_desc:
        "Visualise your application structures with a range of useful features, to help facilitate a streamlined development process.",
      pricing_desc:
        "Compare our free and paid tiers & learn more about additional plans and features. View the Pricing Page for more details.",
      features_desc:
        "Our tool covers a range of useful features, to help streamline development. View the Features Page for more details.",
      userSettings_desc:
        "Manage your account settings, projects or organisations. View the User settings Page for more details.",
      about_desc:
        "Our aim at wiremap is to facilitate a user-friendly & streamlined development process. View the About Page for more details.",
      home_label: "Home",
      features_label: "Features",
      pricing_label: "Pricing",
      about_label: "About",
      more_label: "More",
      signIn_label: "Sign in",
      openApp_label: "Open App",
      notFound_label: "Page not found",
      genericError_title: "Check back soon...",
      hero_title0: "Visualise your application sitemap structure",
      hero_desc0:
        "With a comprehensive & user-friendly interface, combined with a range of useful features, to help facilitate a rapid streamlined development process.",
      hero_subtitle0: "Create visual sitemaps within minutes.",
      cookies_label: "Cookies",
      privacy_label: "Privacy Policy",
      cookie_textContent:
        "We use cookies to enhance your browsing experience. By continuing to use our website, you agree to our use of cookies. Our cookies are safe and don't contain any personal or sensitive information.",
      accept_label: "Accept",
      reject_label: "Reject",
      learnMore_label: "Learn More",
      start4Free_label: "Start for free",
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
