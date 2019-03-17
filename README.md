![Star Wars Logo](src/logo.svg "Star Wars Logo")

# Star Wars React SPA

Простое SPA посвященное вселенной Звездных Войн. 
Использован стек технологий React (create-react-app), Semantic UI React, SPA.
Для получения информации было использовано API [https://swapi.co/](https://swapi.co/).
Для цветовой палитры был использован сайт 
[https://loading.io/color/feature/StarWars-Yoda](https://loading.io/color/feature/StarWars-Yoda)

## Как это работает

SPA состоит из трёх разделов - Films, People, Starships.
Каждый из разделов представляет собой: панель поиска и фильтрации, список объектов и панель пагинации.
Как пользоваться поиском? Набрать нужное поисковое выражение (подсказка для искомого поля у каждого раздела своя) и
нажать на иконку поиска.
Как сбросить результат? Очистить поиск и снова нажать на иконку.
Как пользоваться фильтрацией? Выбрать необходимую операцию из выпадающего списка, набрать нужное значение для 
фильтрации и нажать на иконку фильтрации.
Как сбросить результат? Очистить поиск и снова нажать на иконку.
При клике на объект на экране появится модальное окно с более полной информацией. Часть информации, требующая 
дозагрузки будет представлена в виде ссылок. Если нажать на кнопку справа, то информация дозагрузится.
**ВНИМАНИЕ. Иногда API может очень долго отвечать. Именно поэтому дозагрузка выведена отдельным функционалом.**

## Скрипты

Запускать из папки с проектом:

### `yarn add`

Для установки модулей

### `yarn start`

Запускает приложение в режиме разработки по адресу [http://localhost:3000](http://localhost:3000).

### `yarn build`

Для сборки в папку `build`.

### `yarn global add serve`

Для установки локального сервера.

### `serve -s build`

Для запуска собранного на локальном сервере.

## Скриншоты

Главная страница

![Главная страница](screenshots/screenshot_1.png?raw=true "Главная страница")

Верхняя часть раздела и панель поиска и фильтрации

![Верхняя часть раздела](screenshots/screenshot_2.png?raw=true "Верхняя часть раздела")

Нижняя часть раздела и панель пагинации

![Нижняя часть раздела](screenshots/screenshot_3.png?raw=true "Нижняя часть раздела")

Результаты поиска

![Результаты поиска](screenshots/screenshot_4.png?raw=true "Результаты поиска")

Результаты фильтрации

![Результаты фильтрации](screenshots/screenshot_5.png?raw=true "Результаты фильтрации")

Модальное окно без дозагрузки

![Модальное окно без дозагрузки](screenshots/screenshot_6.png?raw=true "Модальное окно без дозагрузки")

Модальное окно с дозагрузкой

![Модальное окно с дозагрузкой](screenshots/screenshot_5.png?raw=true "Модальное окно с дозагрузкой")

