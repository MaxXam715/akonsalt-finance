export default function Blog() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("blog");
    html.innerHTML = `
    <div class="G-container">
        <div class="bg-gradient"></div>
        <div class="header-section">
            <h3 class="heading heading-gradient">Блог</h3>
        </div>
        <div class="blog-list"></div>
    </div>`;
    document.querySelector("#app").append(html);

    articleTmpl()
    articleTmpl()

    function articleTmpl() {
        var articleHTML = document.createElement("a");
        articleHTML.setAttribute("href", "/blog/article?id=1");
        articleHTML.classList.add("article-item");
        articleHTML.innerHTML = `
        <div class="row-container">
            <div class="image-wrapper">
                <img src="/assets/img/layout/blog-1.jpg" alt="">
            </div>
            <div class="text-preview">
                <h3 class="title">Новость из мира инвестиций - доллар стоит 30 рублей, всё как в 2013 году</h3>
                <p class="desc">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </p>
                <span class="date-create">03 февраля 2024</span>
            </div>
        </div>`;
        html.querySelector(".blog-list").append(articleHTML);
    }
}