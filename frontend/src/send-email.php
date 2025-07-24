<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// SimpleMailer class
class SimpleMailer {
    public $to = '';
    public $from = '';
    public $fromName = '';
    public $subject = '';
    public $body = '';
    public $attachmentPath = '';
    public $error = '';

    public function sendSMTP($smtpHost = '', $smtpUser = '', $smtpPass = '', $smtpPort = 587) {
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

        if (!mail($this->to, $this->subject, $message, $headers)) {
            $this->error = "Mail function failed.";
            return false;
        }
        return true;
    }
}

// Handle only POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Sanitize and extract form data
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

    // Normalize model to match PDF filenames
    $modelSlug = strtolower(str_replace([' ', '&'], ['-', 'and'], $model));
    $modelSlug = preg_replace('/[^a-z0-9\-]/', '', $modelSlug); // remove special chars
    $pdfPath = __DIR__ . "/attachments/{$modelSlug}.pdf";

    $subject = "Details from VIKAH ECOTECH for Model No " . strtoupper($model);

    $htmlBody = "
        <div style='text-align: justify; font-family: Arial, sans-serif;'>
            <p><strong>Thanks for showing your interest in our machinery and services.</strong></p>
            <p>We consider you as our utmost priority and will get back to you as soon as possible.</p>
            <p><strong>Model:</strong> " . strtoupper($model) . "</p>
            <p>For any further information, please call us on <strong>8886789356</strong> or email us at <strong>sales@vikahecotech.com</strong>.</p>
        </div>
    ";

    // Email to customer
    $customerMail = new SimpleMailer();
    $customerMail->to = $email;
    $customerMail->from = "support@vikahecotech.com";
    $customerMail->fromName = "VIKAH ECOTECH";
    $customerMail->subject = $subject;
    $customerMail->body = $htmlBody;
    $customerMail->attachmentPath = file_exists($pdfPath) ? $pdfPath : '';

    $customerSent = $customerMail->sendSMTP();

    // Email to admin
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

    $adminMail = new SimpleMailer();
    $adminMail->to = "support@vikahecotech.com";
    $adminMail->from = "support@vikahecotech.com";
    $adminMail->fromName = "VIKAH ECOTECH";
    $adminMail->subject = "New Enquiry: " . strtoupper($model);
    $adminMail->body = $adminBody;
    $adminMail->sendSMTP();

    if ($customerSent) {
        echo "Thanks for sending enquiry. One of our executives will get back to you.";
    } else {
        echo "Failed to send email: " . $customerMail->error;
    }
} else {
    echo "Invalid request method.";
}
?>
