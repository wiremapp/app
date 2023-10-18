import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UIStates } from "@/context/UI";
import { AdminPage } from "@/stories/components/pages/admin";
import { excludedSafePages } from "@/utils/funcs";
import fs from "fs";
import path from "path";

export default function Page(pageProps) {
  const router = useRouter();
  const UI = useContext(UIStates);

  const props = {
    router,
    ...pageProps,
    ...UI,
  };

  return <AdminPage {...props} />;
}

export async function getStaticProps() {
  const pagesDir = path.join(process.cwd(), "src/pages");
  const jsonFilePath = path.join(process.cwd(), "src/data/pageStatus.json");
  const displayNameFilePath = path.join(
    process.cwd(),
    "src/data/displayNames.json",
  );

  let formattedPages;

  try {
    // Read JSON file
    const existingJSON = fs.readFileSync(jsonFilePath, "utf-8");
    formattedPages = JSON.parse(existingJSON);
  } catch (error) {
    formattedPages = [];
  }

  const pagesData = fs.readdirSync(pagesDir, "utf-8");

  // Filter and map pages as objects
  const updatedPages = pagesData
    .filter((page) => {
      if (excludedSafePages.includes(page.replace(/\.[^/.]+$/, ""))) {
        return false;
      }
      return true;
    })
    .map((page) => {
      return {
        id: page.replace(/\.[^/.]+$/, ""),
        status: "active",
        displayName: "",
      };
    });

  // Check for new pages and add
  updatedPages.forEach((page) => {
    const existingPage = formattedPages.find(
      (existingPage) => existingPage.id === page.id,
    );
    if (!existingPage) {
      formattedPages.push(page);
      delete page.displayName;
    } else {
      // Update displayName
      page.displayName = existingPage.displayName;
    }
  });

  // Remove non-existent pages
  formattedPages = formattedPages.filter((existingPage) =>
    updatedPages.some((page) => page.id === existingPage.id),
  );

  // Load the display names JSON or create
  let displayNames = {};
  try {
    const displayNamesJSON = fs.readFileSync(displayNameFilePath, "utf-8");
    displayNames = JSON.parse(displayNamesJSON);
  } catch (error) {
    // Handle errors
  }

  // Update display names based on IDs
  formattedPages.forEach((page) => {
    if (displayNames[page.id]) {
      page.displayName = displayNames[page.id];
    }
  });

  // Save the display names JSON file
  fs.writeFileSync(
    displayNameFilePath,
    JSON.stringify(displayNames, null, 2),
    "utf-8",
  );

  fs.writeFileSync(jsonFilePath, JSON.stringify(formattedPages, null, 2), "utf-8");

  return {
    props: {
      pagesData: formattedPages,
    },
  };
}
