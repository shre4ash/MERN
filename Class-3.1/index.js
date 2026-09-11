const express = require("express")

const app = express();
   
app.get("/helath-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "shreyash" && password != "pass") {
        res.status(400).json({"msg" : "Somthing up with your inputs"})
        return
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg": "Somthings up with your inputs"}) 
    }

    //Do something with your kindneys here
    res.json({
        msg: "Your kidney is fine!"
    })
});

app.listen(3000);