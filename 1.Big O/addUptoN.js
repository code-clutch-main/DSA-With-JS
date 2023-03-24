let performance = require("perf_hooks").performance;

function addUptoN(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }
    console.log(`Total : ${total}`);
}

function addUptoM(m) {
    let total = (m*(m+1))/2;
    console.log(`Total : ${total}`);
}

let start = performance.now();
addUptoM(1000000000000);
let end = performance.now();
console.log("Time elapsed ", (end-start)/1000, " seconds");