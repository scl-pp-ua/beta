const translations = {
    uk: {
        title: "Sky: Годинник Подій",
        geyser: "Забруднений Геозер",
        grandma: "Вечеря у Бабусі",
        memory_btn: "Викликати спогад",
        notify_btn: "Сповіщення",
        memories: ["Ти не один у цьому небі", "Світло завжди знайде шлях", "Час збирати свічки!"]
    },
    en: {
        title: "Sky: Event Clock",
        geyser: "Polluted Geyser",
        grandma: "Grandma's Dinner",
        memory_btn: "Summon Memory",
        notify_btn: "Notifications",
        memories: ["You are not alone", "Light will find a way", "Time to farm!"]
    }
};

let currentLang = localStorage.getItem('lang') || 'uk';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateUI();
}

function updateUI() {
    document.getElementById('main-title').innerText = translations[currentLang].title;
    document.querySelectorAll('[data-key]').forEach(el => {
        el.innerText = translations[currentLang][el.getAttribute('data-key')];
    });
}

// Розрахунок часу Sky (кожні 2 години)
function updateTimers() {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes();
    const utcSeconds = now.getUTCSeconds();

    // Приклад логіки для події, що стається кожні парні години UTC
    let nextEventHour = utcHours % 2 === 0 ? utcHours + 2 : utcHours + 1;
    // ... додавання логіки хвилин ...
    
    document.getElementById('timer-geyser').innerText = `${nextEventHour}:${60-utcMinutes}:${60-utcSeconds}`;
}

function showMemory() {
    const m = translations[currentLang].memories;
    alert(m[Math.floor(Math.random() * m.length)]);
}

// Preloader
window.onload = () => {
    document.body.classList.remove('loading');
    document.getElementById('preloader').style.display = 'none';
    updateUI();
    setInterval(updateTimers, 1000);
};
