// Question 1
function maxOfTwoNumbers(num1, num2) {
	var largest;
	if(num1 > num2) {
	largest = num1 
	} else {
	largest = num2
 }
 	return largest;
}

maxOfTwoNumbers(12, 90);

// Question 2
function maxOfThree(num1, num2, num3) {
var largest = Math.max(num1, num2, num3);
return largest
}

maxOfThree(8, 9, 10);

// Question 3
// function isCharacterAVowel(x) {
// 	var vowel = ["a", "e", "i", "o", "u"];
	
// 	for(var i = 0; i < vowel.length; i++) {
// 		if(letter == vowel[i]) {
// 			return true;
// 		} else {
// 			return false;
// 	}
// }
// }

// Final Answer
function isCharacterAVowel(x) {
	if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
		return true;
	} else {
		return false;
	}
}

isCharacterAVowel("x");


// - - - - -- - - - -- - 
// Question 4
function sumArray(sumNums) {
 var total = 0;
 for(var i = 0; i < sumNums.length; i++) {
 total = total + sumNums[i];
 // return 10;
}
return total;
}

sumArray([1,2,3,4]);

// Question 4
function multiplyArray(sumNums) {
total = 1;
for(var i = 0; i < sumNums.length; i++) {
	total = total * sumNums[i];
// return 24;
}
return total;
}

multiplyArray([1,2,3,4]);


// - - - - -- - - - -- - 

// Question 5
var numberOfArguments = function(sunNums){
  	return arguments.length;
};

numberOfArguments(1, 2, 3);


// Question 6
var reverseString = function(word){
   return word.split("").reverse().join("");
};

reverseString("stuff");


// Question 7
function findLongestWord(arrayWords) {
  longest = 0;
  for(var i = 0; i < arrayWords.length; i++) {
  	if (arrayWords[i].length > longest) {
		longest = arrayWords[i].length;
  }
 }
  return longest;
}

findLongestWord(["sun", "moon", "stars"]);

// Question 8
function filterLongWords (arrayWords, num) {
  	longChar = [];
  	for(var i = 0; i < arrayWords.length; i++) {
  		if(arrayWords[i].length > num) {
  			longChar.push(arrayWords[i]);
  	}
  }
  return longChar;
}

filterLongWords(["sun", "moon", "stars"], 3);

// Bonus 1
// (hint: `prototype`)
// var reverseString = function(GA){
//    return word.split("").reverse().join("");
// };

// reverseString("General" + " Assembly");

// COME BACK 

// Bonus 2
function charactersOccurencesCount() {
  
}

