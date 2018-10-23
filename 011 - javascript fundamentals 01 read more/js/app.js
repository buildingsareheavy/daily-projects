console.log("app.js is working and loaded at the bottom of <body>");

// This is written in an IIFE, so it doesn't cloud the global scope.
// This also prevents accessing variables within the IIFE and the function is executed immediately.
(function() {
  // first we declare all variables
  var newLink = document.createElement("a");
  var paragraphContainer = document.getElementById("read-more");
  var allParagraphs = paragraphContainer.getElementsByTagName("p");
  var firstParagraph = allParagraphs[0];

  // second we declare all functions
  function displayChange(display) {
    for (var i = 0; i < allParagraphs.length; i++) {
      var para = allParagraphs[i]; // needs to be called inside the function because it relies on the variable 'i'.

      if (i === 0) {
        continue; // skip the 1st one, but continue running everything else
      }
      para.style.display = display; // the variable inside displayChange will equal display: 'variable'; inside CSS.
    }
  }

  function revealClick(e) {
    displayChange("block");
    if (this === newLink) {
      this.remove(); // since revealClick is getting called on 'newLink.addEventListener', it says remove it.
    }
    if (e !== undefined && e.preventDefault !== undefined) {
      e.preventDefault(); // prevents link from going to '#' which we defined.
    }
  }

  // third we declare everything else
  newLink.setAttribute("href", "#"); // e.preventDefault will make sure that going to # doesn't happen.
  newLink.innerHTML = "Read More"; // I still feel like innerHMTL is dangerous, no?
  newLink.setAttribute("class", "more-link");

  newLink.addEventListener("click", revealClick);

  firstParagraph.appendChild(newLink);

  displayChange("none");

  // pg. 108 of Javascript for Designers - we do this interaction in JS instead of adding/removind classes, because if the style breaks or javascript doesn't work, we still have all the content available. This is what 'progressive enhancements' are all about.
})(); // thie closed parentheses are a part of the IIFE

console.log(window.newLink); // proof that newLink is not in the global scope
