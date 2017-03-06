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

//Summing elements within array
for (var i = 0; i < number.length; i++) {
	numberLatest += number[i];
}