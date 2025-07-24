<?php
// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow CORS for frontend
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Minimal PHPMailer classes (built-in for basic usage)
class SimpleMailer {
    public $to = '';
    public $from = '';
    public $fromName = '';
    public $subject = '';
    public $body = '';
    public $attachmentPath = '';
    public $error = '';

    public function sendSMTP($smtpHost, $smtpUser, $smtpPass, $smtpPort = 587) {
        $boundary = md5(time());
        $headers = "From: {$this->fromName} <{$this->from}>\r\n";
        $headers .= "Reply-To: {$this->from}\r\n";
        $headers .= "MIME-Version: 1.0\r\n";

        if ($this->attachmentPath && file_exists($this->attachmentPath)) {
            $fileContent = chunk_split(base64_encode(file_get_contents($this->attachmentPath)));
            $filename = basename($this->attachmentPath);

            $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n\r\n";
            $message = "--{$boundary}\r\n";
            $message .= "Content-Type: text/html; charset=\"UTF-8\"\r\n";
            $message .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
            $message .= "{$this->body}\r\n\r\n";

            $message .= "--{$boundary}\r\n";
            $message .= "Content-Type: application/pdf; name=\"{$filename}\"\r\n";
            $message .= "Content-Transfer-Encoding: base64\r\n";
            $message .= "Content-Disposition: attachment; filename=\"{$filename}\"\r\n\r\n";
            $message .= "{$fileContent}\r\n";
            $message .= "--{$boundary}--";
        } else {
            $headers .= "Content-type: text/html; charset=UTF-8\r\n";
            $message = $this->body;
        }

        // Use mail() fallback as Hostinger may block SMTP without full access
        if (!mail($this->to, $this->subject, $message, $headers)) {
            $this->error = "Mail function failed.";
            return false;
        }
        return true;
    }
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'] ?? '';
    $company = $data['company'] ?? '';
    $machinery = $data['machinery'] ?? '';
    $model = strtolower($data['model'] ?? '');
    $email = $data['email'] ?? '';
    $website = $data['website'] ?? '';
    $phone = $data['phone'] ?? '';
    $address = $data['address'] ?? '';
    $city = $data['city'] ?? '';
    $country = $data['country'] ?? '';
    $message = $data['message'] ?? '';

    $modelPdf = __DIR__ . "/attachments/{$model}.pdf";
    $subject = "Details from Vikah Ecotech for Model No " . strtoupper($model);
    $htmlBody = "
        <div style='text-align: justify;'>
            <p><strong>Thanks for showing your interest in our machinery and services.</strong></p>
            <p>We consider you as our utmost priority and will get back to you as soon as possible.</p>
            <p><strong>Model:</strong> " . strtoupper($model) . "</p>
            <p>For any further information please call us on 8886789356 or Email us at sales@vikahecotech.com</p>
        </div>
    ";

    // Send to customer
    $customerMail = new SimpleMailer();
    $customerMail->to = $email;
    $customerMail->from = "support@vikahecotech.com";
    $customerMail->fromName = "VIKAH ECOTECH";
    $customerMail->subject = $subject;
    $customerMail->body = $htmlBody;
    $customerMail->attachmentPath = file_exists($modelPdf) ? $modelPdf : '';

    $customerSent = $customerMail->sendSMTP('', '', '');

    // Send to admin
    $adminBody = "
        <p>New enquiry received:</p>
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
        <p><strong>Message:</strong> $message</p>
    ";

    $adminMail = new SimpleMailer();
    $adminMail->to = "support@vikahecotech.com";
    $adminMail->from = "support@vikahecotech.com";
    $adminMail->fromName = "VIKAH ECOTECH";
    $adminMail->subject = "New Enquiry: $model";
    $adminMail->body = $adminBody;
    $adminMail->sendSMTP('', '', '');

    if ($customerSent) {
        echo "Thanks for sending enquiry. One of our executives will get back to you.";
    } else {
        echo "Failed to send email: " . $customerMail->error;
    }
} else {
    echo "Invalid request method.";
}
?>
