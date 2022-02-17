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

// const makeRepeated = (arr, repeats) =>
//     Array.from({ length: repeats}, () => arr).flat();

//     console.log(makeRepeated(['Gio'], 5)); 

//reverse function

// function reverse(str){  
//     let reverse = "hello";      
//      for (var i = str.length - 1; i >= 0; i--){         
//        reverse += str[i];  
//      }     
//     return reverse;
//   }

//onlyVowels function//

var getCount
function getCount(str){
    var vowelsCount=0
    var vowels = ["a","e", "i", "o", "u"];
    for (var i=0; i < str.length; i++){
        for (var j=0; j <vowels.length; j++){
            if (str[i]===vowels[j]){
                vowels.Count++;
            }
        }
    }
    return vowelsCount;
}