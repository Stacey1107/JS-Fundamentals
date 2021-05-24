console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находится в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

let promise1 = new Promise(()=> {
    console.log('Promise is created');
});


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let promise2 = new Promise(resolve => {
    resolve('Promise Data')
});
promise2.then(result => console.log(result));


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

let promise3 = new Promise((resolve, reject) => {
    reject('Promise Error');
});
promise3.catch(error => console.log(error));


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

let promise4 = new Promise(resolve => {
    setTimeout(() => resolve('Promise Data'), 3000);
});
promise4.then(result => console.log(result));


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

let handlePromise = {
    promise: null, 
    resolve: null,
    reject: null,
    onSuccess: paramName => console.log(`Promise is resolved with data: ${paramName}`),
    onError: paramName => console.log(`Promise is rejected with error: ${paramName}`)
};
document.querySelector('#btn-create-promise').addEventListener('click', () => {
    let promise5 = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    });
    handlePromise.promise = promise5;
    handlePromise.promise.then(handlePromise.onSuccess, handlePromise.onError);
});
document.querySelector('#btn-resolve-promise').addEventListener('click', () => {
    handlePromise.resolve();
});
document.querySelector('#btn-reject-promise').addEventListener('click', () => {
    handlePromise.reject();
});


// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.

let promise7 = new Promise(resolve => {
    setTimeout(() => resolve('My name is'), 1000);
});

let onSuccess = param => `${param} Nastya`;
let print = param1 => console.log(param1);
promise7
.then(onSuccess)
.then(print);


// Task 08
// Используйте предыдущий код. Добавьте в функцию onSuccess генерацию исключения
// Обработайте данное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.

let promise8 = new Promise(resolve => {
    setTimeout(() => resolve('My name is'), 1000);
});

let onSuccess1 = param => {
    throw new Error('A string with error');
    return `${param} Nastya`;
};
promise8
.then(onSuccess1)
.catch(error => console.log(error));


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData

let getPromiseData = promise9 => {
promise9.then(result => console.log(result), error => console.log(error));
};
let object = {name: 'Anna'};
let promise9a = new Promise(resolve => resolve(object));
getPromiseData(promise9a);

  
// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль

let promise10 = new Promise(resolve => setTimeout(() => {
    resolve({ name: "Anna" }), 3000
}));
let promise10a = new Promise(resolve => setTimeout(() => {
    resolve({ age: 16 }), 3000
}));
Promise.all([promise10, promise10a]).then(result => {
    let object = {};
    for (let element of result) {
        object = {
            ...object,
            ...element
        };
    };
    console.log(object);
});

// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.

let promise11 = new Promise(resolve => setTimeout(() => {
    resolve({ name: "Anna" }), 3000
}));
let promise11a = new Promise((resolve, reject) => setTimeout(() => {
    reject('Promise Error'), 3000
}));
Promise.all([promise11, promise11a]).then(result => {
    let object = {};
    for (let element of result) {
        object = {
            ...object,
            ...element
        };
    };
    console.log(object);
},
    error => console.log(error)
);


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

let promise12 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise Data'), 5000)
});
let promise12a = new Promise((resolve, reject) => {
    document.querySelector('#btn-cancel-promise').addEventListener('click', () => {
        reject('Cancel Promise');
    });
});
Promise.race([promise12, promise12a]).then(value => console.log(value));
