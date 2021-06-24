const assertEqual = function(actual, expected) {
    if (actual === expected ) {
      console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
    if (object1.keys(object1).length != object1.keys(object2).length) {
        return false;
    } else {
        for (let key in object)
        {
            if ((array.isArray(object1[key]) && array.isArray(object2[key])))
            {
                if (eqArrays(object1[key], object2[key]) === false)
                {
                    return false
                }
            } else {
                if (object1[key] !== object2[key]) {
                    return false;
                }
            }
            return true;
        }
    }

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc)};
