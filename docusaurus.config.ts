import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ClientXCMS Docs',
  tagline: 'Bienvenue sur notre espace de documentation dédié à CLIENTXCMS',
  url: 'https://docs.clientxcms.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
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
  ],

  themeConfig: {
    metadata: [{name: 'keywords', content: 'CMS,CLIENTX,Clientx,docs,doc,blog'}],
    navbar: {
      title: 'CLIENTXCMS Docs',
      logo: {
        alt: 'CLIENTXCMS Logo',
        src: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/logo-for-docs.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
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
      content: `Bienvenue sur la documentation officiel de ClientXCMS.com ! La documentation NEXT GEN est en cours de rédaction !`,
      content: `ClientXCMS V1 n'est plus maintenu. Nous travaillons actuellement sur la version NextGen.`,
      backgroundColor: '#828eb7',
      textColor: '#000000',
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
              href: 'https://github.com/ClientXCMS/clientxcms-docs',
            },
          ],
        },
      ],
      logo: {
        alt: 'Logo',
        src: 'https://cdn.clientxcms.com/ressources/Themes/CLIENTXCMS/images/Fichier-24_2x.webp',
        href: 'https://clientxcms.com/',
        width: 160,
        height: 51,
      },
      copyright: `Copyright © ${new Date().getFullYear()} ClientXCMS.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
