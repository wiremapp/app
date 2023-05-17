import React, { ReactNode } from "react";
import {
  CookieConsentComponent,
  FooterComponent as Footer,
  NavbarComponent as Navbar,
} from "@/components";
import { useTranslation } from "react-i18next";
import { useIsElectron, useScrollProgress } from "@/hooks";
import { NextRouter } from "next/router";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
  thumbSrc?: string;
  navbar?: boolean;
  pageDesc?: string | null;
  cookieConsent?: boolean;
  router: NextRouter;
};

const navData = [
  {
    id: "home",
    href: "/",
  },
  {
    id: "features",
    href: "/features",
  },
  { id: "pricing", href: "/pricing" },
  {
    id: "about",
    href: "/about",
  },
];

export const Component = ({
  children,
  title,
  thumbSrc,
  router,
  pageDesc = null,
  cookieConsent = true,
  footer = true,
  navbar = true,
}: Props) => {
  const { scrollY, progress } = useScrollProgress();
  const { t } = useTranslation();
  const isElectron = useIsElectron();

  const HTMLHeadComponent = () => {
    return (
      <Head>
        <title>
          {title
            ? title + " — " + process.env.NEXT_PUBLIC_APP_TITLE
            : process.env.NEXT_PUBLIC_APP_TITLE +
              " — " +
              process.env.NEXT_PUBLIC_STATIC_TITLE}
        </title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="viewport-fit=cover, user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" type="image/png" href={"/images/icons/fav.ico"} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#FF6838" />
        <meta name="description" content={pageDesc} />
        <meta
          property="og:title"
          content={
            title
              ? title + " — " + process.env.NEXT_PUBLIC_APP_TITLE
              : process.env.NEXT_PUBLIC_APP_TITLE +
                " — " +
                process.env.NEXT_PUBLIC_STATIC_TITLE
          }
        />
        <meta property="og:description" content={pageDesc} />
        <meta
          property="og:image"
          content={
            thumbSrc ||
            `${process.env.NEXT_PUBLIC_SITE_URL}/images/thumb-unset.jpg`
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/icons/152.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/icons/180.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/images/icons/167.png"
        />
      </Head>
    );
  };
  const Navigation = ({ src }: { src?: string }) => {
    const Top = () => {
      return navbar ? (
        <>
          <div
            className={`drg fixed h-[24px] w-full bg-${
              !isElectron ? "transparent" : "[#0E0E0E]"
            }`}
          ></div>
          <header>
            <Navbar menuData={navData} scrollY={scrollY} router={router} />
          </header>
        </>
      ) : null;
    };
    const Bot = () => {
      return footer ? <Footer /> : null;
    };
    return src !== "bot" ? <Top /> : <Bot />;
  };

  return (
    <div>
      <HTMLHeadComponent />
      <Navigation />
      <div className="default-body">
        <div id="content-container">
          <div className={`flex w-full flex-col mt-[${navbar ? 95.99 : 0}px] `}>
            {children}
          </div>
        </div>
        <Navigation src="bot" />
      </div>
      {cookieConsent ? <CookieConsentComponent /> : null}
    </div>
  );
};

export default Component;
