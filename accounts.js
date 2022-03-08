const express = require('express')
const router = express.Router()

const arr = []
let id = -1
router.get('/hello', (req,res)=>{
    return res.status(200).json({
        arr

    })
})
router.post('/newUser', (req, res)=>{
    const namee = req.body.name
    arr.push(
        {
            Id : id+=1,
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }
    )
    return res.status(200).json({
         name: `Your name is ${namee}`,
         password: req.body.password
    })
})  

router.post('/login', (req, res)=>{
    for (let j = 0; j < arr.length; j++){
        if (req.body.password == arr[j].password && arr[j].email == req.body.email){
            return res.status(200).json({
                response: `Welcome ${arr[j].name}`
            })
        }
    }
    return res.status(200).json({
        response: 'Failed'
    })

})
module.exports = router 