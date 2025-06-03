const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/hudacode.github.io/' : '',
  basePath: isProd ? '/hudacode.github.io' : '',
};
