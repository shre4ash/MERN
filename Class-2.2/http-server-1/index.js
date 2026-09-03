const express = require('express')
const port = 3000
const app = express();
// fs -> filesystem - read files on system, write to files systed

app.get('/', (req, res)=>{
    let ans = 0;


    res.send("Hello from Shreyash")
})

app.listen(port, () => {
    console.log(`Server listening on ht`)
})