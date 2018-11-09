# 015 - CSs and Javascript Scrolling Overflow

Man, I feel really out of sync lately. Probably because I haven't been doing too much coding in the last few weeks.

I also updated NPM and added Yarn and that screwed up Gulp, where I had to update to Gulp v4 and figure out how to fix some new syntax. It doesn't really make sense but I can go back and refactor the old files now.

Anyways, I wanted to experiment with how I was going to represent scrolling long-format webpages. The first option `scroll overflow` just allows the user to scroll within the container. It is possible for mobile too which is great, but also could be a bit confusing, especially if you don't know you can scroll. It would be cool to add something like a `div` that could visually show it (like on [Stephanie Gonot's site](http://stephaniegonot.com/converse-one-star)).

The second idea would be to allow CSS `transform` to let the image scroll for the user. The problem Rodrigo brought up is that might be a performance issue and you'd have to add some javascript to make sure that it didn't load before it's visible.

The third option is to allow the user to either scroll or click a button to make it scroll for them. I kind of think it's overkill and could be buggy. Also I just realized that if you scroll down while it is animating it will continue to go past the image. So if I went this route I'd have to solve for that problem.

I think I'm going to go with the first option as it seems the most practical. And then possibly go back and add a scrollbar or something. I checked to see if you could style the actual scrollbar using CSS but there is no support for Firefox or IE, and it's been around for quite a while.

[codepen link](https://codepen.io/buildingsareheavy/pen/XydPyZ)
