var result = 0; // выигрыш
var hint1 = {
    name: "50/50",
    used: false
};
var hint2 = {
    name: "friend\'s help",
    used: false
};

// подсказок сделал всего 2. Зала у нас нет, звонить тоже не будем :)

var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]; // Можно доработать базу, указав вопросам, к какому уровню они относятся, 
// добавить вопросов и выбирать случайным образом вопрос из набора для конкретного уровня.
// По правилам 15 вопросов, но мы делаем аналог, поэтому я сделал 10. Добавить вопросы в базу совсем не проблема.

var sums = []; // массив сумм за правильные ответы на вопросы

var i, j, k; // всякие счетчики

for (i in questions) {
    sums.push(questions[i].sum);
}

var str = "";
for (i in sums) {
    str += (sums[i] + "\n");
}

var constantSum = parseInt(prompt("Введите несгораемую сумму от 500 до 25000 из списка \n" + str, 10000));

while (sums.indexOf(constantSum) < 0) {
    constantSum = parseInt(prompt("Неправильно! Введите несгораемую сумму от 500 до 25000 из списка \n" + str, 10000));
}

var choose; // произвольная переменная, в которую пользователь или random выбирают значение
var strHint = "";
var correctAnswer;

for (i = 0; i < questions.length; i++) {
    choose = 0;
    if (i == 0) {
        while ((choose != -1) && (choose != 1)) {
            choose = +prompt("Играем?\n \'-1\' - НЕ ХОЧУУУУ!\n \'1\' - Погнали!");
        }
    } else {
        while (choose != -1 && choose != 1) {
            choose = +prompt("Играем дальше?\n \'-1\' - Забираю, сколько есть!\n \'1\' - Конечно, да!");
        }
    }
    if (choose == -1) {
        alert("Твой выигрыш: " + result + " руб!");
        break;
    }

    choose = 0;
    while ((choose == 0) || !((choose >= 1) && (choose <= questions[i].mas.length))) {
        if ((!hint1.used) || (!hint2.used)) {
            strHint = ("Подсказки: ");
            if (!hint1.used) {
                strHint += hint1.name + " (50);";
            }
            if (!hint2.used) {
                strHint += hint2.name + " (100);";
            }
        }
        choose = parseInt(prompt("Вопрос "+(i+1)+":\n"+questions[i].text + "\nВарианты ответов:\n" + questions[i].mas, strHint));
        strHint = "";
        if ((!hint1.used) && (choose == 50)) { // удалим случайные 2 неправильные ответа
            hint1.used = true;
            k = 0;
            for (j = 0; j < 2; j++) {
                do {
                    k = Math.round(Math.random() * (questions[i].mas.length - 1) + 1); // после удаления первого из двух неправильных длина массива вариантов уменьшится                   
                } while (k == 0 || k == questions[i].correct);
                correctAnswer = questions[i].mas[questions[i].correct - 1]; //запомним правильный ответ, т.к. его номер может сдвинуться после удаления неправильного
                //console.log(correctAnswer+",k="+k);                
                questions[i].mas.splice(k - 1, 1); // удаляем неправильный ответ, индексы с нуля до length-1
                questions[i].correct = questions[i].mas.indexOf(correctAnswer) + 1; // обновляем номер правильного ответа с учетом смещения индексов после удаления неправильного                
            }
        }
        if ((!hint2.used) && (choose == 100)) { // выдадим случайную подсказку. 
            hint2.used = true;
            alert("Возможно, правильный ответ " + (Math.round(Math.random() * (questions[i].mas.length - 1) + 1)) + ", запомни его!");
        }
    }
    // какой-то ответ с учетом всех подсказок получен, обрабатываем его
    if (choose == questions[i].correct) { // ответ верный
        result = questions[i].sum;
        if (i == (questions.length-1)) {
            alert("Поздравляем с победой! Выигрыш " + result + " руб.");
        } else {
            alert("Это правильный ответ! Так держать!");
            continue;
        }
    } else { //ответ неверный
        result = Math.min(result, constantSum);
        alert("Увы, ответ неверный :( Твой выигрыш составил " + result + " руб.");
        break;
    }
}
