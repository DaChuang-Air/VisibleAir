<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Xenon Boostrap Admin Panel" />

<meta name="author" content="" /> 
<title>天气可视化</title>

<!-- d3所需的css样式与js文件-->
  <link href="d3_css/line.css" type="text/css" rel="stylesheet"/>
<script src="d3/d3.v3.js"></script>
 <link rel="stylesheet" type="text/css" href="d3_css/d3.parcoords.css">
<link rel="stylesheet" type="text/css" href="d3_css/style.css">
<!-- d3所需的css样式与js文件结束-->


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
require_once('functions/f_airQualityChange.php');



$str =  get_header().get_airQualityChange().get_bottomCssjs();
echo "{$str}";


?>

  
<!--d3实现所需的js文件链接-->  
  <script src="js/d3.min.js"></script>
<script src="js/d3.parcoords.js"></script>
<script src="js/divgrid.js"></script>
<script type="text/javascript" src="js/index_model3_parallel.js"></script>
<!--d3实现所需的js文件链接结束-->
<script type="text/javascript">
function displayYear(v){
	document.getElementById("grid").style.display = "none";
	
	}
</script>
<script type="text/javascript">
	$(function(){
		$("#param").on('click', 'button', function(event) {
			event.preventDefault();
			/* Act on the event */
			var searchData = {};
			searchData["param"] = $(this).text();
			console.log(searchData);
			$.post('/path/to/file', searchData, function(data) {
				/*optional stuff to do after success */
				location.reload();
			});
		});
	});
</script>

</body>
</html>