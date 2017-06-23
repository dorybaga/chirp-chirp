var sample_text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo \
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse \
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non \
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var counter = {
  "a" : 0,  "b" : 0,  "c" : 0,  "d" : 0,
  "e" : 0,  "f" : 0,  "g" : 0,  "h" : 0,
  "i" : 0,  "j" : 0,  "k" : 0,  "l" : 0,
  "m" : 0,  "n" : 0,  "o" : 0,  "p" : 0,
  "q" : 0,  "r" : 0,  "s" : 0,  "t" : 0,
  "u" : 0,  "v" : 0,  "w" : 0,  "x" : 0,
  "y" : 0,  "z" : 0
};

function countLetters(counter, sample_text){
  if(sample_text.length === 0){
    return counter;
  }

    var keysArr = Object.keys(counter);
    var textArr = sample_text.split("");
    console.log(keysArr);
    console.log(textArr);

    for (var k = 0; k < keysArr.length; k++){
      for (var t = 0; t < textArr.length; t++){
        if (keysArr[k] === textArr[t]){
          // increment keysArr[i] +1
          console.log(keysArr[k]);
          // return keysArr[k]++;
        }
      }
    }

    // console.log(sample_text[0]);
    // console.log(sample_text[1]);          // gives me the letter in sample_text at specified position
    // console.log(Object.keys(counter)[0]); // gives me the key from the counter at specified position
    // console.log(Object.keys(counter)[1]);
    // console.log(Object.keys(counter));    // array of the keys

  // console.log(sample_text.split(""));
  // console.log(counter);
  // console.log(Object.keys(counter));

}

// function countLetters(counter, text){
//   console.log(text);
//   if(text.length === 0){
//     return counter;
//   }

//   counter[text[0]] += 1;

//   return countLetters(counter, text.slice(1, text.length));
// }

// var result = countLetters(counter, 'wuuuut');
// console.log(result);


$(document).ready(function(){
  countLetters(counter, sample_text);
  $("#result").html(JSON.stringify(counter));
});

