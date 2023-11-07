let arr=
      [ [4,1,2],
        [3,4,5],
        [6,7,8] ];
        let sum=0;
        let sum2=0;
        for(i=0;i<arr.length;i++){
            for(j=0;j<arr.length;j++){
                if((i+j)%2==0){
                   // console.log(arr[i][j]);
             sum+=arr[i][j];

                }
                else{
                    
                    sum2+=arr[i][j];
                    
                }
             }

             }
        console.log(sum,sum2);