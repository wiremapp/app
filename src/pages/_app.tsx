import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { Session } from "next-auth";
import "@/styles/globals.css";
import { AnalyticsContext } from "@/context";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <AnalyticsContext.Provider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
      </SessionProvider>
    </AnalyticsContext.Provider>
  );
}

export default MyApp;
