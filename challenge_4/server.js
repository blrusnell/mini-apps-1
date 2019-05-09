const express = require('express')
const app = express()
const port = 3002

//add bodyparser

app.use(express.static('client/dist'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

