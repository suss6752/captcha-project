function startMiniClock() {
    setInterval(function() {
        const clockElement = document.getElementById('live-clock');
        if (!clockElement) return;

        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        const dateStr = now.toLocaleDateString('uk-UA'); 
        
        clockElement.innerText = `${dateStr} | ${h}:${m}:${s}`;
    }, 1000);
}

// Керування темою
const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('site-theme', 'dark'); 
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('site-theme', 'light');
        }
    });
}

// Запуск при завантаженні (DOMContentloaded краще за window.onload)
document.addEventListener('DOMContentLoaded', function() {
    // 1. Запускаємо годинник
    startMiniClock();

    // 2. Відновлюємо тему
    const savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'dark' && themeToggle) {
        themeToggle.checked = true;
        document.body.classList.add('dark-theme');
    }
});