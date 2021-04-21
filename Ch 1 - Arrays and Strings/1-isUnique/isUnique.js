//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
// xyzvakkl
function isUnique(str) {
  //code
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
}

module.exports = isUnique;
