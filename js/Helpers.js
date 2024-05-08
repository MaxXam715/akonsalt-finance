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

function openModalFeedback() {
    importComponent("/components/modal/Feedback/Feedback.js");
}

function XMLHttpRequestAJAX(data) {
    var sendData = {
        url: (data.url != undefined && data.url != "") ? data.url : "",
        method: (data.method != undefined && data.method != "") ? data.method : "POST",
        body: (data.body != undefined && data.body != "") ? data.body : ""
    }

    var xhr = new XMLHttpRequest();

    if (sendData.method === "GET" || sendData.method === "DELETE" || sendData.method === "UPDATE") {
        xhr.open(sendData.method, sendData.url + "?" + new URLSearchParams(sendData.body).toString(), false);
    }

    if (data.headers) {
        for (var h in data.headers) {
            xhr.setRequestHeader(h, data.headers[h]);
        }
    }

    if (sendData.method === "POST") {
        sendData.body = JSON.stringify(sendData.body);
        xhr.open("POST", sendData.url, false);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.setRequestHeader('Content-Type', 'text/plain');
    }

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.send(sendData.body);

    var getData = {};
    getData.code = xhr.status;

    try {
        getData.data = JSON.parse(xhr.responseText);
    } catch (error) {
        getData.data = xhr.responseText;
    }

    return getData;
}