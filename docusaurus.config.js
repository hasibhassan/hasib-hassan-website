/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hasib Hassan',
  tagline: "Hasib Hassan's Blog",
  url: 'https://hasibhassan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'hasibhassan',
  projectName: 'hasib-hassan-website',
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      defaultLanguage: 'javascript',
      theme: require('prism-react-renderer/themes/github'),
    },
    navbar: {
      hideOnScroll: true,
      title: 'Hasib Hassan',
      items: [
        { to: '/about', label: 'About', position: 'right' },
        {
          href: 'https://github.com/hasibhassan',
          position: 'right',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Hasib Hassan © ${new Date().getFullYear()}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          editUrl:
            'https://github.com/hasibhassan/hasib-hassan-website/edit/master/website/blog/',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `Hasib Hassan © ${new Date().getFullYear()}`,
          },
          blogTitle: 'Hasib Hassan Blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
