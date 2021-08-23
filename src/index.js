const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')
const SortColumnTableMiddleware = require('./app/middlewares/SortColumnTableMiddleware')

// Connect to database
db.connectDatabase()

// Express
const app = express()
const port = 3000

// config static file
app.use(express.static(path.join(__dirname, 'public')))

// config middleware
app.use(
  express.urlencoded({
    extended: true, // req.body
  })
)
app.use(express.json())
app.use(methodOverride('_method')) // override with POST having ?_method=DELETE
app.use(SortColumnTableMiddleware)

// Template engineer
app.engine(
  '.hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortColumn: (field, resSortLocal) => {
        const icons = {
          default: 'bi bi-arrow-down-up',
          asc: 'bi bi-sort-alpha-down',
          desc: 'bi bi-sort-alpha-down-alt',
        }

        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
        }

        let icon = icons.default
        let type = types.default

        if (field === resSortLocal.column) {
          icon = icons[resSortLocal.type]
          type = types[resSortLocal.type]
        }

        return `<a href="?_sort&column=${field}&type=${type}">
                  <span><i class="${icon}"></i></span>
                </a>`
      },
    },
  })
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Route
route(app)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
