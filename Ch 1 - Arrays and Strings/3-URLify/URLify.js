//Write a method to replace all spaces in a string with '%20'.

const URLify = (str) => {
  //You write code here
  return str.split(' ').join('%20');
}

module.exports = URLify;
