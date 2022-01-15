
/**
 * Task 1. Days of the week
 */

 const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',  'Saturday', 'Sunday']
}

const getNameOfDay = (day, lang) => {
    let dayNum = day-1;
    let result;
    if (lang == 'ru')result = namesOfDays.ru[dayNum];
    else result = namesOfDays.en[dayNum];
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