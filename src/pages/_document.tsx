import { GoogleAnalyticsComponent } from "@/stories/units/gtag";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <GoogleAnalyticsComponent />
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
