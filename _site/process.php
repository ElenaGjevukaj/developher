<?php

if(isset($_POST['email'])){

  // Subject and Email Variables
    $emailSubject =  "Email from DevelopHer website";
    $webMaster = "ereblinahasani@gmail.com";

  // Gathering data Variables
    $emailField = $_POST['email'];
    $nameField = $_POST['name'];
    $messageFiled = $_POST['message'];

    $body = <<<EOD<br><hr><br>Email: $emailField <br>Name: $nameField <br>Message: $messageFiled <br>EOD;

    $headers = "From: $emailField\r\n";
    $headers .= "Content-type: text/html\r\n";
    $success = mail($webMaster, $emailSubject, $body, $headers);

  // result renderd as html
    header("Location: index.html");
    die();


} else {
  die('This dosent work');
}

?>
