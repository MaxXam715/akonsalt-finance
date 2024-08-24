export default function MyAchievements() {
    var html = document.createElement("section");
    html.classList.add("section-container");
    html.classList.add("my-achievements");
    html.innerHTML = `
    <div class="G-container">
        <div class="header">
            <h2 class="title-heading heading-gradient-2">Мои успехи и достижения</h2>
        </div>
        <div class="list-achievements">
            <div class="grid-container">
                <div class="item">
                    <span class="title">Включен в Торгово-Промышленную Палату РФ</span>
<!--                    <img src="/assets/img/tpprf.png" class="logo">               -->
                </div>
                <div class="item">
                    <span class="title">Включен в Московскую Торгово-Промышленную Палату</span>
<!--                    <img src="/assets/img/mtpp.png" class="logo">-->
                </div>
                <div class="item">
                    <span class="title">Включен в Экспертный Совет по инновационному развитию</span>
                </div>
                <div class="item">
                    <span class="title">Включен в сторонники партии Единая Россия</span>
                </div>
            </div>
            <div class="grid-container">
                <div class="item">
                    <span class="title">Включен в сторонники партии Единая Россия</span>
<!--                    <img src="/assets/img/edin-russian.png" class="logo">-->
                </div>
                <div class="item">
                    <span class="title">Включен в Федеральный реестр независимой оценки квалификации</span>
<!--                    <img src="/assets/img/nok.png" class="logo">-->
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(html);
}