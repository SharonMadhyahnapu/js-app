let str=("jammemah");
let arr=str.split("");
let x=arr.sort();
//console.log(x);
let count=0;
for(i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
        count++;
    }
}
console.log(count);