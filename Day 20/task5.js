function getUserName(callback) {
    const userName = prompt("Please enter your name:");

    if (userName) {
        callback(userName);
    } else {
        console.log("No name entered.");
    }
}

function greetUser(name) {
    console.log(`Hello, ${name}! Welcome!`);
}

getUserName(greetUser); 