<?php 
$receiver = "davidtro2017@icloud.com";
$subject = "Thank you for joining our newsletter.";
$body = "A new blog will be emailed to you every sunday.
:)";
$sender = 'From:noahsolomon2003@gmail.com';

if(mail($receiver, $subject, $body, $sender)) { //php function send mail
    echo "Email sent successfully to $receiver!";
}
else {
    echo "Sorry, mail could not be sent";
}
?>