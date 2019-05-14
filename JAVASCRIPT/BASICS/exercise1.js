// The web browser is the runtime that you can use for javascript as a Development Environment.
// Choose Firefox because Firefox has certain tools that is very handy writing these scripts and
// having them execute 


// Intro:
// console.log(arg);
// console:  console is a global object thats available to you and log is a method of that object.
// object.method
// and the method takes in an argument which is a string and string happens to be Hello World.
// And what this method does is it prints whatever you send as an argument to the console.

// Running javascript using ScratchPad:

// create a new variable
// variable declaration:in any language when you need to hold a variable and then you give it a value,
// you also have to give it a name and that name becomes a container for a value.
// lets say you have a string variable you declare a variable as a string and then once you have done that 
// you can assign a string value to it.

var value = 42;

// don't have type of the varible.
// javascript doesn't have the concept of typed varibles.
// there is no pre declaration of typed required in order to create a varible.
// we just create a variable and we just assign whatever value you want,all you need to do is the
// var keyword to declare the variable.

//Now here is another way of doing this:
var value;
value = 42;
//javascript doesnt expect to know what value you can assign.

// what are the values that you can assign to a variable once you have declared it?
// Lets say you have a var abc;
// There are some primitive types that come with the language as with any language there are some primitive types 
// that come out of the box.
// One of the standard types are:
// Number,String(text),boolean(true/false)

//  Number is a javascript type for storing numbers and numbers in javascript are double precision 64 bits 
//  format IEEE 754 values.
// You dont have integers as such.
// All floating poinrt double precision 64 bit numbers.
// In languages Java for instance you have int,double,float.
// You have whole lot of different types depending on the precision of the number that you want to hold.
// In javascript you dont have that option.
// Every number that you declare even if you declare the number with value 1,its is not an Integer one,its a double
// precision 64 bit value containing the value of 1.
var a = 10;
console.log(a);//O.P -> 10 color: green
// console prints different types in different colors

var b = 20;
console.log(b);// 20

var c = a + b;
console.log(c); // 30

// Its actually a floating point number behind these values that you see over here.
// There are some math calculations where the precision is a bit-off when you do javascript.
// Again this depends on the interpreter that you use.


//Strings:
//Sequence of Unicode characters(16 bit)
// No character type! A character is just a string of length 1.
// Strings are the types used to represent text while numbers are the types to represent numbers.
// So,the type system is fairly simplified in the case of Javascript.
// You dont have a bunch of different types for different types for text.
// Its number data type for all kinds of numbers and the string data type for the different kinds of texts.

//Boolean:
// has a value of true and false.
// a boolean value can either be true or false.
// these boolean values can be used for conditionals inside for loops,inside while loops.
// and they can affect the flow of the program.
// Demonstrate string in boolean using a demo.
// variable handling in javascript is:
// There is no type information associated with it.
// This behaviour is called loose typing or weak typing.
// A lot of these other languages support 
// strong typing: you not only cannot assign a different value to a variable you have to explicitly 
// define what the type is when you are declaring,you dont have to do that in the case of Javascript.
// supposed supports loose typing.


// undefined: unique to javascript.
// What is the difference between declaration and definition is>
// Not specific to javascript.
// =>Declaration: ask the compiler or the interpreter to create a new variable and then give it a name.
//   So you have different ways of declaring in different types of languages,but the idea is you declare 
//   when you want to create a new variable,you create a new variable,a placeholder and then you give it 
//   a name. 
// 
// =>Definition: is when you assign a value to that variable:
// value = 42;
// Between these two lines,between declaration and definition these again depend on the language,different
// languages have different ways of handling the space between when the variable is declared and the variable
// is defined in the case of Javascript however as soon as the variable is declared the minute you say var a 
// or var value or var foo there is an explicit value and assign to that varible,even though you are not assigning
// the value yourself there is a value being assigned to it and that value is undefined.
// Its basically javascripts way of saying you have declared it but you havn't defined it.so the variable at this point
// of time is undefined. 
// What is the value undefined which type is the value undefined belongs to?
// Javascript has created a seperate type called undefined which contains just one value which is undefined.
// This can be a bit confusing but stick with me here,in the case of a boolean type how many values are possible in a boolean
// type you have true and you have false.There can be two possible values in a boolean type,in the case of the 
// undefined type there is actually one value possible which is undefined,so the whole type system has only one value,so the 
// value is undefined and whenever you have a var something,there is no type information to it but I told you javascript is a
// losely typed so it doesnt have type information that its a number or a string or whatever,what is does have is the assignment
// of the type undefined. 
// So you can be sure if a variable is declared you havnt assigned a value to it,it is going to contain one value which is undefined
// which is of the type undefined.

