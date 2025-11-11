function createAsyncCounter() {
    let count = 0; 

    return function incrementAsync() {
        count++; 
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(`Counter: ${count}`);
                resolve(count); 
            }, 1000);
        });
    };
}

// Usage:
const counter = createAsyncCounter();

counter()
    .then(() => counter())
    .then(() => counter())
    .then(() => counter());
