module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-playground',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          src: 'src',
          components: 'src/components',
          layouts: 'src/components/layouts',
          pages: 'src/pages',
          styles: 'src/styles',
          static: 'static',
          store: 'src/store',
          providers: 'src/components/providers',
          common: 'src/components/common',
          container: 'src/components/containers',
        },
      },
    },
  ],
}
