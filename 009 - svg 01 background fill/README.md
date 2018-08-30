# 009 - SVG 01 Background Fill

It took me a while to understand how to convert an SVG for web, or more so that you *needed* to convert it. Here is the workflow that I have since I still have Adobe CS5:

1. Save As -> select Format: SVG
2. Save
3. Show SVG Code
4. Copy everything inside the `<svg>` tags
5. Paste code [here](https://codepen.io/elliz/full/ygvgay) 
6. Paste `background-image: [paste CSS generated code here]`

I used `background-size: 100% 100%;` to stretch the SVG to fill the entire space of the *div* and added a *filter* to make a *drop-shadow* specifically on the *SVG*, and not on the *div*. 

Once I got the SVG to work, it was kind of underwhelming. Of course I am only adding a single path and making a simple background, but I didn't realize how easy it was once I got the steps down.

I am interested in how to control selective paths with `@keyframes` or some sort of transformation. Maybe javascript is necessary...


[SVG to Data URI Converter](https://codepen.io/elliz/full/ygvgay)

[codepen link](https://codepen.io/buildingsareheavy/pen/WgRbGV)
