let str=("loud noises");
let arr=str.split(" ");
let str1=arr[0].split('');
//console.log(str1);
let str2=arr[1].split('');
//console.log(str2);
let curr=str1[0];
str1[0]=str2[0];
str2[0]=curr;
//console.log(str1,str2);

 let ans=str1.join('')
 let ans1=str2.join('')
console.log(ans,ans1);

// arr[0]=ans;
// arr[1]=ans1;

// let rslt=arr.join(" ");
// console.log(rslt);