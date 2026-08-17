# GoIT JS Homework 7 - Image Gallery and Modal Windows (JS)
JavaScript homework assignment for the GoIT course (Module 7). Topic: event bubbling, delegation, throttle/debounce, and building an image gallery with a modal window (lightbox).
**What was done:**
- Rendered a gallery markup dynamically from the `galleryItems` data array using template strings and `insertAdjacentHTML`
- Implemented event delegation on the gallery container to handle clicks on individual images and retrieve the full-size image URL
- Connected and configured the `basicLightbox` library via CDN (jsDelivr) to open a modal window with the full-size image on click
- Prevented the default link-navigation behavior on image click
- Added optional closing of the modal window on the `Escape` key, with the keyboard listener active only while the modal is open
- Built an alternative version of the gallery using the `SimpleLightbox` library (via CDN, cdnjs), with image captions from the `alt` attribute appearing after a 250ms delay
- Code formatted with Prettier
- Repository updated on GitHub following Git best practices, live page deployed via GitHub Pages

============================================================================

# Домашнє завдання 7 GoIT JS — Галерея зображень та модальні вікна (JS)
Практичне завдання з курсу JavaScript від GoIT (Модуль 7). Тема: спливання та делегування подій, throttle/debounce, створення галереї зображень з модальним вікном (lightbox).
**Що зроблено:**
- Реалізовано рендер розмітки галереї на основі масиву даних `galleryItems` за допомогою шаблонних рядків та `insertAdjacentHTML`
- Реалізовано делегування подій на контейнері галереї для обробки кліків по зображеннях та отримання url повнорозмірного зображення
- Підключено та налаштовано бібліотеку `basicLightbox` через CDN (jsDelivr) для відкриття модального вікна з повнорозмірним зображенням по кліку
- Заборонено стандартну поведінку переходу за посиланням при кліку на зображення
- Додано закриття модального вікна клавішею `Escape`, обробник клавіатури активний лише поки модальне вікно відкрите
- Створено альтернативну версію галереї з використанням бібліотеки `SimpleLightbox` (через CDN, cdnjs), з відображенням підписів до зображень з атрибута `alt` із затримкою 250 мс
- Код відформатовано за допомогою Prettier
- Зміни зафіксовані в репозиторії GitHub згідно з правилами використання Git, робоча сторінка розгорнута через GitHub Pages
