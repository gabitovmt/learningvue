'use strict';

/*
 * Декларативная отрисовка
 */
const app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Привет, Vue!'
    }
});

const app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
});

/*
 * Условия и циклы
 */
const app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

const app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
    }
});

/*
 * Работа с пользовательским вводом
 */
const app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Приветб Vue.js!'
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

const app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Привет, Vue!'
    }
});

/*
 * Разбиение приложения на компоненты
 */
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
const app7 = new Vue({
   el: '#app-7',
   data: {
       groceryList: [
           { id: 0, text: 'Овощи' },
           { id: 1, text: 'Сыр' },
           { id: 2, text: 'Что там ещё люди едят!' }
       ]
   }
});