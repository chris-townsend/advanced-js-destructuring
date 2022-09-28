/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];

//let John = ages[0];
//let Mary = ages[1];
//let Joe = ages[2];

let [John, Mary, Joe] = ages;
console.log(John, Mary, Joe);

// Destructuring objects

let jobs = {
    Mike: 'designer',
    Jill: 'developer',
    Jack: 'accountant'
};

let {Mike, Jill, Jack} = jobs;

console.log(Mike, Jill, Jack)

// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese']

let [johnNative, johnSecondary] = languages;

console.log(johnNative, johnSecondary);

// using commas at the start skips the first two languages in the array 
let [, , maryNative, marySecondary] = languages;

console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'spanish',
    fourthLanguage: 'german'
};

let {firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax


let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];

let [favourite, secondFavourite, ...others] = fruits;

console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: 'pizza',
    sarah: 'pasta',
    sam: 'cheese',
    anna: 'steak'
}

let {brian, sarah, ...rest} = favouriteFoods;

console.log(brian);
console.log(sarah);
console.log(rest);
