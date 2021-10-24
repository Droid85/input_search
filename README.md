#   Work with open API

-   Вверху страницы находится инпут и кнопка. Пользователь может ввести туда username любого пользователя гитхаб. Когда пользователь ввел логин, он может нажать на кнопку "Найти". В этот момент приложение должно отправить запрос на API Github и получить информацию о пользователе

-   Данные для пользователя берем из запроса https://api.github.com/users/{{login}} , где логин - это логин выбраного пользователя

-   После получения данных нужно показать аватар пользователя (свойство avatar_url), количество репозиториев (свойство public_repos), количество фоловеров (свойство followers) и количество наблюдаемых (свойство following)

-   Если такого юзернейма не существует гитхаб вернет ошибку (404). Попробуйте обработать ее в .catch