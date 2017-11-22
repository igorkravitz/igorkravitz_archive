var video;
var display;
var isDrawing;
var cCanvas3;
var Canvas3;

//window.onload = function () {
////    video = document.getElementById("videoPlayer");
////	drawningCanvas1();
////	drawningCanvas2();
////      drawningCanvas3();
//};

function getVideoPlayer(){
    video = document.getElementById("videoPlayer");
}

function drawningCanvas1() {
    var canvas = document.getElementById("drawingCanvas1");
    var context = canvas.getContext("2d");
    // Код для рисования вставляется сюда
//	context.moveTo(10,10);
//	context.lineTo(400,40);
//	context.stroke();   

    // Толщина и цвет для всех линий
//	context.lineWidth = 20;
//	context.strokeStyle = "rgb(16,155,252)";
//
//	// Линия с концами типа butt
//	context.moveTo(10,50);
//	context.lineTo(400,50);
//	context.stroke();
//
//	// Линия с концами типа round
//	context.beginPath();
//	context.moveTo(10,120);
//	context.lineTo(400,120);
//	context.lineCap = "round";
//	context.stroke();
//
//	// Линия с концами типа square
//	context.beginPath();
//	context.moveTo(10,190);
//	context.lineTo(400,190);
//	context.lineCap = "square";
//	context.stroke();

//	context.moveTo(250,50);
//	context.lineTo(50,250);
//	context.lineTo(450,250);
//	context.closePath();
//
//	// Заливка
//	context.fillStyle = "#109bfc";
//	context.fill();
//
//	// Контур
//	context.lineWidth = 10;
//	context.strokeStyle = "orange";
//	context.stroke();

//	 // Рисуем квадрат с левым верхним углом в (0,0) 
//	context.rect(0,0,30,30);
//
//	// Сдвигаем систему координат вниз и вправо на 50 пикселов
//	context.translate(50,50);
//	context.rect(0,0,30,30);
//
//	// Сдвигаем систему координат вниз и вправо ещё на 50 пикселов.
//	// Преобразования суммируются, поэтому точка (0,0) 
//	// в действительности находится в точке (100, 100)
//	context.translate(50,50);
//	context.rect(0,0,30,30);
//	context.stroke();

    // Перемещаем точку (0,0) . Это важный шаг, 
    // т.к. вращение выполняется вокруг этой точки
    context.translate(100, 100);

    // Рисуем 9 квадратов
    var copies = 10;
    for (var i = 1; i < copies; i++) {
        // Прежде чем рисовать следующий квадрат, вращаем систему координат. 
        // Угол полного оборота составляет 2*Math.PI. Этот код вращает систему 
        // координат для каждого нового квадрата лишь на долю этого угла, 
        // выполняя полный оборот при рисовании последнего квадрата,
        context.rotate(2 * Math.PI * 1 / (copies - 1));

        // Рисуем квадрат
        context.rect(0, 0, 60, 60);
    }
    context.strokeStyle = "#109bfc";
    context.stroke();

}

function drawningCanvas2() {
    var canvas = document.getElementById("drawingCanvas2");
    var context = canvas.getContext("2d");
    // Код для рисования вставляется сюда

    // Толщина и цвет кривой
    context.lineWidth = 10;
    context.strokeStyle = "rgb(16,155,252)";

    // Устанавливаем начало кривой
    context.moveTo(62, 242);

    // Контрольные и конечная точки
    var controlX_1 = 187;
    var controlY_1 = 32;
    var controlX_2 = 429;
    var controlY_2 = 480;
    var endPointX = 365;
    var endPointY = 133;

    // Рисуем кривую
    context.bezierCurveTo(controlX_1, controlY_1, controlX_2, controlY_2,
            endPointX, endPointY);
    context.stroke();

}

function drawningCanvas3() {
    Canvas3 = document.getElementById("drawingCanvas3");
    cCanvas3 = Canvas3.getContext("2d");
    // Код для рисования вставляется сюда

    // Подключаем требуемые для рисования события
    Canvas3.onmousedown = startDrawing;
    Canvas3.onmouseup = stopDrawing;
    Canvas3.onmouseout = stopDrawing;
    Canvas3.onmousemove = draw;
}

