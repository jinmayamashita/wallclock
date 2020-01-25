// this helps: 
// https://github.com/facebook/jest/issues/2081#issuecomment-332406033
// https://github.com/facebook/jest/issues/2663#issuecomment-341384494
module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
  }
};