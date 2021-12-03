'use strict';

/*
 * Условная отрисовка
 */

/*
 * v-if
 */
const vm1 = new Vue({
    el: '#app-6-1',
    data: {
        awesome: true
    }
});

/*
 * Условные группы с использованием v-if и <template>
 */
const vm2 = new Vue({
    el: '#app-6-2',
    data: {
        ok: true
    }
});

/*
 * v-else
 */
const vm3 = new Vue({
    el: '#app-6-3',
    data: {
        ok: false
    }
});

/*
 * v-else-if
 */
const vm4 = new Vue({
    el: '#app-6-4',
    data: {
        type: 'A'
    }
});

/*
 * Управление повторным использованием элементов при помощи key
 */
const vm5 = new Vue({
    el: '#app-6-5',
    data: {
        loginType: 'username'
    },
    methods: {
        switchLoginType() {
            this.loginType = this.loginType === 'username' ? 'email' : 'username';
        }
    }
});

/*
 * v-show
 */
const vm6 = new Vue({
   el: '#app-6-6',
   data: {
       ok: true
   }
});

/*
 * v-if в сравнении с v-show
 *
 * v-if производит "настоящую" условную отрисовку, удостоверяясь, что подписчики событий и дочерние компоненты
 * внутри блока должным образом уничтожаются и воссоздаются при изменении истинности управляющего условия.
 *
 * v-if ленивый.
 *
 * v-show всегда присутствует в DOM.
 *
 * v-if выше затраты на переключения, а у v-show больше затрат на первичную отрисовку.
 */

/*
 * v-if вместе с v-for
 *
 * Совместное использование не рекомендуется. v-for имеет более высокий приоритет
 */