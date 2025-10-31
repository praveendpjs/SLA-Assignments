function getName(name,callback){
    callback()
    console.log(name);
    
}
function greetUser(){
    console.log("Welcome Back!:");
}
getName("Praveen", greetUser)