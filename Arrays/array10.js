function count(arr){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            x=x+1;

        }
    }
    return x;
}
let result=count([1,4,5,8,0,3,0,2,0,2,0,2,0]);
console.log(result);