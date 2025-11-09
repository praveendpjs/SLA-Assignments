function checkNegative(num){
    try{
        if(num < 0){
            throw new Error("Number can't be negative");
        }
        return num
    }
    catch(error){
        console.log(error.message);
        
    }
}
console.log(checkNegative(-10));
