# Intro to Front End Development and APIs - NTUOSS Workshop

by [Mohamed Irfan](https://github.com/mohamedirfansh) for [NTU Open Source Society](https://ntuoss.com/home)
> Disclaimer: This document is only meant to serve as a reference for the attendees of the workshop. It does not cover all the concepts or implementation details discussed during the actual workshop.

Welcome to the first TGIFHacks workshop for AY 20/21. This workshop will give you a brief introduction to front-end web development. You will learn the 3 most important building blocks of the web: HTML, CSS, JavaScript. After that, you will be introduced to what APIs are. This will open up countless posibilities for you to build exciting and amazing web apps. As part of the workshop, we will build a simple [weather app](https://mohamedirfansh.github.io/NTUOSS-IntroFrontEnd-Workshop/) to show you how everything comes together. So let's get started!

## Workshop Details:
**Time**: Friday, 28 August 2020. 6:30pm - 8:30pm  
**Location**: Virtual through Microsoft Teams _(due to safe distancing measures)_  
**Organizer**: NTU Open Source Society  

## Table of Contents
- [Prerequisites](#Prerequisites)
- [HTML](#HTML)
    - [HTML Overview](#HTML-Overview)
    - [Tags](#Tags)
    - [Attributes](#Attributes)
    - [Classes and IDs](#Classes-and-IDs)
- [CSS](#CSS)
    - [CSS Overview](#CSS-Overview)
    - [Syntax](#Syntax)
    - [Selector, property, value](#Selector,-property,-value)
- [JavaScript](#JavaScript)
    - [JavaScript Overview](#JavaScript-Overview)
    - [Variables](#Variables)
    - [Conditional Statements](#Conditional-Statements)
    - [Comparison and logical operators](#Comparison-and-logical-operators)
        - [Comparison](#Comparison)
        - [Logical](#Logical)
    - [Loops](#Loops)
        - [For loops](#For-loops)
        - [While loops](#While-loops)
    - [Functions](#Functions)
    - [DOM](#DOM)
        - [DOM Methods](#DOM-Methods)
        - [The innerHTML property](#The-innerHTML-property)
- [Build a Weather App](#Build-a-Weather-App)
- [APIs](#APIs)
    - [Why APIs](#Why-APIs)
    - [Using APIs](#Using-APIs)


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
Conditional statements are used to perform different actions based on different conditions. In JavaScript they look like this:
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
The `while` loop loops through a block of code as long as the specified condition is true. While loops take in a condition (i < 5) which will be checked everytime the loop is executed. Moreover, we need to update the value of the variable we are checking (_i_ as above) to make sure the loop terminates. Otherwise, we will have an **infinite** loop.

### Functions
Functions are **self contained** modules of code that accomplish a specific task. The function is executed when something invokes it. In JavaScript, functions can be declared in a few ways. We will focus on the following way:

```javascript
function add(a, b) {
  return a + b;
}
```
We first type the `function` keyword, followed by the name of our function (_add_ as above) and specify the **parameters** the function can take. We then add curly braces {} and write our block of code inside it. We can then invoke (call) the function like this:

```javascript
var x = add(10, 20);
```
We type the name of the function and pass it **arguments** (_10 & 20_ as above). The above invocation will add 10 & 20 and store the value in x.

### DOM

DOM (Document Object Model) is how JavaScript can access and change all the elements of an HTML document. Whenever, a webpage is loaded, the browser creates a **DOM** of the page. 

![DOM](images/dom.png)

The DOM represents a document with a logical tree structure where in each node is an object representing a part of the document. With the DOM, JavaScript can manipulate all the HTML and CSS contents of the webpage. It can:

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

## Build a Weather App
We will be using our knowledge of HTML, CSS and JavaScript to build a simple weather app. Afterwhich, we will come back and learn a bit on APIs and apply that knowledge to finish our project. You can access the source code of the app in this repo. You can try out the app [here](https://mohamedirfansh.github.io/NTUOSS-IntroFrontEnd-Workshop/).
> Note: Since the API we will be using is free and does not require a key, it is a little buggy when it receives an overload of requests. You will occassionally see Shuzenji as your location. Ignore it and continue refreshing. Your correct location will appear.

![Weather App](images/weather-app.png)

## APIs

API (Application Programming Interface) is a software intermediary that allows 2 applications to talk to each other while creating a layer of abstraction for each application.
> API is a large topic, we will get a taste of what it is today.

### Why APIs
We need weather data for our weather app. However, we cannot be sending satellites to space to collect data for us. Other people have already done that. All we need is to collect the information from them. This is where an API comes in. Our application will talk to the weather API to _fetch_ data and return it to us for us to use.

### Using APIs
So, for us to collect data from the API, we need to fetch data from it. The API that we will be using today is a simple _keyless_ API called **FCC Weather API**. The url is: `https://fcc-weather-api.glitch.me/api/current?lat=latitude&lon=longitude`. We need to **fetch** data from the url, **return** it to a usable format like json, then execute some functions that we want to do with the data.
```javascript
var api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

fetch(api)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
```
So here, we are receiving data from the API, we return the response in json format and log the data to our console. We can then do a lot more with the data. Now, let's finish the weather app!

## Conclusion & Going Forward
I hope you found this workshop useful. This workshop definitely did not cover all aspects of Front End Development. But I designed it to give you a brief introduction to the world of Web Development. Furthermore, we only learned a very small aspect of APIs. There is still a lot more to learn such as creating your own APIs etc.  

Since you have now been introduced to the Front End side of web development, be sure to look out for the Back End workshop organized by NTUOSS in the future! Until then, stay safe and happy hacking!