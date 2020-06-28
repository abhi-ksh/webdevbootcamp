function isEven(num){
    return num % 2 === 0;
}

console.log("2 is an even number: " + isEven(2));
console.log("5 is an even number: " + isEven(5));
console.log("8 is an even number: " + isEven(8));

function factorial(num){
    let result = 1;
    while(num > 1){
        result *= num;
        num--;
    }
    return result;
}

console.log("Factorial of 4 is: " + factorial(4));
console.log("Factorial of 5 is: " + factorial(5));
console.log("Factorial of 1 is: " + factorial(1));

function kebabToSnake(kebab){
    let snake = kebab.replace(/-/g, "_");
    return snake;
}

console.log("an-evening-in-paris: " + kebabToSnake("an-evening-in-paris"));
console.log("on-the-waterfront: " + kebabToSnake("on-the-waterfront"));
console.log("sleepless-in-seattle: " + kebabToSnake("sleepless-in-seattle"));
