function lvl6exercise1(num) {
	// Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'  
    if(num == 1) {
        return 'Hello'
    }
    else if(num ==2) {
        return 'world'
    }
    else {
        return 'bye'
    }
}
var num = 3;
console.log(lvl6exercise1(num))

function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
	var array = [];
    var h = "hello";

    for(var i = 0; i < 10; i++) {
        array.push(h)
    }
    return array
}
// console.log(lvl6exercise2())

function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];

    while(array.length > 0) {
        array.pop();
    }
    return array
}
// console.log(lvl6exercise3())