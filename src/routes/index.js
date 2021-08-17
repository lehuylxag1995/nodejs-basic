const newsRouter = require('./news')
const homeRouter = require('./home')

function routes(app) {
  app.use('/', homeRouter)
  app.use('/news', newsRouter)
}

module.exports = routes
