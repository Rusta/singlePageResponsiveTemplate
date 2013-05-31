singlePageResponsiveTemplate
============================

Super simple template for a responsive single page, multi-section, web app layout with animated navigation to each section

## Demo

Below is a link to a demo of the code in this repo, in all it's barebones un-fancily-styled glory

<a href="https://appasylum.net/demo/singlePageResponsiveTemplate/" target="_blank">Link to Demo</a>

It's basically a four 'section' single page layout, in a nice centralised column, with animated navigation between the sections and some media queries to adjust the layout and show/hide an animated drop-down nav menu for narrow screens.

The elements that are specific to this template are:

- index.html (to show how the different header/nav/section/article/nav-anchor elements are referenced)
- css/singlePageLayout.css (which handles all things single page and section layouty)
- js/singlePageLayout.js (which handles the animated navigation of the navigation - needs jQuery)

 
There are also some additional bits to this template borrowed from HTML5BoilerPlate - which are in there just because they are useful boilerplate things to have:

- using normalize.css to make things normal
- using modernizr to check for JavaScript support (no-js class on body tag method)
- using modernizr to test for mediaquery support and apply polyfill if not supported
- local fallback load of jQuery if cannot get the google hosted one
