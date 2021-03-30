const list = [
{
    title:"Cat",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/300px-Cat03.jpg",
    url:"https://ru.wiktionary.org/wiki/cat"
},    
{
    title:"Pizza",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/18/2d/e5/64/pizza-sted.jpg",
    url:"https://www.tripadvisor.ru/Restaurant_Review-g190499-d15450447-Reviews-Wood_Pizza-Trondheim_Trondheim_Municipality_Trondelag_Central_Norway.html"
},
{
    title:"Cat",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/300px-Cat03.jpg",
    url:"https://ru.wiktionary.org/wiki/cat"
},
];

for(const banner of list){
    if (banner && banner.image)
        addBanner(generateBanner(banner.image, banner.title, banner.url));
}

list.forEach(
    banner => // function (banner)
    {
        if (banner && banner.image)
            addBanner(generateBanner(banner.image, banner.title, banner.url));
    }
)


x => x**2; //function (x){ return x**2; }

(x, y) => x+y; //function (x, y) return x+y;