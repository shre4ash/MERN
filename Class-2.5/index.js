// creating an HTTP server
// express
// node default liabrary => no
const express = require("express");
const app = express();

var users = [{
    name: "jhon",
    kidneys: [{
        healthy: false
    }]
}];  

// request and  response 
app.get("/", (req, res) => {
    const jhonkidneys = users[0].kidneys;
    const numberOfKidneys = jhonkidneys.length;
    //filter
    let numberOfHelthyKidneys = 0;
    for (let i = 0; i<jhonkidneys.length; i++){
        if (jhonkidneys[i].healthy) {
            numberOfHelthyKidneys = numberOfHelthyKidneys + 1;
        }
    }
    const numberOfUnhelthyKidneys = numberOfKidneys - numberOfHelthyKidneys;
    res.json({
        jhonkidneys,
        numberOfHelthyKidneys,
        numberOfUnhelthyKidneys
    })
})

app.use(express.json());

app.post("/", (req , res) => { 
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", (req, res) => {
    for(let  i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", (req, res) => {
    const newkidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy) {
            newkidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newkidneys;
    res.json({msg: "Done"})
})


app.listen(3000);