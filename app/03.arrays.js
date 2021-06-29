console.log('Topic: Arrays');

// Task 01
// RU: Создать массив. Получить последний элемент массива.
//     1.    Без удаления этого элемента из массива.
//     2.    С удалением этого элемента из массива
//    Выведите массивы в консоль
// EN: Create an array of any elements. Get the last element from this array.
//     1.    without deleting this element from an array;
//     2.    with deleting this element from an array.
//     Display them in the console.
let arr1 = [1, 2, 3, 4, 6];
let lastElem = arr1[arr1.length - 1];
console.log(lastElem);
let lastElem1 = arr1.pop();
console.log(arr1);


// Task 02
// RU: Создать массив любых элементов. Добавить элемент в конец массива.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Add new element to the end of this array.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.
let arr2 = [1, 'a', {}, [1, 'b', {}], 3];
arr2.push(4, [1,2,3], 5);
console.log(arr2);
let arr2_1 = arr2.concat({}, 6, 'c', 7);
console.log(arr2_1);
//Либо можно НЕ concat, а след образом через spread operator:
let arr2_1 = [...arr2, {}, 6, 'c', 7];
console.log(arr2_1);


// Task 03
// RU: Создать массив любых элементов. Вставить новый элемент под индексом 3.
//     1. Модифицировать текущий массив
//     2. Создать новый массив
//     Выведите массивы в консоль
// EN: Create an array of any elements. Insert a new element with index 3.
//     1. mutate current array;
//     2. create a new array.
//     Disply them in the conole.
let arr3 = [1, 'b', 4, {name:'Nastya'}, 8];
arr3.splice(3, 0, '3');
console.log(arr3);
let arr3_1 = [...arr3.slice(0, 3), 'str', ...arr3.slice(3)];
console.log(arr3_1);
//Либо можно сделать след образом: сначала создается НОВЫЙ массив через [...arr3], а потом уже из него делается splice
//достаем элементы из arr3 с помощью ... и кладем их в [] (новый массив)
let arr3_1 = [...arr3].splice(3,0,'new element');


// Task 04
// RU: Создать массив любых элементов.
//     Обойти элементы массива и вывести их в консоль.
// EN: Create an array of any elements.
//     Iterate over this array and display each element in the console.
let arr4 = [1, 'str', 5, {name:'Nastya', age:24}, 9];
arr4.forEach(arrElem => console.log(arrElem));


// Task 05
// RU: Создать массив чисел в диапазоне от 0 до 100.
//     Подсчитать и вывети сумму тех элементов, которые больше 50.
// EN: Create an array of numbers in the range from 0 to 100.
//     Calculate and display the sum of the elements, which are greater than 50.
let arr5 = [...Array(101).keys()];
let sum = 0;
arr5.forEach(arrElem => {
    if (arrElem > 50) {
        sum = sum + arrElem;
    };
});
console.log(sum);
//2й вариант решения
arr5.reduce((acc, element) => {
    if (element > 50) {
        return acc + element;
    };
    return acc;
});


// Task 06
// RU: Создать массив строк. На основе этого массива создать строку –
//     объдинить все элементы массива, используя определенный разделитель.
// EN: Create an array of strings. Create a string on the basis of this array.
//     This string should contain all elements from an array separated by certain delimeter.
let arr6 = ['Nastya', 'is', 'learning', 'JS'];
let str = arr6.join(' ');
console.log(str);


// Task 07
// RU: Создать массив чисел от 1 до 20 в случайном порядке.
//     Отcортировать массив по возрастанию. Вывести его в консоль.
//     Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.
// EN: Create an array of numbers in the range from 1 to 20 in random order.
//     Sort this array in ascending order. Display it in the console.
//     Create a copy of the previous array in reverse order. Disply it in the console.
let arr7 = [2, 1, 3, 5, 4, 8, 6, 7, 9, 10, 13, 12, 11, 17, 14, 16, 15, 19, 18, 20];
arr7.sort((a,b) => a-b);
console.log(arr7);
arr7.sort((a,b) => b-a);
console.log(arr7);


