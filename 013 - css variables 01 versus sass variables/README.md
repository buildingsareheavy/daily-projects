# 013 - CSS Variables 01 Versus Sass Variables

So I was readin [this article](https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855) entitled "Everything you need to know about CSS Variables" after I had learned that essentially every browser\* now supports CSS Variables.

_\*Not IE, Opera Mini, Blackberry, IE Mobile_

When I heard "oh, CSS variables are great, they can be reassigned just like any other variable, and you don't have to repeat yourself" I was like "yeah, ok, whatever. Sounds like SCSS but with progressive enhancement that you have to worry about" but then... I realized that it's actually a lot more flexible than that.

For instance, if you want to use a SCSS variable, you have to change the variable and then call the selector again, but with CSS variables you just change the variable inside whatever element you want and it will automatically change the selector. To me that's hella nice. That also means, if you want to use javascript, you only need to select an element and change the variable. It would be a pain in the ass to do that with SCSS.

There is definately a lot of potential with this, and if you can use `@supports()` to provide progressive enhancements then you are golden.

[codepen link](https://codepen.io/buildingsareheavy/pen/xayJGr)
