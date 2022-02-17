const prompt = require('prompt-sync')();

//xify function//

// console.log(xify("hi there"));

// function xify(str){
//     let strX = "";
//     str.length 
//     for(let count = 0; count < str.length; count++){
//         strX += 'x';
//     }

//     return strX
//  }

//YellingChars function//

// function stringy (str){
//     let strX =""

//     for (let i )

// }

//indexed numbers function//
// function stringy (str){
//     let strX = ""

//     for (let i =  0; i < str.length; i++){
//         strX += i + str[i]

//     }
//     console.log(strX)
// }

// let phrase1 = 'hello';
// stringy (phrase1);

//repeatIt function//

const makeRepeated = (arr, repeats) =>
    Array.from({ length: repeats}, () => arr).flat();

    console.log(makeRepeated([1,2,3], 5)); 