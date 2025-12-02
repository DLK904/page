<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "daniel.karpov24@gmail.com"; // Deine E-Mail-Adresse hier eintragen
    $subject = "Neue Nachricht von " . $_POST["full_name"];
    
    $message = "Name: " . $_POST["full_name"] . "\n";
    $message .= "E-Mail: " . $_POST["email"] . "\n";
    $message .= "Telefon: " . $_POST["phone"] . "\n";
    $message .= "Betreff: " . $_POST["subject"] . "\n\n";
    $message .= "Nachricht:\n" . $_POST["message"] . "\n";

    $headers = "From: " . $_POST["email"] . "\r\n" .
               "Reply-To: " . $_POST["email"] . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Die Nachricht wurde erfolgreich gesendet!";
    } else {
        echo "Fehler beim Senden der Nachricht.";
    }
} else {
    echo "Ungültige Anfrage.";
}
?>