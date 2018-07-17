
function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
    var one = "hello";
    var two = " world";

    return one + two;
}

function lvl3exercise2() {
	// Create a "hello" and a 12, return the concatenation of the two
    var one = "hello ";
    var two = 12;

    return one + two;
}

function lvl3exercise3() {
	// Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    var one = 12;
    var two = one.toString();
    return two;
}

function lvl3exercise4() {
	// Create a "hello world!" string. Return the length of the string
    var hello = "hello world!";
    return hello.length
}

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
    var hello = "hello world!";
    var indexWorld = hello.indexOf('world');

    return indexWorld
}