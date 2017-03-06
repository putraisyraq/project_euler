//Naming and valueing variables
var number = [];
var numberLatest = 0;

/*REMEMBER: Below 1000, not including 1000!*/

for (var i = 0; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		number.push(i);
	}
}

//Check array values
console.log(number);

//Summing values within array	//array.length === A Number, representing the number of elements in the array object.
	//This is from W3S sample
for (var i = 0; i < number.length; i++) {
	numberLatest += number[i];
}

	//This is from stackOverview.. i think. Also works, but I don't understand the syntax and flow.
for (var i = number.length; i--;) {
	numberLatest += number[i];
}


	//NOTES
	//---Sample of how to sum array---
	var sum = 0;
	arr = [1,2,3,4,5];

	for (var i = arr.length; !!i--;){
		sum += arr[i];
		}



	//sampl from w3

	text += cars[0] + "<br>"; 
	text += cars[1] + "<br>"; 
	text += cars[2] + "<br>"; 
	text += cars[3] + "<br>"; 
	text += cars[4] + "<br>"; 
	text += cars[5] + "<br>";

	//above equals to below
	for (i = 0; i < cars.length; i++) { 
	    text += cars[i] + "<br>";
	}


	// A sample solutions from fellow TOP learner (Simple AF)
	var sum = 0;
	for (i = 0; i < 1000; i++){
	    if (i % 3 === 0||i % 5 ===0){
	        sum += i;
	    }
	}
	console.log(sum)