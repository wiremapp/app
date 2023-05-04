import Script from "next/script";
import { createContext } from "react";

export const Analytics = createContext<{}>(null);
export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
export const Provider = ({ children }) => {
  return (
    <Analytics.Provider value={null}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname
          });
        `,
        }}
      />
      {children}
    </Analytics.Provider>
  );
};

export default Provider;
