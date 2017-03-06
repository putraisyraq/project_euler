var fibo = [1,2];
var start = 0;

//fibo[fibo.length] will get the last element of the array

while (fibo[fibo.length-1] < 4000000) {
	fibo.push(fibo[fibo.length -1] + fibo[fibo.length -2])
}

//remove last arary element since it is more than 4mil
fibo.pop()

//logs the elements
console.log(fibo)

//Adding values of all array elements AND IF the elements are even number
for (var i = 0; i < fibo.length; i++) {
	if (fibo[i] % 2 === 0) {
		start += fibo[i];
	}
}