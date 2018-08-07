let testStringRGB = "rgb(147, 143, 180)";
let testStringHex = "#938fb4";

const answer = (str) => {
	let outputStr = ""
	if(str.charAt(0) === "#") {
		let firstInt = parseInt(str.substring(1, 3), 16);
		let secondInt = parseInt(str.substring(3, 5), 16);
		let thirdInt = parseInt(str.substring(5), 16);
		outputStr = `rgb(${firstInt}, ${secondInt}, ${thirdInt})`;
	}
	else {
		str = str.substring(4, str.lastIndexOf(")"));
		str = str.replace(/,/g, "");
		str = str.split(" ");
		let firstHex = parseInt(str[0]).toString(16).padStart(2, "0");
		let secondHex = parseInt(str[1]).toString(16).padStart(2, "0");
		let thirdHex = parseInt(str[2]).toString(16).padStart(2, "0");
		outputStr = `#` + firstHex + secondHex + thirdHex;
	}
	return outputStr;
}

let answerStr = answer(testStringHex);