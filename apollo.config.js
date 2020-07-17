module.exports = {
  client: {
    service: {
      name: 'jobtrack',
      // URL to the GraphQL API
      url: 'https://mlh-jobtrack-backend.herokuapp.com//graphql'
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js'
    ]
  }
}
