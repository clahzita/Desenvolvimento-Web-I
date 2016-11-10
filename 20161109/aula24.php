<!DOCTYPE html>
<html>
	<head><meta charset="ISO8859-1">
	<title>Exemplo Form HTML+PHP</title>
</head>

<body>
	<?php
		$nome = $_REQUEST["campo_nome"];
		$idade = $_REQUEST["idade"];
		$email = $_REQUEST["email"];
		$sexo = $_REQUEST["sexo"];
	?>

	Nome:  <?echo $nome ?> <br />
	Idade:  <?echo $idade ?><br />
	E-mail:  <?echo $email ?><br />
	Sexo: Feminino <?echo $sexo ?><br />


</body>
</html>