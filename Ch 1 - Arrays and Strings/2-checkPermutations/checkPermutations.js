//Given two strings, write a method to decide if one is a permutation of the other.
// racecar, e
const checkPermutations = (str1, str2) => {
  //copy the string for mutation
  let copy2 = str2.slice();
  //Please code here
  let counter = 0;
  for (let i = 0; i < str1.length; i++) {
    if (copy2.includes(str1[i])) {
      counter++;
      copy2 = copy2.replace(str1[i], '');
    }
  }
  if (counter === str1.length && copy2.length === 0) {
    return true
  }
  return false
};

module.exports = checkPermutations;
