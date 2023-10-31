function str(n){
n=n.toString();
let arr=n.split("");
let count=0;
   for(i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
           count++;
           if(count>=2){
            return "Awesome";
           }
           
        }
        else{
            count=0;
           } 

   }
   return "Good";
}


let result=str(112233);
console.log(result);
    

