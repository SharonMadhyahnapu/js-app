function add(sub,x,y){
    let sum=x+y;
    let r=sub(x,y);
    console.log(r);
    // let result=sub(x,y);
    // console.log(result);
    return sum;
    
}   
function sub(x,y){
    let sum=x-y;
    return sum;
}
let result1=add(sub,1,2);
console.log(result1);



// function f1(f2){
//     f2()
//     console.log("inside f1")

    
// }
// function f2(){
//     console.log("inside f2")
// }

// f1(f2);
// // f2();