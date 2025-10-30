function loginSystem(username,password){
    if(username === "admin"){
        if(password === "password"){
            console.log("welcome admin");
            
        }else{
            console.log("Incorrect password");
            
        }
    }else{
        console.log("Enter a valid user name");
        
    }
}
console.log(loginSystem("admin","password"));
