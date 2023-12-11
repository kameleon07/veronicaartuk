<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    $recipient_email = "xiameleon07@gmail.com";  // Replace with your email address

    $headers = "From: $name <$email>";

    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Subject: $subject\n\n";
    $email_body .= "Message:\n$message";

    // Send email
    mail($recipient_email, $subject, $email_body, $headers);

    // You can customize the response messages below
    echo "success";
} else {
    echo "error";
}
?>