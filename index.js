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
    // console.log('welcome to the party')
} else if (isAdult === false && isAttendingParty === true) {
    // console.log('you are not old enough')
} else if (isAttendingParty === false && isAdult === true) {
    // console.log('you were not invited to the party')
} else {
    // console.log('you are not invited to the party and you are not old enough')
}

// create a password and email checker
// Receive the password from the user ( user input password variable)
// Compare it to the stored password variable
// receive email from the user (user email variable)
// compare it to the stored email variable

const userInputEmail = 'john@mail.com';
const userStoredEmail = 'peter@mail.com';

const userInputPassword = 'test';
const userStoredPassword = '123';


// if the password and email matches user can login
if (userInputEmail === userStoredEmail && userInputPassword === userStoredPassword) {
    console.log('user can login')
}
// if the email is correct but the password does not match ('wrong password')
else if (userInputEmail === userStoredEmail && userInputPassword !== userStoredPassword) {
    console.log('wrong password')
}
// if the email is wrong and the password is right ('this email does not exist in our database')
else if (userInputEmail !== userStoredEmail && userInputPassword === userStoredPassword) {
    console.log('this email does not exist in our database')
}
// both email and password are wrong ('this email and password does not exist in our database')
else {
    console.log('this email and password does not exist in our database')
}
 
 


// use || as well as &&
// more than, less than operators for numbers
// boolean conditionals
// ternary operator
// switch statements
