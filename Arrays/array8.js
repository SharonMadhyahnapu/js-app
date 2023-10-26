function duplicate(arr){
    arr.sort();
    let brr=[];
    for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
        brr.push(arr[i])
        
    }

}
return brr;
}
let result=duplicate([1,1,2,3,4,3,5,6,5,7,7]);
console.log(result);