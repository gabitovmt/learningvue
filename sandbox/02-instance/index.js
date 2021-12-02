/*
 * Создание экземпляра Vue
 * Данные и методы
 */

// Наш объект data
const data = { a: 1 };

// Объект добавляется в экземпляр Vue
const vm = new Vue({
    data
});

// Получение свойства из экземпляра возвращает то же значение из исходных данных
console.log(vm.a === data.a);   // true

// Изменение свойства экземпляра влияет на оригинальные данные
vm.a = 2;
console.log(data.a);    // 2

// ... и наоборот
data.a = 3;
console.log(vm.a);      // 3

// Не будет вызывать никаких обновлений, т.к. свойства не было при создании экземпляра Vue
vm.b = 'hi';
console.log(data.hi);   // undefined

// Object.freeze() предотвращяет изменение существующих свойств
const obj = {
    foo: 'bar'
};
Object.freeze(obj);

new Vue({
    el: '#app',
    data: obj
});

// Служебные свойства
const data1 = { a: 1 }
const vm1 = new Vue({
    el: '#example',
    data: data1
});

console.log(vm1.$data === data1); // true
console.log(vm1.$el === document.getElementById('example')); // true

// $watch - это метод экземпляра
// Внимание! Не используйте стрелочные функции, иначе this не будет привязан к экземпляру Vue
vm1.$watch('a', function (newValue, oldValue) {
    // Этот коллбэк будет вызван, когда изменится `vm.a`
    console.log(newValue, oldValue);
});

/*
 * Хуки жизненного цикла экземпляра
 */
new Vue({
    data: {
        a: 1
    },
    created: function() {
        // `this` указывает на экземпляр vm
        console.log('Значение a: ' + this.a);   // Значение a: 1
    }
});

// Есть также стадии: mounted, updated и destroyed