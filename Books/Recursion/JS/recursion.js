const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

(function RecursionApp() {
    const triangleWhile = (n) => {
        let res = 0;
        while (n > 0) {
            res += n;
            n--
        }
        return res
    }

    const triangle = (n) => {
        if (n === 1) {
            return 1;
        } else {
            return (n + triangle(n - 1))
        }
    }

    const factorial = (n) => {
        if (n === 0) {
            return 1;
        } else {
            return (n * factorial(n - 1))
        }
    }

    rl.question("Enter a number: ", str => {
        if (str === "") {
            process.exit(0);
        }

        const resWhile = triangleWhile(Number(str))
        const resTriangle = triangle(Number(str))
        const resFactorial = factorial(Number(str))

        console.log(`Triangle While = ${resWhile}`);
        console.log(`Triangle = ${resTriangle}`);
        console.log(`Factorial = ${resFactorial}`);
        process.exit(0);
    })
})()