function drawningCanvas4() {
    // Определение контекста рисования
    canvas = document.getElementById("drawingCanvas4");
    context = canvas.getContext("2d");

    // Рисуем прямоугольник с тенью
    context.rect(20, 20, 200, 100);
    context.fillStyle = "#8ED6FF";
    context.shadowColor = "#bbbbbb";
    context.shadowBlur = 20;
    context.shadowOffsetX = 15;
    context.shadowOffsetY = 15;
    context.fill();

    // Рисуем три строчки текста с тенью
    context.textBaseline = "top";
    context.font = "bold 20px Arial";

    context.shadowBlur = 3;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.fillStyle = "steelblue";
    context.fillText("Едва различимая, слегка старомодная тень.", 10, 175);

    context.shadowBlur = 5;
    context.shadowOffsetX = 20;
    context.shadowOffsetY = 20;
    context.fillStyle = "green";
    context.fillText("Здесь используется \"далекая\" тень...", 10, 225);

    context.shadowBlur = 15;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.shadowColor = "black";
    context.fillStyle = "white";
    context.fillText("Эта тень не смещена от исходного изображения и создает эффект ореола.", 10, 300);

    // Рисуем звезду с тенью (загрузка из изображения)
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowColor = "#bbbbbb";
    context.shadowBlur = 4;

    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 250, 30);
    };
    img.src = "http://professorweb.ru/downloads/star.png";
}

function drawningCanvas5() {
    canvas = document.getElementById("drawingCanvas5");
    context = canvas.getContext("2d");
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 250, 30);
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.rect(0, 0, canvas.width, canvas.height);
        context.fill();
    };
    img.src = "http://professorweb.ru/downloads/brick_tile.gif";
}

var circles = [];
var canvas6;
var context6;
function drawningCanvas6() {
    canvas6 = document.getElementById("drawingCanvas6");
    context6 = canvas6.getContext("2d");
    canvas6.onmousedown = canvasClick;
    canvas6.onmouseup = stopDragging;
    canvas6.onmouseout = stopDragging;
    canvas6.onmousemove = dragCircle;
}

var previousSelectedCircle;

function canvasClick(e) {
    // Получаем координаты точки холста, в которой щелкнули
    var clickX = e.pageX - canvas6.offsetLeft;
    var clickY = e.pageY - canvas6.offsetTop;

    // Проверяем, щелкнули ли no кругу
    for (var i = circles.length - 1; i >= 0; i--) {
        var circle = circles[i];

        // С помощью теоремы Пифагора вычисляем расстояние от 
        // точки, в которой щелкнули, до центра текущего круга
        var distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2));

        // Определяем, находится ли точка, в которой щелкнули, в данном круге
        if (distanceFromCenter <= circle.radius) {
            // Сбрасываем предыдущий выбранный круг	
            if (previousSelectedCircle != null)
                previousSelectedCircle.isSelected = false;
            previousSelectedCircle = circle;

            // Устанавливаем новый выбранный круг и обновляем холст
            circle.isSelected = true;
            drawCircles();
            isDragging = true;
            return;
            // Прекращаем проверку
//        return;
        }
    }
}

var isDragging = false;

function stopDragging() {
    isDragging = false;
}

function dragCircle(e) {
    // Проверка возможности перетаскивания
    if (isDragging == true) {
        // Проверка попадания
        if (previousSelectedCircle != null) {
            // Сохраняем позицию мыши
            var x = e.pageX - canvas6.offsetLeft;
            var y = e.pageY - canvas6.offsetTop;

            // Перемещаем круг в новую позицию
            previousSelectedCircle.x = x;
            previousSelectedCircle.y = y;

            // Обновляем холст
            drawCircles();
        }
    }
}
// Пользовательский объект Circle 
function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
}

function addRandomCircle() {
    // Устанавливаем произвольный размер и позицию круга
    var radius = randomFromTo(10, 60);
    var x = randomFromTo(0, canvas.width);
    var y = randomFromTo(0, canvas.height);

    // Окрашиваем круг произвольным цветом
    var colors = ["green", "blue", "red", "yellow", "magenta", "orange", "brown", "purple", "pink"];
    var color = colors[randomFromTo(0, 8)];

    // Создаем новый круг
    var circle = new Circle(x, y, radius, color);

    // Сохраняем его в массиве
    circles.push(circle);

    // Обновляем отображение круга
    drawCircles();
}

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function drawCircles() {
    // Очистить холст
    context6.clearRect(0, 0, canvas6.width, canvas6.height);
    // Перебираем все круги
    for (var i = 0; i < circles.length; i++) {
        var circle = circles[i];

        // Рисуем текущий круг
        context6.globalAlpha = 0.85;
        context6.beginPath();
        context6.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        context6.fillStyle = circle.color;
        context6.strokeStyle = "black";

        // Выделяем выбранный круг рамкой (потребуется позже)
        if (circle.isSelected) {
            context6.lineWidth = 5;
        } else {
            context6.lineWidth = 1;
        }
        context6.fill();
        context6.stroke();
    }
}

