//Topics:
//javascript and classical languages
//unique concepts in javascript
//Resources and concepts.MDN.

//Wahat is javascript?
//is a light weight:
//=>easy to implement,small memort foot print.
//interpreted:
//=>No compilation that happens,instructions executed directly.
//=>But that is technically not true,compilation is involved but thats different from the compilation that is involved,
//a language like C++ or Java.
//object oriented language:
//=>Model code around objects.
//=>You dont look at the code,what are the steps needed to complete to solve the problem.
//=>You break it down into objects,then you create those objects with data and functionality.
//=> Use objects to solve problems
//with first class functions:
//=>doesnt exist in a lanuage like java or C++.
//=>Functions can be used as values.
//=>Think for string value.You have a string --> "Hello World",you can assign it to a varibale.
//=>Similarly in javascript you have a function,be a value.You can take the function value and assign it to
//=> a varible.
//=>You can pass functions as parameters to method calls,so there is whole lot of flexibility there.
//is best known as the scripting langauge for web pages:
//=> a language where instructions written for a runtime environment.
//=> Eg is a shell script like Linux Programming,Unix Programming,Windows programming with power shell.
//=> You have commands that you can run on a runtime environment.
//=> In this case your runtime enviroment is your shell.
//=> What you can aslo do is you can take those commands,bundle them into a file and then execute that file
//=> and that becomes a script that the shell executes.
//=> You could have executed those commands one after another.
//=> When you are writing javascript you are writing instructions for a runtime enviroment.
//=> What is that runtime environment?
//=> There could be multiple runtime environments.
//=> There are a different ways where you can run javascript.
//=> The most common and the most popular runtime environment is your web browser.
//=> Javascript runs on a web browser,so in a web browser you have HTML,CSS and Javascript and the browser renders
//=> the HTML and runs the javascript
//=> Javascript is kind of ubiquotous today.
//=> You have so many web applications that run complex pieces of functionality on the client's browser and all
//=> of that is courtesy of javascript.
//=> How does this work?
//=> How is this runtime enviroment used in a web application?
//=> What usually happens?
//=> When you have a web browser,you are making a call to a website,you are typing the name on a web browser
//=> What happens is that the browser requests to the server and says hey server give me this page,now the server 
//=> responds with some HTML content,HTML as we get from the server,travels over HTTP is basically a bunch of text,piece
//=> of string that is less than or greater than so there is bunch of tags in it but essentially its a string,piece of text
//=> Now what the browser does is its looks at this text and examines those tags,if there is an HTML tag,body tag,a div tag,
//=>a paragraph tag,it takes it all those tags and converts them into objects,each tag becomes an object and lets say you have 
//a div and paragraph inside the div,so the div becomes one object and paragraph becomes the child object,so it basically 
//constructs a tree of objects.These tree of objects is often referred the DOM Tree[Document Object Model Tree].Its taking
//and so that's the tree.
//So the browser gets HTML,browser interprets the HTML and builds the tree.Now HTML is a static language,if you 
//have just HTML,when you have the browser loaded,you get a particular DOM tree and the browser builds the tree
// and renders the view based on it and the view is tied to this DOM tree.
//=> Now if you load that HTML again,you get the same DOM tree and the same view,load the HTML at the third time,
//=> you get the same DOM tree and same view,so the HTML is essentially static,it doesnt change by repeated renderings,
//=> However the HTML can aslo come with some javescript.
//=> Javascript is dynamic language,so what happens is when the browser gets the HTML with the javascript,it goes ahead and does
//=> does the exact same things,builds a dom tree but then it executes javascript.In javascript you have an oppurtunity to use the
//=> DOM tree nodes and modify it.You can change the DOM tree and get new nodes added to the tree and remove nodes
//=> from the tree,edit existing nodes,can do all kinds of modifications.What else is happening is that the browser 
//=> reflects the view based on those changes,you change the DOM tree you are essentially changing the view because the
//=> browser keeps the view always in sync with the Object Model Tree,so javascript is a way to execute dynamic functionality
//=> on browser


//Why learning javascript?

//-> To do client side web development.
//-> Javascript is very often used on the browser.
//-> Rich Client Side Applications on the user's browser.
//-> learn javascript build that functionality on that browser.
//-> You can do this in Native Javascript in this case you have pure javascript.
//-> No frameworks you access a DOM tree and then you modify the page,you had you
//-> get rich functionality on the client side you can do some basic stuff if need 
//-> something of a decent amount of complexity this is really a hard thing to do which is 
//-> there are frameworks that have come up.One of the most popular frameworks is 
//-> jQuery:Jquery is again a framework that lets you modify the DOM tree on the client side.
//-> so that they can build the functionality on the client so this another reason why you want to
//-> learn javascript.
//-> You need to know a good javascript in order to write good jQuery.
//-> You can use one of these advanced client side application frameworks there are a lot of them 
//-> today there is AngularJS,there is React,there is Ember,backbone.
//-> You wanna build really advanced web applications on the client.
//-> You can use on of these frameworks and build them,again this uses javascript,so learning javascript
//-> would be the first step to learning one of these frameworks,so this is client side web development.
//-> You can also do server side development.This point wouldnt have shown up on this slide if I was giving this 
//-> course say five years back because server-side javascript is a fairly recent development you must have heard
//-> of Node.js this is one of the most popular server-side frameworks you know its gaining in popularity recently 
//-> So,you can build server-side applications just like you can build a Java EE Application be on Rails Application
//-> or a C Sharp Application on the server,so you essentially listen to user requests and generate webpages or generate
//-> generate a REST-API response and this happens on the server right,you are using javascript to write server side
//-> applications.
//-> Express is another frameworks which works with node and you can build server side application using that .
//-> There is also browser extensions that you can build with javascript a lot of these browser like Firefox and Chrome
//-> They have these plugins or add-ons.You can download this add-on to your browser and extend the functionality of 
//-> of the browser a lot of those add-ons are build using javascript.
//-> You can also build desktop applications with so there are some frameworks which let you build both desktop as well as
//-> mobile applications.
//-> Javascript is gaining in popularity with the IOT Applications.
//-> This is not something which is really kind of matured.


//=> History Of Javascript:

//-> created by brendan Eich at Netscape.
//-> Java was popular in those days.
//-> Java had the concept of Applets which lets you build client side applications.
//-> Rich Application Client Side Application those days.
//-> So it was the rich client side Application Model those days.
//-> Create Applets and have this rich client experience on the browser.

// Brendan was asked to create a language for the browser and he created this language.He called it Live Script
// but the people wanted to use the popularity of Java in those days and called in Javascript.

// Javascript has nothing to do with Java purely because of marketing reason.
// created to compliment Java.
// Javascript was created in roughly 10 days rushed to production full of bugs.
// to make it easy to use.
// easy for new comers.
// Once javascript was created there was rush to make it a standard,the competition between Microsoft and Netsacape.
// But netscape wanted to standardize the language.When we say standardized we say there is a specification for
// the langauage and once you follow the specification any browser that claims to run javascript should work with the
// the language that is built according to the specification so Javascript was standardized by a committee called
// Ecma and the name got assigned as Ecmascript.When you hear the name as Ecmascript it is nothing differnt from
// Javascript.
// Now there are differnet versions of Ecmascript right now the latest version of Ecmascript is 6.

// ECMASCRIPT is not fully supported around browsers the best chances of a fully supported specification is
// Ecmascript 5. 









//used in many non-browswe environments as well.
