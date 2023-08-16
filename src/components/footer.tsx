
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { LogoComponent } from "@/components/logo";
import { NewsLetterFormComponent } from "@/components/newsletterForm";
import { CopyrightTextComponent } from "@/components/copyrightText";

export const FooterComponent = () => {
  const { t } = useTranslation();
  return (
    <footer aria-label="Site Footer">
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
          <div className="my-1 flex justify-start space-x-8 uppercase sm:my-0">
            <Link href="/privacy">
              <a className="text-xs font-medium text-white/70 hover:text-white transition-all hover:text-opacity-100">
                Privacy Policy
              </a>
            </Link>
            <Link
              href="/terms"
            >
                    <a className="text-xs font-medium text-white/70 hover:text-white transition-all hover:text-opacity-100">
                    Terms of Service
              </a>
            </Link>
          </div>
          <div>
            <CopyrightTextComponent />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
