//objects: using the call method.

function Bicycle(cadence, speed, gear, tirePressure) {

    this.cadence = cadence;
    this.gear = gear;
    this.speed = speed;
    this.tirePressure = tirePressure;
    this.inflateTires = function () {
        this.tirePressure += 3;
    }


}
//calling the function in constructor mode


var bicycle1 = new Bicycle(30, 20, 50, 60);
bicycle1.inflateTires();
var bicycle2 = new Bicycle(30, 20, 50, 60);
bicycle2.inflateTires();

function Mechanic(name) {
    this.name = name;
}


//give a function to mike instance.
// I can have a function called Inflate Tires.
var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;
//inflate tires is a property which happens to be a function,
//basically taking that function instance and then creating
//a new property on mechanic object and giving that 
//inflate tyres as well.
// basically mike.inflateTires runs this anonymous function.
mike.inflateTires();//

//this function would get called.
// this.inflateTires = function () {
//     this.tirePressure += 3;
// }

// the fact that it happens to be inside another Object,is a 
// material now because its being executed in the context of 
// the mike object so all that you have left over here in the
// mic object is what's highlighted here which is an anonymous
// function which does this.tyrePressure += 3.

// mike.inflateTires();
// When this function--> [inflateTires();]
// gets executed in the context of the mike object what would
// be the value of the this reference here.
// When you say Objectreference.function that function is using
// the this reference that this reference points to that object
// instance in this case this will refer to the mike instance.
// so this object
// mike object.
// thats what this is going to refer to when this function gets
// executed in the context of the mike instance.
// this.tirePressure in the case of Mike is going to be undefined
// There is tirePressure property on the mechanic.
// So,it is going to be undefined.
// undefined + 3 is going to be NaN.
// When I say mike.inflateTyres();its going to try and execute the
// inflateTires on the mechanic itself and it not going to work.
// Like to do is pass in the bikeObject that I want Mike to inflate 
// the tyres off.
// I want Mike to inflate the tyres of any bicycle that's
// passed not just one particular bike and definitely not
// try to apply that operation on himself.
// What could do is change this function.
// function(){
//     this.tirePressure +=3;
// }
// Rather than it referred to this just accept the bicycle object.
// as an argument and then change the tirepressure,the fact that its 
// referring to this means that it can execute only in the context
// of a bicycle it cannot execute anywhere else and thats where
// we have this problem.




