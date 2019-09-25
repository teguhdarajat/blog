module.exports = {
  siteMetadata: {
    title: `Teguh Ainul Darajat`,
    name: `teguhDarajat`,
    siteUrl: `https://teguhdarajat.tech`,
    description: `Deskripsi Blog`,
    hero: {
      heading: `Selamat datang di salah satu bagian kecil Internet`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/teguhdarajat`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/teguhdarajat`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
