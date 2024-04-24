export default function Blog() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("blog");
    html.innerHTML = `
    <div class="G-container">
        <div class="header-section">
            <h3 class="heading heading-gradient">Блог</h3>
            <a href="/blog" class="btn btn-outline btn-shadow">Смотреть все</a>
        </div>
        <div class="grid-container"></div>
    </div>`;
    document.querySelector("#app").append(html);

    const arrayBlog = [
        {
            title: "Новость из мира инвестиций - доллар стоит 30 рублей",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.",
            image: "/assets/img/services/service-4.jpg"
        },
        {
            title: "Новость из мира инвестиций - доллар стоит 30 рублей",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.",
            image: "/assets/img/services/service-4.jpg"
        },
        {
            title: "Новость из мира инвестиций - доллар стоит 30 рублей",
            desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.",
            image: "/assets/img/services/service-4.jpg"
        }
    ];

    for (var i in arrayBlog) {
        itemArticle(arrayBlog[i]);
    }

    function itemArticle(article) {
        var articleHTML = document.createElement("a");
        articleHTML.setAttribute("href", "/blog/article?id=1");
        articleHTML.classList.add("blog-article");
        articleHTML.innerHTML = `
        <div class="img-preview">
            <img src="${article.image}" class="image">
        </div>
        <div class="desc-container">
            <div class="title">${article.title}</div>
            <div class="desc">${article.desc}</div>
        </div>`;
        html.querySelector(".grid-container").append(articleHTML);
    }
}