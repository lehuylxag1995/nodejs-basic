const newsRouter = require('./news')
const homeRouter = require('./home')
const courseRouter = require('./course')

function routes(app) {
  app.use('/', homeRouter)
  app.use('/news', newsRouter)
  app.use('/course', courseRouter)
}

module.exports = routes
