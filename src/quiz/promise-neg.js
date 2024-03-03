function checkNeg(arr, index) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < arr[index].length; i++) {
                if (arr[index][i] < 0) {
                    resolve({ Row: arr[index] });
                    return;
                }
            }
            reject("NO EVIDENCE FOUND");
        }, 0);
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const promise1 = checkNeg(array2D, 0);
const promise2 = checkNeg(array2D, 1);
const promise3 = checkNeg(array2D, 2);

Promise.any([promise1, promise2, promise3])
    .then((result) => console.log("Result:", result))
    .catch((err) => console.log("Error:", err));