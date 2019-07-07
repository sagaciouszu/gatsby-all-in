## gatsby-all-in

### Introduction

This is a starter application using gatsby.js.

### Getting started

- Create a new Gatsby site using the gatsby-all-in starter: `gatsby new blog https://github.com/Gherciu/gatsby-all-in`
- Start dev server: `npm run start`

### Features

- `ESLint` and `Stylelint` to enforce code style. Run `npm run lint:scripts` for `.js|.jsx` and `npm run lint:styles` for `.css|.scss` files.
- Pre-commit hooks with `husky` and `lint-staged`
- Useful SCSS helpers `_mixins` and `_vars` see all in `./src/styles`
- `Redux` configuration
- Aliases for all folders (components, styles, store etc.) see all available aliases in `./gatsby-config.js`
- `antd` is added and configured to work well as an UI framework (css normalization is not need, antd has own)
- All folders in `./src` have own README.md file with a little documentation and usage guide
- `Helmet` implimented and configured with `gatsby-plugin-react-helmet` see an example in `./src/layouts/MainLayout.js`
- A `.nvmrc` to change node version

### When ready to build for production

- Build the project: `npm run build`
- Rename `.env.development` or create  file `.env.production`
- Start production server: `npm run serve`

---

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**@Gherciu/gatsby-all-in** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/gatsby-all-in/contributors)).

> [github.com/Gherciu](https://github.com/Gherciu) · GitHub [@GHERCIU](https://github.com/Gherciu)

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/gatsby-all-in)
