'use strict';

function callAlert(textMessage) {
    alert(textMessage);
}

function retVar() {
    let admin, name;
    name = 'Джон';
    admin = name;
    alert(admin);
    return false;
}

function repeatCycle() {
    while (true) {
        let num = prompt('Введите число', '0');
        if (num == null) {
            alert('Пока');
            break;
        }
        else if (num > 100) {
            alert('Правильно, число больше 100')
            break
        }
    }
}

function nameOfJavaScript() {
    let value = prompt('Какое "официальное" название JavaScript?', 'ECMAS...');
    if (value == 'ECMAScript') {
        alert('Верно! ECMAScript');
    } else {
        alert('Не знаете? ECMAScript!');
    }
}

function outputSimpleNumber(elementId, maxNum) {
    let elementOfDocument = document.getElementById(elementId);
    elementOfDocument.innerHTML = '';
    primaryLoop:
    for (let index1 = 1; index1 <= maxNum; index1++) {
        for (let index2 = 2; index2 < index1; index2++) {
            if (index1 % index2 == 0) {
                continue primaryLoop;
            }
        }
        elementOfDocument.innerHTML = `${elementOfDocument.innerHTML} ${index1}`;
    }
}

function determineSignOfNumber() {
    let num = prompt('Введите число', 0);
    if (num > 0) {
        alert('Число положительное');
    } else if (num < 0) {
        alert('Число отрицательное')
    } else {
        alert('Число равно 0');
    }
}

function checkLogin() {
    let login = prompt('Введите логин');
    if (login == 'Админ') {
        let password = prompt('Введите пароль');
        if (password == 'Я главный') {
            alert('Здравствуйте');
        } else if (password == undefined) {
            alert('Отменено');
        } else {
            alert('Неверный пароль');
        }
    } else if (login == undefined) {
        alert('Отменено');
    } else {
        alert('Я вас не знаю');
    }
}

function arrowFunction() {
    let ask = (question, yes, no) => confirm(question) ? yes() : no();
    ask(
        "Вы согласны?",
        function () { alert("Вы согласились."); },
        function () { alert("Вы отменили выполнение."); }
    );
}

function EmptyProperty() {
    let schedule = {};
    alert(isEmpty(schedule)); // true
    schedule["8:30"] = "get up";
    alert(isEmpty(schedule)); // false
}

function isEmpty(obj) {
    let empty = true;
    for (const key in obj) {
        empty = false;
    }
    return empty;
}

function sumOfObjectProperties() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
    alert(sumProperties(salaries));
}

function sumProperties(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

function multiplyProperties() {
    // до вызова функции
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    console.log(menu);

    multiplyNumeric(menu);

    console.log(menu);
}

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) != 'number') {
            continue;
        }
        obj[key] *= 2;
    }
}

function makeUser() {
    return {
        name: "Джон",
        ref: this
    };
}

function thisFunction() {
    let user = makeUser();
    alert(user.ref.name); // Каким будет результат?
}

function calculatorObject() {
    let calculator = {
        read() {
            this.num1 = +prompt('Введите первое число', 0);
            this.num2 = +prompt('Введите второе число', 0);
        },
        sum() {
            return `Сумма чисел равна: ${this.num1 + this.num2}`;
        },
        mul() {
            return `Произведение чисел равно ${this.num1 * this.num2}`;
        },
    };

    calculator.read();
    alert(calculator.sum());
    alert(calculator.mul());
}

function calculatorNew() {
    let calculator = new Calculator();
    calculator.read();

    alert("Sum=" + calculator.sum());
    alert("Mul=" + calculator.mul());
    alert(`type of function ${typeof (calculator.read)}`)
}

function Calculator() {
    this.read = function () {
        this.num1 = +prompt('Введите первое число', 0);
        this.num2 = +prompt('Введите второе число', 0);
    };
    this.sum = function () {
        return `${this.num1 + this.num2}`;
    };
    this.mul = function () {
        return `${this.num1 * this.num2}`;
    };
}

function accumulatorConstructor() {
    let accumulator = new Accumulator(1); // начальное значение 1

    accumulator.read(); // прибавит ввод prompt к текущему значению
    accumulator.read(); // прибавит ввод prompt к текущему значению

    alert(accumulator.value); // выведет сумму этих значений    
}

function Accumulator(startingValue) {
    this.value = startingValue;
    alert(`Создан аккумулятор с начальным значением ${this.value}`);
    this.read = function () {
        this.value += +prompt('Введите инкрементор', 0);
    }
}

function sumOfNumbers(params) {
    let num1 = strToNum('Введите первое число');
    let num2 = strToNum('Введите второе число');

    if (isNaN(num1) || isNaN(num2)) {
        alert('Ошибка! Одно из чисел не распознано.');
    } else {
        alert(`Сумма чисел равна ${num1 + num2}`)
    }

}

function strToNum(textPrompt) {
    let strNum = prompt(textPrompt, 0);
    return parseFloat(strNum);
}

function promptNumber(params) {
    alert(readNumber());
}

