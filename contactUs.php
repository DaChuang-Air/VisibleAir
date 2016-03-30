<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Xenon Boostrap Admin Panel" />

<meta name="author" content="" /> 
<title>天气可视化</title>

<?php

require_once("functions/cssjs.php");
$str = get_cssjs();
echo "{$str}"

?>
</head>

<body>

<?php

require_once("functions/header.php");
require_once('functions/f_bottomCssjs.php');
require_once('functions/f_contactUs.php');



$str =  get_header().get_contactUs().get_bottomCssjs();
echo "{$str}";


?>

</body>
</html>