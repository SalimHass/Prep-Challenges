'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    // write your code here
    let index = str.lastIndexOf(' ');
     return str.slice(index +1);
}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here
    let words = str.split(' ');
    return words[words.length -1];
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    // write your code here
    let newStr = str.split(' ');
    let indexI = newStr.indexOf('I')
    let indexAm = newStr.indexOf('am')
    let indexWas = newStr.indexOf('was')
    if (indexI >= 0) {
        newStr.splice(indexI, 1, 'We')
    }
    if (indexAm >= 0) {
        newStr.splice(indexAm, 1, 'are')
    }
    if (indexWas >= 0) {
        newStr.splice(indexWas, 1, 'were')
    }
    return newStr.join(' ');

}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here
    for (let index = 4; index < arr.length; index += 5) {
        arr[index] = arr[index] + ",";
    }
    return arr.join(' ');
}


// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
    let wordsArr = str.split(' ');
    let newArr = [];    
    let letterCount = 1;
    wordsArr.forEach(element => {
        let word = ''
        for (let i = 0 ; i < element.length-1; i++){
            if(element[i]==element[i+1]){
                letterCount++; 
            }else {
                word += `${element[i]}${letterCount}`
                letterCount = 1;
            }
        }
        word += `${element[element.length-1]}${letterCount}`
        newArr.push(word);
        letterCount = 1;
        
    });

    
    return newArr.join(' ');

}



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };