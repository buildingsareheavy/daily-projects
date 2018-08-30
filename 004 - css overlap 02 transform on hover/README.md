# 004 - CSS Overlap 02 Transform on Hover

Another color study that focuses on div overlapping with the `transform` property in CSS. I feel like there should be an easier way to repeat `{ transition: $transition; }` over and over again.

I also wanted to see what would happen when the grandchild div had `display: flex` applied to it. And of course, have fallbacks for older browsers that do no support `vh`, `vw`, and `flex`.

I also wish there was a way to do something like:
```
&:hover OR @media (max-width: 700px) {
    // do something when hovered or on mobile.
}
```

[codepen link](https://codepen.io/buildingsareheavy/pen/yxyoEy)
