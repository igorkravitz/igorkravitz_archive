/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

onmessage = function (event) {
    // Выполняем поиск простых чисел в указанном диапазоне чисел.
    // Диапазон извлекается из свойства event.data
    var primes = findPrimes(event.data.from, event.data.to);

    // Поиск завершен. Отправляем результаты веб-странице
//   postMessage(primes);
    postMessage({messageType: "PrimeList", data: primes});
};

function findPrimes(fromNumber, toNumber) {
    // Создать массив целых чисел в указанном диапазоне
    var list = [];
    for (var i = fromNumber; i <= toNumber; i++) {
        if (i > 1)
            list.push(i);
    }

    var previousProgress;
    // Выбираем простые числа
    var maxDiv = Math.round(Math.sqrt(toNumber));
    var primes = [];

    for (var i = 0; i < list.length; i++) {
        var failed = false;
        for (var j = 2; j <= maxDiv; j++) {
            if ((list[i] != j) && (list[i] % j == 0)) {
                failed = true;
            } else if ((j == maxDiv) && (failed == false)) {
                primes.push(list[i]);
            }
        }
        var progress = Math.round(i / list.length * 100);
        if (progress != previousProgress) {
            postMessage(
                    {messageType: "Progress", data: progress}
            );
            previousProgress = progress;
        }
    }

    return primes;
}

