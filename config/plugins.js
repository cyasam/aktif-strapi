module.exports = {
  navigation: {
    enabled: true,
    additionalFields: ['audience', { name: 'routekey', type: 'string', label: 'Route Key' }]
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
};