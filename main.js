const prompt = require('prompt-sync')();

console.log(xify("hi there"));

function xify(str){
    let strX = "";
    str.length 
    for(let count = 0; count < str.length; count++){
        strX += 'x';
    }

    return strX
 }