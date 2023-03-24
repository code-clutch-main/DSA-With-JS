
function increment() {
	let base=0;
	base += 1;
	console.log(base);
}

// increment();



function printPair(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}

// printPair(5);


function upDown(n, m) {
	for (let i = 0; i <= n; i++) {
		console.log(i);
	}
	for (let j = m; j >= 0; j--) {
		console.log(j);
	}
}

// upDown(3, 4);


function atleastN(n) {
	for (let i = 0; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}

atleastN(3);


function atMaxN(n) {
	for (let i = 0; i <= Math.min(2, n); i++) {
		console.log(i);
	}
}

atMaxN(5);

