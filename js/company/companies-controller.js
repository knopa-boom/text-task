"use strict";

const config = {
    url:"http://codeit.pro/codeitCandidates/serverFrontendTest/company",
};

/**
 * Храним текущие названия компаний в массиве name
 */
const state = {
    name: []
};

/**
 * Создаем запрос;
 * Создаем экземпляр класса Http. При создании экземпляра создается новый объект с методами,
 * которые есть в классе Http.
 */
const http = new Http();

/**
 * Создаем экземпляр класса UI.
 */
const ui = new UI();

/**
 * Делаем GET-запрос, т.е вызываем у http метод get();
 * Стрелочная ф-я выступает коллбеком.
 */
http.get(`${config.url}/getList`, (res) => {
    //В полученные новости создаем id, который равен i (индексу компании)
    res.list.forEach((name, i) => name._id = i);
    state.name = res.list; //Записываем в массив текущие новости
    
    /**
     * Перебираем массив с полученными от сервера компаниями(list)
     * На каждой итеррации получаем одну компанию
     * Передаем ее в UI в метод addListComp(), т.е в разметку
     */
    res.list.forEach(name => ui.addListComp(name));
});