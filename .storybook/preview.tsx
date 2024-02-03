import React from "react";
import type { Preview } from "@storybook/react";
import * as NextImage from "next/image";
import i18n from '../src/i18n';
import { I18nextProvider } from "react-i18next";
import "@/styles/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


export default preview;
