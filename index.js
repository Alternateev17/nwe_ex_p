const express = require('express')
const exphbs= require('express-handlebars')
const homeRoutes = require('./routes/home')

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


app.use('/', homeRoutes)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
