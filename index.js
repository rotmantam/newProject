const express = require('express')

const bodParser = require('body-parser')

const app = express()
app.use(bodParser.urlencoded())
app.use(bodParser.json())


const accountRoute = require('./accounts')
app.use('/api', accountRoute)
app.get("/", ()=>{
    console.log("test5")
})

app.listen(3000, ()=>{

})