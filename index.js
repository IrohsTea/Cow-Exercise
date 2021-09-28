const cowsay = require("cowsay");
const userInfo = require('./informations.js');

console.log(cowsay.say({
    text : `Hi, my name is ${userInfo.userName} and I'm from ${userInfo.userCampus}`,
    e : "oO",
    T : "U "
}));


