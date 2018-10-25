console.log("vendor.js is working and loaded in <head>");

// provide variable values to pass through
function displayName(msgText, btnText, msgType) {
  // make var that selects <html> to base all other js off of
  var html = document.querySelector("html");
  html.style.backgroundColor = "beige";

  // create <div> and add it to html
  var panel = document.createElement("div");
  // "\" means you can escape a new line (there are better ways to do it in ES6+ though)
  panel.setAttribute(
    "style",
    " \
    text-align: center; \
    font-size: 2rem; \
    padding: 3rem; \
    margin: 1rem auto; \
    max-width: 700px;"
  );
  // add "panel" aka a <div> to html
  html.appendChild(panel);

  // create <p>{msgText}</p> and add it inside the <div> called "panel"
  var msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  // create <button>{btnMessage}</button> and add inside <div> called "panel"
  var closeBtn = document.createElement("button");
  closeBtn.textContent = btnText;
  panel.appendChild(closeBtn);

  // when you click the <button> it will remove "panel"
  // since there is another instance of displayName() with a
  closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  };

  // simple if statement dictated by the "msgType" variable
  if (msgType === "initial") {
    panel.style.backgroundColor = "salmon";
  } else if (msgType === "more") {
    panel.style.backgroundColor = "lightsalmon";
  } else {
    panel.style.backgroundColor = "yellow";
  }
}

// call function and add parameters
displayName("First", "Add more sections below", "initial");

// create a button when the button is clicked
var btn = document.querySelector("button");
btn.onclick = function() {
  displayName("This one got added", "Close this section", "more");
};
