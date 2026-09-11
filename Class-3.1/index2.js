// What is Zod and schema parsing


const express = require('express');
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number()); //Jargons

// {
//     email: string => email
//     password: atleast 8 letters
//     contry: "IND" , "US"
// }

const schema = zod.object({
    email: zod.string(),
    password: z.string(),
    country:z.literal("IN").or("US"),
    kidneys: z.array(z.number())
})

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys) //jargons
    if(!response.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
    res.send({
        response
    })
    } 
});

app.listen(3002);