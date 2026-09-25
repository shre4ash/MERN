const res = await fetch("");
const json = await res.json()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/");
 
const User = mongoose.model('Users', {name : String, email : String, password: String});

app.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const exisringUser = await User.findOne({ email: username });
    
    if (exisringUser) {
        return res.status(400).send("Username already exists");
    }
    
    const user = new User({
        name : name,
        email : username,
        password : password
    });
    
    user.save();
    res.json({
        "msg": "User created successfully"
    })

})

app.listen(3001);