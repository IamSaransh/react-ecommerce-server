let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')
let data = require('./data.js')
let port = 4000



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


app.get('/', (req, res) =>
res.send('heloo iam your server up and running')
)

app.get( '/products', (req, res) =>
res.json(data.products)
)

app.get(  '/guitars', (req, res) =>
res.json(data.guitars)
)
  
  
app.listen(process.env.PORT || port )
console.log("api is running on " + process.env.Port+ ":")