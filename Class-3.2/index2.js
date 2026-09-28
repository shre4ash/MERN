const jwt = require('jsonwebtoken')

// decode, verify, generate

const value = {
    name: "Shreyash",
    accountNo: 9561145929
}

//sign ans not generate
//  const token = jwt.sign(value, "secret");
//  console.log(token);

 const verifiedValue = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2hyZXlhc2giLCJhY2NvdW50Tm8iOjk1NjExNDU5MjksImlhdCI6MTc5MDU3Mzg0MH0.JEXQAlEYpECV2Z2MFhM1-6Z4g0gc8EDJ-2JPRfsk8A4", "secret")
console.log(verifiedValue)
// this token has been generated using this secret, and hence this token can only be verified using this secret
// this is chequebook

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
// .eyJuYW1lIjoiU2hyZXlhc2giLCJhY2NvdW50Tm8iOjk1NjExNDU5MjksImlhdCI6MTc5MDUxOTY0NX0.
// yTIBxwIHB2MA8JMr1VVcaPQJtGWLsjNOXkvFDWJSO10