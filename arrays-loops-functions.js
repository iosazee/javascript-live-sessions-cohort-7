// Arrays

// create a cities array
            //    0          1         2         3
const cities = ['London', 'Madrid', 'Paris', 'Lisbon'];
// display the length of the cities array
// console.log(cities.length);

// show index of an element within the array
// console.log(cities[0]);

// push a new element to the array
// console.log(cities, 'before push');
// cities.push('Glasgow');
// console.log(cities, 'after push');


// pop that new element off the end of the array
// console.log(cities, 'before pop');
// cities.pop();
// cities.pop();
// console.log(cities, 'after pop');


// shift from array (remove)
// console.log(cities, 'before shift');
// cities.shift();
// console.log(cities, 'after shift');

// unshift adds to array
// console.log(cities, 'before unshift');
// cities.unshift('Cardiff');
// console.log(cities, 'after unshift');

// retreive a value using the index from the array
// console.log(cities[0]);

// change the value of an element within the array
// cities[0] = 'Cardiff';
// console.log(cities);


// Loops
// for loops
// e.g create a loop which runs 5 times printing out the iterator and a message of what iteration the loop is at
for(let i = 0; i < 5; i += 1) {
    // console.log("The current iteration is " + i);
}
// e.g. loop over array of cities and print out a welcome message for each city
for(let i = 0; i < cities.length; i++) {
    if (cities[i]  === 'Lisbon') {
        // console.log('Hello your destination is ' + cities[i]);
    } else {
        // console.log('Welcome to ' + cities[i]); 
    }
}
// level 2. add a conditional to check if the city is Lisbon and print a different message

// while loops
// e.g. loop 5 times each time incrementing
// show drawbacks of while loops
let iterator = 0;
while (iterator < 5) {
    // console.log('the current iteration is ' + iterator)
    iterator += 1;
}

// Functions
// console.log inside functions
// e.g. create a function which displays a welcome message sending in a name parameter
// function definition (where the function is created)

// parantheses in function known as parameters
// function welcomeMessageGenerator (name) {
//     console.log(`Welcome ${name}`);
//     // console.log("Welcome " + name);
// }

// invoking the function (where the function is called)
// content inside parantheses below are known as arguments
// welcomeMessageGenerator('Peter');
// welcomeMessageGenerator('Jane');


// return value from function and wrap in console.log
// e.g. change the function to console.log the return value of the function
function welcomeMessageGenerator (name) {
    return `Welcome ${name}`;
}


// console.log(welcomeMessageGenerator('Peter'));
// when using return it brings the result from the function so we can store it in a variable
const petersWelcomeMessage = welcomeMessageGenerator('Peter');
console.log(petersWelcomeMessage);

const wendysWelcomeMessage = welcomeMessageGenerator('Wendy');
console.log(wendysWelcomeMessage);

console.log(`${petersWelcomeMessage} and ${wendysWelcomeMessage}`)


// e.g. use the return value of the function and store it in a variable to use it later on
// create a favourite food function that receives a favourite food parameter it will return a message stating what the favourite food is. Store this in a variable
// print out the result of the favourite food variable and the welcome message variable.

// combine function and conditionals
// add a conditional inside the favourite food condition of your choice

// combine function, loop and array
// e.g create a cityWelcomeMessage function which uses the cities array and prints out a welcome message for each city

// combine function, loop, array and conditional
// e.g. add an if statement to print out a different message for the city of your choice.