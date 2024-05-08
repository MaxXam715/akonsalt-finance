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
                    <span class="title">Состою в Торгово-Промышленной палате РФ</span>
                    <img src="/assets/img/tpprf.png" class="logo">               
                </div>
                <div class="item">
                    <span class="title">Состою в Московской Торгово-Промышленной палате</span>
                    <img src="/assets/img/mtpp.png" class="logo">
                </div>
            </div>
            <div class="grid-container">
                <div class="item">
                    <span class="title">Состою в сторонниках партии Единая Россия</span>
                    <img src="/assets/img/edin-russian.png" class="logo">
                </div>
                <div class="item">
                    <span class="title">Состою в Федеральном Реестре НОК</span>
                    <img src="/assets/img/nok.png" class="logo">
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector("#app").append(html);
}