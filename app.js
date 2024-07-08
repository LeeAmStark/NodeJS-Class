const password_generator = require('generate-password');

const generated_password = password_generator.generateMultiple(2,{
    length: 50,
    uppercase: false,
    symbols: false,
});


const numArray = [91, 32, 90, 23, 62];

module.exports = {
    generated_password,
    numArray
}