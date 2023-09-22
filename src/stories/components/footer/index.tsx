import { LogoComponent } from "@/stories/components/units/logo";

import React from "react";
import Link from "next/link";
import styles from "./style.module.css";
import NewsLetterFormComponent from "@/stories/components/units/newsletterForm";
import CopyrightTextComponent from "@/stories/components/units/copyrightText";

export const FooterComponent = (props) => {
  return (
    <footer className={styles.container} aria-label="Site Footer">
      <div>
        <div className="justify-center pt-4 sm:justify-between sm:pt-0">
          <div className="flex items-center">
            <LogoComponent />
            <p className="ml-5 mr-1 shrink-0 text-center sm:ml-10 md:mr-10">
              {props.locale.t("get_latest_news_label")}
            </p>
          </div>
          <NewsLetterFormComponent {...props}/>
        </div>
      </div>
      <div>
        <div>
          <div className="my-1 flex justify-start space-x-8 text-xs font-bold uppercase sm:my-0">
            <Link
              href="/privacy"
              className="text-xs text-white/70 transition-all"
            >
              {props.locale.t("privacy_label")}
            </Link>

            <Link
              href="/terms"
              className="text-xs font-bold text-white/70 transition-all"
            >
               {props.locale.t("terms_label")}
            </Link>
          </div>
          <div>
            <CopyrightTextComponent {...props} />
          </div>
        </div>
      </div>
    </footer>
  );
};
