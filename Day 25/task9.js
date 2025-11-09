try {
    throw new Error("This is a test error");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}