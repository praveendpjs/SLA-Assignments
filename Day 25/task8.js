function checkAge(age){
    try{
        if(age < 18){
            throw new Error("You are underage")
        }
        return "You are 18+"
    } catch(error){
        console.log(error.message);
        
    }
}
console.log(checkAge(18));
