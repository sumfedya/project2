var a = 10,
    b = 10,
    c = 10,
    d = 10; //неповторяющиеся 4 цифры числа
var count; //счетчик попыток, предоставим их 10
var userNumber, result = false;

a = rand(b, c, d);
b = rand(a, c, d);
c = rand(a, b, d);
d = rand(a, b, c);

console.log("Загаданное число: " + (a * 1000 + b * 100 + c * 10 + d));

for (count = 1; count <= 10; count++) {
    userNumber = parseInt(prompt("Угадайте четырехзначное число! Осталось попыток " + (11 - count), "1234"));
    if (correctNumber(userNumber) == false) {
        count--;
        continue;
    }
    document.write(userNumber + "</br>");
    result = analyze(userNumber);           //число угадано или нет

    if (result == true) {
        alert("Молодец, ковбой! Число угадано!");
        location.reload();
        break;
    }
}

if (result == false) {
    alert("Попытки закончились, число не угадано! Новая игра!");
    location.reload();
}

///////////////////////////////////////////////////////////////////////////////////////
function rand(x, y, z) {
    var k = 10;
    while ((k == x) || (k == y) || (k == z) || (k == 10)) {
        k = Math.round(Math.random() * 9);
    }
    return k;
}

function correctNumber(x) {
    if (isNaN(x)) {
        alert("Дружище, ты ввёл совсем не число! (" + x + ")" + " Попробуй снова!");
        return false;
    }
}

function analyze(x) {
    var i = Math.trunc(x / 1000),
        j = Math.trunc(x / 100) % 10,
        m = Math.trunc(x / 10) % 10,
        n = x % 10; // разберём каждый разряд пользовательского числа
    console.log(i + ", " + j + ", " + m + ", " + n);

    var res1 = compare(i, a, b, c, d);
    var res2 = compare(j, b, c, d, a);
    var res3 = compare(m, c, d, a, b);
    var res4 = compare(n, d, a, b, c);

    if ((res1 == "bull") && (res2 == "bull") && (res3 == "bull") && (res4 == "bull")) {
        return true;
    } else {
        return false;
    }
}

function compare(numb, mostArg, arg1, arg2, arg3) {
    if (numb == mostArg) {
        alert("Молодец! Это БЫК! (" + numb + ")");
        return "bull";
    } else if ((numb == arg1) || (numb == arg2) || (numb == arg3)) {
        alert("Ты на верном пути! Это КОРОВА! (" + numb + ")");
        return "cow";
    }
}
