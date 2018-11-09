console.log("app.js is working and loaded at the bottom of <body>");

function btnFunction() {
  var x = document.getElementById("threeText");
  var y = document.getElementById("threeImg");
  // Not sure why text doesn't show up after the <span>. No reason to repeat "Scrolling".
  if (x.innerHTML === "Start Scrolling") {
    x.innerHTML = "Pause Scrolling";
    y.style.animation = "two 15s ease-in-out infinite";
  } else {
    x.innerHTML = "Start Scrolling";
    y.style.animationPlayState = "paused";
  }
}
