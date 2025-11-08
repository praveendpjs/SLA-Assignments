function divide(a,b){
    try{
        if(b === 0){
            throw new Error("You cant divide a number by zero")
        }
        return a/b;
    }
    catch(error){
        console.log("Error:",error.message);
        
    }
}
console.log(divide(10,0));
