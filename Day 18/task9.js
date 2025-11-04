function isAdult(age,subscribed) {
    if (age >= 18) {
        
        if(subscribed === true){
            console.log("Welcome");
        }
    }
    else {
        console.log("You are not welcome");

    }
}
console.log(isAdult(19,true));
