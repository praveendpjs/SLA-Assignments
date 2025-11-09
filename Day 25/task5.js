function checkGreater(num){
    try{
        if(num > 100){
            throw new Error("Number can't be greater than 100")
        }
        return num
    }
    catch(error){
        console.log(error.message);
        
    }
}
console.log(checkGreater(101));
