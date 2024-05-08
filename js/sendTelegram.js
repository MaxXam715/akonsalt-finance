export default function sendTelegram(dataForm) {
    var token = '6003118587:AAEUbSOrWp6duziKsGyk_tWS-BpUyebBRcE',
        chat_id = '-1002049289669',
        html = ``;

html = `
📩 Получена новая заявка! \n
<b>Имя:</b> ${dataForm.name}
<b>Тел:</b> ${dataForm.phone}`;

    var sendTG = XMLHttpRequestAJAX({
        url: 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&parse_mode=HTML&text=' + encodeURIComponent(html),
        method: "GET"
    });

    if (sendTG) {
        console.log('✅ В Telegram успешно отправлено');
    }
}