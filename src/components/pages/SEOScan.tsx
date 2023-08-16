import { LayoutComponent } from "@/components/layout";
import { HeroComponent } from "@/components/hero";
import React, { useState } from "react";
import SeoAnalyzer from "seo-analyzer"

export const SEOScanPage = (props) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [seoAnalysis, setSEOAnalysis] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleUrlChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const fetchSEO = async () => {
  setLoading(true);
   setTimeout(() => {
    const res = "SEO Results"
    setLoading(false);
    return res
   }, 3000);
  };

  const handleScan = async () => {
    const res = await fetchSEO();
    setSEOAnalysis(res);
  };

  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("sitemapScanner_label")}
      locale={props.locale}
    >
      <HeroComponent
        {...{ ...props, handleUrlChange, handleScan }}
        variant={"scan"}
      />
      {websiteUrl}
      {loading && "Loading..."}
      {seoAnalysis && JSON.stringify(seoAnalysis)}
    </LayoutComponent>
  );
};

export default SEOScanPage;
