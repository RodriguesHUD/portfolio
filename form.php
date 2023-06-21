<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  $nome = $_GET["nome"];
  $email = $_GET["email"];
  $descricao = $_GET["description"];

  $to = "hudsondelimarodrigues@hotmail.com";
  $subject = "Novo formulário enviado";
  $message = "Nome: " . $nome . "\n";
  $message .= "Email: " . $email . "\n";
  $message .= "Descrição: " . $descricao . "\n";

  // Enviar e-mail
  mail($to, $subject, $message);

//   // Redirecionar para uma página de sucesso
//   header("Location: obrigado.html");
//   exit();
}
?>
