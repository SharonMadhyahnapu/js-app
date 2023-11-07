function add(x,y){
    let sum=x+y;
 return function sub(x,y){
     let sum=x-y;
     return sum;
 }
    }
 
 let result1=add(10,20);
 console.log(result1);
 let result2=result1(30,20);
 console.log(result2);
 


