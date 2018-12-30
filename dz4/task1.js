//Задание 1
var numb, obj;

numb = +prompt("Введите число от 0 до 999");

obj = parseNumber(numb);
console.log(obj);

function parseNumber(x) {
    var res = {};

    if (x < 0 || x > 999) {
        console.log("Вы не ввели число от 0 до 999!");
        return res;
    }

    res.ones = x % 10;
    if (x > 9) {
        res.tens = Math.trunc(x / 10) % 10;
    }
    if (x > 99) {
        res.hundreds = Math.trunc(x / 100);
    }

    return res;
}
