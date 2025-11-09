function divide(a,b){
    try{
        if(b === 0){
            throw new Error("You can't divide a number by 0")
        }
        return a/b;
    }
    catch(error){
        console.log(error.message);
        
    }
}
console.log(divide(10,0));
