function even(arr){
    let brr=[];
    for(i in arr){
    if(arr[i]%2==0){
        brr.push(arr[i]);
        console.log(arr[i]);
    }
}
return brr;
}

let result=even([1,2,3,4,5,6]);
console.log(result);