function clearCanvas6() {
    // Очистить массив
    circles = [];
    // Очистить холст
    drawCircles();
}

var canvas7;
var context7;
function drawningCanvas7() {
    canvas7 = document.getElementById("drawingCanvas7");
    context7 = canvas7.getContext("2d");
    canvas7.onmousedown = canvas7Click;
    // Обновляем холст через 0.02 секунды
    setTimeout("drawFrame()", 20);
//    canvas7.onmousedown = canvasClick;   
//    canvas6.onmouseup = stopDragging;
//    canvas6.onmouseout = stopDragging;
//    canvas6.onmousemove = dragCircle;
}

// Тип данных, представляющий отдельный мячик
function Ball(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeColor = "black";
    this.fillColor = "red";
}

// Массив, содержащий информацию обо всех мячиках на холсте
var balls = [];

function addBall() {
    // Устанавливаем размер мячика
    var radius = parseFloat(document.getElementById("ballSize").value);

    // Создаем новый мячик
    var ball = new Ball(50, 50, 1, 1, radius);

    // Сохраняем его в массиве
    balls.push(ball);
}

function clearBalls() {
    // Удаляем все мячики
    balls = [];
}

function drawFrame() {
    // Очистить холст
    context7.clearRect(0, 0, canvas7.width, canvas7.height);

    // Вызываем метод beginPath(), чтобы убедиться,
    // что мы не рисуем часть уже нарисованного содержимого холста
    context7.beginPath();

    // Перебираем все мячики
    for (var i = 0; i < balls.length; i++) {
        // Перемещаем каждый мячик в его новую позицию
        var ball = balls[i];
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Добавляем эффект "гравитации", который ускоряет падение мячика
        if ((ball.y) < canvas7.height)
            ball.dy += 0.22;

        // Добавляем эффект "трения", который замедляет движение мячика
        ball.dx = ball.dx * 0.998;

        // Если мячик натолкнулся на край холста, отбиваем его
        if ((ball.x + ball.radius > canvas7.width) || (ball.x - ball.radius < 0)) {
            ball.dx = -ball.dx;
        }

        // Если мячик упал вниз, отбиваем его, но слегка уменьшаем скорость
        if ((ball.y + ball.radius > canvas7.height) || (ball.y - ball.radius < 0)) {
            ball.dy = -ball.dy * 0.96;
        }

        // Проверяем, хочет ли пользователь соединительные линии
        if (!document.getElementById("connectedBalls").checked) {
            context7.beginPath();
            context7.fillStyle = ball.fillColor;
        } else {
            context7.fillStyle = "white";
        }

        // Рисуем мячик
        context7.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context7.lineWidth = 1;
        context7.fill();
        context7.stroke();
    }

    // Рисуем следующий кадр через 20 миллисекунд
    setTimeout("drawFrame()", 20);
}

function canvas7Click(e) {
    // Координаты щелчка мышью
    var clickX = e.pageX - canvas7.offsetLeft;
    var clickY = e.pageY - canvas7.offsetTop;

    for (var i in balls)
    {
        var ball = balls[i];

        // Проверка попадания
        if ((clickX > (ball.x - ball.radius)) && (clickX < (ball.x + ball.radius)))
        {
            if ((clickY > (ball.y - ball.radius)) && (clickY < (ball.y + ball.radius)))
            {
                // Изменить скорость мячика
                ball.dx -= 2;
                ball.dy -= 3;
                return;
            }
        }
    }
}

var canvas8;
var context8;
function drawningCanvas8() {
    canvas8 = document.getElementById("drawingCanvas8");
    context8 = canvas8.getContext("2d");
    // Рисуем фон лабиринта
    drawMaze("./media/maze.png", 268, 5);

    // При нажатии клавиши вызываем функцию processKey()
    window.onkeydown = processKey;
}

// Отслеживаем текущую позицию значка
var x = 0;
var y = 0;

// Таймер, включающий и отключающий новый лабиринт в любое время
var timer;

