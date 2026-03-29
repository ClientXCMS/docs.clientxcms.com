import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';



const config: Config = {
  title: 'ClientXCMS Docs',
  tagline: 'Welcome to the official CLIENTXCMS documentation',
  url: 'https://docs.clientxcms.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/favicon.ico',
  organizationName: 'clientxcms', // Usually your GitHub org/user name.

  headTags: [
    {
      tagName: 'script',
      innerHTML: `
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//matomo.clientxcms.com/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '4']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      `,
      attributes: {
        type: 'text/javascript',
      },
    },
  ],
  projectName: 'docs.clientxcms.com', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      fr: {
        label: 'Francais',
        htmlLang: 'fr-FR',
      },
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          lastVersion: 'current',
          versions: {
            current: {
              label: 'NEXT GEN',
              path: '',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ClientXCMS/docs.clientxcms.com/blob/V2/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Blog',
          blogDescription: 'Retrouvez ici les dernières actualités de ClientXCMS',
          blogSidebarCount: 'ALL',
          postsPerPage: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ClientXCMS/docs.clientxcms.com/blob/V2/',
        },
        theme: {
          customCss: './src/css/custom.css',

        },
      } satisfies Preset.Options,
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            id: 'clientxcms-api',
            spec: 'static/api-docs.json',
            route: '/api',
          },
        ],
        theme: {
          primaryColor: '#2c46ba',
        },
      },
    ],
  ],
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexBlog: false,
        indexPages: true,
        indexDocs: true,
        docsDir: ["docs"],
        docsRouteBasePath: ["docs"],
      },
    ]
  ],
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    metadata: [{ name: 'keywords', content: 'CMS,CLIENTX,Clientx,docs,doc,blog' }],
    navbar: {
      title: 'CLIENTXCMS Docs',
      logo: {
        alt: 'CLIENTXCMS Logo',
        src: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/logo-for-docs.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introductions/introduction',
          position: 'left',
          label: 'Documentation',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/api', label: 'API', position: 'left' },
        { to: 'https://clientxcms.com/resources', label: 'Resources', position: 'left' },
        { to: 'https://clientxcms.com/changelogs', label: 'Changelog', position: 'left' },
        { to: 'https://ideas.clientxcms.com', label: 'Submit an idea', position: 'left' },
        {
          href: 'https://clientxcms.com',
          label: 'Back to website',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    announcementBar: {
      id: 'announcementBar',
      content: `Welcome to the official ClientXCMS.com documentation! Explore our guides and resources to fully master our CMS.`,
      backgroundColor: '#2c46ba',
      textColor: '#fff',
      isCloseable: false,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Communities',
          items: [
            {
              label: 'Back to website',
              href: 'https://clientxcms.com',
            },
            {
              label: 'Discord',
              href: 'https://clientxcms.com/ref/discord',
            },
            {
              label: 'X',
              href: 'https://twitter.com/ClientXCMS',
            },
          ],
        },
        {
          title: 'Useful links',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ClientXCMS/docs.clientxcms.com',
            },
            {
              label: 'Open a ticket',
              href: 'https://clientxcms.com/client/support',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'API Documentation',
              to: '/api',
            },
            {
              label: 'Extensions',
              href: 'https://docs.clientxcms.com/extensions',
            },
            {
              label: 'Submit an idea',
              href: 'https://ideas.clientxcms.com',
            },
            {
              label: 'Submit an extension',
              href: 'https://clientxcms.com/client/resources/submit',
            }
          ]
        }
      ],
      logo: {
        alt: 'CLIENTXCMS Logo',
        src: 'https://clientxcms.com/assets/images/logo/LogoBlueText.png',
        href: 'https://clientxcms.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} CLIENTXCMS Association`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
