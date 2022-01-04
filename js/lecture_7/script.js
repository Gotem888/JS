/**
 * Task 1. Vowels Count
 */
const findVowelsCount = (inputString) =>{
    console.log(inputString.match(/[aeiou]/gi).length);
}
findVowelsCount('My reeeealy long test string about itself');


/**
 * Task 2
 */

const createArraysWithObjects = (name1, name2, ...name_n) =>{
    const namelist = [name1, name2, ...name_n];
    const result = namelist.map((element,index) =>({name: element, id: index+1}));
    console.log(result);
}

createArraysWithObjects('Slava', 'Alex', 'Vlad', 'Zina', 'Olga');
    

/**
 * Task 3. filterFunction
 */


const filterArray = (someNumArr, conditNumber) =>{
    let result = someNumArr.filter((element,index) => element > conditNumber);
    console.log(result);
}

const someNums = [4,1,8,11,86,2,6,14,43,6,7,9];
filterArray(someNums, 11);