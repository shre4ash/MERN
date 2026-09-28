//- Write a function that takes in a username and password ans returns aJWT token with the username encoded inside an object, should return null if the username is not a alid email or it hte password is less than 6 character. Try using the zod library here
//- Write a function that takes a jwt as input and return true if the jet can be DECODED (not verifed). Return false otherwise
//- Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherwise
//- To test, go to the 02-jwt folder and run `npx jest ./tests`


const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const zod = require('zod')

const emailSchema = zod.string().email();
const PasswordSchema = zod.string().min(6);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = PasswordSchema.safeParse(password); 
    if (!usernameResponse.success || !passwordResponse.success) {
        return null
    }

    const signature = jwt.sign({
        username
    }, jwtPassword);

    return signature; 
}

function verifyJwt(token) {
    let ans = true;

    try{
        jwt.verify(token, jwtPassword);
    } catch(e) {
        ans = false;
    }
    return ans;
}

function decodeJwt(token) {
    // true or false
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }

}