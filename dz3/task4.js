//Задание 4
var m, str;
for (var k = 1; k <= 20; k++) {
    str = "";
    for (m = 0; m < k; m++) {
        str = str + "*";
    }
    console.log(str);
}
alert("Загляни в консоль! ;)");


console.log("");
// симметричная пирамида - захотелось сделать. Разбавим "*" пробелами, чтобы отцентровать. Максимальное количество звёзд в последней строке - 41 символ, 20 звезд с пробелами.
// В каждой k-ой строке 41-k пробелов, из них k-1 - это пробелы между зведами. Таким образом, слева и справа (41-k-(k-1))/2 сплошных пробелов для симметрии, причем пробелы справа можно не рисовать.
var z;
for (k = 1; k <= 20; k++) {
    str = "";
    for (m = 0; m < (41 - k - (k - 1)) / 2; m++) {
        str = " " + str;
    }
    for (z = 0; z < k; z++) {
        str = str + "* ";
    }
    console.log(str);
}

alert("А ниже в консоли ещё интереснее! ;)");
