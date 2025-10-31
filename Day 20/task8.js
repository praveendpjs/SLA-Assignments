function wait(callback){
    callback()
    console.log("This is waiting function");
    
}
function immediate(){
    console.log("This function will execute immediately");
    
}
wait(immediate)