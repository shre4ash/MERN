const zod = require('zod');

function validateInput(obj) {
    const shcema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

     const response = schema.safeParse(obj);
     console.log(response);
}


app.post('/login', (req,res) => {
    const response = validateInput(req.body)
    if (!response.success) {
        res.json({
            msg: "Your inputs are invalid"
        })
        return
    }
})