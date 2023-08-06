import { I18nextProvider, useTranslation } from "react-i18next";
import { UIStates, Provider as UIStatesProvider } from "@/context/UI";
import { useScrollProgress } from "@/hooks/scrollY";
import { useIsElectron } from "@/hooks/isElectron";
import { SessionProvider, useSession } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useIsPWA } from "@/hooks/isPWA";
import { Session } from "next-auth";
import localeManager from "@/i18n";
import "@/styles/globals.css";
import React, { useContext } from "react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const isPWA = useIsPWA();
  const isElectron = useIsElectron();
  const { t } = useTranslation();
  const { scrollY, progress } = useScrollProgress();
  const { auth } = useContext(UIStates);

  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <UIStatesProvider>
        <I18nextProvider i18n={localeManager}>
          <ThemeProvider attribute="class">
            <div className={isPWA || isElectron ? "select-none" : ""}></div>
            <Component
              {...{
                ...pageProps,
                isElectron,
                isPWA,
                auth,
                scroll: { y: scrollY, progress },
                locale: { t, manager: localeManager },
              }}
            />
          </ThemeProvider>
        </I18nextProvider>
      </UIStatesProvider>
    </SessionProvider>
  );
}

export default MyApp;
