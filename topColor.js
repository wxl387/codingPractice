//------------------------------------------
//build input in subarray form and combine in an array
var inputArray = process.argv;
var tempArray1 = [];
var tempArray2 = [];
var tempArray3 = [];
var sumArray = [];

var checkPoint = inputArray.length / 3;

for (var i = 2; i < inputArray.length; i++) {
	if (i < 1 + checkPoint) {
		tempArray1.push(inputArray[i]);
	} else if (i < 2 * checkPoint) {
		tempArray2.push(inputArray[i]);
	} else if (i < 3 * checkPoint) {
		tempArray3.push(inputArray[i]);
	}
	
}

sumArray.push(tempArray1, tempArray2, tempArray3);
//check input form
console.log(sumArray);


//------------------------------------------
//start counting in here
var startArray = sumArray.toString().split(",");

var counter = 0;
var summary = [];

for (var j = 0; j < startArray.length; j++) {
	counter++;


	for (var k = j + 1; k < startArray.length-j; k++) {
		
		if(startArray[j] === startArray[k]) {
			counter++;
			startArray.splice(k, 1);
			k--;	
		}
	}

	var tempHolder = {color: startArray[j], count: counter};
	summary.push(tempHolder);
	counter = 0;
}
//list all color and their counts
// console.log(summary);
//-----------------------------------------
//output the color with the maximum counts
//find the max count
var countArr = [];

for (var i = 0; i < summary.length; i++) {
	countArr.push(summary[i].count);
}

var countMax = Math.max.apply(Math, countArr);

//find the color which has the max count
for (var j = 0; j < summary.length; j++) {
	if (summary[j].count === countMax) {
		console.log(summary[j].color);
	}
}

//-----------------------------------------
//find() and dictionary()
//var variable = value;
////variable: color name,
////value: count