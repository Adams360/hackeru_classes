<?php

use PHPMailer\PHPMailer\PHPMailer;

if( isset($_POST['fullname']) && isset($_POST['email']) ) {

    $name = !empty($_POST['fullname']) ? trim($_POST['fullname']) : '';
    $name = filter_var($name, FILTER_SANITIZE_STRING);

    $email = !empty($_POST['email']) ? trim($_POST['email']) : '';
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    
    $phone = !empty($_POST['phone']) ? trim($_POST['phone']) : '';
    $phone = filter_var($phone, FILTER_VALIDATE_REGEXP,
    array("options"=>array("regexp"=>"/^(?:0(?!(5|7))(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5|7)(?:-?\d){9})$/")));

    require_once "../PHPMailer/PHPMailer.php";
    require_once "../PHPMailer/SMTP.php";
    require_once "../PHPMailer/Exception.php";


    $mail = new PHPMailer();

    // SMTP Settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "adamshaul360@gmail.com";
    $mail->Password = "loona123";
    $mail->Port     = 465;


    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    //Recipients
    $mail->setFrom($email, $name);
  
    $mail->addAddress('adamshaul360@gmail.com'); 
    // Content
    $mail->isHTML(true);  // Set email format to HTML
    $mail->Subject = $name . ' מעוניין להשכיר כיתה';
    $mail->Body =  
    "<table border='0' cellspacing='0' cellpadding='2' width='100%'>                    
    <tr><td valign='Top' align='Center'>&nbsp;</td>
    <td valign='Top' align='right' dir='rtl'><font style='font-size:28px' color='black'>
    פניית משרה</font>
    <br/><br/>
    <hr></hr>
    <font style='font-size:14px' color='black'><b>שם: </b> {$name}</font><br/>
    <hr></hr>
    <font style='font-size:14px' color='black'><b>טלפון: </b> {$phone}</font><br/>
    <hr></hr>
    <font style='font-size:14px' color='black'><b>אימייל: </b> {$email}</font><br/>
    <p><hr></hr></p>
    <font style='font-size:12px' color='black'>This is an automatic massage from your website.<br>Please do not reply to this e-mail.</font>
    </td>
    </tr>
    </table>";

    if($mail->send()) {
        echo 'Email Sent!';
    } else {
        echo 'it didnt work :(' . "<br>" . $mail->ErrorInfo;
    }
} else {
    header('Location: ../index.php');
}
