let n=5;
let string="";
for(i=1;i<=n;i++){
    for(j=1;j<i;j++){
        string+=" ";
    }
    for(k=1;k<=n-i+1;k++){
        string+="*";
    }
    string+="\n";

}
console.log(string);