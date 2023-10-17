import { I18nextProvider, useTranslation } from "react-i18next";
import { UIStates, Provider as UIStatesProvider } from "@/context/UI";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import localeManager from "@/i18n";
import React, { useContext } from "react";
import "@/styles/globals.css";

function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const { t } = useTranslation();
  const { auth, isElectron, isPWA } = useContext(UIStates);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <UIStatesProvider>
        <I18nextProvider i18n={localeManager}>
          <ThemeProvider attribute="class">
            <div className={isPWA || isElectron ? "select-none" : ""}></div>
            <Component
              {...{
                ...pageProps,
                isPWA,
                auth,
                locale: { t, manager: localeManager },
              }}
            />
          </ThemeProvider>
        </I18nextProvider>
      </UIStatesProvider>
    </SessionProvider>
  );
}

export default App;
