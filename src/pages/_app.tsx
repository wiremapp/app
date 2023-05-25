import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { useIsPWA,useIsElectron } from "@/hooks";
import React from "react";
import "@/styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const isPWA = useIsPWA();
  const isElectron = useIsElectron();

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider attribute="class">
          <div className={isPWA || isElectron ? "select-none" : ""}></div>
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nextProvider>
    </SessionProvider>
  );
}


export default MyApp;
