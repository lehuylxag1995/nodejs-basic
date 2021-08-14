const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan(':method :url :status'))

app.get('/', (req, res) => {
    res.send('xin chào github!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})