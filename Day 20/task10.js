function addArr(arr){
    let sum = 0
    for(let i = 0; i <= arr.length-1; i++){
        sum += arr[i];
    }
    return sum

}
console.log(addArr([1,2,3,4,5]));

