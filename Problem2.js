let testArray = [1,2,3];

const answer = (array, target) => {
	let inputArray = array.slice();
	let isSumFound = false;
	let answerArray = [];
	for (let i = 0; i < inputArray.length && !isSumFound; i++) {
		for (let j = 0; j < inputArray.length; j++) {
			if(i !== j) {
				let tempSum = inputArray[i] + inputArray[j];
				if(tempSum === target) {
					answerArray = [inputArray[i], inputArray[j]];
					isSumFound = true;
				}
			}
		}
	}
	return answerArray;
}

let answerArray = answer(testArray, 4);