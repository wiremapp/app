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
        <div className="justify-center sm:justify-between">
          <div className="flex items-center">
            <LogoComponent />
            <p className="ml-5 mr-1 shrink-0 text-center sm:ml-10 md:mr-10">
              Get the latest news!
            </p>
          </div>
          <NewsLetterFormComponent />
        </div>
      </div>
      <div>
        <div>
          <div className="my-1 flex justify-start space-x-8 uppercase sm:my-0 text-xs">

            <Link href="/privacy" className="text-xs text-white/70 transition-all hover:text-white hover:text-opacity-100">
                Privacy Policy
            </Link>

            <Link href="/terms" className="font-bold text-xs text-white/70 transition-all hover:text-white hover:text-opacity-100">
                Terms of Service
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
