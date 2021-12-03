'use strict';

/*
 * Вычисляемые свойства
 */
const vm1 = new Vue({
    el: '#app-4-1',
    data: {
        message: 'Привет'
    },
    computed: {
        // Геттер вычисляемого значения
        reversedMessage() {
            // `this` указывает на экземпляр vm
            return this.message.split('').reverse().join('');
        }
    }
});

/*
 * Кэширование вычисляемых свойств
 */
const vm2 = new Vue({
    el: '#app-4-2',
    data: {
        message: 'Привет'
    },
    methods: {
        reverseMessage() {
            return this.message.split('').reverse().join('');
        }
    }
});

const vm3 = new Vue({
    el: '#app-4-3',
    computed: {
        // Данное вычисляемое свойство никогда не обновится, поскольку Date.now() не является реактивной зависимостью
        now() {
            return Date.now();
        }
    }
});

/*
 * Вычисляемые свойства и слежение
 */

// Версия со слежение за свойствами. В данном случае код императивный и избыточный
const vm4 = new Vue({
    el: '#app-4-4',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        firstName(val) {
            this.fullName = `${val} ${this.lastName}`;
        },
        lastName(val) {
            this.fullName = `${this.firstName} ${val}`;
        }
    }
});

// Версия с использованием вычисляемого свойства
const vm5 = new Vue({
    el: '#app-4-5',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
});

/*
 * Сеттеры вычисляемых свойств
 */
const vm6 = new Vue({
    el: '#app-4-6',
    data: {
        firstName: 'Ivan',
        lastName: 'Ivanov'
    },
    computed: {
        fullName: {
            // Геттер
            get() {
                return `${this.firstName} ${this.lastName}`;
            },
            // Сеттер
            set(newValue) {
                const names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    }
});

/*
 * Пример методы-наблюдатели
 */
const watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'Пока вы не зададите вопрос, я не могу ответить!'
    },
    // Можно использовать vm.$watch в императивном стиле
    watch: {
        // Эта функция запускается при любом изменении вопроса
        question(newQuestion, oldQuestion) {
            this.answer = 'Ожидаю, когда вы закончите печатать...';
            this.debouncedGetAnswer();
        }
    },
    created() {
        // _.debounce - это функция lodash, позволяющая ограничить то, насколько часто может выполняться
        // определённая операция. Документация: https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        getAnswer() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Вопросы обычно заканчиваются вопросительным знаком. ;-)';
                return;
            }

            this.answer = 'Думаю...';

            const vm = this;
            axios.get('https://yesno.wtf/api')
                .then((response) => {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch((error) => {
                    vm.answer = 'Ошибка! Не могу связаться с API. ' + error;
            });
        }
    }
});
