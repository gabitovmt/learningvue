'use strict';

/*
 * Обработка событий
 */

/*
 * Подписка на события
 */
const vm1 = new Vue({
    el: '#app-8-1',
    data: {
        counter: 0
    }
});

/*
 * Обработчики событий
 */
const vm2 = new Vue({
    el: '#app-8-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet(event) {
            alert(`Привет, ${this.name}!`);
            if (event) {
                alert(event.target.tagName);
            }
        }
    }
});

/*
 * Методы и inline-обработчики
 */
const vm3 = new Vue({
    el: '#app-8-3',
    methods: {
        say(message) {
            alert(message);
        }
    }
});

const vm4 = new Vue({
    el: '#app-8-4',
    methods: {
        warn(message, event) {
            if (event) {
                event.preventDefault();
            }
            alert(message);
        }
    }
});

/*
 * Модификаторы событий
 */
const vm5 = new Vue({
    el: '#app-8-5',
    methods: {
        parent() {
            console.log('parent');
        },
        doThis() {
            console.log('doThis');
        },
        doThat() {
            console.log('doThat');
        },
        onSubmit() {
            console.log('onSubmit');
        },
        onScroll() {
            let i = 0;
            while (i++ < 1000000000)
                Math.sqrt(i);
            console.log('onScroll');
        }
    }
});

/*
 * Модификаторы клавиш
 */
const vm6 = new Vue({
    el: '#app-8-6',
    methods: {
        submit() {
            console.log('submit');
        },
        onPageDown() {
            console.log('onPageDown');
        }
    }
});

/*
 * Коды клавиш
 */
const vm7 = new Vue({
    el: '#app-8-7',
    methods: {
        submit() {
            console.log('submit');
        },
        onDelete() {
            console.log('delete');
        },
        f2() {
            console.log('f2');
        }
    }
});

// Определение пользовательских псевдонимов клавиш
Vue.config.keyCodes.f2 = 113;

/*
 * Системные модификаторы клавиш
 */
const vm8 = new Vue({
    el: '#app-8-8',
    methods: {
        clear() {
            console.log('clear');
        },
        doSomething() {
            console.log('doSomething');
        }
    }
});

/*
 * Модификатор .exact
 */
const vm9 = new Vue({
   el: '#app-8-9',
   data: {
       onClick() {
           console.log('onClick');
       }
   }
});

/*
 * Модификаторы клавиш мыши
 */
const vm10 = new Vue({
    el: '#app-8-10',
    data: {
        onClick() {
            console.log('onClick');
        }
    }
});
