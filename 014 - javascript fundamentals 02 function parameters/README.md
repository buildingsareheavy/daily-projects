# 013 - Javascript Fundamentals Function Parameters

This is a riff of [build your own function](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function) via Mozilla's helpful [Javascript building blocks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks) series. I went downstairs at the apartment complex to get more focused and must have clicked another article, because I was originally interested in learning scope. I was like "this seems odd..." but it was still helpful, even if it was just for pushing me to learn new handy Javascript stuff.

I made it a goal to only use vanilla javascript (no HTML or CSS) to make a very simple web app. There is no testing and some stuff probably should've been written in an IIFE (I mean, I think. I'm still confused when to use it and when I don't). But in the end it felt pretty good to write something very simple completely in vanilla javascript, and see the similarities in React.

I still want to know how to add styling to _all_ of the button elements using vanilla javascript, but I could only get it to work on the first one. Like I can get it to work on all of them, but I want to be DRY. I would like to write one simple line or even a `foreach` or something.

I also am still trying to figure out why, even though I called the following code _inside_ the function

```
closeBtn.onclick = function() {
    panel.parentNode.removeChild(panel);
  };
```

and the following code outside of the function

```
displayName("First", "Add more sections below", "initial");

var btn = document.querySelector("button");
btn.onclick = function() {
  displayName("This one got added", "Close this section", "more");
};
```

that the first instance doesn't remove `panel` but the rest of them do. It should be the other way around, no? I am still very confused about that. Unless I am too in the nucleus of my thoughts, I cannot figure out how to add an additional button, so there is one that says `close this section` and another that says `add yet another section`. At least not off the top of my head.

All in all I felt like this could've been the beginning of a lame list app, but I did push myself to learn some other stuff and go beyond the tutorial, so I am ok with that.

[codepen link](https://codepen.io/buildingsareheavy/pen/QZJoea)
