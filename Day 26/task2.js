function initTask(callback){
    callback()
}
function laterTask(){
    setTimeout(()=>{
        console.log("Task Completed");
        
    },3000)
}

initTask(laterTask)