function even(arr){
    for (i in arr){
        if(i%2==0){
            console.log(arr[i]);
        }
    }
    return;
}
even([1,2,3,4,5]);