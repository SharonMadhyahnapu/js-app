let str=("1,2,3,4");
let arr=str.split(",");
console.log(arr);
let sum=0;
for(i=0;i<arr.length;i++){
   let num=parseInt(arr[i],10);
    sum=sum+num;
}
console.log(sum);