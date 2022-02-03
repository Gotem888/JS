/**
 * Task 1. Days of the week
 */

 const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',  'Saturday', 'Sunday']
}

const getNameOfDay = (day, lang = 'en') => {
    let dayNum = day-1;
    let result;
    result = namesOfDays[lang][dayNum];
    console.log(result);
}

getNameOfDay(6,'ru');



/**
 * Task 2. Cities and Countries object
 */

const citiesAndCountries ={
    Kyiv: 'Ukraine',
    Washington: 'USA',
    Odessa: 'Ukraine',
    Munich: 'Germany',
    Kharkiv: 'Ukraine',
    'New-York': 'USA',
    Amsterdam: 'Netherlands',
    Berlin: 'Germany',
    Chicago: 'USA', 
    Lisbon: 'Portugal',
    Lviv: 'Ukraine',
    Hamburg: 'Germany'
};

let keys = Object.keys(citiesAndCountries);
let vals = Object.values(citiesAndCountries);
let indexes = [];

let countriesList=[...new Set(Object.values(citiesAndCountries))];

for(let i=0;i<countriesList.length;i++){
   let cntr = countriesList[i];
   let indx = vals.indexOf(cntr);
   while(indx !=-1){
      indexes.push(keys[indx]);
      indx = vals.indexOf(cntr,indx+1);
   }
   
   let countriesData = {};
   countriesData[cntr]=indexes;
   if(countriesData[cntr])countriesData[cntr] =[indexes.sort()];
   indexes=[];
   console.log(countriesData)
}

// possible option
/*
const countriesData = {};

for (const key in citiesAndCountries) {
  // check if property is in the object
  if (!countriesData[citiesAndCountries[key]]) {
    // if not
    // set a new array with initial value
    countriesData[citiesAndCountries[key]] = [key];
  } else {
    // add new value to existing property
    countriesData[citiesAndCountries[key]].push(key);
  }
}
*/


/**
 * Task 3. Calculate Sum Of Minimal Numbers
 */

 const calcSumOfMinNumbers = (arr) =>{
    let min1 = getMinValue(arr);
    function getMinValue (arr){
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<0 || Number.isInteger(arr[i])==false)continue;
            if (min > arr[i]) min = arr[i];
        }
        return min;
    }
    const index = arr.indexOf(min1);
        if (index > -1) {
        arr.splice(index, 1);
        }
    let min2 = getMinValue(arr);
    let result = min1 + min2;
    console.log(result);
 
 };
 calcSumOfMinNumbers([123,-543,34568,123214,1,678,0.5,1.3]);

 // possible option
/*
const calcSumOfMinNumbers = (arr) => {
  const minValue1 = Math.min(...arr);

  const minValue1Index = arr.indexOf(minValue1);

  arr.splice(minValue1Index, 1);

  const minValue2 = Math.min(...arr);

  console.log(minValue1 + minValue2);
};
*/