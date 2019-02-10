'use strict';

// Класс UI для разметки
class UI {
    /**
     * В конструкторе объявляем html-элементы
     */
    constructor() {
        this.wrapperCompanies = $('#wrapperCompanies');
        this.totalCompanies = $('#totalCompanies');
        this.wrapperPartners = $('#wrapperPartners');
    }

    /**
     * Метод addListComp - добавляет в разметку список с компаниями
     * @param {object} - name, одно название компании
     */
    addListComp (name) {
        const template = `
            <ul class="list" id="list"
                <li style=" margin-left: 10px; padding: 0 0 10px 0; border-bottom: 1px solid #e0e0e0; font-size: 20px; color: #797272;
                cursor: pointer;" data-id="${name._id}">${name.name}</li>
            </ul>
        `;
        wrapperCompanies.insertAdjacentHTML('beforeend', template);
    };
};