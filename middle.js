// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = function(array1,array2){
  const result = eqArrays(array1,array2)
  if (eqArrays(array1, array2)) {
      console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    } 
  };
  
  const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    } else {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
          return console.log(false);
        }
      }
    }
    return console.log(true);
  };
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    if (array.length <= 2) {
      return [];
    }
    if (array.length % 2 !== 0) {
      let oddMiddle = [];
      oddMiddle.push(array[Math.floor(array.length / 2)]);
      return oddMiddle;
    } else {
      let evenMiddle = [];
      evenMiddle.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
      return evenMiddle;
    }
  }
middle([1]) // => []
middle([1, 2]) // => []
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
