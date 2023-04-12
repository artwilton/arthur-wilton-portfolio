module.exports = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `Arthur Wilton Portfolio`,
    siteUrl: `https://www.arthurwilton.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Arthur Wilton Portfolio`,
        short_name: `Arthur Wilton`,
        start_url: `/`,
        background_color: `#f0f0f0`,
        display: "minimal-ui",
        icon: `src/media/icons/favicon.svg`,
        legacy: false,
      },
    },
    {
    resolve: `gatsby-transformer-json`,
      options: {
        typeName: ({ node, object, isArray }) => object.type,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              quality: 50,
              linkImagesToOriginal: false,
              showCaptions: ["title"],
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media`,
        ignore: [`**/icons`],
        fastHash: true,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: true,
        develop: true,
        ignore: [
          "video.js/dist/video-js.css",
          "src/styles/vjs-custom.scss",
          "src/styles/markdown.scss",
        ],
        purgeCSSOptions: {
          safelist: [
            /^row/,
            /^col/,
            /^container/,
            /^btn/,
            /^card/,
            /^nav/,
            /^offcanvas/,
            /^fixed/,
            /^form/,
            /^shadow/,
            /^modal/,
            /invalid/,
            "figure",
            "was-validated",
            "fade",
            "show",
            "h5",
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons(\/|\\).*\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: [
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://use.typekit.net",
          "https://p.typekit.net",
        ],
        web: [
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap",
          },
          {
            name: "Lato",
            file: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap",
          },
          {
            name: ["europa", "gill-sans-nova"],
            file: "https://use.typekit.net/phy7oeu.css",
          },
        ],
      },
    },
  ],
};
