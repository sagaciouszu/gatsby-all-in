/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
require('dotenv').config({
  path:
    process.env.NODE_ENV === 'development'
      ? path.join(__dirname, '/.env.development')
      : path.join(__dirname, '/.env.production'),
})

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-playground',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: process.env.APP_NAME,
        short_name: process.env.APP_NAME,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#4dc0b5',
        display: 'minimal-ui',
        icon: path.join(__dirname, '/static/logo.png'),
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@src': path.join(__dirname, 'src'),
          '@components': path.join(__dirname, 'src/components'),
          '@layouts': path.join(__dirname, 'src/components/layouts'),
          '@pages': path.join(__dirname, 'src/pages'),
          '@styles': path.join(__dirname, 'src/styles'),
          '@static': path.join(__dirname, 'static'),
          '@store': path.join(__dirname, 'src/store'),
          '@providers': path.join(__dirname, 'src/components/providers'),
          '@common': path.join(__dirname, 'src/components/common'),
          '@containers': path.join(__dirname, 'src/components/containers'),
        },
      },
    },
  ],
}
