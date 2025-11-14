// Messy code
// let items = [10, 20, 30, 40];

// let total = 0;
// for (let i = 0; i < items.length; i++) {
//     total = total + items[i];
// }
// console.log("Total:", total);

// let avg = total / items.length;
// console.log("Average:", avg);

// for (let i = 0; i < items.length; i++) {
//     if (items[i] > avg) {
//         console.log(items[i], "is above average");
//     }
// }

// Good code
function calculateTotal(arr) {
    return arr.reduce((sum, val) => sum + val, 0);
}

function calculateAverage(arr) {
    return calculateTotal(arr) / arr.length;
}

function logAboveAverage(arr) {
    const avg = calculateAverage(arr);
    arr.forEach(val => {
        if (val > avg) {
            console.log(val + " is above average");
        }
    });
}

const items = [10, 20, 30, 40];

const total = calculateTotal(items);
console.log("Total:", total);

const avg = calculateAverage(items);
console.log("Average:", avg);

logAboveAverage(items);
