function getSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function getTriple(arr) {
    let updatedArr = [];
    for (let i = 0; i < arr.length; i++) {
        updatedArr.push(3 * arr[i]);
    }
    return updatedArr;
}

console.log(getSum([1,2,3]));
console.log(getTriple([1,2,3]));