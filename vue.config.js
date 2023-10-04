module.exports = {
  // Set public path for different environments
  publicPath: process.env.NODE_ENV === 'PROD' ? '/lightning/' : process.env.NODE_ENV === 'STAGE' ? '/lightning/' : '/'
}
