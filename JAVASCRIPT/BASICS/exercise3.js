//Objects:
// ->Javascript is an Object Oriented Programming Language.
// ->You can write code and model your programming structure using Objects.
// ->So we will look at how objects works at Javascript.
// ->Will also look at how objects work in javascript and will aslo compare and constrast it
// ->with the way objects work in some of the other classical languages.
// ->Will recover this the javascript is an object oriented langauge.


// Javascript is an Object Oriented Programming Language but however it is not a class-based 
// programming language.
// Contrast this with a language like java where you have classes which define objects.
// In order to create an object what you need to do is create a class first,add member variables.
// add methods to it and then when you create objects off a particular class,I want this object to be off 
// a class so the class forms the template and then all these different objects are basically copies off that 
// template this works in a lot of class based object oriented programming languages.
// However in the case of javascript,there are no classes it is not a class-based object oriented programming 
// language so you can create objects without having classes in fact its necessary because its there are no
// classes in javascript,so javascript objects are essentially free form,they are not bound to a particular class.

//Features of the javascript objects:

// I can create objects in multiple different ways:
// The easiest way to do is creating an object inline.
// Think of how you would create a String Inline.
var myString = "Hello";
//I created a string variable by providing a value inline.
// I can do similar for an object,so I can say 
var myObj = {};
//The simplest object value I can give is an empty object.
// can do that using open curly brace,close curly brace.

//my obj is a variable which contains a value which is an empty object.
console.log(myObj);
//O.P --> Object{} --> Empty
//we have created an object out of thin we dont need to create a class for it.
// Since its not class-based there are no rules about what goes into an object and what shouldn't.

//You can add anything to an Object at any point of time.
//Thats what I meant I said,javascript is free from.
//There is no predefined structure.
//You can add stuff or remove stuff from an object whenever you want during runtime.
//I can actually do that by adding a propery.Objects typically consist of properties and methods.
//You must be familiar with one of the other programming languages which involve objects.
// An object is essentially a collection of data and functionality.
//The data is referred to as properties and the functionality usually consists of methods of the object.
//Let me add a simple property to this myObj object.
//Right now its empty.
myObj.prop = "Hello";
// creating a new property called prop on the object myObj.
// and setting a value to it which is a string called hello.
// I am adding a property dynamically at runtime and now whats going to happen
// is If I do a console.log of my Object I m going to get the object with the property.
// that has value which is a String "Hello"
console.log(myObj);
//O.P> Object{prop:"Hello"}
//Dont think of objects in Javascript as belonging to a template.
//Objects in javascript behave more like a map.
//Its is property and a value.
// So you can add keys to a map.
// Whenever you add something to a map,you add a key and associate a value to it. 
// create a key called property and add a value called Hello which was assigned to it.
//Let me add another property called prop2.

myObj.prop2 = 123;
console.log(myObj);
//O.P --> Object{prop:"Hello",prop2:123}

//Not only I add properties,I can also read from an Object.
// I can do that using the same convention.
// Object.property

console.log("The number property is" + myObj.prop2);

// The number property is 123.
// was able to pull up a specific property from the object by using the objectname.propertyname convention.
// Think of more like a map than the traditional class-based objects you are familiar with some of the other
// languages.

//The Object Literal:
// Now another way of defining an Object is by defining something called an Object Literal.
// I have an empty object by open and curly braces.
var myObj = {};
// basically has an empty object and than add stuff to it.
// But if you know that there are things you want in that object.
// rather than initializing it to an empty object.
// you can actually initialize with the property in place.
// Just like you have a string value Hello initialized.
// I can have a complete value initialized upfront.
// And I will show you how to do this.
// Rather than having an empty property and add properties to it.
// What I am going to do is.

var myObj = {

    "prop": "Hello",
    "prop1": 123
};

// Just a different way of doing it.
// Rather than initializing an empty object.
// And adding properties on top of it.
// I can initialize a fully prepared object inline.
// This applies to all different data types:primitive type data types.
// Which we have already covered.
// I can do a "prop3":true

