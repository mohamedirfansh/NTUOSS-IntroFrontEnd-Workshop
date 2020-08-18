# Intro to Front End Development and APIs - NTUOSS Workshop

Welcome to the first TGIFHacks workshop for AY 20/21. This workshop will give you a brief introduction to front-end web development. You will learn the 3 most important building blocks of the web: HTML, CSS, JavaScript. After that, you will be introduced to what APIs are. This will open up countless posibilities for you to build exciting and amazing web apps. So let's get started!

## Table of Contents
- [Prerequisites](#Prerequisites)
- [HTML](#HTML)
    - [Overview](#HTML-Overview)
    - [Tags](#Tags)
    - [Attributes](#Attributes)
    - [Classes and IDs](#Classes-and-IDs)
- [CSS](#CSS)
    - [Overview](#CSS-Overview)
    - [Syntax](#Syntax)
    - [Selector, property, value](#Selector,-property,-value)
- [JavaScript](#JavaScript)
    - [JavaScript Overview](#JavaScript-Overview)
    - [Variables](#Variables)

## Prerequisites

Before you start the workshop, make sure you have these:

+ A text editor such as Sublime Text or Notepad++
+ An internet browser greater than IE9 or Firefox 4

>That's all you need!

## HTML

HTML (Hyper Text Markup Language) is the skeleton of a web page. It tells the browser the structure of the web page.

### HTML Overview
A HTML document starts with the html tags. Everything that has to be in the web page has to be inside the html tags. Additionally, inside the html tags, we can see 2 **main** sections.
```HTML
<html>
    <head>
        ...
        ...
    </head>
    <body>
        ...
        ...
    </body>
</html>
```
1. The first is the head section. Inside the head section, we have important meta information like the links to our style sheets _(more on that later)_ and the title of our webpage.

2. The second section is the body section. This the meat of our html document. Everything that we want to put in our webpage like text, images etc. is placed inside the body tags of our html document.

### Tags
As you might have seen so far, everything in HTML is enclosed in tags. We have to enclose whatever we want to put in the page within its appropriate tags. Some tags need to have an opening and a closing tag like:
```HTML
<body></body>
<p></p>
```
We put our content inside these tags ex: ```<p>Hello World!</p>```.
Whereas some are self closing tags like:
```HTML
<img />
<input />
```
We have to specify _attributes_ to these tags.
Some very important tags _(other than html, head, body)_ that we will use today:
```HTML
<title></title>
<h1></h1>
<div></div>
```

### Attributes
Other than just putting the content within tags, we can also specify some attributes to tags. This gives them specific properties.
```HTML
<img src="./workshop.png", alt="Workshop!">
```
Here, we can see that we have specified 2 attributes for our img tag, **src** (source which should contain the path to our image) and **alt** (which displays a text in the event our image does not load).

### Classes and IDs
We can specify a class and/or id for a tag. These can be thought of as special attributes.
+ Class is used to refer to multiple tags
+ ID is used to refer to a specific tag only

## CSS

CSS (Cascading Style Sheets) forms the style of our page. It tells the browser how we want our page to be styled. CSS is what make a website look pretty!

### CSS Overview
The css we write has to be linked to our html for our browser to render the styles. We can do this in 3 different ways:

1. We can specify style as an **attribute** in our html tags. For example:
```HTML
<body style="background-color: blue;">
```
2. We can specify our styles within the **style** tags and place this inside our html document:
```HTML
<style>
    body {
        background-color: blue;
    }
</style>
```
3. Finally, we can create a separate style.css file, write our styles in it and link it to our html document with the **link** tag:
```HTML
 <link rel="stylesheet" href="./style.css" />
```
The 3rd way is the preferred way of writing css.

### Syntax
In general, css is written in the following format:
```
selector {
    property: value;
}
```

Where **selector** is what we want to style (like our body tag), **property** is the aspect of the element we want to style (like the background color of our body tag) and **value** is the value of our style that we want to implement (like blue for the background color).

### Selector, property, value
+ Our selectors can be any html tag, a class or an id
+ There are specific properties for every tag that we can use. There are too many of them to remember!
+ Every property has some valid values we can use. For example, we cannot put 100px; as the color!

There are way too many properties and values in css, you can check them out [here](https://www.tutorialrepublic.com/css-reference/css3-properties.php).

## JavaScript

JavaScript provides the functionality of our web page. It make the webpage interactive. It is a high level programming language.

### JavaScript Overview
Just like css, javascript also has to be linked to our html. We can do this in 2 different ways:

1. We can specify our script within the **script** tags and place this inside our html document:
```HTML
<script>
    document.getElementById("hello").innerHTML = "Hello World!";
</script>
```
2. Or we can write our script in a different file called script.js and link it to our html using the **src** attribute in our script tag:
```HTML
 <script src="script.js"></script>
```
The 2nd way is the preferred way of writing javascript.

### Variables
Variables can be thought of as containers for storing data values. They are declared in JavaScript like this:
```javascript
var x = 5;
var y = 6;
var z = x + y;
```
> Note: JavaScript is not a statically typed language. So there is no need to declare the data type.

### Conditional Statements
Conditional statements are used to perform different actions based on different conditions. In JavaScript the look like this:
```javascript
if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 5) {
    console.log("x is less than 5");
} else {
    console.log("x is between 5 and 10");
}
```
### Comparison and logical operators
Comparison and Logical operators are used to test for `true` or `false`. In JavaScript, they look like this:
#### Comparison
```
=== : equal value and equal type
!=  : not equal value
>   : greater than
>=  : greater than or equal to
<   : less than
<=  : less than or equal to
```
#### Logical
```
&&  : AND
||  : OR
!   : NOT
```

### Loops
Loops can execute a block of code a number of times. There are 5 types of loops in JavaScript: `for, for/in, for/of, while, do/while`. We will look at `for` and `while` loops as they are the most common ones.

#### For loops
```javascript
for (var i = 0; i < 5; i++) {
  console.log("Hello World!);
}
```
For loops take in a variable (_i_ as above), which needs to be **initialized** (i = 0), **checked** (i < 5), **updated** (i++) for the loop to run a **finite** number of times.

#### While loops
```javascript
while (i < 5){
    console.log("Hello World!);
    i++;
}
```
The `while` loop loops through a block of code as long as the specified condition is true. While loops take in a condition (i < 5) which will be checked everytime the loop is executed. Moreover, we need to update the value of the variable we are checking (_i_ as above) to make sure the loop terminated. Otherwise, we will have an **infinite** loop.

### Functions
Functions are **self contained** modules of code that accomplish a specific task. The function is executed when something invokes it. In JavaScript, functions can be declared in a few ways. We will focus on the following way:

```javascript
function add(a, b) {
  return a + b;
}
```
We first type the `function` keyword, followed by the name of our function (_add_ as above) and specify the **parameters** the function can take. We then add curly braces {} and write our block of code inside it. We can the invoke (call) the function like this:

```javascript
var x = add(10, 20);
```
We type the name of the function and pass it **arguments** (_10 & 20_ as above). The above invocation will add 10 & 20 and store the value in x.

### DOM

DOM (Document Object Model) is how JavaScript can access and change all the elements of an HTML document. Whenever, a webpage is loaded, the browser creates a **DOM** of the page. With the DOM, JavaScript can manipulate all the HTML and CSS contents of the webpage. It can:

+ Change all the HTML elements in the page
+ Change all the HTML attributes in the page
+ Change all the CSS styles in the page
+ Remove existing HTML elements and attributes
+ Add new HTML elements and attributes
+ React to all existing HTML events in the page
+ Create new HTML events in the page

#### DOM Methods

We can access an HTML element by using a DOM method. Suppose we have a p tag with `<p id="testing">`, we access this element using the following method:
```javascript
var test = document.getElementById("testing);
```
Or by using the `.querySelector()` method like this:
```javascript
var test = document.querySelector("#testing");
```

#### The innerHTML property

We can then change the content of our p tag by using the `.innerHTML` property like this:
```javascript
document.querySelector("#testing").innerHTML = "Hello World!";
```
