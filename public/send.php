

<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'example@gmail.com';
    $mail->Password = 'secret';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->CharSet = "utf-8";
    $mail->setFrom('example@gmail.com');
    $mail->addAddress('example@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = "Message from bart-group.com";
 
	$body = "<h1>You've received one more message from website!</h1>";
	
	$body.='<p><strong>Name:</strong> '.htmlspecialchars(trim($_POST['name']),ENT_QUOTES, 'utf-8').'</p>';

	$body.='<p><strong>Phone: </strong> '.htmlspecialchars(trim($_POST['phone']),ENT_QUOTES, 'utf-8').'</p>';

	$body.='<p><strong>Email:</strong> '.htmlspecialchars(trim($_POST['email']),ENT_QUOTES, 'utf-8').'</p>';

	$body.='<p><strong>Message:</strong> '.htmlspecialchars(trim($_POST['comment']),ENT_QUOTES, 'utf-8').'</p>';

	$mail->Body = $body;

    $mail->send();

?>
