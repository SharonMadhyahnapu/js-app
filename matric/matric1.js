let arr=
      [ [4,1,2],
        [3,4,5],
        [6,7,8] ];
        let sum=0;
        for(i=0;i<arr.length;i++){
            for(j=0;j<arr.length;j++){
                console.log(arr[i][j]);
             sum+=arr[i][j];
        }
        
    }
    console.log(sum);
   