function drawMaze(mazeFile, startingX, startingY) {
  // Остановить таймер (если запущен)
  clearTimeout(timer);

  // Остановить перемещение значка
  dx = 0;
  dy = 0;

  // Загружаем изображение лабиринта
  var imgMaze = new Image();
  imgMaze.onload = function() {
    // Изменяем размер холста в соответствии 
	// с размером изображения лабиринта
    canvas8.width = imgMaze.width;
    canvas8.height = imgMaze.height;

    // Рисуем лабиринт
    context8.drawImage(imgMaze, 0,0);

    // Рисуем значок
    x = startingX;
    y = startingY;

    var imgFace = document.getElementById("face");
    context8.drawImage(imgFace, x, y);
    context8.stroke();

    // Рисуем следующий кадр через 10 миллисекунд
    timer = setTimeout("drawFrame8()", 10);
  };
  imgMaze.src = mazeFile;
}

// Скорость перемещения значка
var dx = 0;
var dy = 0;

function processKey(e) {
  // Если значок находится в движении, останавливаем его
  dx = 0;
  dy = 0;

  // Если нажата стрелка вверх, начинаем двигаться вверх
  if (e.keyCode == 38 || e.keyCode == 87) {
    dy = -1;
  }

  // Если нажата стрелка вниз, начинаем двигаться вниз
  if (e.keyCode == 40 || e.keyCode == 83) {
    dy = 1;
  }

  // Если нажата стрелка влево, начинаем двигаться влево
  if (e.keyCode == 37 || e.keyCode == 65) {
    dx = -1;
  }

  // Если нажата стрелка вправо, начинаем двигаться вправо
  if (e.keyCode == 39 || e.keyCode == 68) {
    dx = 1;
  }
}

function drawFrame8() {
  // Обновляем кадр только если значок движется
  if (dx != 0 || dy != 0) {
    // Закрашиваем перемещение значка желтым цветом
    context8.beginPath();
    context8.fillStyle = "rgb(254,244,207)";
    context8.rect(x, y, 15, 15);
    context8.fill();

    // Обновляем координаты значка, создавая перемещение
    x += dx;
    y += dy;

    // Проверка столкновения со стенками лабиринта
	// (вызывается доп. функция)
    if (checkForCollision()) {
      x -= dx;
      y -= dy;
      dx = 0;
      dy = 0;
    }

    // Перерисовываем значок
    var imgFace = document.getElementById("face");
    context8.drawImage(imgFace, x, y);

    // Проверяем дошел ли пользователь до финиша.
	// Если дошел, то выводим сообщение
    if (y > (canvas8.height - 17)) {
      alert("Ты победил!");
      return;
    }
  }

  // Рисуем следующий кадр через 10 миллисекунд
  timer = setTimeout("drawFrame8()", 10);
}

function checkForCollision() {
  // Перебираем все пикселы и инвертируем их цвет
  var imgData = context8.getImageData(x-1, y-1, 15+2, 15+2);
  var pixels = imgData.data;

  // Получаем данные для одного пиксела
  for (var i = 0; n = pixels.length, i < n; i += 4) {
    var red = pixels[i];
    var green = pixels[i+1];
    var blue = pixels[i+2];
    var alpha = pixels[i+3];

    // Смотрим на наличие черного цвета стены, что указывает на столкновение
    if (red == 0 && green == 0 && blue == 0) {
      return true;
    }
    // Смотрим на наличие серого цвета краев, что указывает на столкновение
    if (red == 169 && green == 169 && blue == 169) {
      return true;
    }
  }
  // Столкновения не было
  return false;
}

function loadEasy() {
  drawMaze('./media/easy_maze.png', 5, 5);
}

function loadHard() {
  drawMaze('./media/maze.png', 268, 5);
}

var previousColorElement;

function changeColor(color, imgElement) {
    // 	Меняем текущий цвет рисования
    cCanvas3.strokeStyle = color;

    // Меняем стиль элемента <img>, по которому щелкнули
    imgElement.className = "Selected";

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (previousColorElement != null)
        previousColorElement.className = "";

    previousColorElement = imgElement;
}

//Отслеживаем элемент <img> для толщины линии, по которому ранее щелкнули
var previousThicknessElement;

function changeThickness(thickness, imgElement) {
    // Изменяем текущую толщину линии
    cCanvas3.lineWidth = thickness;

    // Меняем стиль элемента <img>, по которому щелкнули
    imgElement.className = "Selected";

    // Возвращаем ранее выбранный элемент <img> в нормальное состояние
    if (previousThicknessElement != null)
        previousThicknessElement.className = "";

    previousThicknessElement = imgElement;
}

function startDrawing(e) {
    // Начинаем рисовать
    isDrawing = true;
    // Создаем новый путь (с текущим цветом и толщиной линии) 
    cCanvas3.beginPath();
    // Нажатием левой кнопки мыши помещаем "кисть" на холст
    cCanvas3.moveTo(e.pageX - Canvas3.offsetLeft, e.pageY - Canvas3.offsetTop);
}

