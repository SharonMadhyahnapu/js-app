function max(arr){
    let x=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>x){
            x=arr[i];
        }
    }
    return x;
}
let result=max([10,80,30,100,40,70]);
console.log(result);