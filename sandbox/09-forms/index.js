'use strict';

/*
 * Работа с формами
 */

/*
 * Типичное использование
 *
 * v-model игнорирует начальное значение атрибутов value, checked или selected.
 * Данные экземпляра Vue всегда считаются источником истины.
 *
 * Элементы для ввода текста и многострочного текста используют свойство value и событие input.
 * Чекбоксы и радиокнопки используют свойство checked и событие change.
 * Выпадающие списки используют свойство value и событие change.
 */
const vm1 = new Vue({
    el: '#app-9-1',
    data: {
        message: '',
        multilineMessage: '',
        checked: false,
        checkedNames: [],
        picked: '',
        selected: '',
        multiSelected: [],
        otherSelected: '',
        options: [
            { text: 'Один', value: 'A' },
            { text: 'Два', value: 'Б' },
            { text: 'Три', value: 'В' }
        ]
    }
});

/*
 * Связывание значений
 */
const vm2 = new Vue({
    el: '#app-9-2',
    data: {
        toggle: 'да',
        pick: 1,
        options: [1,2,3],
        selected: null
    }
});

/*
 * Модификаторы
 */
const vm3 = new Vue({
    el: '#app-9-3',
    data: {
        msg: '',
        age: 0,
        message: ''
    }
});
