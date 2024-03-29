import type {StorybookConfig} from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
        "@storybook/addon-mdx-gfm",
        "@storybook/addon-a11y", // 👈 Register the addon
        '@storybook/addon-interactions', // 👈 Register the addon
        '@storybook/addon-coverage', //👈 Registers the addon


    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    core: {}
};
export default config;
