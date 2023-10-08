import { LayoutComponent } from "@/stories/components/units/layout";
import { HeroComponent } from "@/stories/components/hero";
import React, { useState } from "react";

export const ScanPage = (props) => {
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

export default ScanPage;
