/**
 * Task 2. Searching variables
 */

const initialString ='Hello world';

function searchSubStringIndex(initialString, searchingSubstring){
    const string1 = 'There is no ' + searchingSubstring + ' in the initialString';
    let result = initialString.indexOf(searchingSubstring);
    if(result>=0) {
        console.log(result);
        return;
    }
    // you can skip else here
    console.log(string1);
}

searchSubStringIndex(initialString, 'world');
searchSubStringIndex(initialString, 'z');

/**
 * Task 3. Substrings amount
 */

function searchSubStringAmount(initialString, searchingSubstring){
    const string1 = 'There is no ' + searchingSubstring + ' in the initialString';
    let result = initialString.split(searchingSubstring).length-1;
    if(result>0) {
        console.log(result);
        return;
    }
    console.log(string1);
}

searchSubStringAmount(initialString,'l');
searchSubStringAmount(initialString,'g');