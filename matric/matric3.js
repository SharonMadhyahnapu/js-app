let arrA=
      [ [4,1,2],
        [3,4,5],
        [6,7,8] ];
let arrB=
        [ [1,2],
          [2,0], 
        [1,2]];
        
let c=[[],[],[]];
    
        for(i=0;i<3;i++){
            for(j=0;j<2;j++){
let sum=0;
for(k=0;k<3;k++){
    sum=sum+arrA[i][k]*arrB[k][j];
}

c[i][j]=sum;

            }
        }
        
        console.log(c);