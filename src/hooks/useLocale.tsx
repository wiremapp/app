import { useState, useEffect } from "react";

const useLocale = () => {
  const [locale, setLocale] = useState("");

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    const fetchLocaleData = async () => {
        try {
          const response = await fetch("https://ipapi.co/json/");
          const data = await response.json();
          localStorage.setItem("locale", data.country_code);
          setLocale(data.country_code);
        } catch (error) {
          setLocale("global");
        }
      };
      if(storedLocale) return setLocale(storedLocale);
    fetchLocaleData();
  }, []);

  return { locale };
};

export default useLocale;