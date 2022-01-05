/**
 * Task 2. Dynamic greeting
 */

function greeting(name){
    console.log('Hello, ' + name + ' How are you?');
}

greeting('Valera');
greeting('Anna');
greeting('Alex');

/**
 * Task 3. My lecture object
 */
const lecture={
    Teacher:'Artyoum Vorobiov',
    Subject:'Data Types ',
    dataTypes : " String,Numbers,BigInt,Boolean Type,null Type,Undefined Type,Object Type, Symbol Type"
};
const string = `The third lecture was about ${lecture.Subject}` + `and it was delivered by ${lecture.Teacher}.`+ ` We learned about` + `${lecture.dataTypes}`
console.log(string);