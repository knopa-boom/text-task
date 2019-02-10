"use strict";

let form = document.getElementById('form'),
    input = document.querySelectorAll('input');

// То, куда делаем запрос
const api_url = "http://codeit.pro/codeitCandidates/serverFrontendTest/user";

//Ф-я конструктор, которая даст методы создания и отправки Ajax запросов, возможность получить ответ и т.д.
const xhr = new XMLHttpRequest();

//  Настройка запроса
let responseText;
xhr.open("GET", `${api_url}/registration`);
//Отправка запроса
xhr.send();

// Подписываемся на ответ
xhr.addEventListener("load", () => {
    responseText = JSON.parse(xhr.responseText);
});

//Ф-я ready - запуск кода, как только все DOM-элементы загрузились
$(function () {

    //При событии submit данные не отправятся на сервер, пока не произойдет проверка валидности формы, далее redirect
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let x = true;

        for(let i = 0; i < input.length; i++) {
    
            if(input[i].value === '') {
                alert('Заполните все поля!');
                x = false;
                break;
            }
        };

        if (x)
        location.href="companies.html"
    });
});

