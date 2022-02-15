'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    var arr = str.split(' ');
    var out ;
    var result;
    if(arr.length%2==1){
        out = Math.round(arr.length/2)+1;
        result=arr[out].length
    }else{
        out = arr.length/2
        result = arr[out].length;
    }
    return result;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let n1=str1.split('').sort();
    let n2=str2.split('').sort();

     if(n1.length != n2.length){
         return false;
     }
     for(let i = 0 ;i<n1.length;i++){
         if(n1[i]!=n2[i]){
            
             return false
         }
     }
     return true

}
 
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    for(let i = 0 ; i <arr.length; i++){
        if(arr[i]==int){
            return i ;
        }
        if (arr[i]> int){
            return i;
        }
    }
    return arr.length
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };