export default function sendTelegram(dataForm, service) {
    const botToken = '6003118587:AAEUbSOrWp6duziKsGyk_tWS-BpUyebBRcE';
    const chatId = '-1002049289669';
    const isService = service || "";
    const titleForm = (isService) ? `🔔 Заявка на консультацию: \n ${isService}` : `📩 Заявка на обратную связь.`;
    const message = `${titleForm} \n\n👤 <b>Имя:</b> ${dataForm.name} \n📞 <b>Тел:</b> ${dataForm.phone}`;

    var sendTG = XMLHttpRequestAJAX({
        url: `https://api.telegram.org/bot${botToken}/sendMessage`,
        method: "GET",
        body: {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        }
    });
}