<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $orgName = $_POST['orgName'];
    $service = $_POST['service'];
    $message = $_POST['message'];

    // DB connection
    $conn = mysqli_connect('localhost', 'root', '', 'chocoportfolio');

    if(isset($_POST['sendBtn'])){
        $sql = "INSERT INTO 'customer'('name') VALUE ('$name')";
        echo "insert success";
    }else{
        die("connection fail".mysqli_connection_error()) ;
    }

?>