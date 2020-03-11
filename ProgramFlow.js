let a=null;
if(a){

    console.log('YES')//NO OUTPUT

}
let designation='Manager'
let transport=(!designation)?'Avail car':'Bus';
console.log(transport);

let nums=[1,2,3]
for( let i=0;i<nums.length;i++){
console.log(nums[i]);
}

//For In ---------------------------------------- used for objects
console.log('FOR IN')
for(let n in nums){
    console.log(n)//Indexes
}

//For OFF ---------------------------------------- used for enumerables-Arrays etc
console.log('FOR OF')
for(let n of nums){
    console.log(n)//Indexes
}
//WHILE LOOP-----------------------------------------------------
console.log("WHLE LOOP")
let i=0;
while(i<=3){
console.log(i++)
}


// FUNCTIONS in JAVASCRIPT


