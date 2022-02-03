/**
 * Task1
 * Create a function to find a minimum value of two digits
 */
function getMinValue(...values){
    let result = Math.min(...values);
    console.log(result);
    return result;
}
getMinValue(2, 1, 3, -6, -11, 100, 892)


/**
 * Task2
 * Create a function which join objects
 */

function joinObjects(obj1, obj2){
    // let result = console.log(Object.assign(obj1, obj2)); // in this case result === undefined
    let result = Object.assign(obj1, obj2);
    console.log(result);
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

Object.defineProperty(user, 'toString', {
    enumerable: false, // enumerable is 'false' by default
    value: function () {
        return 'My name is' + this.name + ', ' + 'I am ' + this.age;
    }
});

for (var key in user) console.log(key);

console.log('Hello! ' + user); // 'Hello! My name isJack, I am 18'
