// Wrap the entire contents of script.js inside of an IIFE
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array and say either 'Hello' or 'Good Bye'
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the first letter to lower case 'j'
    if (firstLetter === 'j') {
      // If the first letter is 'j', call byeSpeaker's 'speak' method
      byeSpeaker.speak(names[i]);
    } else {
      // If the first letter is not 'j', call helloSpeaker's 'speak' method
      helloSpeaker.speak(names[i]);
    }
  }
})();
