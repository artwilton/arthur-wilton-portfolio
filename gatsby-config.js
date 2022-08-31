module.exports = {
  siteMetadata: {
    title: `Arthur Wilton Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /social_media_icons/
        }
      }
    }
  ],
  
}
