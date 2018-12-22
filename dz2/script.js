////Задание 1
//
//var a = 1, b = 1, c, d;
//c = ++a; alert(c); // 2 префиксный инкремент сначала увеличивает переменную а, затем полученное значение присваивает переменной с. а=2, с=2.
//d = b++; alert(d); // 1 постфиксный инкремент. Сначала присваивается значение переменной b переменной d, то есть 1, его мы затем и выводим, а потом увеличивает переменную b. b=2, d=1.
//
//c = (2+ ++a); alert(c); // 5 
///* оператор инкремента префиксный, сначала вычисляется он, затем всё выражение, и потом итог присвается переменной с. 2+ 3=5.  Учитываем, что переменная а у нас изменялась выше. a=3, c=5 */
//
//d = (2+ b++); alert(d); // 4
///* оператор инкремента постфиксный, сначала вычисляется выражение c текущими значениями переменных, потом это всё присваивается переменной d, затем применяется инкремент. Учитываем, что переменная b у нас изменялась выше. 2 + 2 = 4, b увеличивается на 1 и становится равной 3*. b=3, d=4 */
//
//alert(a); // 3 ответ в комментариях к вычислениям выше
//alert(b); // 3 ответ в комментариях к вычислениям выше
//
////Задание 2
//var a = 2;
//var x = 1 + (a *= 2); // 5, т.к. x = 1 + (2*2) = 1 + 4 = 5.
//
////Задание 3
//var a, b;
//
//a = parseInt(prompt("Введите значение переменной а", "a"));
//b = parseInt(prompt("Введите значение переменной b", "b"));
//
//if (a >= 0 && b >= 0) {
//    alert("a-b=" + (a - b));
//} else if (a < 0 && b < 0) {
//    alert("a*b=" + (a * b));
//} else {
//    alert("a+b=" + (a + b));
//}
//
////Задание 4
//var a = Math.round(Math.random()*15);
//alert(a);
//switch(a){
//    case 0: {document.write(0 + "</br>");}
//    case 1: {document.write(1 + "</br>");}
//    case 2: {document.write(2 + "</br>");}
//    case 3: {document.write(3 + "</br>");}
//    case 4: {document.write(4 + "</br>");}
//    case 5: {document.write(5 + "</br>");}
//    case 6: {document.write(6 + "</br>");}
//    case 7: {document.write(7 + "</br>");}
//    case 8: {document.write(8 + "</br>");}
//    case 9: {document.write(9 + "</br>");}
//    case 10: {document.write(10 + "</br>");}
//    case 11: {document.write(11 + "</br>");}
//    case 12: {document.write(12 + "</br>");}
//    case 13: {document.write(13 + "</br>");}
//    case 14: {document.write(14 + "</br>");}
//    case 15: {document.write(15);}        
//}
//
////Задание 5-6
//var a, b, znak;
//
//a = +(prompt("Введите значение переменной а", "a"));
//b = +(prompt("Введите значение переменной b", "b"));
//znak = prompt("Введите знак операции +, -, *, /");
//    
//alert(String(a)+String(znak)+String(b)+"="+String(mathOperation(a,b,znak)));
//
//function sum(x,y){
//    return x+y;
//}
//
//function difference(x,y){
//    return x-y;
//}
//
//function multiply(x,y){
//    return x*y;
//}
//
//function division(x,y){
//    return x/y;
//}
//
//function mathOperation(arg1, arg2, operation){
//    switch(operation){
//    case "+":{return sum(arg1,arg2);}
//    case "-":{return difference(arg1,arg2);}
//    case "*":{return multiply(arg1,arg2);}
//    case "/":{return division(arg1,arg2);}
//    default:{alert("Неизвестный знак операции! " + operation);}
//    }
//}
//
////Задание 7*
//document.write("null>0: "+String(null>0)+"</br>");
//document.write("null<0: "+String(null<0)+"</br>");
//document.write("null==0: "+String(null==0)+"</br>");
//document.write("null===0: "+String(null===0)+"</br>");
//document.write("тип null: "+typeof(null) + " тип 0: " + typeof(0)+"</br>");
//document.write("null+0: "+String(null+0));
///* Как видно из результатов, операции сравнения будут всегда возвращать ложь, т.к. null и 0 - объекты разных типов. А вот математические действия работают. Видимо, оператор "+" выполняет приведение типов к числу. В 1С это выражение вернуло бы null :) Вообще, интересно изучать новый синтаксис и следить за ньюансами :) */
//
////Задание 8*
//var a = +prompt("Введите число", "0");
//var n = +prompt("Введите степень, в которую надо возвести число а", "0");
//
//document.write(String(a)+"^"+String(n)+" = "+power(a,n));
//
//function power(val, pow){
//    if (pow==0) {
//        return 1;
//    }
//    if (pow==1) {
//        return val;
//    }
//    else{
//        return val*power(val, pow-1);
//    }
//}