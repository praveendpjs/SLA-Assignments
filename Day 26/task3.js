function doTaskPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task Completed");

        }, 2000);
    });
}
async function runTask() {
    try {
        const message = await doTaskPromise();
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}

runTask();