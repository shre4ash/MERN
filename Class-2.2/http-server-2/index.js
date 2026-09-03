const express = require('express') 
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.json())

// app.get("/route-handler", (req, res) => {
//     // headres, body query parameters
//     // do machine learning model
   
//     res.json({
//         name: "Shreyash Kumbhar",
//         age: 21
//     })
// })


// app.post('/conversation', (req, res) => {
//    console.log(req.body);
//    console.log(req.headers["authorization"])
//    res.send({
//         msg: "2 + 2 = 4" 
//    })
// })

app.post('/backend-api/conversation', (req,res) => {
    const message = req.body.message;
    console.log(message);
    
    res.json({
        output: "2 + 2 = 4"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})