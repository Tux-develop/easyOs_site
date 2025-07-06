document.addEventListener('DOMContentLoaded', function() {
    // Определяем язык и страну
    const userLang = navigator.language || navigator.userLanguage;
    let country = '';
    // Пробуем получить страну из языка браузера
    if (userLang.startsWith('ru')) {
        country = 'RU';
    } else if (userLang.startsWith('be')) {
        country = 'BY';
    }
    // Если есть поддержка geolocation API, пробуем уточнить страну
    // (но для простоты используем только язык)

    const aboutRu = `easyOs — это операционная система, созданная для максимального удобства и полного контроля пользователя над своим компьютером. Мы стремились сделать интерфейс интуитивно понятным, чтобы даже новые пользователи могли быстро освоиться, а опытные — настроить систему под себя до мельчайших деталей. В easyOs нет скрытых ограничений: вы сами решаете, как использовать свой ПК, какие приложения устанавливать и как управлять своими данными. Надёжность, простота и свобода — вот основные принципы easyOs. Почувствуйте настоящую независимость и комфорт в работе с компьютером!`;
    const aboutEn = `easyOs is an operating system designed for maximum user convenience and complete ownership of your computer. Our goal is to provide an intuitive interface so that newcomers can get started easily, while advanced users have the freedom to customize every aspect to their liking. With easyOs, there are no hidden restrictions: you decide how to use your PC, which apps to install, and how to manage your data. Reliability, simplicity, and freedom are the core values of easyOs. Experience true independence and comfort in your daily computing!`;

    if (country === 'RU' || country === 'BY') {
        document.documentElement.lang = 'ru';
        document.title = 'Скачать easyOs ISO';
        document.getElementById('main-title').textContent = 'Скачать ISO easyOs';
        document.getElementById('main-desc').textContent = 'Получите последнюю версию easyOs для вашего компьютера.';
        document.getElementById('download-btn').textContent = 'Скачать ISO';
        document.getElementById('about-text').textContent = aboutRu;
    } else {
        document.documentElement.lang = 'en';
        document.title = 'Download easyOs ISO';
        document.getElementById('main-title').textContent = 'Download easyOs ISO';
        document.getElementById('main-desc').textContent = 'Get the latest version of easyOs for your computer.';
        document.getElementById('download-btn').textContent = 'Download ISO';
        document.getElementById('about-text').textContent = aboutEn;
    }
}); 