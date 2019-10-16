'use strict'

document.body.style.overflow = 'hidden';//запрещаем прокуртку до загрузи
addEventListener('load', function() {//отключаем прелоадер после загрузи страницы
    let preloader = document.querySelector('.overlay-loader');
	preloader.style.display = 'none';
	document.body.style.overflow = '';
});

// CALL
var callButton = document.querySelector("#call-button");
var callWindow = document.querySelector("#modal-call");
var callClose = document.querySelector(".call-close");
var clientName = callWindow.querySelector("[name=clientName]");

callButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	callWindow.classList.add("show");
	// clientName.focus();
});

callClose.addEventListener("click", function () {
	callWindow.classList.remove("show");
});

window.addEventListener("click", function (event) {
	if (event.target == callWindow) {
		callWindow.classList.remove("show");
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		event.preventDefault();
		callWindow.classList.remove("show");
	}
});

// CONSULTATION
var consultationButton = document.querySelector("#consultation-button");
var consultationWindow = document.querySelector("#modal-consultation");
var consultationClose = document.querySelector(".consultation-close");
var clientName = consultationWindow.querySelector("[name=clientName]");

consultationButton.addEventListener("click", function (evt) {
	evt.preventDefault();
	consultationWindow.classList.add("show");
	// clientName.focus();
});

consultationClose.addEventListener("click", function () {
	consultationWindow.classList.remove("show");
});

window.addEventListener("click", function (event) {
	if (event.target == consultationWindow) {
		consultationWindow.classList.remove("show");
	}
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		event.preventDefault();
		consultationWindow.classList.remove("show");
	}
});

// ОТВЕТ НА ОТПРАВЛЕННУЮ ФОРМУ

var answer = document.querySelector("#modal-answer");
var answerClose = document.querySelector(".answer-close");
var buttonSendCall = document.querySelector("#buttonSendCall");

//для обратного вызова

	$('#form-call').submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(callWindow).removeClass("show");
			$(answer).addClass("show");
			$(this).find('input').val('');
			$('#form-call').trigger('reset');
		});
		return false;
	});

//для консультации	

	$('#form-consultation').submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize()
		}).done(function() {
			$(consultationWindow).removeClass("show");
			$(answer).addClass("show");
			$(this).find('input').val('');
			$('#form-consultation').trigger('reset');
		});
		return false;
	});

//для рассчета стоимости 	

	$('#form-price').submit(function() {
		$.ajax({
			type: "POST",
			url: "send.php",
			data: $(this).serialize() // преобразуем данные в строку для отправки POST методом
		}).done(function() {
			$(answer).addClass("show");
			$(this).find('input').val(''); //обнуляем данные формы
			$('#form-price').trigger('reset'); // сбрасываем заполнение формы
		});
		return false;
	});

answerClose.addEventListener("click", function() {
	answer.classList.remove("show");
});

window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		event.preventDefault();
		answer.classList.remove("show");
	}
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
	$('[name="number"]').mask("+7(999) 999-9999");
});


//скролл по ссылке(хеш не остается в строке браузера)
$('a[href^="#"]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
});
