var pathname = document.location.pathname,
    paths = pathname.split('/'),
    page = "";

getPage();
initCarcass();

function initCarcass() {

    importComponent(`/components/Header/Header.js`);

    createCSSLink(`/pages/${page}/css/${page}.css`);
    importComponent(`/pages/${page}/${page}.js`);

    importComponent(`/components/Footer/Footer.js`);
}

// ---------- определяем страницу ----------
function getPage() {
    if (pathname === "/") {
        page = "Home";
    } else if (paths.length === 2 && paths[1] === "blog") {
        page = "Blog";
    } else if (paths.length === 2 && paths[1] === "about") {
        page = "About";
    } else if (paths.length === 3 && paths[2] === "article") {
        page = "Article";
    } else if (paths.length === 2 && paths[1] === "privacy-policy") {
        page = "Privacy-policy";
    } else if (paths.length === 2 && paths[1] === "services") {
        page = "Services";
    } else {
        page = "404";
    }
}