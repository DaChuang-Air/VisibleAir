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
<link type="text/css" rel="stylesheet" href="d3_css/mapPosition.css">
</head>

<body>

<?php

require_once("functions/header.php");
require_once('functions/f_mapPosition.php');
require_once('functions/f_bottomCssjs.php');



$str =  get_header().get_mapPosition().get_bottomCssjs();
echo "{$str}";



?>
<!-- d3实现-->
  <script type="text/javascript" src="d3/d3.v3.js"></script>
  <script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=11ac9c9fbd5961b67430944117b5fa92"></script>
  <script type="text/javascript" src="js/mapPositonMap.js"> </script>
  <script type="text/javascript" src="js/mapPositionClick.js"></script>
<!-- d3实现结束-->
</body>
</html>