function draw(e) {
    if (isDrawing === true)
    {
        // Определяем текущие координаты указателя мыши
        var x = e.pageX - Canvas3.offsetLeft;
        var y = e.pageY - Canvas3.offsetTop;

        // Рисуем линию до новой координаты
        cCanvas3.lineTo(x, y);
        cCanvas3.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
}

function clearCanvas() {
    cCanvas3.clearRect(0, 0, Canvas3.width, Canvas3.height);
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "none";
}

function saveCanvas() {
    // Находим элемент <img>
    var imageCopy = document.getElementById("savedImageCopy");

    // Отображаем данные холста в элементе <img>
    imageCopy.src = Canvas3.toDataURL();

    // Показываем элемент <div>, делая изображение видимым
    // делая изображение видимым
    var imageContainer = document.getElementById("savedCopyContainer");
    imageContainer.style.display = "block";
}

function writeFooter() {
    var datePub = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC'
    };
    document.write(
            "<footer>" +
            "<p class='Disclaimer'>Содержимое доступно в соответствии с	лицензией Creative Commons Атрибуция.</p>" +
            "<details>" +
            "<summary>Обо мне</summary>" +
            "<p><a href='skype:ikrawets?chat'>" +
            "ikrawets</a> " +
            "<a href='mailto:1C7782@gmail.com''>1C7782@gmail.com</a> " +
            "<a href='index.html'>home</a></p>" +
            "</details>" +
            "<p>Опубликовано: <time datetime='2017-10-21T16:30+4:0'>" +
            datePub.toLocaleString("ru", options) +
            "</time></p>" +
            "<p>Copyright © 2017</p>" +
            "</footer>"
            );
//	"<img src='http://img.nzeraf.com/images/skypeout.png' border='0'>
}

function writeNav() {
    var titles = {
        'index.html': 'Главная',
        'CSharp.html': 'C#',
        'Java.html': 'Java',
        'Python.html': 'Python',
        'Calc.html': 'Калькулятор',
        'Questionary.html': 'Анкета',
        'Media.html': 'Медиа',
        'Canvas.html': 'Холст'
    };
    document.write(
            "<nav>" +
            "<ul type='disc'>"
            );
    for (var chapFile in titles) {
        document.write("<li><a href=" + chapFile + ">" + titles[chapFile] + "</a></li>");
    }
    document.write(
            "</ul>" +
            "</nav>"
            );
}

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function speedUp() {
    video.play();
    video.playbackRate = 2;
}

function slowDown() {
    video.play();
    video.playbackRate = 0.5;
}

function normalSpeed() {
    video.play();
    video.playbackRate = 1;
}

function progressUpdate() {
    // Устанавливаем позицию воспроизведения
    var positionBar = document.getElementById("positionBar");
    positionBar.style.width = (video.currentTime / video.duration * 100) + "%";

    // Заполняем текстовую надпись текущим значением
    displayStatus = document.getElementById("displayStatus");
    displayStatus.innerHTML = (Math.round(video.currentTime * 100) / 100)
            + " сек";
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

function CalculateFunction(number1, number2, nameElement) {
    // e.preventDefault();
    // var result = val1+val2;
    // var formElement = document.getElementById("CalculatorForm");
    // formElement.result.value = StringToInt(formElement.number1.value)
    // +StringToInt(formElement.number2.value);
    // formElement.number1.value = 123;
    res = number1 + number2;
    // console.log(res);
    // debugger;
    if (res === 0) {
        document.getElementById(nameElement).innerHTML = "";
    } else {
        document.getElementById(nameElement).innerHTML = number1 + number2;
    }

    // alert("sadfasdfasd");
    // return false;
    // Document.getElementById("rrr").innerHTML="555";
    // Window.alert('asfgdf');
    // this.form.result.value = 10
    // document.getElementById("result").InnerHTML=10;
    // document.write("Это JavaScript!<br>");
    // alert(resultElement.value);
    // document.write("А это JavaScript!");
    // result.value=10;
}

function myReset(nameElement) {
    document.getElementById(nameElement).innerHTML = "";
}

function validateComments(input) {
    if (input.value.length < 20) {
        input.setCustomValidity("Дайте более развернутый ответ.");
    } else {
        // Длина комментария отвечает требованию,
        // поэтому очищаем сообщение об ошибке
        input.setCustomValidity("");
    }
}

function onChangeAge(input) {
    document.getElementById("labelAge").innerHTML = "Возраст * " + input.value;
}