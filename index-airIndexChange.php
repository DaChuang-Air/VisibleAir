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

<?php

require_once("functions/cssjs.php");
$str = get_cssjs();
echo "{$str}"

?>


</head>

<body>

<?php

require_once("functions/header.php");
require_once('functions/f_airIndexChange.php');
require_once('functions/f_bottomCssjs.php');


$str =  get_header().get_airIndexChange().get_bottomCssjs();
echo "{$str}";


?>



<script src="d3/d3.v3.js"></script>
<!-- d3所需的css样式与js文件结束-->
<!-- d3实现-->
  <script src="js/index_model2.js"></script>
<!-- d3实现结束-->
<script type="text/javascript" src="assets/js/jquery-1.11.1.min.js"></script>
<script type="text/javascript">

	$(".param-list").on('click', 'a', function(event) {
		event.preventDefault();
		console.log('click');
		searchData["param"]  = $(this).text();
		searchData["year"] = $("#year").val();	
		searchData["month"] = $("#month").val();
		var airIndexChangeData = {};
		airIndexChangeData["param"] = searchData["param"];
		airIndexChangeData["year"]  = searchData["year"];
		airIndexChangeData["month"]  = searchData["month"];

		var airIndexChangeDataStr = JSON.stringify(airIndexChangeData);
		localStorage.setItem("airIndexChangeData", airIndexChangeDataStr);

		console.log(searchData);
		$.post('/VisibleAir/response/index_r.php', searchData, function(data) {
			location.reload();
		});	
	});
	$("#year").change(function(event) {
		/* Act on the event */
		searchData["year"] = $("#year").val();
		searchData["month"] = $("#month").val();
		console.log(searchData);
		// saveData();
		var airIndexChangeData = {};
		airIndexChangeData["param"] = searchData["param"];
		airIndexChangeData["year"]  = searchData["year"];
		airIndexChangeData["month"]  = searchData["month"];

		var airIndexChangeDataStr = JSON.stringify(airIndexChangeData);
		localStorage.setItem("airIndexChangeData", airIndexChangeDataStr);

		console.log('year');
		$.post('/VisibleAir/response/index_r.php', searchData, function(data) {
			location.reload();
		});
	});
	$("#month").change(function(event) {
		/* Act on the event */
		console.log('month');
		searchData["year"] = $("#year").val();
		searchData["month"] = $("#month").val();
		// saveData();
		var airIndexChangeData = {};
		airIndexChangeData["param"] = searchData["param"];
		airIndexChangeData["year"]  = searchData["year"];
		airIndexChangeData["month"]  = searchData["month"];

		var airIndexChangeDataStr = JSON.stringify(airIndexChangeData);
		localStorage.setItem("airIndexChangeData", airIndexChangeDataStr);

		console.log(searchData);
		$.post('/VisibleAir/response/index_r.php', searchData, function(data) {
			location.reload();
		});
	});
	function saveData() {
		var airIndexChangeData = {};
		airIndexChangeData["param"] = searchData["param"];
		airIndexChangeData["year"]  = searchData["year"];
		airIndexChangeData["month"]  = searchData["month"];

		var airIndexChangeDataStr = JSON.stringify(airIndexChangeData);
		localStorage.setItem("airIndexChangeData", airIndexChangeDataStr);


	}
		var searchData = {}; 
	var airIndexChangeDataStr = localStorage.getItem("airIndexChangeData");
	var airIndexChangeData = JSON.parse(airIndexChangeDataStr);
	searchData["param"] = airIndexChangeData["param"];
	searchData["year"] = airIndexChangeData["year"];
	searchData["month"] = airIndexChangeData["month"];
	$("#year").val(searchData["year"]);
	$("#month").val(searchData["month"]); 

</script>
</body>
</html>