// Task 08
// RU: Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     первая часть - отрицательные числа в том же порядке
//     вторая часть - нули
//     третья часть - положительные числа в том же порядке.
// EN: Create the array: [3, 0, -1, 12, -2, -4, 0, 7, 2]
//     Use this array and create new one: [-1, -2, -4, 0, 0, 3, 12, 7, 2].
//     First part - negative values from the original array in the same order,
//     Next part - zeroes
//     Last part - positive values from the original array in the same order.
let arr8 = [3, 0, -1, 12, -2, -4, 0, 7, 2];
let arrNeg = arr8.filter(number => number <0);
console.log(arrNeg);
let arrZero = arr8.filter(number => number === 0);
console.log(arrZero);
let arrPosit = arr8.filter(number => number > 0);
console.log(arrPosit);
arrNew = [...arrNeg, ...arrZero, ...arrPosit];
console.log(arrNew);


// Task 09
// RU: 1. Создайте массив styles с элементами "Jazz", "Blues".
//     2. Добавьте в конец значение "Rock-n-Roll".
//     3. Замените предпоследнее значение с конца на "Classics".
//     4. Удалите первый элемент из массива и выведите его в консоль.
//     5. Добавьте в начало два элемента со значениями "Rap" и "Reggae".
//     6. Выведите массив в консоль.
// EN: 1. Create an array styles with two elements "Jazz", "Blues".
//     2. Add new element "Rock-n-Roll" to the end of the array.
//     3. Replace the last but one element with new value "Classics".
//     4. Remove the first element from the array and disply it in the console.
//     5. Add two new elements "Rap" and "Reggae" at the begining of the array.
//     6. Display an array in the console.
let arr9 = ['Jazz', 'Blues'];
arr9.push('Rock-n-Roll');
console.log(arr9);
arr9.splice(1, 1, 'Classics');
console.log(arr9);
let theFirstElem = arr9.shift();
console.log(theFirstElem);
arr9.unshift('Rap', 'Regge');
console.log(arr9);


// Task 10
// RU: Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh"
//     отдельно количество букв r, k, t и вывести в консоль.
// EN: Calculate the number of letters r, k, t in this string
//     "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" and display them in the console.
let str = "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh";
let arr10 = str.split('');
//Также можно сделать arr10 = Array.from(str);
console.log(arr10);
let arr_k = arr10.filter(letter => letter === 'k');
console.log(arr_k.length);
let arr_r = arr10.filter(letter => letter === 'r');
console.log(arr_r.length);
let arr_t = arr10.filter(letter => letter === 't');
console.log(arr_t.length);


// Task 11
// RU: Создать массив любых элементов.
//     Получить случайный элемент из массива и вывести его в консоль.
// EN: Create an array of any elements.
//     Get the random element from this array and display it in the console.
let arr11 = [1, 'a', {}, [1, 'b', {}], 3];
const randomElement = arr11[Math.floor(Math.random() * arr11.length)];


// Task 12
// RU: Создать двумерный массив:
//     1 2 3
//     4 5 6
//     7 8 9
//     Вывести его в консоль.
// EN: Create two-dementional array:
//     1 2 3
//     4 5 6
//     7 8 9
//     Display it in the console.
let arr12 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr12);


// Task 13
// RU: Преобразовать массив из предыдущего задания в одномерный.
//     Вывести его в консоль
// EN: Transform an array from the previous task into one-dementional array.
//     Display it in the console.
let arr13 = [].concat(...arr12);
console.log(arr13);
//либо можно сделать еще одним способом 
arr13 = arr12.flat();
console.log(arr13);


