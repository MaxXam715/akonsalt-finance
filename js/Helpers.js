function phoneNumber(tel) {
    if (tel === undefined && tel === "") return "NaN";

    if (!tel.startsWith("+")) {
        tel = "+" + tel;
    }

    let cleaned = ('' + tel).replace(/\D/g, '');
    let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return '+' + match[1] + ' (' + match[2] + ') ' + match[3] + '-' + match[4] + '-' + match[5];
    }

    return tel;
}

function createScriptLink(path) {
    let script = document.createElement('script');
    script.setAttribute("src", path+"?v="+version);
    document.body.append(script);
}

function importComponent(path, data) {
    path = (path) ? path : "/nan";
    data = (data) ? data : "";

    import(`${path}?v=${version}`).then(function (obj) {
        obj.default(data);
    }).catch(function (error) {
        console.error('%c ERROR: import JS ', 'background: red; color: #fff; border-radius: 50px;', error);
    });
}

function createCSSLink(path) {
    let nameFile = path.match(/\/([^\/]+)\.css$/)[1];

    let cssNavigation = document.createElement('link');
    cssNavigation.setAttribute("rel", "stylesheet");
    cssNavigation.setAttribute("href", path+"?v="+version);
    cssNavigation.id = "css_"+nameFile;

    if (!document.getElementById(cssNavigation.id)) document.head.append(cssNavigation);
}