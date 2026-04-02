import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'solidJSCAD',
  tagline: 'solidJSCAD are cool',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://solidjscad.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',
 
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'solidJSCAD', // Usually your repo name.
  onBrokenAnchors: 'ignore',
  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
    localeConfigs: {
      'zh-CN': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
    },
  },
  headTags: [  
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'solidjscad 参数化3D建模',
        url: 'https://solidjscad.com',
        inLanguage: 'zh-CN',
      }),
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath:"/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,/*{
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    metadata: [
      { name: 'keywords', content: '参数化建模, 3D建模, 在线建模, JavaScript 3D, SolidJScad, 代码生成3D, STL导出, 三维设计, 开源建模工具,技术文档,教程' },
      { name: 'author', content: 'Zaddone' }, 
      // 如果希望所有页面都被收录，可不加 robots meta；如果某些页面不想被收录，可单独控制
    ],
  
    // Replace with your project's social card
    //image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SolidJSCAD',
      logo: {
        alt: 'SolidJSCAD',
        src: 'img/favicon.png',
        href:"https://solidjscad.com/home/"
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'DocumentSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://solidjscad.com/',
          label: 'Start',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [/*
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
              label: 'X',
              href: 'https://x.com/docusaurus',
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
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} solidJSCAD. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
