//Named Function
function greet(message){
    console.log('Inside function');
    console.log(message);
    let a=10;
    return a;
}
console.log(`Returned value: ${greet('Hello')}`);

//Anonymous Function

let result=function()
{
console.log('Inside Anonymous function');
}

result();
console.log(result);


//iife ----Calls itself ASAP

(function(a,b){
console.log('Inside IIFE')
console.log(a)
console.log(b)
})(10,20)

//ARROW FUNCTION -IN ES-6

let arrow1=(a,b)=>a+b
console.log(`Arrow single line Function ${arrow1(4, 5)}`);

let arrow2=(a,b)=>{
    console.log('Multi line Arrow')
    return a+b }
console.log(`Arrow multiple line Function ${arrow2(4, 5)}`);

let arrow3= a=>a+5;
console.log(`Arrow single parameter Function ${arrow3(4)}`);

let arrow4=()=>console.log("No Parameters");
console.log(arrow4());