<?php 

// присваиваем переменным значения из полей
$weight = $_POST['weight'];
$departure = $_POST['departure'];
$arrival = $_POST['arrival'];
$clientName = $_POST['clientName'];
$number = $_POST['number'];
$email = $_POST['email'];

//

$weight = htmlspecialchars($weight);
$departure = htmlspecialchars($departure);
$arrival = htmlspecialchars($arrival);
$clientName = htmlspecialchars($clientName);
$number = htmlspecialchars($number);
$email = htmlspecialchars($email);

//

$weight = urldecode($weight);
$departure = urldecode($departure);
$arrival = urldecode($arrival);
$clientName = urldecode($clientName);
$number = urldecode($number);
$email = urldecode($email);

//

$weight = trim($weight);
$departure = trim($departure);
$arrival = trim($arrival);
$clientName = trim($clientName);
$number = trim($number);
$email = trim($email);

//

$to = "o.klim@list.ru";

if (!empty($weight) && !empty($departure) && !empty($arrival)) {
	$subject = "Рассчет стоимости грузоперевозки";
	$message = "Масса груза(кг): ".$weight.". Адрес отправления: ".$departure.".
	Адрес доставки: ".$arrival.". Имя: ".$clientName.". Номер: ".$number." Email: ".$email;
} 

else if (empty($weight) && empty($departure) && empty($arrival) && !empty($email)) {
	$subject = "Консультация";
	$message = "Имя: ".$clientName.". Номер: ".$number." Email: ".$email;
}

else {
	$subject = "Обратный звонок";
	$message = "Имя: ".$clientName.". Номер: ".$number;
}

// $headers = "От: Телепорт";

mail($to, $subject, $message);
// exit('<meta http-equiv="refresh" content="0; url=https://perevozchik.space" />');

?>