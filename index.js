// Topics to cover
// Introduce conditional statements and pseudocode

// if (true) {

// } else {

// }

const bananasCount = 2;
const strawberriesCount = 4;
// > , < , >= , <=  Only use these with numbers
if(bananasCount > strawberriesCount) {
    // console.log('we have more stawberries than bananas');
} else {
    // console.log('we have more bananas than strawberries')
}

// Create a conditional that checks the person is an adult and is attending party
// Create two variables isAdult and isAttendingParty
// if both are true welcome them to the party
// if they are are not an adult say you are not old enough
const isAdult = false;
const isAttendingParty = false;
// && - Ambersand (and)
// || - double pipe (or)
if (isAdult && isAttendingParty) {
    console.log('welcome to the party')
} else if (isAdult === false && isAttendingParty === true) {
    console.log('you are not old enough')
} else if (isAttendingParty === false && isAdult === true) {
    console.log('you were not invited to the party')
} else {
    console.log('you are not invited to the party and you are not old enough')
}

 
 


// use || as well as &&
// more than, less than operators for numbers
// boolean conditionals
// ternary operator
// switch statements
