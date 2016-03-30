<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Xenon Boostrap Admin Panel" />

<meta name="author" content="" /> 
<title>天气可视化</title>

<!--  d3的css样链接式-->
    <link type="text/css" rel="stylesheet" href="d3_css/index.css">
  <!--  d3的css样式结束-->

<?php

require_once("functions/cssjs.php");
$str = get_cssjs();
echo "{$str}"

?>

<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.2&services=true">  
    <!-- add baidu map api -->  
  </script> 
  
  <!--  d3实现所需的js文件链接-->
  <script type="text/javascript" src="d3/d3.v3.js"></script>
<script type="text/javascript" src="d3/d3.tip.v0.6.3.js"></script> 
<!--  d3实现所需的js文件结束链接-->

	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
   <style>
        #mapPlace { margin: 0 auto; width: 500px; height: 500px; }
        #mapPlace .icon { background: url(http://lbs.amap.com/console/public/show/marker.png) no-repeat; }
        #mapPlace .icon-cir { height: 31px; width: 28px; }
        #mapPlace .icon-cir-red { background-position: -11px -5px; }
    </style>
</head>
<body>

<?php

//header('Content-Type: application/x-javascript; charset=UTF-8'); 

require_once("functions/header.php");
require_once('functions/f_nowCityIndex.php');
require_once('functions/f_bottomCssjs.php');

$str = get_header().get_nowCityIndex().get_bottomCssjs();
echo "{$str}";
?>

</body>
</html>