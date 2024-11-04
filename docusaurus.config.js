import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AmPi Studio Docs',
  tagline: 'Welcome to the documentation site for AmPi Studio',

  url: 'https://docs.ampistudio.tech',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'apilzer',
  projectName: 'ampistudio-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'AmPi Studio Logo',
          src: 'img/logo black.png',
          srcDark: 'img/logo white.png',
          href: 'https://ampistudio.tech',
        },
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AmPi Studio LLC`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark', // Set dark mode as the default
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),
};
export default config;
