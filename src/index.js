const express = require('express');
const handlebars  = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');



//Express
const app = express();
const port = 3000;

//Template engineer
app.engine('.hbs', handlebars({
    extname:".hbs"
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//Morgan
app.use(morgan(':method :url :status'));



app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news',(req,res)=>{
    res.render('news');
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});