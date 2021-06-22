const eqArrays = function(arr1,arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  const assertArraysEqual = function(arr1,arr2){
    const result = eqArrays(arr1,arr2)
      if (!result){
          console.log("Uh Oh! There was an issue and the array has been altered");
      }
      else {
          console.log("Congratulations! The original Array Remains intact");
      }
  }

  
const without = function(source,itemsToRemove){
  let newArr = [...source];
  for(let i = 0; i <= newArr.length;i++) {
    for (let values of itemsToRemove){
      if(source[i] === values){
        let removedItem = newArr.indexOf(values);
        newArr.splice(removedItem,1);
      }
    }
  }
  return newArr;
}
