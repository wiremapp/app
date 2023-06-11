import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

import { useTranslation } from "react-i18next";
import { NextRouter } from "next/router";
import Head from "next/head";
import { NavbarComponent } from "@/components/navbar";
import { CookieConsentComponent } from "@/components/cookieConsent";
import { EditorFooterComponent } from "@/components/footer-editor";
import { FooterComponent } from "@/components/footer";
import useScrollProgress from "@/hooks/scrollY";
import useIsElectron from "@/hooks/isElectron";

type Props = {
  children?: ReactNode;
  title?: string;
  author?: string;
  footer?: boolean;
  thumbSrc?: string;
  navbar?: boolean;
  type?: string;
  pageDesc?: string | null;
  cookieConsent?: boolean;
  router: NextRouter;
  variant?: string | null;
  appState?: {
    appOpen: boolean;
    setAppOpen: Dispatch<SetStateAction<boolean>>;
  };
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
    id: "faq",
    href: "/faq",
  },
];

export const LayoutComponent = ({
  children,
  title,
  author,
  thumbSrc,
  router,
  type,
  appState,
  pageDesc = null,
  cookieConsent = true,
  footer = true,
  navbar = true,
  variant = null,
}: Props) => {
  const { scrollY, progress } = useScrollProgress();
  const { t } = useTranslation();
  const isElectron = useIsElectron();

  const HTMLHeadComponent = () => {
    const [desc, setDesc] = useState(pageDesc || t("site_desc"));
    const canonicalUrl =
      process.env.NEXT_PUBLIC_SITE_URL +
      (router?.query?.static
        ? router.query.static
        : router?.pathname?.substring(1));
    const pageTitle = title
      ? title + " — " + process.env.NEXT_PUBLIC_APP_TITLE
      : process.env.NEXT_PUBLIC_APP_TITLE +
        " — " +
        process.env.NEXT_PUBLIC_STATIC_TITLE;
    const pageType = type || "website";
    const pageAuthor = process.env.NEXT_PUBLIC_APP_TITLE || author;
    const pageThumb =
      thumbSrc || `${process.env.NEXT_PUBLIC_SITE_URL}images/thumb-min.png`;
    return (
      <Head>
        <title>{pageTitle}</title>
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
        <meta name="description" content={desc} />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="author" content={pageAuthor} />
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_APP_TITLE}
        />
        <meta property="og:type" content={pageType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={pageThumb} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@wiremap" />
        <meta property="twitter:title" content={pageTitle}></meta>

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
            className={`bg-${!isElectron ? "transparent" : "[#0E0E0E]"}`}
          ></div>
          <header>
            <NavbarComponent
              menuData={navData}
              scrollY={scrollY}
              router={router}
              appState={appState}
            />
          </header>
        </>
      ) : null;
    };
    const Bot = () => {
      return footer ? (
        variant === "editor" ? (
          <EditorFooterComponent />
        ) : (
          <FooterComponent />
        )
      ) : null;
    };
    return src !== "bot" ? <Top /> : <Bot />;
  };

  return (
    <div id={"layout-container"}>
      <HTMLHeadComponent />
      <Navigation />
      <main>
        <div>
          <div className={` ${navbar ? "mt-[95.99px]" : "mt-0"} `}>
            {children}
          </div>
        </div>
        <Navigation src="bot" />
      </main>
      {cookieConsent ? <CookieConsentComponent /> : null}
    </div>
  );
};

export default LayoutComponent;
