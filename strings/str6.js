function str(n){
    n=n.toString();
    let arr=n.split("");
    let count=0;
       for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
               count++;
               if(count>=2){
                return "Awesome";
               }
               
            }
       }
      count=0;
    }
    return "Good";
}
    
    let result=str(82134567896);
    console.log(result);
        
    