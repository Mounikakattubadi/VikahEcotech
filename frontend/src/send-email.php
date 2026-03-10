<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(["success"=>false,"message"=>"Invalid request"]);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

// sanitize inputs
$name = htmlspecialchars($data['name'] ?? '');
$company = htmlspecialchars($data['company'] ?? '');
$machinery = htmlspecialchars($data['machinery'] ?? '');
$model = htmlspecialchars($data['model'] ?? '');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$website = htmlspecialchars($data['website'] ?? '');
$phone = htmlspecialchars($data['phone'] ?? '');
$address = htmlspecialchars($data['address'] ?? '');
$city = htmlspecialchars($data['city'] ?? '');
$country = htmlspecialchars($data['country'] ?? '');
$messageText = htmlspecialchars($data['message'] ?? '');

// normalize model to match pdf
$modelSlug = strtolower(str_replace([' ', '&'], ['-', 'and'], $model));
$modelSlug = preg_replace('/[^a-z0-9\-]/', '', $modelSlug);

$pdfPath = __DIR__ . "/attachments/{$modelSlug}.pdf";

$subject = "Details from VIKAH ECOTECH for Model No " . strtoupper($model);

$customerBody = "
<div style='font-family: Arial'>
<p><strong>Thanks for showing your interest in our machinery and services.</strong></p>

<p>We consider you as our utmost priority and will get back to you soon.</p>

<p><strong>Model:</strong> ".strtoupper($model)."</p>

<p>
For more information call us at <strong>8886789356</strong>
or email <strong>sales@vikahecotech.com</strong>
</p>
</div>
";

try {

    // CUSTOMER EMAIL
    $customerMail = new PHPMailer(true);

    $customerMail->isSMTP();
    $customerMail->Host = "smtp.hostinger.com";
    $customerMail->SMTPAuth = true;
    $customerMail->Username = "support@vikahecotech.com";
    $customerMail->Password = "Vikahecotech@123";
    $customerMail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $customerMail->Port = 465;

    $customerMail->setFrom("support@vikahecotech.com","VIKAH ECOTECH");
    $customerMail->addAddress($email);

    if(file_exists($pdfPath)){
        $customerMail->addAttachment($pdfPath);
    }

    $customerMail->isHTML(true);
    $customerMail->Subject = $subject;
    $customerMail->Body = $customerBody;

    $customerMail->send();

    // ADMIN EMAIL
    $adminBody = "
    <h3>New Enquiry Received</h3>

    <p><strong>Name:</strong> $name</p>
    <p><strong>Company:</strong> $company</p>
    <p><strong>Machinery:</strong> $machinery</p>
    <p><strong>Model:</strong> $model</p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Website:</strong> $website</p>
    <p><strong>Phone:</strong> $phone</p>
    <p><strong>Address:</strong> $address</p>
    <p><strong>City:</strong> $city</p>
    <p><strong>Country:</strong> $country</p>
    <p><strong>Message:</strong> $messageText</p>
    ";

    $adminMail = new PHPMailer(true);

    $adminMail->isSMTP();
    $adminMail->Host = "smtp.hostinger.com";
    $adminMail->SMTPAuth = true;
    $adminMail->Username = "sales@vikahecotech.com";
    $adminMail->Password = "Vikahecotech@123";
    $adminMail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $adminMail->Port = 465;

    $adminMail->setFrom("sales@vikahecotech.com","VIKAH ECOTECH");
    $adminMail->addAddress("support@vikahecotech.com");

    $adminMail->isHTML(true);
    $adminMail->Subject = "New Enquiry: ".strtoupper($model);
    $adminMail->Body = $adminBody;

    $adminMail->send();

    echo json_encode([
        "success"=>true,
        "message"=>"Thanks for sending enquiry. One of our executives will contact you."
    ]);

}
catch (Exception $e){

    echo json_encode([
        "success"=>false,
        "error"=>$e->getMessage()
    ]);
}