var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true


};

console.log(myObj);
// Object{ prop:"Hello",prop1:123,prop3:true }
//Now in order to execute this and print the value of the number here which is "prop1" in this case.
console.log("The number property is" + myObj.prop1);
// The number property is 123
// It works exactly the same way as we have seen before but instead of having them,initialized to 
// multiple properties in individual steps and defining the whole object inline.
// I can do a combination of these things as well.
// I can define an initial set up inline and then I can add myobject.prop and you know add on to 
// it.
// Now there a couple of things which should strike you as different if you come from the classical 
// background of object oriented programming languages.
// You don't have the structure.
// Add things and remove things on the fly we covered it.  
// You think of it more like a map.
// The second thing is there is no accessor limitation.
// In C++ or java you would have to define a property as public in order to
// be accessible directly and you rarely do that when you write code.
// What you would do is have the property be private and define public getters and setters.
// So you access a property only by the getters method and you update the property using the setter method.
// You dont see that here,you dont have an option to control if a property is a private or a public.
// Any property is always accessible given an object I can always 
// say an Object.property and access it. 
// There are ways to make that behaviour happen in javascript.
// You know the private properties and the public accessors.
// But for the most part all properties are accessible by anybody.
// Another thing thats different when it comes to Javascript objects versus C++.

// If you access a property which doesnt exist.
// So in the case of C++ or Java there is this compilation step that happens which checks
// if the property that you are accessing is a part of the class.
// Because a class has a predefined structure.
// So, the compiler can check if you are doing something which doesnt even belong to the class.
// In which case the compiler say hey there is an error.
// Since this is free farm and there are no compilation steps so to speak in the case of Javascript.
// you dont get that level of protection.
// However what ends up happening is if you are accessing a property which doesnt exist doesnt throw an error
// just gives you undefined.
// So notice that I have a prop,prop1 and prop3.
// What if I access prop2?
var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true
};

console.log(myObj);
console.log("Accessing property that doesn't exist gives" + myObj.prop2);

//Thats not going to be an error that going to be undefined.
//So,this is a behaviour of javascript when it comes to Objects.


//Object Characteristics Summary:

//Free form - not bound to a class.

//Object Literal notation can be used to create objects.

//Object Properties can be accessed directly,there is no private and public here.

//Out of the Box,All objects are public and they are accessible by anybody.

//New properties can be added on objects directly.

//There is no class structure,there is nothing that prevents you from adding something into an Object.

//Any object can be modified and new properties and values added directly to that object.

//Finally objects can have methods 
//There are methods that can be added to objects but again is different from your traditional approach of having 
//classes which has methods.
//Here it is all properties so its a bit different.


//The dot and bracket notation:

//we have just used to access properties of objects.
//We did Object.property and we were able to access the property of the object so that is what referred to as 
//dot(.)Notation.
//The dot notation is however not the only way to access properties of Objects.
//There is another way which is the square bracket notation[].
//I can also access the property using the square bracket notation.

var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true
};

console.log(myObj);
console.log("Accessing using square dot (.) notation" + myObj.prop1);
console.log("Accessing using square bracket notation" + myObj["prop1"]);
//O.P --> Accessing using square bracket notation 123

// There are two ways in which you can access the objects one is using the dot (.) notation.
// and one is using the square bracket notation.

//Now what is the difference between the two?

//The square bracket notation is used in certain scenarios where the . notation doesnt work.
//One scenerio is the property name is a reserved word/invalid identifier.

var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true,
    "1": one
};

console.log(myObj);

// "1": doesn't turn out as a valid variable name.
console.log(myObj.1);
//The only way you can access it is by using a square bracket notation.
console.log(myObj["1"]);
// There are certain cases where the name of the property is invalid.
// In those cases you have to use the [] bracket notation.

var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true

};

