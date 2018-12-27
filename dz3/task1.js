//Задание 1
/* Проверять простоту числа будем методом перебора делителей, анализируя делители от 2 до корня квадратного из этого числа. 
 Для оптимизации в качестве делителей рассматриваем только уже найденные простые числа, которые собираем в массиве masSimple.
 Это на порядок уменьшит количество вычислений и отразит понимание работы с массивами :) */

var i = 2,
    masSimple = [];

while (i <= 100) {
    simple = true;
    sqrt = Math.round(Math.sqrt(i));

    for (j of masSimple) {
        if (j > sqrt) {
            break;
        }
        if ((i % j) == 0) {
            simple = false;
            break;
        }
    }
    if (simple == true) {
        masSimple.push(i);
    }
    i++;
}

document.write(masSimple + "</br>");
document.write("</br>");