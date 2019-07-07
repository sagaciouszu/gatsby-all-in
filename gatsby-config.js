module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: 'src',
          components: 'src/components',
          containers: 'src/components/containers',
          layouts: 'src/components/layouts',
          pages: 'src/pages',
          styles: 'src/styles',
          static: 'static',
        },
      },
    },
  ],
}
