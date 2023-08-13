// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Generally Genius Bot Framework',
  tagline: 'A generals.io distributed bot framework implementing modular strategies',
  favicon: 'img/logo.png',

  url: 'https://corsaircoalition.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'corsaircoalition',
  projectName: 'corsaircoalition.github.io',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/generals-io-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Generally Genius',
        logo: {
          alt: 'Generally Genius',
          src: 'img/logo.png',
        },
        items: [
          {
            to: 'setup',
            position: 'left',
            label: 'Install',
          },
          {
            to: 'development',
            position: 'left',
            label: 'Develop',
          },
          {
            to: 'analysis',
            position: 'left',
            label: 'Analyze',
          },
          {
            href: 'https://github.com/CorsairCoalition',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Organization',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Corsair Coalition. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
