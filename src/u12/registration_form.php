<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];

    // Prepares the data to be saved
    $data = "Vorname: $firstname, Nachname: $lastname\n";

    // Specifies the file path where you want to save the data
    $file = "registration_data.txt";

    // Opens the file in append mode and write the data
    // You may want to handle errors and file locking for concurrency control
    file_put_contents($file, $data, FILE_APPEND);

    // Optional: Redirects the user to another page after form submission
    // header("Location: thank_you_page.php");
    // exit; // Makes sure to exit to prevent further script execution
}
?>
