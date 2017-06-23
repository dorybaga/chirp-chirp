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
  // if(sample_text.length === 0){
  //   console.log("is this working");
  //   return counter;
  // }

  //   var keysArr = Object.keys(counter);
  //   var textArr = sample_text.split("");
  //   var counterVal = Object.values(counter);

  //   // var letterCount = [];

  //   // console.log(keysArr);
  //   // console.log(textArr);
  //   // console.log(Object.values(counter));

  //   for (var k = 0; k < keysArr.length; k++){
  //     for (var t = 0; t < textArr.length; t++){
  //       if (keysArr[k] === textArr[t]){
  //         // console.log(keysArr[k]);
  //         counterVal[k]++;

  //         // access counter key at that position and push +1??
  //         console.log(keysArr[k], counterVal[k]);


  //         // counter++
  //         // letterCount.push(keysArr[k]);
  //         // console.log(letterCount);


  //         // return keysArr[k];
  //       }
  //     }
  //   }

    // console.log(sample_text[0]);
    // console.log(sample_text[1]);          // gives me the letter in sample_text at specified position
    // console.log(Object.keys(counter)[0]); // gives me the key from the counter at specified position
    // console.log(Object.keys(counter)[1]);
    // console.log(Object.keys(counter));    // array of the keys

  // console.log(sample_text.split(""));
  // console.log(counter);
  // console.log(Object.keys(counter));


// method 1 (parse as an array) ------------------------------------------------------------

// // set up base case

// if(sample_text.length === 0){
//   return counter;
// }

// // decide how to parse sample_text; currently a is a string
// // parse it as an array

// var textArr = sample_text.split('');

// // how to draw connection between a character and the counter

// if (counter.hasOwnProperty(sample_text[0].toLowerCase())){
//   counter[sample_text[0]]++;
// }
//   return countLetters(counter, sample_text.slice(1, sample_text.length).join());


// method 2 (parse as a string) ------------------------------------------------------------


// set up base case

if(sample_text.length === 0){
  return;
}

// decide how to parse sample_text; currently a is a string
// parse it as a string

sample_text = sample_text.toLowerCase();

// starting at the end and going to the beginning; if a letter or key is in the counter

if (counter.hasOwnProperty(sample_text[sample_text.length - 1])){
  counter[sample_text[sample_text.length - 1]]++;
}

return countLetters(counter, sample_text.slice(0, --sample_text.length));

}


$(document).ready(function(){
  countLetters(counter, sample_text);
  $("#result").html(JSON.stringify(counter));
});

