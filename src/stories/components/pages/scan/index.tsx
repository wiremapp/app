import { LayoutComponent } from "@/stories/components/units/layout";
import { HeroComponent } from "@/stories/components/hero";
import React, { useEffect, useState } from "react";

export const ScanPage = (props) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [pages, setPages] = useState<string[]>([]);
  const [scannedPages, setScannedPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(null);

  const handleScan = (url) => {
    // Check if already scanned
    if (scannedPages.includes(url) || !url.startsWith(websiteUrl)) {
      return;
    }
  
    setScannedPages((prevVisited) => [...prevVisited, url]);
  
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const pageUrls = Array.from(doc.querySelectorAll("a"))
          .map((link) => link.getAttribute("href"))
          .filter(
            (link) =>
              link && (link.startsWith("/") || link.startsWith(websiteUrl)),
          );

        setPages((prevPages) => [...prevPages, ...pageUrls]);
      })
  };
  
  return (
    <LayoutComponent
      {...props}
      title={props.locale.t("sitemapScanner_label")}
      locale={props.locale}
    >
      {/* <HeroComponent
        {...{ ...props, handleUrlChange, handleScan }}
        variant={"scan"}
      /> */}
      
      <input
        onChange={(e) => {
          setWebsiteUrl(e.target.value);
        }}
      />
      <button onClick={() => handleScan(websiteUrl)}>Scan Pages</button>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>{page}</li>
        ))}
      </ul>
    </LayoutComponent>
  );
};

export default ScanPage;
