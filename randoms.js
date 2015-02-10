function getIter(){
	return 1000;
}
/*
linear congruential
*/
var a = 11;
var c = 37;
var m = 100;
var currentVal = 0;

function linCongNext(maxValue){
	currentVal = (a * currentVal + c) % m;
	if(maxValue > 1) {
		currentVal = currentVal % maxValue;
	}
	return currentVal;
}

/*
additive congruential
*/
var k = 55;
var b = 31;
var cc = 55;
var m = 65535;
var j = 0;
var arr = [k];
arr[0] = 0;

for(i = 1; i < k; i++) {
	arr[i] = linCongNext(0);
}

function addCongNext(maxValue) {
	j = (j + 1) % k;
	arr[j] = (arr[(j + b) % k] ^ arr[(j + cc) % k]) % m;
	if(maxValue > 1) {
		arr[j] = arr[j] % maxValue;
	}
	return arr[j];
}