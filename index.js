let express = require('express')

const AppRouter = require('./src/routes/index')
let app = express()
app.use(express.json())

app.use('/',AppRouter)




app.listen(8000,()=>console.log( "server listening 8000 port"))