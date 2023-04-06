var array = [1,2,3,4,5,6,7,8,10,12,13];
var evenArray= [];
let sum = 0;

for(let i = 0; i < array.length ; i++){
    if(array[i]%2 == 0){
        evenArray.push(array[i])
    }
}

//console.log(evenArray)

var squaredArray = evenArray.map(
    function(num){
        return num**2;
    }
)

//console.log(squaredArray)

for(let items of squaredArray){
   
    sum=sum + items;
}

console.log("Sum of even Squared Array = ", sum)