function readNumber(params) {
    let strNum = '';
    let num;
    do {
        strNum = prompt('Введите число. Для прекращения работы отправьте пустую строку или введите \'отмена\'', '0');
        num = parseFloat(strNum);
        if (!isNaN(num)) {
            return num;
        }
    } while (strNum !== '' && strNum.toUpperCase() !== 'ОТМЕНА');
    return null;
}

function arrayOperations(params) {

    let styles = ['Джаз', 'Блюз'];
    alert(styles);
    styles.push('Рок-н-ролл');
    alert(styles);
    replaceMiddle(styles, 'Классика');
    alert(styles);
    alert(styles.shift());
    alert(styles);
    styles.unshift('Рэгги');
    styles.unshift('Рэп');
    alert(styles);
}

function replaceMiddle(styles, replace) {

    let index = Math.floor(styles.length / 2);
    styles[index] = replace;
}

function sumInput(params) {

    let arNum = [];
    let sum = 0;
    do {
        let num = parseInt(prompt('Введите число', '0'));
        if (isNaN(num)) {
            break;
        } else {
            arNum.push(num);
            sum += num;
        }

    } while (true);
    alert(`Сумма введенных чисел ${sum}`);

}

function MaxSubSum(params) {

    let ar = [-1, 2, 3, -9];
    alert(`Для массива ${ar} подмассив наибольшей суммы : ${getMaxSubSum(ar)}`);
    ar = [2, -1, 2, 3, -9];
    alert(`Для массива ${ar} подмассив наибольшей суммы : ${getMaxSubSum(ar)}`);
    ar = [-1, 2, 3, -9, 11];
    alert(`Для массива ${ar} подмассив наибольшей суммы : ${getMaxSubSum(ar)}`);
    ar = [-2, -1, 1, 2];
    alert(`Для массива ${ar} подмассив наибольшей суммы : ${getMaxSubSum(ar)}`);
    ar = [100, -9, 2, -3, 5];
    alert(`Для массива ${ar} подмассив наибольшей суммы : ${getMaxSubSum(ar)}`);
    ar = [1, 2, 3];
    alert(`Для массива ${ar} подмассив наибольшей суммы : ${getMaxSubSum(ar)}`);
    ar = [-1, -2, -3];
    alert(`Для массива ${ar} подмассив наибольшей суммы : ${getMaxSubSum(ar)}`);

}

function getMaxSubSum(array) {

    let maxSum = Math.min(...array);
    let maxArray = [];
    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        sum = 0;
        for (let j = i; j < array.length; j++) {

            sum += array[j];
            if (sum > maxSum) {

                maxArray.length = 0;
                maxSum = sum;
                for (let k = i; k <= j; k++) {
                    maxArray.push(array[k]);
                }
            }
        }
    }

    if (maxSum < 0) {
        maxSum = 0;
        maxArray.length = 0;
    }
    return maxArray;

}

function camelizeFunc(params) {
    camelize("background-color");
    camelize("list-style-image");
    camelize("-webkit-transition");
}

function camelize(params) {
    alert(params
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('')
    );
}

function filterRangeFunc(params) {

    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);
    alert(filtered); // 3,1 (совпадающие значения)
    alert(arr); // 5,3,8,1 (без изменений)

}

function filterRange(arr, numStart, numEnd) {
    return arr.filter(item => item >= numStart && item <= numEnd);
}

function testFunc(htmlElement, initialText) {
    htmlElement.innerHTML = `${initialText} added text`;
}

function filterRangeInPlaceFunc(params) {
    let arr = [7, 5, 3, 8, 1, 2];
    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
    alert(arr); // [3, 1]
}

function filterRangeInPlace(arr, a, b) {
    // arr.forEach((item, index, array) => {
    //     if (item < a || item > b) {
    //         array.splice(index, 1);
    //     }
    // });
    for (let index = arr.length - 1; index >= 0; index--) {
        if (arr[index] < a || arr[index] > b) {
            arr.splice(index, 1);
        }

    }
}

function sortDescending(params) {
    let arr = [5, 2, 1, -10, 8];
    arr.sort((a, b) => {
        if (a < b) {
            return 1;
        } else if (a == b) {
            return 0;
        } else {
            return -1;
        }
    })
    alert(arr); // 8, 5, 2, 1, -10
}

function copySorted() {

    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);
    alert(sorted); // CSS, HTML, JavaScript
    alert(arr); // HTML, JavaScript, CSS (без изменений)

    function copySorted(array) {
        return array
            .slice()
            .sort();
    }
}

function advCalc(params) {

    let calc = new Calculator;
    alert(calc.calculate("3 + 7")); // 10

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("aaa ** 3");
    alert(result); // 8

    function Calculator() {
        this.userMethods = {},
            this.calculate = function (exp) {

                let res;
                let arrExp = exp.split(' ');
                let operand = arrExp[1];
                switch (operand) {
                    case '+':
                        res = +arrExp[0] + +arrExp[2];
                        break;
                    case '-':
                        res = arrExp[0] - arrExp[2];
                        break;
                    default:
                        if (operand in this.userMethods && !isNaN(+arrExp[0]) && !isNaN(+arrExp[2])) {
                            res = this.userMethods[operand](arrExp[0], arrExp[2]);
                        } else {
                            res = NaN;
                        }
                        break;
                }

                return res;
            }
        this.addMethod = function (name, fn) {
            this.userMethods[name] = fn;

        }
    }
}

