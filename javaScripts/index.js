var video;
var display;

window.onload = function() {
	video = document.getElementById("videoPlayer");
	drawningCanvas1();
	drawningCanvas2();
};

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
	for (var i=1; i<copies; i++) {
	    // Прежде чем рисовать следующий квадрат, вращаем систему координат. 
		// Угол полного оборота составляет 2*Math.PI. Этот код вращает систему 
		// координат для каждого нового квадрата лишь на долю этого угла, 
		// выполняя полный оборот при рисовании последнего квадрата,
	    context.rotate(2 * Math.PI * 1/(copies-1));

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

var cCanvas3;
var Canvas3;

function drawningCanvas3() {
	Canvas3 = document.getElementById("drawingCanvas3");
	cCanvas3 = Canvas3.getContext("2d");
	// Код для рисования вставляется сюда
	
	// Подключаем требуемые для рисования события
	cCanvas3.onmousedown = startDrawing;
	cCanvas3.onmouseup = stopDrawing;
	cCanvas3.onmouseout = stopDrawing;
	cCanvas3.onmousemove = draw;
	   
}

var previousColorElement;

function changeColor(color, imgElement)
{
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

function changeThickness (thickness, imgElement)
{
    // Изменяем текущую толщину линии
	cCanvas3.lineWidth = thickness;
	
	// Меняем стиль элемента <img>, по которому щелкнули
	imgElement.className = "Selected";
	
	// Возвращаем ранее выбранный элемент <img> в нормальное состояние
	if (previousThicknessElement != null)
	   previousThicknessElement.className = "";
	   
	previousThicknessElement = imgElement;
}

var isDrawing;

function startDrawing(e) {
	// Начинаем рисовать
	isDrawing = true;
	
	// Создаем новый путь (с текущим цветом и толщиной линии) 
	cCanvas3.beginPath();
	
	// Нажатием левой кнопки мыши помещаем "кисть" на холст
	cCanvas3.moveTo(e.pageX - Canvas3.offsetLeft, e.pageY - Canvas3.offsetTop);
}

function draw(e) {
	if (isDrawing == true)
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
}

function writeFooter() {
	var datePub = new Date();
	var options = {
			  year: 'numeric',
			  month: 'long',
			  day: 'numeric',
			  weekday: 'long',
			  timezone: 'UTC',
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
		datePub.toLocaleString("ru",options) +
		"</time></p>" +
		"<p>Copyright © 2017</p>" +
	"</footer>"
					);
//	"<img src='http://img.nzeraf.com/images/skypeout.png' border='0'>
}

function writeNav() {
	var titles = {
		'index.html':'Главная',
		'CSharp.html':'C#',
		'Java.html':'Java',
		'Python.html':'Python',
		'Calc.html':'Калькулятор',
		'Questionary.html':'Анкета',
		'Media.html':'Медиа',
		'Canvas.html':'Холст'
	}
	document.write(
			"<nav>" +
				"<ul type='disc'>"
				);
	for ( var chapFile in titles) {
		document.write("<li><a href="+chapFile+">"+titles[chapFile]+"</a></li>");
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
	if (res == 0) {
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