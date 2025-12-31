import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// console.log('Tracking ID:', process.env.GTAG_TRACKING_ID); // Vérification de la variable



const config: Config = {
  title: 'ClientXCMS Docs',
  tagline: 'Bienvenue sur notre espace de documentation dédié à CLIENTXCMS',
  url: 'https://docs.clientxcms.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/favicon.ico',
  organizationName: 'clientxcms', // Usually your GitHub org/user name.
  projectName: 'docs.clientxcms.com', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
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
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'process.env.GTAG_TRACKING_ID',
        anonymizeIP: false,
      },
    ],
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
        { to: 'https://clientxcms.com/resources', label: 'Ressources', position: 'left' },
        { to: 'https://clientxcms.com/changelogs', label: 'Changelog', position: 'left' },
        { to: 'https://ideas.clientxcms.com', label: 'Soumettre une idée', position: 'left' },
        {
          href: 'https://clientxcms.com',
          label: 'Retour au site',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        /*{
          type: 'localeDropdown',
          position: 'right',
        },*/
      ],
    },
    announcementBar: {
      id: 'announcementBar',
      content: `Bienvenue sur la documentation officiel de ClientXCMS.com !  Explorez nos guides et ressources pour maîtriser pleinement notre CMS.`,
      backgroundColor: '#2c46ba',
      textColor: '#fff',
      isCloseable: false,
    },

    footer: {
      style: 'dark',
      links: [

        {
          title: 'Communautés',
          items: [
            {
              label: 'Retour au site',
              href: 'https://clientxcms.com',
            },
            {
              label: 'Discord',
              href: 'https://clientxcms.com/ref/discord',
            },
            {
              label: '𝕏',
              href: 'https://twitter.com/ClientXCMS',
            },
          ],
        },
        {
          title: 'Liens utiles',
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
              label: 'Ouvrir un ticket',
              href: 'https://clientxcms.com/client/support',
            },
          ],
        },
        {
          title: 'Développeurs',
          items: [
            {
              label: 'Documentation API',
              to: '/api',
            },
            {
              label: 'Extensions',
              href: 'https://docs.clientxcms.com/extensions',
            },
            {
              label: 'Soumettre une idée',
              href: 'https://ideas.clientxcms.com',
            },
            {
              label: 'Soumettre une extension',
              href: 'https://clientxcms.com/client/resources/submit',
            }
          ]
        }
      ],
      logo: {
        alt: 'Logo CLIENTXCMS',
        src: 'https://clientxcms.com/assets/images/logo/LogoBlueText.png',
        href: 'https://clientxcms.com/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Association CLIENTXCMS`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
