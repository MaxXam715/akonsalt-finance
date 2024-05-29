export default function sendTelegram(dataForm) {
    const botToken = '6003118587:AAEUbSOrWp6duziKsGyk_tWS-BpUyebBRcE';
    const chatId = '-1002049289669';
    const message = `📩 Получена новая заявка! \n\n<b>Имя:</b> ${dataForm.name} \n<b>Тел:</b> ${dataForm.phone}`;

    var sendTG = XMLHttpRequestAJAX({
        url: `https://api.telegram.org/bot${botToken}/sendMessage`,
        method: "GET",
        body: {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        }
    });

    console.log("sendTG", sendTG)

    if (sendTG) {
        console.log('✅ В Telegram успешно отправлено');
    }
}