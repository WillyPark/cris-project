<?php

//TODO: Pal deployment hay que poner la URL del dominio pa que solo acepte de ahí
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $respuesta = array (
        "respuesta" => "correcto"
    );

    // $phpmailer = new PHPMailer();
    // $phpmailer->isSMTP();
    // $phpmailer->Host = 'sandbox.smtp.mailtrap.io';
    // $phpmailer->SMTPAuth = true;
    // $phpmailer->Port = 2525;
    // $phpmailer->Username = '8d538b01315eac';
    // $phpmailer->Password = 'f9584d3e2f82d5';

    //TODO: Checar como enviar el email viendo el proyecto de secundarias
    
    echo json_encode($_POST);
}