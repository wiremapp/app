import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="text-black bg-white dark:bg-black dark:text-white">
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