// Now lets say I have 
// I know already what property I want prop,prop1,prop3.
// I can access myObj dot prop while I am coding.
// Now lets say I need to pull up a property based on some external factor.
// may be a user input or something.
// When I am writing the code,I have no idea,what the property is going to be,that I need.
// So,in that case I really cannot do this 

var propertyName = "prop1";

//Now somebody gives me this variable,it has a value.
//And I somehow have to get the property with the name which is a value in that string.
//And I pull that out of the Object.
//How do I do that?
//One way to do that is by using a [] bracket notation.
//So, I can pass in the property name into the square bracket notation.
console.log(myObj.)
// I cannot do a dot property name because there is no property called property name.
// What I want is the value of the property name?
// So,I can use [] bracket here.
// Rather than passing an inline string.

console.log(myObj[propertyName]);
// So,now what going to happen is whatever is the value of this variable --> propertyName
// Hopefully its a string --> "prop1"
// So,whatever is the value of that it gets that string. 
// and then checks if there is a property in my object with that name.
// If it finds that then its going to pull that up.
// So,its more dynamic.
// The value 123 is printed.

// I don't have to know what the value in this line is
console.log(myObj[propertyName]);
// I don't know what the value of property name is.
// If it happens to be a property,its going to get that property.
// If its doesnt happen to be a property in the object at the time,it going to return undefined.
// So,it makes it all the more dynamic.
// So,that could be another reason why use the [] bracket notation.'

// When you have a square bracket notation it reduces the oppurtunities for the engine to optimize.
// When you have the dot notation the engine knows up front what the code is going to do.
// It knows what variable,what property of the object you are referring to.
// So,it could so some optimizations.

// But when you are using the [] bracket notation it has no idea.
// The property that it needs to pull up,when you use the [] bracket notation.
// is the value that the string happens to have at that point of time.
// so there may not be oppurtunities.
// for the Javascript Engine to optimize,so there is a chance that a dot notation is faster to access than a 
// a square bracket notation.

// That is a trivial trade off in my opinion beacause there are some cases where you have to use the square 
// bracket notation but the whole point I m putting this note is that if you can get away with dot notation,
// use a dot notation.
// When you haves some constraints that I have covered,you have to use a sqaure bracket notation.


// Runtime engine may not be able to optimize [] notation.
// Dot and [] notation can be interchanged.
// Going to talk about that when you have nested objects.


// In most programming languages as in Javascript.
// An object is essentially a reference to a location on the heap.
// So when you say var myObject = and you give it an object.
// The myObject varible is essentially pointing to a location in memory where the object has been allocated.
// So this works in most programming languages and its something similar in javascript as well.
// Since this whole things executes in the browser itself,there is this memory location in the browser's memory
// the browsers memory space where it is managing for your code.
// and there is this location allocated for your object.
// and your variable is pointing to that object.
// You can have another variable that points to the same object by 
// var myObj2 = myObj.
// in which myObj2 and myObj are essentially pointer to that single location.
// in memory for that object.
// variables are essentially pointing to a memory location in an object.


//What are the things that you can assign to a variable.
// We have seen primitive types.
// var a variable name and we have given a primitive type.
// and we have assigned different values.
// like a string,a boolean and a number and all those things to that variable.

// Similarly you can aslo assign an Object like we have seen a location in memory to that variable.
// and that is one thing that can go in that variable,thats one thing that the variable can hold.
// as a valid value.
// Anything thats a valid variable value is also an Object property valiue.
// So just like you can have a variable which contains a number you can also have an object property
// which contains a number or a string or any of those primitive types.
// So what interesting here is just like you have a variable which contains an object you can also have an
// object property that contains an Object,thats pointing to an Object.
// So,you can have an Object in which there is a property which is another Object.
// So,that object could have another property which can have another object.
// So,what you are looking at is Nested Objects.

// You can have different languages where the property of the class is an instance of another class.so you can 
// have objects containing the properties containing Objects.

//Let me demonstrate a nested Object structure here:
// where you can mix and match the dot operator and the square bracket operator.

