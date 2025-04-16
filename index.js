let express = require('express')

const AppRouter = require('./src/routes/index')
require('dotenv').config()
let app = express()
app.use(express.json())

app.use('/',AppRouter)

let PORT = process.env.PORT


app.listen(PORT,()=>console.log( "server listening 8000 port"))