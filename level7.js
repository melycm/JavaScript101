// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(myNum){
    var myArray = []

    for(var i = 0; i < 13; i++) {
        myArray.push(myNum)
    }
    return myArray
}
console.log(finalFunction(45))