var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true,
    "objProp": {} // can be an Empty Object.
    objProp: {

        innerProp: "Inner Property",

        newInner: "new inner value"

    }

};

var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true,
    "objProp": {
        "innerProp": "Inner Property"//initilize to something else.
    }// So this is still an inline definition of an Object.
};

// I am defining all those properties and the values,I just happen to have a property which is having a value
// of an Object and I am defining that object inline.
// This can be mix and matched. 
// So,in order to print the inner property of this object property("objProp"),the way to do this 

myObj // which is the variable that holds the top-level object.
myObj.objProp// value of this should be an object.
console.log(myObj.objProp);// value of this will be the inner object.

//O.P --> Object{innerProp:"Inner Property"}

// Now what if I want to access the property of the inner object.
// I can do that by adding a dot operator on top of it.
// So,.this property is going to result in an Object.
console.log(myObj.objProp.innerProp);
//O.P --> Inner Property


// All the things that you have learnt works the same way,you can create new properties on this inner 
// object just like you can create a property on the outer object.
// For instance 
myObj.objProp.newInner = "new inner value";

console.log(myObj.objProp);
//O.P --> Object { innerProp: "Inner Property", newInner: "new inner value" }

console.log(myObj.objProp);

//O.P --> Object { prop: "Hello", prop1: 123, prop3: true, objProp: {…} }
console.log(myObj.objProp.newInner);

//I am using the dot operator to get to "objProp".
//I am using the [] operator to get to this property "innerProp".

var myObj = {

    "prop": "Hello",
    "prop1": 123,
    "prop3": true,

    "objProp": {
        innerProp: "Inner Property",
        newInner: "new inner value"
    }
};


console.log(myObj.objProp["newInner"]);
//O.P --> new inner value



// Revisiting  === for objects.
// The way it works in javscript is similar to that in Java or C++.

var myObj = {

    "myProp": "Hello"
};


var myObj2;//It is undefined at this time.
myObj2 = myObj;

// So, I am having the variable myObj to point to the object that myObject is pointing to.
// So,basically two variables they point to the same location,where the object has been defined.

//So,no matter which variable I use to access this object it is essentially pointing to the same location.
//So,in order to access myProp here I can say,
//myObj.prop or myObj2.prop 
//They both refer to the same property of the same Object.
console.log(myObj.myProp);
// O.P --> Hello
console.log(myObj2.myProp);
// O.P --> Hello

//Since they are referring to the same location,this is what the equality operator is going to use.
//So,when you have 2 variables which are objects and you want to compare if variable a is equal to variable b,
//Javascript interpreter checks if they are pointing to the same object.
//The same location in memory,if they are then it works and the value is true.

if (myObj === myObj2) {

    console.log("Variables are equal");
}

//O.P --> variables are equal.

//So object variables are equal then they find to the same object in memory.


// Revisting undefined vs null.
// Specific use in the case of Objects.

//There are certain implications that you need to think about.
//Lets say I have this person object.

var person = {

    'firstName': 'kaushik',
    'lastName': 'Kothagal'
};

//if I were to access person.age what will happen.
//there is no age property.

//O.P --> undefined.

// because it doesnt exist.

// This is the way javascript objects work.
// accessing a property which doesnt exist.
// doesnt throw an error.
// all you get is undefined.
// lets say there is a middle name property on this object.

// If I want to communicate I actually dont have a middle name.

var person = {

    'firstName': 'kaushik',
    'middleName': null,
    'lastName': 'Kothagal'
};


// What I can do is I can set a property called middleName:null
// Again use the analogy of not intializing a value and initializing a non value.
// age here is not set so it is blank,it is undefined because the value hasn't been set.
// But as per middleName the value has been set to be an empty value.
// So,if somebody were to look at this object and person.middleName they would get the value --> null.
// Its not the object missing a property we call middle name,it is that the object has a property called 
// middleName which is empty.
// So,this is another distinction where you would use undefined vs null.
// If you have an object which doesnt has a property you are seeking,its going to get you undefined.
// So,in order to convey an empty value,you can just leave it there.
// You have to put a value in there which is a non value and that non value is Null,which is an ideal value for
// that


