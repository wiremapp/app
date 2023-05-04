import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import "@/styles/globals.css";
import { AnalyticsContext } from "@/context";
import i18n from "@/i18n";
import { I18nextProvider } from "react-i18next";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <AnalyticsContext.Provider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </I18nextProvider>
      </SessionProvider>
    </AnalyticsContext.Provider>
  );
}

export default MyApp;
