//1
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) 
// – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. 
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
    if (typeof first !== "number" || typeof second !== "number") {
        throw new Error("You have to enter only numbers");
    }
    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
        throw new Error("The index must not be larger than the array");
    }
    return arr[first] + arr[second];
}

try {
    const arr = [1, 2, 3, 4, 5];
    const sum = sumSliceArray(arr, 2, 4);
    console.log(sum);
} catch (error) {
    console.error(error.message);
}


//2
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) 
// та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! 
// Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).
// в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. 
// У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge() {
    try {
        const name = prompt("Enter your name:");
        if (!name) throw new Error("The field is empty! Please enter your name");
        const age = prompt("Enter your age:");
        if (!age) throw new Error("The field is empty! Please enter your age");
        if (isNaN(age)) throw new TypeError("Age must be a number");
        if (age < 18 || age > 70) throw new RangeError("Your age must be between 18 and 70");
        const status = prompt("Enter your status (admin, moderator, user):");
        if (!status) throw new Error("The field is empty! Please enter your status");
        if (status !== "admin" && status !== "moderator" && status !== "user") throw new EvalError("Invalid status");
        alert(`Welcome, ${name}! You can watch the movie.`);
    } catch (error) {
        alert(`${error.name}: ${error.message}`);
    }
}

// console.log(checkAge());


//3
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width 
// і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, 
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
        throw new Error("Parameters must be numbers!");
    }
    return width * height;
}

try {
    const width = 10;
    const height = "not a number";
    const area = calcRectangleArea(width, height);
    console.log(`The area of the rectangle is: ${area}`);
} catch (error) {
    console.error(error);
}


//4
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн 
// у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }
    return months[month - 1];
}

try {
    const monthName = showMonthName(8);
    console.log(monthName);
    const wrongMonth = showMonthName(15);
} catch (error) {
    if (error instanceof MonthException) {
        console.log(error.message);
    } else {
        console.log(error.message);
    }
}


//5
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації 
// виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

function showUser(id) {
    if (id < 0) {
        throw "ID must be non-negative";
    }
    return { id: id };
}

function showUsers(ids) {
    let result = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            let user = showUser(ids[i]);
            result.push(user);
        } catch (err) {
            console.log("Error: " + err);
        }
    }
    return result;
}

console.log(showUser(123));
console.log(showUser(-1));

let users = showUsers([123, -1, 456]);
console.log(users);
