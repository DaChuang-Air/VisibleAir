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
 <!--d3实现css-->
  <link type="text/css" rel="stylesheet" href="d3_css/data_analysisi_stack.css">
  <link type="text/css" rel="stylesheet" href="d3_css/data_analysisi_map_aqi.css">
  <link rel="stylesheet" href="d3_css/testPopulationAQI.css">
  <!--d3实现css结束-->
    <script type="text/javascript" src="js/d3.js"></script>
  <script type="text/javascript" src="js/d3.v3.min.js"></script>
    <script type="text/javascript" src="js/d3.tip.v0.6.3.js"></script>
<!--<script src="d3/d3.v3.js"></script>
<script src="js/d3.tip.v0.6.3.js"></script>-->

</head>

<body>

<?php

require_once("functions/header.php");
require_once('functions/f_bottomCssjs.php');
require_once('functions/f_dataAnalyse.php');



$str =  get_header().get_dataAnalyse().get_bottomCssjs();
echo "{$str}";


?>

<!-- <script type="text/javascript" src="js/d3.v3.min.js"></script>
  <script type="text/javascript" src="js/d3.tip.v0.6.3.js"></script>-->
  <script type="text/javascript" src="js/data_analysisi_stack.js"></script>
  
<!--  <script type="text/javascript" src="js/d3.js"></script>
  <script type="text/javascript" src="js/d3.v3.min.js"></script>
    <script type="text/javascript" src="js/d3.tip.v0.6.3.js"></script>-->
    <script type="text/javascript" src="js/data_analysisi_map_aqi.js"></script>
    
    <script type="text/javascript" src="js/testPopulationAQI.js"></script>


</body>
</html>