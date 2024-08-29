<?php

// На всякий случай задаем кодировку для корректного отображения содержания
$charset = 'UTF-8';

// несколько получателей
$to = 'gorbatenkomax@yandex.ru';

$subject = 'Тема письма';
$content = '<html><body>';
$content .= '<h1>Здравствуйте!</h1>';
$content .= '<p>Это тестовое письмо.</p>';
$content .= '</body></html>';

// Оформляем заголовки, чтобы письмо выглядело правильно и не попадало в спам
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=$charset\r\n";
$headers .= "From: support@akonsalt-finance.ru\r\n";

// Определяем дополнительные параметры для отправки
$additional_parameters = "-f support@akonsalt-finance.ru";

// Отправляем письмо с необходимыми заголовками и параметрами
if(mail($to, $subject, $content, $headers, $additional_parameters)) {
    echo "Письмо успешно отправлено.";
} else {
    echo "Ошибка при отправке письма.";
}

exit();