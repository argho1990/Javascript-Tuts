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
//   var value;
// =>Definition: is when you assign a value to that variable:
// value = 42;
// Between these two lines,between declaration and definition these again depend on the language,different
// languages have different ways of handling the space between when the variable is declared and the variable
// is defined in the case of Javascript however as soon as the variable is declared the minute you say var a 
// or var value or var foo there is an explicit value and assign to that varible,even though you are not assigning
// the value yourself there is a value being assigned to it and that value is undefined.
// Its basically javascripts way of saying you have declared it but you havn't defined it.so the variable at this point
// of time is undefined. 
// What is the value undefined which type is the value?









