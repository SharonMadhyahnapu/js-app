function sortarr(arr){
    for(i=0;i<arr.length;i++){

        for(j=i+1;j<arr.length;j++){

            if(arr[i]>=arr[j]){
               let curr=arr[i];
                arr[i]=arr[j];
                arr[j]=curr;
            }
        }
    }
    console.log (arr);
}
sortarr([1,4,2,1,3]);
