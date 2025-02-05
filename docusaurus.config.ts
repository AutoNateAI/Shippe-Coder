import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Shippi',
  tagline: 'Ship Better Code, Faster',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://autonateai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Shippe-Coder/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AutoNateAI',
  projectName: 'Shippe-Coder',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AutoNateAI/Shippe-Coder/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AutoNateAI/Shippe-Coder/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/social-card.png',
    navbar: {
      title: 'Shippi',
      logo: {
        alt: 'Shippi Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      hideOnScroll: false,
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Concept Library',
        },
        {to: '/prompts', label: 'AI Prompts', position: 'left'},
        {to: '/blog', label: 'Podcasts', position: 'left'},
        {
          href: 'https://github.com/AutoNateAI/Shippe-Coder',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Concept Library',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AutoNateAI/Shippe-Coder',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Case Studies',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AutoNateAI/Shippe-Coder',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Shippi. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
      ],
    },
    metadata: [
      // Twitter Card
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Shippi - AI Dev Docs'},
      {name: 'twitter:description', content: 'Ship Better Code, Faster'},
      {name: 'twitter:image', content: 'https://autonateai.github.io/Shippe-Coder/img/social-card.png'},
      
      // Open Graph (Facebook, iMessage, etc)
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'Shippi - AI Dev Docs'},
      {property: 'og:description', content: 'Ship Better Code, Faster'},
      {property: 'og:image', content: 'https://autonateai.github.io/Shippe-Coder/img/social-card.png'},
      {property: 'og:image:alt', content: 'Shippi Logo'},
      {property: 'og:url', content: 'https://autonateai.github.io/Shippe-Coder/'},
      {property: 'og:site_name', content: 'Shippi'},
      
      // Apple-specific
      {name: 'apple-mobile-web-app-title', content: 'Shippi'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
    ],
    customCss: [
      './src/css/custom.css',
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