//So far we have talked about adding properties to an Object.

//Different ways of creating an Object with certain properties.
//What if I want to remove it?
//Lets take an example of a person object.

var person = {
    'firstName': 'Kaushik',
    'middleName': null,
    'lastName': 'Kothagal',
    'age': 25
};



// I dont want the age to show up in my Object.
// How do I remove a property from an Object?

person.age = undefined;
// What are the implications of doing something like this?
// After I do this what will be the value.
person.age
//What will be the value?
person.age = undefined;
// It will be undefined.
// If the object did not have the age property person.age would have been undefined.
// Now the object you know has the age property but you know I have said the values as undefined so
person.age = undefined;
// So its almost the age property isnt there.
// So, have they removed the age property.

// Even the person.age returns the value undefined if I would access just the person object look the object
// I m going to get

person = {

    'firstName': 'Kaushik',
    'middleName': null,
    'lastName': 'Kothagal',
    'age': undefined// the last property here is age undefined.
    //Its not I have removed the property from the object.property still exists I have just set the value of 
    //the property to be undefined


};

// As long as you are accessing person.age its fine,its exatly the age same as the property wasn't there,but
// if you are accessing the object itself then the facase falls apart.
// You can see that the age property does exist and it has the value undefined.


// 
// var person = {                                    var person ={
//                                                         'firstName': 'Kaushik', 
//     'firstName': 'Kaushik',                              'middleName': null,   
//     'middleName': null,                                  'lastName': 'Kothagal',
//     'lastName': 'Kothagal',                              'age':undefined  
//    
//      };                                                  };


//person.age has the value undefined in both cases but they are not the similar objects.
// One of them has the age property. 
// We actually set out to remove the age property not leave it in there with the value undefined.
// So the way to remove a property from the object is not by using this person.age = undefined.

// instead we use this keyword called delete delete.object.property
delete person.age;
// If would do this person.age would still return the value as undefined.
person.age = undefined;

var person = {

    'firstName': 'Kaushik',
    'middleName': null,
    'lastName': 'Kothagal',

};

console.log(person);
//But if you access the person directly you would see that the age property has disappeared.
//It doesnt exist anymore,because its actually been removed or deleted from the object.

//So,whenever you need to remove an object you always use the delete keyword
delete object.property;
// then the property goes away.


//Arrays:

// have a sequence of values that you want to access in an indexed based way then you would use 
// something like arrays.
// An array can be defined in javascript by using the syntax :
// a list that you are defining inline
// using open and close [] brackets with individual values seperated by commas.
var myArray = [100, 200, 300];
// use to acces this values is the [] bracket operator.

myArray[0];
myArray[1];
myArray[2];
myArray[3];
//You have a [] and then you have the array index to access the value at that location.
//Note that javacript arrays with most other languages are 0 based so the first element is index 0.
//To access 100 I use my array of 0.

//Can you guess of what the value of an array access where the index is out of bounds would give me?
var myArray = ["Hello", "World", "JS"];
console.log(myArray[0]);//Hello
console.log(myArray[1]);//World
console.log(myArray[2]);//JS
console.log(myArray[3]);//undefined

//If you access an object but the property doesnt exist it would give you undefined.
//Similarly if you access an array where the array index is out of bound,its doesnt exist,the value you get
//is undefined.

//Now how do you add a value to an array:

myArray[3] = "JavaBrains";
console.log(myArray);

//O.P--> myArray = ["Hello","World","JS",JavaBrains];
//What the length of the array?
//In order to get the length of the array

myArray.length
//O.P => 4

//The length keeps on updating on how many elements are there in any point of time.
//What's the name of the unit in which you are viewing this video?
//Unit is Objects.