//var value; ---> value is "undefined"

/// value = 42;

//Understanding Null:

//Null is another type in javascript which contains one possible value which is null so thats the type 
//system with only one possible value.Its kind a like undefined.
// So just like undefined is a type for just one value undefined and null is a type which is one value null.
// Let me demonstrate the undefined and null so that they know how they look like,just like you can allocate 
// values like boolean and string you can allocate values like undefined and null.
// Let say 
var a;
console.log(a);// undefined.
// Until you give a value to a variable it is going to have the value undefined.
// When the console is holding the old value un Scratchpad:Right Click + Reload and Run.
// When you dont do this you are basically running statements one after the other so it remembers the
// previous state so in order to have a clean context always clear this and then right click and say
// reload and run.
// When I do that you get the actual value which is undefined.

var a;
a = false;
console.log(a);
// change this to a = null;
a = null;
console.log(a);//null
//I have cleared out the value of a and have made it as null.

// I am explicitly saying that I want a to contain a non value.


//Difference between Null and undefined.
// both seem to be non valued.
// They are not values,they indicate the absence of a value.
// So what's is the difference between the two and when do you use?
// So, the best analogy that I can give for undefined versus null is when you are filling a paper
// form.
// So,you are filling a paper form which has a bunch of fields and bunch of text areas for you to write on
// Now if you get a paper form that somebody else will already fill right and you look at a field which is blank
// how do you know if that field is not something that the user saw and wrote something on or if that field is 
// something thats not applicable to the user.
// So lets say somebody has filled the form and they are giving it to you and the field is empty.
// Does it mean that they have actually read the question and they dont have an answer.
// or did they not read the question at all.
// In order to differentiate between these two categories.
// What people typically do is when they have,when they read a question and they dont have it,you know its something
// that doesnt apply to them,the question doesnt make sense to them,it doesnt fit their particular situation.
// What they do is they write not applicable,they write N/A.
// So the not applicable value is something that indicates that the user is actually provided some answers there and the
// answer is a non value.
// This is compared to an empty field where the value hasnt been provided.
// So keep that analogy in mind.when you think about the difference between undefined and null.
// When a variable is undefined that means that the value has not been entered,its an empty farm field nothing 
// has been put into the variable.
// and this is what happens by defualt.
// The minute you declare a variable and you dont assign it a value,it gets the value of undefined.
// That means the variable hasn't been allocated with the value.
// However if you want to assign a value which is a non value.
// Lets say you wanna say this is not an untouched variable.
// I am allocating a value to it but the value happens to be empty.
// The value is a non value.
// Thats when you explicitly assign the value null to it.
// Lets say for instance I dont have a middle name and lets say I am creating a bunch of fields
// for my first name,middle name and last name.
// In the case of my middle name it is a non value.
// Rather than having var as middle name and then have it undefined.
// In which case I were to give that variable to somebody else,they wouldnt know,if I forgot to put 
// the middle name in there or if I dont have a middle name.
// So you are not explicitly making it very clear to the other person that I dont not have a middle name,
// I assign the value invalid to it.
// So I say middle name equals null.
// So when I hand over the middle name to some other piece of code.they will look at it and go.
// Okay,its not an undefined variable,so they have actually put a value in there called null.
// So this person doesnt not have a middle name.

