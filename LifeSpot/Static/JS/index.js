 // создадим объект Map для хранения сессии
let session = new Map();
/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}
    /*
 * Проверка возраста пользователя
 * 
 * */
    function checkAge() {
        session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

        if (session.get("age") >= 18) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
        else {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.href = "http://www.google.com"
        }
    }
    
    let sessionLog = function logSession() {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
    }



