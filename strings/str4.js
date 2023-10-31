let str=("faith hope goodness selfcontrol peace  ");
let arr=str.split("");
// console.log(arr);
let sum=0;
for(i=0;i<arr.length;i++){
    if(arr[i]==' '){
        sum=sum+1;
    }
}
console.log(sum);