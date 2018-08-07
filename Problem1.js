let testArray1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let testArray2 = [1, "2", "3", 2]

const answer = (array) => {
	let inputArray = array.slice();
	let answerArray = [];

	inputArray.sort((a, b) => a - b)
	while(inputArray.length > 0) {
		let subArray = inputArray.filter(num => { return num === inputArray[0]});
		inputArray = inputArray.slice(subArray.length);
		if(subArray.length === 1) {
			subArray = subArray[0];
		}
		answerArray.push(subArray);
	}

	//Bonus Problem
	let numArray = answerArray.filter(num => { return typeof num === 'number'});
	let strArray = answerArray.filter(num => { return typeof num === 'string'});
	if(strArray.length > 0) {
		return [numArray, strArray];
	}
	else {
		return answerArray;
	}
}
let answerArray1 = answer(testArray1);
let answerArray2 = answer(testArray2);
