function checkNegative(num) {
    try {
        if (num < 0) {
            throw new Error("Number should not be negative")
        }
        return num
    } catch (error) {
        (error.message)
    }

}
console.log(checkNegative(-8));
