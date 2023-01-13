module.exports = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: `Arthur Wilton Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
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
              maxWidth: 1200,
              linkImagesToOriginal: false,
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
      }
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
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: true,
        ignore: [
          'prismjs/themes/prism-okaidia.css',
          'video.js/dist/video-js.css'
        ],
        purgeCSSOptions: {
          safelist: ["___gatsby", "gatsby-focus-wrapper", /^row/, /^col/, /^container/, /^btn/, /^card/, /^nav/, /^offcanvas/, /^fixed/, /^form/, /^shadow/, /^modal/, /invalid/, "was-validated", "fade", "show", "h5"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons(\/|\\).*\.svg$/
        }
      }
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://use.typekit.net", "https://p.typekit.net"],
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
            file: "https://use.typekit.net/phy7oeu.css"
          }
        ],
      },
    }
  ],
  
}
