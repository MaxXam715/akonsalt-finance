export default function sendByEmail() {
    var sendMail = XMLHttpRequestAJAX({
        url: `/backend/sendMail.php`,
        method: "POST",
        body: {}
    });

    console.log('sendMail', sendMail)
}