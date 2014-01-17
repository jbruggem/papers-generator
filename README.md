papers-generator
================

Generate pages with small paper tokens to print out.

[![build status](https://travis-ci.org/jbruggem/papers-generator.png)](https://travis-ci.org/jbruggem/papers-generator)


Introduction
------------

This is a tool I use to generate pages of small paper tokens (usually with a title, a small 
text and an illustration) that I can then print out and cut. This is useful is you have to 
organize outdoor games for example, where small pieces of paper are exchanged as part of 
the game.

Usage
-----

All you have to do is create an HTML file in this folder and open it in 
your browser. You can than use a browser extension such as 
[printpdf](https://addons.mozilla.org/En-us/firefox/addon/printpdf/)
to generate a easily printable document.

The best way to do this is to start from the commented example HTML file
[medicaments.html](examples/medicaments.html). 
Comments will guide you through the process of customizing the output.

Test
-----

Test can be done with node and vows.

```
npm install 
npm test
```
