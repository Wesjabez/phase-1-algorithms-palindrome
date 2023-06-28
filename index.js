function isPalindrome(word) {
  let array = word.split('');
  let backwards = array.reverse();
  let reversed = backwards.join('');

  if(reversed === word){
  console.log(true);
  }else {
    console.log(false);
  }
}
isPalindrome('mum');

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs

