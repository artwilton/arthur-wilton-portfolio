module.exports = {
  siteMetadata: {
    title: `Arthur Wilton Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /social_media_icons/
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