function arrayOfNames(params) {

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [vasya, petya, masha];

    let names = users.map((value) => value.name);

    alert(names); // Вася, Петя, Маша
}

function arrayOfObjects(params) {

    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [vasya, petya, masha];

    let usersMapped = users.map(value => ({
        fullName: `${value.name} ${value.surname}`,
        id: value.id
    }));

    /*
    usersMapped = [
      { fullName: "Вася Пупкин", id: 1 },
      { fullName: "Петя Иванов", id: 2 },
      { fullName: "Маша Петрова", id: 3 }
    ]
    */

    alert(usersMapped[0].id) // 1
    alert(usersMapped[0].fullName) // Вася Пупкин

}

function sortByAge(params) {

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [vasya, petya, masha];

    // sortByAge(arr);
    arr.sort((a, b) => a.age - b.age);

    // теперь: [vasya, masha, petya]
    alert(arr[0].name); // Вася
    alert(arr[1].name); // Маша
    alert(arr[2].name); // Петя

}

function shuffle(params) {

    let shuffle = function (arr) {
        // первый способ
        // arr.sort(() => Math.random() - 0.5);

        // второй способ
        // arr.sort((a, b) => Math.random() - 0.5);

        // третий способ (более равномерное распределение вероятности)
        // let a = arr.map(value => ({
        //     orNum: value,
        //     sortNum: Math.random()
        // }));
        // a.sort((a, b) => a.sortNum - b.sortNum);
        // let b = a.map(value => value.orNum);
        // return b;
        // alert(arr);

        // четвертый способ (самое равномерное распределение вероятности)
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i

            // поменять элементы местами
            // мы используем для этого синтаксис "деструктурирующее присваивание"
            // подробнее о нём - в следующих главах
            // то же самое можно записать как:
            // let t = array[i]; array[i] = array[j]; array[j] = t
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        // return arr;
        alert(arr);
    }
    // подсчёт вероятности для всех возможных вариантов
    // let count = {
    //     '123': 0,
    //     '132': 0,
    //     '213': 0,
    //     '231': 0,
    //     '321': 0,
    //     '312': 0
    // };

    // for (let i = 0; i < 1000000; i++) {
    //     let array = [1, 2, 3];
    //     let a = shuffle(array);
    //     count[a.join('')]++;
    // }

    // // показать количество всех возможных вариантов
    // for (let key in count) {
    //     console.log(`${key}: ${count[key]}`);
    // }

    let arr = [1, 2, 3, 4, 5];
    shuffle(arr);
    // arr = [3, 2, 1]
    shuffle(arr);
    // arr = [2, 1, 3]
    shuffle(arr);
    // arr = [3, 1, 2]
    // ...
}

function getAverageAge(params) {

    let getAverageAge = function (arr) {
        if (arr.length == 0) {
            return 0;
        } else {
            let sumItems = arr.reduce((sum, item) => sum += item.age, 0);
            return Math.round(sumItems / arr.length);
        }
    }

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [vasya, petya, masha];

    alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
    alert(getAverageAge([]));
}

function unique(params) {

    let u = function (arr) {
        // первый способ forEach
        let uniqAr = [];
        arr.forEach(element => {
            if (!uniqAr.includes(element)) {
                uniqAr.push(element);
            }
        });
        return uniqAr;

        // второй способ reduce

        // return arr.filter((value, index, array) => {            
        //     return array.filter(v => v == value).length == 1
        // });//array.filter(value).length == 1);
    };
    let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
    alert(u(strings)); // кришна, харе, :-O
}

function uniqueSET(params) {
    let f = function (arr) {
        /* ваш код */
        // let s = new Set(arr);
        // let newArr = [];
        // for (const iterator of s) {
        //     newArr.push(iterator);
        // }
        // return newArr;
        return Array.from(new Set(arr));
    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    //   let a = ;
    alert(f(values)); // Hare, Krishna, :-O
}

function uniqueA(params) {
    let aclean = function (arr) {
        let filteredArray = [];
        for (let word of arr) {
            let add_word = true;
            let word_set = new Set(Array.from(word.toLowerCase()));
            for (let f_word of filteredArray) {
                let sum_set = new Set(Array.from((word + f_word).toLowerCase()));
                if (sum_set.size == word_set.size) {
                    add_word = false;
                    continue;
                }
            }
            if (add_word) {
                filteredArray.push(word);
            }
        }
        return filteredArray;
    }
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
}

function sumProperties(params) {
    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
    let sumSalaries = function (obj) {
        let sum = 0;
        for (let val of Object.values(obj)) {
            sum += val;
        }
        return sum;
    };
    alert(sumSalaries(salaries)); // 650
}


function quantityProperties(params) {
    let user = {
        name: 'John',
        age: 30
    };
    let count = function (user) {
        return Object.keys(user).length;
    };
    alert(count(user)); // 2    
}
