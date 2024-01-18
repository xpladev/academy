
const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const math = require('remark-math');
// const katex = require('rehype-katex');

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'XPLA ACADEMY',
  tagline: 'Master the DEV world of XPLA step by step!',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://academy.xpla.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xpladev', // Usually your GitHub org/user name.
  projectName: 'academy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko-kr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'startlearning',
          routeBasePath: 'startlearning',
          sidebarPath: require.resolve('./sidebars.js'),

          // remarkPlugins: [
          //   [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          //   math
          // ],
          // rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['pnpm'] },
            ],
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  // stylesheets: [
  //   {
  //     href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
  //     type: 'text/css',
  //     integrity:
  //       'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
  //     crossorigin: 'anonymous',
  //   },
  // ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/xpla-social-card.png',
      metadata: [
        {name: 'xpla-wallet'},
      ],
      navbar: {
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Start Learning',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/xpladev',
            className: 'header-github-link',
            position: 'right',
            'aria-label': 'GitHub repository',
          },
          {
            type: 'search',
            position : 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/overview/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/xpladev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XPLA Acadmey, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    // ....
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    'docusaurus-node-polyfills',
    ['@docusaurus/plugin-google-gtag',
    {
      trackingID: process.env.GTAG,
      anonymizeIP: true,
    }],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: process.env.GTM,
      },
    ],
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', [
    "@easyops-cn/docusaurus-search-local",
    /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    ({
      indexDocs: false,
      hashed: true,
      language: ["en", "ko"],
    }),
  ]],
  scripts: [
    {
      src: './pretendardFont.js',
      async: true,
    },
  ]
};

module.exports = config;
