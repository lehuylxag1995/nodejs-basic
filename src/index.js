const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
// const morgan = require('morgan')
const route = require('./routes')
const db = require('./config/db')

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
    extended: true,
  })
)
app.use(express.json())

// Template engineer
app.engine(
  '.hbs',
  handlebars({
    extname: '.hbs',
  })
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// Morgan
// app.use(morgan(':method :url :status'));

// Route
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
