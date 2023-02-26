const isPrime = (num) => {
    for (let i = 2, maxDivisor = Math.sqrt(num); i <= maxDivisor; i++) {
        if (num % i === 0) return false;
    }

    return num > 1;
};

const getFibonacci = (index) => {
    let firstNumber = 1;
    let secondNumber = 1;

    for (let i = 2; i <= index; i++) {
        let thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }

    return secondNumber;
};

const calcNextFibonacciPrime = (num) => {
    let result = 0;
    let fibonacciIndex = 1;

    while (true) {
        const currentFibonacci = getFibonacci(fibonacciIndex++);
        console.log(`fib ${currentFibonacci} ${num}`);
        if (currentFibonacci > num && isPrime(currentFibonacci)) {
            result = currentFibonacci;
            break;
        }
        console.warn(`bumping to ${currentFibonacci}`);
    }
    console.warn(`Next prime fib ${result}`);
};

calcNextFibonacciPrime(20);
