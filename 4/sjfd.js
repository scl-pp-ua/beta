function updateEventTimers() {
    const now = new Date();
    const minutes = now.getUTCMinutes();
    const hours = now.getUTCHours();

    // Розрахунок для Sky-подій (відбуваються через кожні 2 години від скидання)
    // Гейзер: 05 хв парної години за UTC (або непарної, залежно від літнього часу)
    // В Україні (UTC+3 влітку) Гейзер зазвичай о кожній парній годині:05
    
    function getNextEvent(targetMin) {
        let diff = targetMin - minutes;
        if (diff < 0) diff += 120; // Подія кожні 2 години (120 хв)
        if (minutes > targetMin && (hours % 2 !== 0)) {
             // Тут логіка може змінюватися залежно від переходу на літній час
        }
        
        // Спрощений розрахунок для циклу 2 години:
        let timeRemaining = targetMin - minutes;
        if (timeRemaining < 0) timeRemaining += 120;
        
        const h = Math.floor(timeRemaining / 60);
        const m = timeRemaining % 60;
        return `${h}г ${m}хв`;
    }

    // Приблизні таймінги (можуть зміщуватися на 1 годину при зміні сезону)
    document.getElementById('geyser-timer').innerText = getNextEvent(05);
    document.getElementById('granny-timer').innerText = getNextEvent(35);
    document.getElementById('turtle-timer').innerText = getNextEvent(50);
}

// Оновлювати щохвилини
setInterval(updateEventTimers, 60000);
updateEventTimers();
