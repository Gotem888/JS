/**
 * Task1
 * Create a function to find a minimum value of two digits
 */
function getMinValue(value1, value2, ...value_n){
    let result = console.log(Math.min(value1, value2, ...value_n));
    return result;
}
getMinValue(2, 1, 3, -6, -11, 100, 892)


/**
 * Task2
 * Create a function which join objects
 */

function joinObjects(obj1, obj2){
    let result = console.log(Object.assign(obj1, obj2));
    return result;
}
let obj1 = {name: 'Joe'};
let obj2 = {age: 25};

joinObjects(obj1, obj2)


/**
 * Task3
 * Create an object with two hidden methods
 */

const user ={
    name: 'Jack',
    age:18
};

Object.defineProperty(user, 'name', {enumerable: false});
let car = Object.values(user);

console.log('My name is ' + user.name + ', I am ' +  car);
console.log(car * 10);