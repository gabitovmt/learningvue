'use strict';

/*
 * Отрисовка списков
 */

/*
 * Отображение массива элементов с помощью v-for
 */
const vm1 = new Vue({
   el: '#app-7-1',
   data: {
       items: [
           { message: 'Foo' },
           { message: 'Bar' }
       ]
   }
});

const vm2 = new Vue({
    el: '#app-7-2',
    data: {
        parentMessage: 'Родитель',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

/*
 * v-for для объекта
 */
const vm3 = new Vue({
    el: '#app-7-3',
    data: {
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
});

/*
 * Сохранение состояния
 *
 * При обновлении Vue списка элементов, отображаемого директивой v-for, по умолчанию используется стратегия
 * обновления "на месте". Если порядок элементов массива или объекта изменился, Vue не станет перемещать элементы
 * DOM, а просто обновит каждый элемент "на месте", чтобы он отображал новые данные по соответствующему индексу.
 *
 * Режим по умолчанию эффективен, но применим только в случаях, когда результат отрисовки вашего списка
 * не полагается на состояние дочерних компонентов или временные состояния DOM (например, значения полей форм).
 *
 * Чтобы подсказать Vue, как отслеживать идентичность каждого элемента, укажите уникальный атрибут key
 * для каждого элемента. Используйте строковые или числовые значения в key.
 */

/*
 * Отслеживание изменений в массивах
 *
 * Методы внесения изменений
 *
 * Vue оборачивает у наблюдаемого массива методы внесения изменений, чтобы они вызвали обновления представления.
 * Оборачиваются следующие методы:
 * push(), pop(), shift(), unshift(), splice(), sort(), reverse()
 */

/*
 * Отображение отфильтрованных/отсортированных результатов
 */
const vm4 = new Vue({
    el: '#app-7-4',
    data: {
        numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
        evenNumbers() {
            return this.numbers.filter((num) => num % 2 === 0);
        }
    }
});

const vm5 = new Vue({
    el: '#app-7-5',
    data: {
        sets: [[ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ]]
    },
    methods: {
        even(numbers) {
            return numbers.filter((num) => num % 2 === 0);
        }
    }
});

/*
 * v-for и диапазоны
 */
const vm6 = new Vue({
   el: '#app-7-6'
});

/*
 * v-for и тег template
 */
const vm7 = new Vue({
    el: '#app-7-7',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

/*
 * v-for и v-if
 *
 * Не рекомендуется использовать их вместе. v-for имеет больший приоритет, чем v-if
 */
const vm8 = new Vue({
    el: '#app-7-8',
    data: {
        todos: [{
            name: 'Cooking',
            isCompleted: false
        }, {
            name: 'Cleaning',
            isCompleted: false
        }, {
            name: 'Gaming',
            isCompleted: true
        }]
    }
});

/*
 * Компоненты и v-for
 */
Vue.component('todo-item', {
    template: `<li>
      {{ title }}
      <button @click="$emit('remove')">Удалить</button>
    </li>`,
    props: ['title']
});
const vm9 = new Vue({
    el: '#app-7-9',
    data: {
        newTodoText: '',
        todos: [{
            id: 1, title: 'Помыть посуду'
        }, {
            id: 2, title: 'Вынести мусор'
        }, {
            id: 3, title: 'Подстричь газон'
        }],
        nextTodoId: 4
    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
});
