function duplicate(arr){
    arr.sort();
    for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
        return "true"
    }

}
return "false";
}
let result=duplicate([1,2,3,4]);
console.log(result);