// Now why am I taking of Objects?
// What's actually happening is an Array is actually an Object,every javascript array is secretly a 
// javascript object? 
// Just has some special properties to it.
// Underneath its just an Object.
// So when you are accessing myArray,you are basically accessing. 
// Object.property work the same. 

//A lot of things we have covered before work the same way when it comes to Objects.
//For instance:

var myArray2 = myArray;

//So I have an array pointing to the same location so I can say 

myArray2[3];
//O.P -> "JavaBrains"
//Its still at the same location.
//Print the whole Object.

//Print my array:

//O.P --> Array{"Hello","World","JS","JavaBrains"}
//Click on the link:
//  --> Array
//Array[4]
//0:"Hello"
//1: "World"
//2:  "JS"
//3: "Javabrains"
//lenght:4
// Basically a bunch of key : values
// Just like you would see in any object.

//We have a key called 0 the property called 0 with the value Hello
//We have a key called 1 the property called 1 with the value World
//We have a key called 2 the property called 2 with the value JS
//We have a key called 3 the property called 3 with the value Javabrains
// And there is also a property called length with the value 4

//This is actually an object underneath and the array indexes are actually properties.
//In order to demonstrate that say If I were to access.

myArray[0];//Hello
//What if were to tell you that myArray is an object with property 0?
//Let me prove that by doing this:
myArray["0"];//pass in the string 0 //"Hello"
// Can I use the dot notation?I obviously cannot.
// If the property notation happens to be a number,you cannot use the dot notation.
// You have to use the [] bracket notation.

// When you are creating an Object you are basically creating an Object where the property names
// are just numbers.
//Thats actually an Array is driven by an Object underneath.

// If this myArray is actually an Object which has properties named 0,1,2,3
// How does this work myArray[0] I am passing a number and not a string myArray["0"].
// The reason that this works is actually Javascript converting that 0 which is a number to a string
// automatically.
// This is another instance of type coersion where Javascript looks at your object reference here which is
// an array and its say okay if this developer is trying to access a property of an object and the property 
// happens to be a number so the javascript interpreter converts that to a string and looks that up for you.
// There is implicit conversion thats happening.
// There is no restriction as what name you can give to a particular index
// You get undefined which shouldn't be a surprise what happens when you accesss a property that doesnt exist 
// on an Object,you get undefined its exactly the same thing here.
myArray[4];//undefined.
// But lets say I set the value here, 
myArray[4] = "bar";
// O.P -> "bar"
// You can access myArray.
// If these were truly names and not indexes,I can pick any name turns out I can.
// Array before: Array{"Hello","World","JS","JavaBrains"}
// I can say myArray[400]="baz",just a property just a name.
// I can just set the value to index 400  and it still works.
// check the status of myArray.
// Array ["Hello","World","JS","JavaBrains","foo","bar",<5 empty slots>,391 more...]
// 0:"Hello"
// 1:"World"
// 2:"JS"
// 3: "Javabrains"
// 4: "bar"
// 400:"baz"
// length:401
// The length property say its 401.
// So,the length doesnt count how many elements properties you have in the array Object,
// it counts the index of the last element,the greatest element as a number and then its adds
// 1 to it,because its a zero based index,so the length in this array is 401.
// Its an interesting implication to keep in mind,but yeah in essence arrays are freeform,
// you can assign any property here,the only limitation is whatever you assign has to be a number 
// for it to be treated as an array index. 
// You can assign a property which is not a number.
// myArray["foo"] = "abc" --> O.P --> "abc".
// If I were to get an array, I get a property:
// 0:"Hello"
// 1:"World"
// 2:"JS"
// 3: "Javabrains"
// 4: "bar"
// foo:"abc" <----It just sitting there with the other number indexes 
// 400:"baz"  but notice the length hasnt changed,its still 401.
// length:401
// If we want to treat an array as an array,always choose the number properties.
// You can treat it as an object and add more properties to it and thats where you know you
// realize that its actually an object underneath.
// ******************************************************************






































































