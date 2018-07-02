//Spreading arrays
const numbers = [1,2,3,4,5];

const newNumbers = [6,7,8,1,10];

const printNumbers = (...args) => {
    args.map(number => console.log(number));
};

printNumbers(...numbers, ...newNumbers);

//Spreading objects

const users = {
    name: 'Alex',
    age: 20,

};

const newUsers = {
    ...users,
    gender: 'male'
};

// Rest operator

const filter = (...args) => {
    console.log(args.filter(el => el === 1));
};

filter(...numbers, ...newNumbers);