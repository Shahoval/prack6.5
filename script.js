document.getElementById("sumForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартну подію відправки форми

    // Отримуємо значення з полів вводу
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Перевірка чи введені значення числа
    if (isNaN(num1) || isNaN(num2)) {
        alert("Будь ласка, введіть числа.");
        return;
    }

    // Обчислення суми
    var sum = num1 + num2;

    // Виведення результату у полі вводу
    document.getElementById("result").value = sum;

    // Виведення результату у діалоговому вікні
    alert("Сума: " + sum);
});

document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
});
