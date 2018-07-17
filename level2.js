function lvl2exercise1(num1, num2) {
    // Return the sum of num1 and num2
    var num1 = 5;
    var num2 = 5;
    var num3 = num1 + num2;
    return num3
}

function lvl2exercise2(num1, num2) {
	// Return the difference of num1 and num2
    if (num1 > num2)
        return num1-num2
    else
        return num2-num1
}

var output = lvl2exercise2(7, 24)
// console.log(output);

function lvl2exercise3(num1, num2) {
	// Return the multiplication of num1 and num 2
    var num1 = 3;
    var num2 = 4;
    return num1 * num2;
}

function lvl2exercise4(num1, num2) {
	// Return the division of num1 and num2
    var num1 = 10;
    var num2 = 5;
    return num1 / num2
}

function lvl2exercise5(num1) {
	// Add 2 to num1 using += and return it
    num1 = 4
    num2 = num1 += 2
    return num2
}
