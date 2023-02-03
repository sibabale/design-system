import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "!style-loader!css-loader!../src/styles/reset.css";
import { GlobalStyle } from "../src/shared/global";

const customViewports = {
  LargeScrens: {
    name: "4K",
    styles: {
      width: "2560px",
      height: "801px",
    },
  },
  Laptop: {
    name: "Laptop",
    styles: {
      width: "1024px",
      height: "963px",
    },
  },
  LargeLaptop: {
    name: "Laptop L",
    styles: {
      width: "1440px",
      height: "801px",
    },
  },
};

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <GlobalStyle />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
};