// Task 14
// RU: Создать массив любых элементов.
//     На его основе получить новый массив – подмножество элементов
//     оригинального массива начиная с индекса a и заканчивая индексом b.
//     Вывести массив в консоль.
// EN: Create an array of any elements.
//     Create new one on the basis of the originl array. New array should
//     contain elements from index a to index b.
//     Display it in the console.
function makeSubset(array, indexStart, indexEnd) {
    return array.slice(indexStart, indexEnd + 1);
};
makeSubset([2, 4, 'str', {}, [123], 8], 2, 4);


// Task 15
// RU: Создать массив любых элементов.
//     Найти индекс указаного элемента в массиве и вывести его в консоль.
// EN: Create an array of any elements.
//     Find the index of a particular element in the array and disply it in the console.
let arr15 = ['string', 48, ['a', {name: 'Nastya'}, [123]], {}, 8];
console.log(arr15.indexOf(['a', {name: 'Nastya'}, [123]])); //не получится брать индекс НЕ примитивов. С {} аналогично
let arr15 = ['string', 48, true, {}, 8];
console.log(arr15.indexOf(true)); 


// Task 16
// RU: Создать массив с дублями элементов. На его основе создать новый массив
//     уникальных элементов (удалить дубли).
//     Вывести новый массив в консоль.
// EN: Create an array with duplicate elements. Create new one on the basis of the originl array.
//     Remove duplicated elements.
//     Display it in the console.
let arr16 = ['Maldives', 'Maldives', 'Vietnam', 'Brazil'];
let arr16_1 = [...new Set(arr16)];
console.log(arr16_1);


// Task 17
// RU: Создать массив с дублями. Найти первый элемент, который дублируется.
//     Заменить этот элемент и все его копии на символ '*'.
//     Вывести массив в консоль.
// EN: Create an array with duplicate elements. Find first duplicated element.
//     Replace this element and all its copies with symbol '*'.
//     Display it in the console.


// Task 18
// RU: Создать массив целых чисел. На его основе создать массивы – представления
//     этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде.
//     Вывести эти массивы в консоль.
// EN: Create an array of integer numbers. Create 3 new ones on the basis of the originl array.
//     First array contains the binary representation of the elements from the original array.
//     Second array contains the octal representation of the elements from the original array.
//     Third array contains the hexadecimal representation of the elements from the original array.
//     Display them in the console.
let arr18 = [25, 3, 48, 91, 77];
let arr18_1 = arr18.map(element => element*2);
console.log(arr18_1);


// Task 19
// RU: Получить из строки 'a big brown fox jumps over the lazy dog' массив слов,
//     который содержит элементы, длина которых не больше 3 символа.
//     Вывести массив в консоль.
// EN: Get the array of words from the string 'a big brown fox jumps over the lazy dog'.
//     This array should contain only words, the length of which is 3 or less characters.
//     Display it in the console.
let str19 = 'a big brown fox jumps over the lazy dog';
let arr19 = str19.split(' ');
console.log(arr19);
let arr19_1 = arr19.filter(element => element.length <= 3);
console.log(arr19_1);


// Task 20
// RU: Создать массив, который содержит строки и числа.
//     Проверить, содержит ли массив только строки.
//     Вывети результат в консоль
// EN: Create an array of numbers and strings.
//     Check whether this array contains only strings.
//     Display the result in the console.
let arr20 = ['a', 2, 3, 'c', 'd'];
console.log(arr20.every(element => typeof(element) === 'string'));


// Task 21
// RU: Создать отсортированный массив чисел.
//     Реализовать функцию binarySearch(arr, value), которая принимает массив
//     и значение и возвращает индекс значения в массиве или -1.
//     Функция должна использовать бинарный поиск.
//     Вывести результат в консоль.
// EN: Create an array of numbers in sort order.
//     Implement function binarySearch(arr, value), which takes an array
//     and a value and returns the index of this value in the array or -1.
//     Function should use binary search.
//     Display the result in the console.
