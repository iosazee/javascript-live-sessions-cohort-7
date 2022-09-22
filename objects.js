// Objects & Functions
// Key & Value Pair
// Define a user object (name, age, nationality)
const cities = ['Paris', 'Lisbon', 'London'];

const user = {
    name: 'Peter',
    age: 40,
    nationality: 'American',
    address: {
      street: 'street 101',
      city: 'paris',
      country: 'france'  
    }
};

// console.log(user.age);
// Add a property
// console.log('before gender update', user);
user.gender = 'male';
// console.log('after gender update', user);

user.nationality = 'british';
// console.log('after nationality change', user);

// nested object (address)
// console.log(user.address.street);
user.address.street = '202 street';
// console.log(user.address.street);




// function on object (return name and age message)
const peter = {
    name: 'Peter',
    age: 40,
};

const jane = {
    name: 'Jane',
    age: 60,
    nationality: 'French'
};

function nameAgeMessageGenerator (user) {
    // console.log(`Welcome ${user.name} your age is ${user.age} 
    // and your nationality is ${user.nationality}`)
}

nameAgeMessageGenerator(peter);
nameAgeMessageGenerator(jane);


// loop over object (for in loop)
// create an array of objects (users array)
const users = [
    { name: 'Peter', age: '40'},
    { name: 'Jane', age: '20'}
]
// loop over array of objects
for(let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}

// console.log(users.length);