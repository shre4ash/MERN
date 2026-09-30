const express = require('express');

const app = express();

app.get('/sum', (req, res) => {
    const a  = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.get('/intrest', (req, res) => {
    const principle = parseInt(req.query.principle);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const intrest = (principle * rate * time) / 100;
    const total = principle + intrest;
    res.send({
        total: total,
        interest: intrest,
    })

});

app.listen(8080);