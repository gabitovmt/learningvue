'use strict';

/*
 * Интерполяции
 */
const app1 = new Vue({
    el: '#app-3-1',
    data: {
        msg: 'Hello world!'
    }
});

/*
 * Сырой HTML
 */
const app2 = new Vue({
    el: '#app-3-2',
    data: {
        rawHtml: '<span style="color: red">Текст должен быть красным.</span>'
    }
});

/*
 * Атрибуты
 */
const app3 = new Vue({
    el: '#app-3-3',
    data: {
        dynamicId: '37af543a-0bb8-464e-a032-8f852e2efb3b',
        isButtonDisabled: false
    }
});

/*
 * Использование выражений JavaScript
 */
const app4 = new Vue({
    el: '#app-3-4',
    data: {
        number: 1,
        ok: true,
        message: 'Hello, Vue!',
        id: '37af543a-0bb8-464e-a032-8f852e2efb3b'
    }
});

/*
 * Директивы
 *
 * Директивы - это специальные атрибуты с префиксом v-. В качестве значения они принимают
 * одно выражение JavaScript (за исключением v-for)
 */

/*
 * Аргументы
 */
const app5 = new Vue({
    el: '#app-3-5',
    data: {
        url: 'https://example.com'
    },
    methods: {
        doSomething() {
            alert('Hello, World!');
        }
    }
});

/*
 * Динамические аргументы
 */
const app6 = new Vue({
    el: '#app-3-6',
    data: {
        attributename: 'href',
        url: 'https://example.com',
        bar: 'bar',
        value: 'value',
        eventname: 'click'
    },
    methods: {
        doSomething() {
            alert('Hello, Vue!');
        }
    }
});

/*
 * Модификаторы
 *
 * Модификаторы - особые постфиксы, добавляемые после точки, обозначающие, что директива должна быть связана
 * каким-то определённым образом
 */
const app7 = new Vue({
    el: '#app-3-7',
    methods: {
        onSubmit() {
            alert('Hello!');
        }
    }
});

/*
 * Сокращения
 */
const app8 = new Vue({
    el: '#app-3-8',
    data: {
        key: 'href',
        event: 'click',
        url: 'https://example.com'
    },
    methods: {
        doSomething() {
            alert('Goodbye');
        }
    }
});
