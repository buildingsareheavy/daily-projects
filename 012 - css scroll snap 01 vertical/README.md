# 012 - CSS Scroll Snap 01 Vertical

This was surprisingly easy.

It is very similar to the javascript library [FullPage.js](https://alvarotrigo.com/fullPage/) that I've used before. It doesn't have the most flexibility, but it is super simple to implement. One of the big pains was figuring out browser support. I don't have currently don't have an account for BrowserStack anymore and I also don't have a virtual machine installed on this macbook right now ☹️ so I only know what's going on for Chrome, Firefox and Safari.

It's possible to use the arrow keys to scroll but you need to use the `tab` key or click inside the container.

I first started with a `100vh` model, but I realized that if you have content above or below that and the mouse is still in the outer content then that area doesn't get scrolled past. You'll pretty much always have extra content above and then if you scroll back up, you'll have content on the bottom. If you don't have content above or below then it makes for a super nice full page slide idea.

One this that's nice is that it's really just an additive enhancement, so if it doesn't work then you can still scroll normally.

I originally found [this link](https://css-tricks.com/practical-css-scroll-snapping/) but couldn't find it when I started this exercise. I ended up learning that it's been around for a while, but it's gone through a lot of work and still doesn't really have a cross-browser standard.


[codepen link](https://codepen.io/buildingsareheavy/pen/VGEwyq)
