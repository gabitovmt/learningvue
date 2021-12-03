'use strict';

/*
 * Связывание CSS-классов
 */

/*
 * Использование объектов
 */
const vm1 = new Vue({
   el: '#app-5-1',
   data: {
       isActive: true,
       hasError: false,
       error: null
   },
    computed: {
       classObject() {
           return {
               active: this.isActive && !this.error,
               'text-danger': this.error && this.error.type === 'fatal'
           }
       }
    }
});

/*
 * Использование массивов
 */
const vm2 = new Vue({
    el: '#app-5-2',
    data: {
        isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

/*
 * Использование с компонентами
 */
Vue.component('my-component', {
    template: '<p class="foo bar">Привет</p>'
});
const vm3 = new Vue({
    el: '#app-5-3',
    data: {
        isActive: true
    }
});

/*
 * Связывание inline-стилей
 */
const vm4 = new Vue({
    el: '#app-5-4',
    data: {
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});

/*
 * Использование массивов
 */
const vm5 = new Vue({
    el: '#app-5-5',
    data: {
        baseStyles: {
            fontSize: '14px',
            color: 'red'
        },
        overridingStyles: {
            fontSize: '30px'
        }
    }
});

/*
 * При использовании :style свойств CSS, требующих указания вендорных префиксов,
 * Vue автоматически определит это и добавит подходящие префиксы к применяемым стилям
 */

/*
 * Множественные значения
 */
const vm6 = new Vue({
    el: '#app-5-6'
});
