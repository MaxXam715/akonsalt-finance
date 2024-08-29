<?php

$method = $_SERVER['REQUEST_METHOD'];
$get_post_data = file_get_contents("php://input");
$POST = json_decode($get_post_data, true);

$nameClient = (isset($POST['form']['name']) === true) ? $POST['form']['name'] : "не указано";
$phoneClient = (isset($POST['form']['phone']) === true) ? $POST['form']['phone'] : "не указано";
$isService = (isset($POST['service']) === true && $POST['service'] !== "") ? "📩 Услуга: " . $POST['service'] : "📩 Заявка на обратную связь.";

// Задаем кодировку для корректного отображения содержания
$charset = 'UTF-8';

// Получатель
$to = 'gorbatenkomax@yandex.ru';

$subject = 'Новая заявка с сайта';
$content = '
<html>
<body>
    <div>'. $isService .'</div>
    <div>👤 Имя: '. $nameClient .'</div>
    <br>
    <div>📞 Тел: '. $phoneClient .'</div>
</body>
</html>
';

// Оформляем заголовки, чтобы письмо выглядело правильно и не попадало в спам
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=$charset\r\n";
$headers .= "From: feedback@akonsalt-finance.ru\r\n";

// Определяем дополнительные параметры для отправки
$additional_parameters = "-f feedback@akonsalt-finance.ru";

// Отправляем письмо с необходимыми заголовками и параметрами
if(mail($to, $subject, $content, $headers, $additional_parameters)) {
    echo "Письмо успешно отправлено.";
} else {
    echo "Ошибка при отправке письма.";
}

exit();