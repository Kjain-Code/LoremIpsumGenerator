function generateLorem() {
    // This function generates a random Lorem Ipsum text based on the number of words specified by the user.
    // This function will be called when the user clicks the "Generate" button.
    // It will read the number of words from the input field, generate that many random words
  const words = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
    "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
    "incididunt", "ut", "labore", "et", "dolore", "magna",
    "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis",
    "nostrud", "exercitation", "ullamco", "laboris", "nisi",
    "aliquip", "ex", "ea", "commodo", "consequat", "duis",
    "aute", "irure", "reprehenderit", "voluptate", "velit",
    "esse", "cillum", "eu", "fugiat", "nulla", "pariatur"
  ];

  // Here we create an array name words that contain common loren ipsum words . 
  const wordCount = parseInt(document.getElementById("wordCount").value);

  // document.getElementById("wordCount") is used to get the value of the input field with id wordCount.
  // parseInt() is used to convert the value to an integer.
  // Result is stored in variable wordCount.



  if (isNaN(wordCount) || wordCount <= 0) {
    alert("Please enter a valid number of words.");
    return;
  }

// Here we check if the wordCount is a valid number and greater than 0.
// If not, we alert the user and return from the function.


  let output = "";

// Create an empty string variable output to store the generated Lorem Ipsum text. 

  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    output += words[randomIndex] + " ";
  }

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
// Math.floor() rounds down the random number to the nearest integer.
// This for loop runs wordCount times. In each iteration, it generates a random index to select a word from the words array.
// words[randomIndex]` picks a random word from the array.
// output += ... + " "` adds the word and a space to the `output` string.
// The selected word is then appended to the output string followed by a space.


  document.getElementById("Output").value = output.trim();
}

// document.getElementById("Output")` gets the textarea element.
// value = ...` sets its value to the generated text.
// - `output.trim()` removes any extra space at the end.