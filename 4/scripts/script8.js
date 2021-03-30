/*Задача 8. Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок
та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині
тега a: &lt;a&gt; &lt;img src=”шлях”&gt; &lt;/a&gt;
*/

function generateBanner(image, title, url){
    return `
    <div class="banner">
        <h5> ${title} </h5>
        <a href="${url}">
            <img src="${image}">
        </a>
    </div>
    `;
}

function addBanner(banner){
    document.body.innerHTML += banner;
}

// const bannerPizza = generateBanner(
//     "https://media-cdn.tripadvisor.com/media/photo-s/18/2d/e5/64/pizza-sted.jpg",
//     "Pizza",
//     "https://www.tripadvisor.ru/Restaurant_Review-g190499-d15450447-Reviews-Wood_Pizza-Trondheim_Trondheim_Municipality_Trondelag_Central_Norway.html"
// );

// const bannerCat = generateBanner(
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/300px-Cat03.jpg",
//     "Cat",
//     "https://ru.wiktionary.org/wiki/cat"
// );

// addBanner(bannerPizza);
// addBanner(bannerCat);