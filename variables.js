console.log("Inside Variables.Js");

//"use strict";  // For Strict Variable Declaration

var x=10   //Es-5
x='X changed'
console.log(x)
var x='Again Changed'// Allows Changing

y='hello'  //creates global variable

let z=true //Recommended
z='Z changed'
console.log(z)
//let z='Again Changed' //Does Not Allow

const c=40  // constant
//c=c+1; // Not Allowed
console.log(c);

//   TYPES------------------------------------------- DATATYPES   //

let num1=34.5;
console.log(typeof num1 + ' dataType of Num1');  //number

let numInt=34;
console.log(typeof numInt + ' dataType of numInt');  //number

let name='Vithal';
console.log(`My Name is: ${name} and dataType of this var is: ${typeof name}`); //String

let isCorona=false;
console.log(`Corona?  ${isCorona} and dataType of this var is: ${typeof isCorona}`); //boolean


let test
console.log(typeof test)  //undefined

let primitive=null;
console.log(typeof primitive) //object


//  OBJECTS------------------------------------------------------------------------------

let person={};  //Short hand notation--Empty Object
console.log(person)


let personDetails={myDetails:'Manager'};  //Short hand notation--Empty Object
console.log(person)



let employee={
    empId:57118,
    empName:'Vithal',
    deptName:'Cisco',
    isEmployeed:true,
    personDetails   //allowed - its ES-6 ShortHand notation
}
console.log(employee);
console.log(employee.deptName)

//-----------------------------------------------Constructor Function

function Employee(fName,lName){
    this.empFName=fName;
    this.empLName=lName;
}
console.log(Employee)

let e1=new Employee('Vithal','Waghmode')
console.log(e1)



//Long Hand Notation----------------------------------------------------

var stud=new Object();
console.log(`Student long Hand:  ${stud}`);
stud.rollNo=123;
stud.name='Vithal';
stud.marks=55;
console.log(`Student long Hand:  ${stud.rollNo}`);

var stud={}
console.log(`Student short Hand:  ${stud}`);

// ARRAY--------------------------

let arr1=[0,1,2,3,4,5];
console.log(arr1);

let arr2=new Array();
arr2[0]=0
arr2[2]=2
console.log(arr2)
console.log(arr1[0]===arr2[0]);//TRIPLE EQUAL TO---------------------


let a='3'
let b=3

console.log(a==b);