console.log('Hello, JS!');

//func 1
function getSensOfLife() {
    return 42;
}

// 1
let res = getSensOfLife();
console.log(res);

// 2
console.log(getSensOfLife());

// func 2
let getSquared = num => num * num;

//test data

console.log(getSquared(5));
console.log(getSquared(0));
console.log(getSquared(-7));

//func 3

let sum = (num1, num2) => num1 + num2;

console.log(sum(-20, -5));
console.log(sum(50, 'some'));
console.log(sum(0, -5));

let getMessage = age => {
    if (age < 0 || typeof age !== 'number') {
        return null
    }
    return `I'm ${age} years old`;
}

console.log(getMessage(27));
console.log(getMessage('?'));
console.log(getMessage(11));

//arrow func

let mult = (num1, num2) => num1 * num2;

console.log(mult(0, 5));
console.log(mult(5, 5));
console.log(mult(-2, -8));

//magic number

let getMagicNumber = () => 17;
console.log(getMagicNumber());