// These are the complete list of data types actually.

// In the Ecmascript 5 version of the specification however like I told you before the latest version is
// Ecmascript 6 and ECMA 6 comes with one other primitive type.
// There is a new primitive type added to the javascript language and that type is Symbol.

// ECMA 5 is the most supported version as of today.

// Symbol is kind of an enumeration in languages like C++ and Java.
// Its a bunch of values,bunch of constants and the varible can be one of those values.
// So thats the symbol datatype.
// Browser fully dont support.
// New primitive data types in the newer version of Javascript.

// Summary:Types and Variables.
// We dont need to declare a variable type when you are declaring a variable.
// All you need to do is use the var keyword.
// and then give it a name.
// and javascript knows it a variable.
// its going to allocate space for that variable.
// the varible name and the same variable name can be assigned values of different types.
// You can take undefined and assign it to a variable that was holding a boolean for instance.
// There is no scoping information in the variable declarations.
// If you compare it to things like a Java where you have a private in something or a public in something.
// They have scoping information which tie in with the class model of Java but in the case of Javascript,
// scopes are actually inferred from something else.


// Variables and values can be interrogated:
// Now in the case of Java or C++, a variable can contain only one type and its very clear what type that variable
// contains because you can look up the declaration and see what type it was declared.
// int a always has to have the type integer.
// Its obvious what the type is but now in the case of Javascript,there is no way of knowing it.
// Its basically when you are looking at a variable.
// the type is basically what type it holds at point of time.
// It will hold a completely different type later.
// So its important to be able to find out what type the varible is.Its not static,you have to figure it out
// dynamically.So how do you find out given a varible what is its type?
// The fee to do is using an Operator: 
// called typeof<value> that comes with javascript.
// In order to identify what the type of the variable is you say typeof<variable>
// You can aslo do is with a value.

var a;
console.log(typeof a);//undefined

var a = 10;
console.log(typeof a);//number

a = "Hello";
console.log(typeof a);//string

a = "true";
console.log(typeof a);//boolean

a = null;
console.log(typeof a);//object --> should show Null.
// This is one of the things that has frustated so many Javascript Programmers.
// This turns out to be a bug in Javascript type of Null should ideally be null because null is a datatype.
// which contains the value null.
// but in the intial implementations of Javascript.
// turns out they choose type of null to return an Object.
// and even though now the creator of Javascript and the team that worked on the initial versions of 
// Javascript admit that its is a bug they cannot fix it because it could potentially break older code 
// that depends on this behaviour.
// So this bug still exists in Javascript today.

//How do you figure out whether a variable is null or not?
//You can compare it to the value Null.
// Its an operator that follows a value or a variable and then it gives out what the type of that value or variable is.
// as long as it's not Null in the case of Null its going to return an Object.





//Type Coersion:
// This is something that javascriot does automatically.
// There are similarities in languages like Java there are similar things which happen but just want to highlight that
// something that happens in Javascript.
// what is type coersion?
// Type Coersion is where you have variables declared with and assigned to a value.
// And you are operating on those variables.
// And there are certain points of time.
// where the interpreter or the compiler will have to do some automatic type conversions for you in order to make that 
// operation work
// So lets say you are dealing with some values of different types.
// You are adding them or you are doing some operations with them.
// There is no way those operations can work unless there is some automatic type conversion that happens.
// So this is usually called type coersion.
// A standard example is concatenation.
// with string values.
// Lets say you have something like this.
// 123 + "4" => "1234" --> string
// So what the interpreter does is looks at the first value which is a number
// and its added to the second value which is a string,it obviously cannot work.
// You cannot add a number to a String.
// So atleast one of those two values have to be converted to the other type so that they both belong to the same type/
// So what the javascript interpreter does is it takes the number and converts it into a string.
// So,the number 123 becomes the string 1 2 3 and then it appends 4 to it.
// So,you get 1 2 3 4 which is a String.
// This is something that behaves like you would expect it to.but remember that there is type coersion that 
// happens and remember Javascript does a lot of type coersion which is not what you would expect it to.


