// Сменяющееся сообщение
document.addEventListener("DOMContentLoaded", () => {
    const messages = [
        "Потерялся?",
        "Не бойся, деточка.",
        "Больно не будет.",
        "Лёха, что ты творишь?",
        "А я в шкафу прячусь!",
        "Тебе надо тренироваться.",
        "Tick-tock",
        "Heavy like a Brink's truck",
    ];
    
    let index = 0;
    const messageElement = document.querySelector('.message');

    if (messageElement) {
        setInterval(() => {
            index = (index + 1) % messages.length;
            messageElement.textContent = messages[index];
        }, 1500);
    }
});