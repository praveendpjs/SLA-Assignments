function validateInput(input) {
    if (input === undefined) {
        throw new Error("Input is undefined");
    }
    return input;
}

function throwError(message) {
    throw new Error(message);
}

function logResult(result) {    
    console.log(result);
}

try {
    const input = validateInput(undefined);
    const result = throwError(input);
    logResult(result);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log("Code executed");
}
