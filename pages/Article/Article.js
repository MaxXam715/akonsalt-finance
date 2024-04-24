export default function Article() {
    var html = document.createElement('section');
    html.classList.add('section-article');
    html.innerHTML = `
    <section class="image-wrapper">
        <img src="/assets/img/layout/blog-2.jpg" alt="" class="img">
        <div class="title-wrapper G-container">
            <h1 class="title-post">Как мы заработали один миллиард рублей</h1>
        </div>
    </section>
    <section class="desc-article-container">
        <div class="G-container">
            <div class="desc-wrapper">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula nibh, interdum non enim sit amet, iaculis aliquet nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet ipsum ac velit egestas ultrices. Vestibulum et neque id ex semper varius a sit amet metus. </p>
            </div>
        </div>
    </section>`;
    document.querySelector("#app").append(html);
}