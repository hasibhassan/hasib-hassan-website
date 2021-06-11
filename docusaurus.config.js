/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Hasib Hassan',
  tagline: "Hasib Hassan's Blog",
  url: 'https://www.hasibhassan.com',
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
            'https://github.com/hasibhassan/hasib-hassan-website/tree/master',
          postsPerPage: 3,
          feedOptions: {
            type: 'all',
            copyright: `© ${new Date().getFullYear()} Hasib Hassan`,
          },
          blogTitle: 'Hasib Hassan Blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          // You can also use your "G-" Measurement ID here.
          trackingID: 'G-Q0TB0JMGG5',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
      },
    ],
  ],
}
