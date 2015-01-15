
function maxOfTwoNumbers (a, b){
	if (a < b) {
	    console.log = b + " is the max number";
	}
	else{
		console.log = a + " is the max number";
	}
		
}

 maxOfTwoNumbers(1,2);



function maxOfThree (a, b, c){
 	if (a > b > c) {
 		console.log(a + " is the max number");
 	}
 	else if (b > a > c) {
 		console.log(b + " is the max number");
 	}
 	else {
 		console.log(c + " is the max number");
 	}
}

maxOfThree(1,2,3);

function letter (char){
	var myArray = ["a", "e", "i", "o", "u"]
	if (myArray.indexOf(char)=== -1){
		console.log("false")
	}
    else {
    	console.log("true")
    }
}

 letter("d");

var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    alert(myStringArray[i]);
    //Do something
}

var array1 = [1,2,3];



function sumArray (array) {
	var total = 0;
	for (var i=0; i<array.length; i++); {
    	total+=array[i]	
	}
    return console.log(total);
 }
    sumArray(array1);



var array2 = [2,3,4];

function multiplyArray (array) {
	var total = 1;
	for (var i=0; i<array.length; i++) {
		total *= array[i];
	}
	return console.log(total);
}	
	multiplyArray(Array2);








