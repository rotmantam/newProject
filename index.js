const express = require('express')

const bodParser = require('body-parser')

const app = express()

app.get("/", ()=>{
    console.log("test5")
})

app.listen(3000, ()=>{

})