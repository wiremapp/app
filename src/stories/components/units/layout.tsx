import { CookieConsentComponent } from "@/stories/components/cookieConsent";
import { NavbarComponent } from "@/stories/components/navbar";
import { FooterComponent } from "@/stories/components/footer";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import LoadingPage from "../pages/loading";
import GoogleAnalyticsComponent from "./gtag";

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

export const LayoutComponent = (props) => {
  const {
    children,
    title,
    author,
    thumbSrc,
    router,
    type,
    pageDesc = null,
    cookieConsent = true,
    footer = true,
    navbar = true,
    variant = null,
    loading,
    isElectron,
    authModal,
  } = props;

  useEffect(() => {
    if (authModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [authModal]);

  const HTMLHeadComponent = () => {
    const [desc, setDesc] = useState(pageDesc || props.locale.t("site_desc"));
    const canonicalUrl =
      process.env.NEXT_PUBLIC_SITE_URL +
      (router?.query?.static
        ? router.query.static
        : router?.pathname?.substring(1));
    const pageTitle = String(
      title
        ? title + " — " + process.env.NEXT_PUBLIC_APP_TITLE
        : process.env.NEXT_PUBLIC_APP_TITLE +
            " — " +
            process.env.NEXT_PUBLIC_STATIC_TITLE,
    );

    const pageType = type || "website";
    const pageAuthor = process.env.NEXT_PUBLIC_APP_TITLE || author;
    const pageThumb =
      thumbSrc || `${process.env.NEXT_PUBLIC_SITE_URL}images/thumb-min.png`;

    return (
      <>
        {" "}
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
        {props.cookies.consent && <GoogleAnalyticsComponent />}
      </>
    );
  };

  if (loading?.intLoad) {
    return (
      <div>
        <HTMLHeadComponent />
        <LoadingPage />
      </div>
    );
  }

  return (
    <>
      <div id={"layout-container"}>
        <HTMLHeadComponent {...props} />
        {navbar ? (
          <>
            <div
              className={`bg-${!isElectron ? "transparent" : "[#0E0E0E]"}`}
            ></div>

            {navbar ? (
              <header>
                <NavbarComponent menuData={navData} {...props} />
              </header>
            ) : null}
          </>
        ) : null}
        <main>
          <div>
            <div className={` ${navbar ? "mt-[95.99px]" : "mt-0"} `}>
              {children}
            </div>
          </div>
          {footer ? <FooterComponent {...props} /> : null}
        </main>
      </div>
      {cookieConsent ? <CookieConsentComponent {...props} /> : null}
    </>
  );
};

export default LayoutComponent;
