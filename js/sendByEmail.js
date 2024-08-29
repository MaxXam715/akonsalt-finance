export default function sendByEmail(dataForm, service) {
    var sendMail = XMLHttpRequestAJAX({
        url: `/backend/sendMail.php`,
        method: "POST",
        body: {
            form: dataForm,
            service: service,
        }
    });

    console.log('sendMail', sendMail)
}