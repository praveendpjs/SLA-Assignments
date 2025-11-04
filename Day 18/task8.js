function isSecure(password){
    if(password.length>=8){
        console.log("Password is secure");
        
    }else{
        console.log("Please enter a secure password");
        
    }
}
console.log(isSecure("Praveen"));
