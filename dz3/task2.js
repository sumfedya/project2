//Задание 2
var a = 0,
    caption;

do {
    if (a == 0) {
        caption = " - это ноль";
    } else if (a % 2 == 0) {
        caption = " - это четное число";
    } else {
        caption = " - это нечетное число";
    }
    document.write(a + caption + "</br>");
    a++;
} while (a <= 10);
document.write("</br>");