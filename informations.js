const userName = "Roman";
const userCampus = "Lille";

function displayName() {
  console.log(`Hello, I'm ` + userName + ` from ` + userCampus);
}

module.exports = {
    userName : userName,
    userCampus : userCampus,
} ;
