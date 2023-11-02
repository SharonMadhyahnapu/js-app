let x=153;
let y=x+'';
let len=y.length;
let sum=0;
for(let i=x;i!=0;i=parseInt(i/10)){
    
    console.log(i%10);
   sum+= Math.pow(i%10,len)


}
if(x==sum){
    console.log(x, "is Amstrong");
}
else{
    console.log(x,"is not a Amstrong")
}