//The == Operator:
//What is lot common in a lot of programming languages is that the single equals is usually taken up for the
// assignment operation.
a = b // the value of b assigned to a.
// = is always taken for assignment.
// So when you want to compare 2 values,you would typically use "==".
// Because '=' has a completely different meaning
// This exists in all programming languages.
// So the "=="  compares those 2 values and return a boolean.
// true or false depending on the values of those two.
// In javascript does kind of the same thing but it goes one level beyond what you would expect it to do.
// Example:

var a = 10;
var b = 10;

if (a == b) {

    console.log("Values are equal");
}

//O.P> Values are equal

//So what's different in the case of Javascript.

// Lets say instead of having a value of a number for B.
// have a value which is a string.

var b = "10";

//O.P still shows values are equal.

//When javascript was created it was meant to be easy for people to get into
//and use.
//Interpreter is very forgiving.
//It makes assumptions,it tries to cover up what could potentially be mistakes.
//In an attempt to do that what the interpreter aslo does is.It makes a whole lot 
//of mistakes on its own.
//So when the "==" was designed in Javascript.
//When javascript was being created.
//They wanted to make it super friendly.
//They wanted to make it a common data and understanding.
//So what they decided was lets say you have 2 values and you are trying to compare the two.
//If one of those values can automatically be type converted to the other.
//Do the type conversion and then check and see if they are the same.
//So when the == operator was designed for javascript,they decided to do the exact same thing,so if 
//You are doing a "==" and there values are of 2 different types,the javascript interpreter tries to 
//Convert one of them to the other and then see if it matches.
//So what javascript is doing here is its says its a number 10,this is a string 10,they are obviously not 
//equal so probably the developer needs some help here so it converts the number to a string and then sees
// if those 2 match if the block gets executed.This all kinds of bad.
// You wouldnt want to do something like this.'
// So when the language started rolled out and the people started using the double equals,people started
// getting frustated we going to change but now cannot because that's the thing about languages.
// Once you roll something out,it hard to change because when you change something,it very likely that the
// people code is going to break.

//They introduced a new operator the "===".
//Javascript has a "===" operator which does the comparision like you would expect it to.
//It doesnt do type conversion.
//If two values are compared with a "===" operator are of different types,it is going to return 
//false.

var a = 10;
var b = "10";

if (a === b) {

    console.log("Values are equal");
}

// So this "===" takes the place of  "==".

// Type Coersion Summary:

// Where you can do something like where you do in C.
// Passing the value to an If Block.
var a;
if (a) {
    console.log("Values are equal");
}

// Something like this will not work in java.

//Lets say I wanna do something like this:

var a = 10;
if (a) {
    console.log("a is true");
}

// O.P -> a is true.
// You see if a has a non-zero value like 10.
// Its going to return true.
// If a has a value zero then it return false.
// So every value in javascript has a corresponding boolean value.
// Let's say I change a to -10.
// a is still true.
// For all non-zero values a is true.

var a = "Hello";//Any other string as long as it has atleast one character it is true.
if (a) {
    console.log("a is true");
}

//O.P is true.


var a = "";//Empty string is false

var a;
if (a) {
    console.log("a is true");
}
else {
    console.log("a is false")
}

//O.P is false.


var a = undefined;//O.P --> false.
var a = null;//OP --> false.

var a = true;//OP --> true.
var a = false;//OP --> false.

// Summarize: Type Coersion

// Javascript is "flexible" with typing
// Values of all types have an associated Boolean Value.
// You dont have to have a boolean in an if block or a while block instead.
// You can have value of a different type and each of those values have a corresponding boolean value.
// Always use === for precise checks (both value and type) match.
// When you want to check both the value and the type match if you just use a double equals javascript could 
// potentially do type coersion and see if the coerced type matches which might not what you want sometimes.
// I personally choose "===" all the time.
// Because I want to have both type and value checks.
























