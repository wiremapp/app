import { LayoutComponent } from "@/stories/units/layout";
import { HeroComponent } from "@/stories/components/hero";
import React, { useState } from "react";
import SitemapViewer from "../sitemapScanner";
import useFetchSitemap from "@/hooks/scanner";
import { parseString } from 'xml2js'; // Import XML parsing library

export const SitemapScanPage = (props) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const { sitemap, loading, error,fetchSitemap } = useFetchSitemap(websiteUrl);

  const handleUrlChange = (event) => {
    setWebsiteUrl(event.target.value);
  };

  const handleScan = () => {
    fetchSitemap();
  };

    // Parse XML data using xml2js
    const xmlData = parseString(sitemap, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
  
      // Loop through sitemap items
      const sitemapItems = result.sitemapindex.sitemap;
      sitemapItems.forEach((item, index) => {
        const loc = item.loc[0];
        console.log(`Sitemap #${index + 1} Location: ${loc}`);
      });
    });
  

  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("sitemapScanner_label")}
      pageDesc={props.locale.t("pricing_desc")}
      locale={props.locale}
    >
      <HeroComponent
        {...{ ...props, handleUrlChange, handleScan }}
        variant={"scan"}
      />
      <SitemapViewer
        {...{ xmlData, sitemap, loading, error, url: websiteUrl }}
      />
    </LayoutComponent>
  );
};

export default SitemapScanPage;
