'use strict';

/*
 * Основы компонентов
 */

/*
 * Базовый пример
 */
// Определяем новый компонент, названный button-counter
Vue.component('button-counter', {
    // data у компонентов должно быть функцией, чтобы каждый экземпляр компонента управлял собственной
    // независимой копией возвращаемого объекта данных
    data() {
        return {
            count: 0
        }
    },
    template: '<button @click="count++">Счётчик кликов - {{ count }}</button>'
});

const vm1 = new Vue({ el: '#app-10-1' });

/*
 * Переиспользование компонентов
 */
const vm2 = new Vue({ el: '#app-10-2' });

/*
 * Организация компонентов
 *
 * Данная регистрация является глобальной. Существует ещё локальная
 * Vue.component('my-component-name', {
 *   // ... опции ...
 * })
 */

/*
 * Передача данных в дочерние компоненты через входные параметры
 */
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

const vm3 = new Vue({
    el: '#app-10-3',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
});

/*
 * Один корневой элемент
 */
Vue.component('blog-post-with-content', {
    props: ['post'],
    template: `
        <div class="blog-post">
          <h3>{{ post.title }}</h3>
          <div v-html="post.content"></div>
        </div>
    `
});
const vm4 = new Vue({
    el: '#app-10-4',
    data: {
        post: {
            title: 'Один корневой элемент',
            content: `При создании компонента <code>&lt;blog-post&gt;</code>,
                ваш шаблон в конечном итоге будет содержать не только название`
        }
    }
});

/*
 * Прослушивание событий из дочерних компонентов в родительских компонентах
 */
Vue.component('blog-post-events-demo', {
    props: ['post'],
    template: `
        <div class="blog-post">
          <h3>{{ post.title }}</h3>
          <button @click="$emit('enlarge-text')">Увеличить размер текста</button>
          <div v-html="post.content"></div>
        </div>
    `
});

const vm5 = new Vue({
    el: '#app-10-5',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: '...content...' },
            { id: 2, title: 'Blogging with Vue', content: '...content...' },
            { id: 3, title: 'Why Vue is so fun', content: '...content...' }
        ],
        postFontSize: 1
    }
});

/*
 * Передача данных вместе с событием
 */
Vue.component('blog-post-events-demo-2', {
    props: ['post'],
    template: `
        <div class="blog-post">
          <h3>{{ post.title }}</h3>
          <button @click="$emit('enlarge-text', 0.1)">Увеличить размер текста</button>
          <div v-html="post.content"></div>
        </div>
    `
});

const vm6 = new Vue({
    el: '#app-10-6',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: '...content...' },
            { id: 2, title: 'Blogging with Vue', content: '...content...' },
            { id: 3, title: 'Why Vue is so fun', content: '...content...' }
        ],
        postFontSize: 1
    }
});

/*
 * Использование v-model на компонентах
 */
Vue.component('custom-input', {
    props: ['value'],
    template: `
        <input :value="value" @input="$emit('input', $event.target.value)">
    `
});

const vm7 = new Vue({
    el: '#app-10-7',
    data: {
        searchText: ''
    }
});

/*
 * Распределение контента слотами
 */
Vue.component('alert-box', {
    template: `
        <div class="demo-alert-box">
            <strong>Ошибка!</strong>
            <slot></slot>
        </div>
    `
});

const vm8 = new Vue({
    el: '#app-10-8'
});

/*
 * Особенности парсинга DOM-шаблона
 *
 * Некоторые HTML-элементы, такие как <ul>, <ol>, <table> и <select> имеют ограничения на то, какие элементы могут
 * отображаться внутри них, или например элементы, такие как <li>, <tr> и <option> могут появляться только внутри
 * определённых элементов. Это приведёт к проблемам при использовании компонентов с элементами, например:
 *
 * <table>
 *   <blog-post-row></blog-post-row>
 * </table>
 *
 * Для решения этой проблемы используется специальный атрибут is
 */
Vue.component('blog-post-row', {
    props: ['post'],
    template: '<tr><td>{{ post }}</td></tr>'
});

const vm9 = new Vue({
    el: '#app-10-9',
    data: {
        post: 'content'
    }
});

/*
 * Это ограничение не распространяется на строковые шаблоны из одного из следующих источников:
 * - строковые шаблоны (например, template: '...');
 * - однофайловые (.vue) компоненты;
 * - <script type="text/x-template">
 */

/*
 * Динамическое переключение компонентов
 */
Vue.component('tab-home', {
    template: '<div>Home component</div>'
});
Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
});
Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
});

const tabs = {
    Home: {
        template: '<div>Home component</div>'
    },
    Posts: {
        template: '<div>Posts component</div>'
    },
    Archive: {
        template: '<div>Archive component</div>'
    }
}

const vm10 = new Vue({
    el: '#app-10-10',
    data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
    },
    computed: {
        // Имя зарегистрированного компонента
        currentTabComponent() {
            return `tab-${this.currentTab.toLowerCase()}`;
        },
        // Объект с настройками компонента
        currentTabObjectComponent() {
            return tabs[this.currentTab];
        }
    }
});
