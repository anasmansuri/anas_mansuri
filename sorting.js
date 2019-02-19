//for
function sort(num){
    for(var i=0;i<num.length;i++){
        for(var j=i+1;j<num.length;j++){
            if(num[j]<num[i])
            {
                temp=num[j];
                num[j]=num[i];
                num[i]=temp;
            }
        }
        console.log(num[i]);
    }
}
var x=[5,4,6,8,7];
var ans=sort(x);

//forEach
var number=[201,3,192,5,4];

number.forEach(function (param,k,ar) {
    for(var i=0;i<number.length;i++){
        for(var j=i+1;j<number.length;j++){
            if(ar[j]<ar[i]){
                temp=ar[j];
                ar[j]=ar[i];
                ar[i]=temp;
            }
        }
    }
    console.log(ar[k]);
});
//map
var ar=[50,45,2,15,18,17];
var c=ar.map(function (param,k,ar) {
    for(var i=0;i<ar.length;i++){
        for(var j=i+1;j<ar.length;j++){
            if(ar[j]<ar[i]){
                temp=ar[j];
                ar[j]=ar[i];
                ar[i]=temp;
            }
        }
    }
    return ar[k];
});
console.log(c);
 
