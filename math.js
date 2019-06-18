const Math = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    return x2 === 0 ? 'Number 2 cannot be 0' :  x1 / x2;
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;
Math.hello = hello;

function hello(name) {
    console.log('Hola ' + name)
}

module.exports = Math;