<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);

    // Validate form data (add more validation if needed)
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    // Database configuration
    $servername = "localhost"; // Change this if your database is on a different server
    $username = "root";
    $password = ""; // Leave empty if no password is set
    $dbname = "virtucio_bikeshop";

    // Create database connection using prepared statement
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute SQL query to insert data using prepared statement
    $stmt = $conn->prepare("INSERT INTO contact_form_submissions (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo "Form submitted successfully!";
    } else {
        echo "Error submitting form. Please try again later.";
    }

    // Close the prepared statement and the database connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
