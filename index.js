function isPalindrome(word) {
  // Write your algorithm here
  const palidrome = word.split("").reverse().join("");
  const myWord =word === palidrome ? true : false;
  return myWord;
}

/* 
  Add your pseudocode here

  const palidrome = word.reverse()
  if (palidrome === word) {
    return
  }else{
    return false
  }
*/

/*
  Add written explanation of your solution here
  get your word
  reverse and  compare
  if word equals your original 
  return true else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
