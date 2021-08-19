const newsRouter = require('./news')
const homeRouter = require('./home')
const courseRouter = require('./course')
const meRouter = require('./me')

function routes(app) {
  app.use('/', homeRouter)
  app.use('/news', newsRouter)
  app.use('/course', courseRouter)
  app.use('/me', meRouter)
}

module.exports = routes
