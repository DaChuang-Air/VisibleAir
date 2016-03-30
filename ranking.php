<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Xenon Boostrap Admin Panel" />

<meta name="author" content="" /> 
<title>天气可视化</title>

<!--空气质量排名d3实现所需链接-->
  <script src="js/jquery-1.10.2.js"></script>
    <script src="js/d3.js"></script>
    <script src="js/underscore-min.js"></script>
    <link href='//fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
    <link href="d3_css/font-awesome.min.css" rel="stylesheet">
    <link href="d3_css/rank_style.css" rel="stylesheet">
  <!--空气质量排名d3实现所需结束链接-->

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
require_once('functions/f_ranking.php');



$str =  get_header().get_ranking().get_bottomCssjs();
echo "{$str}";


?>


 <!--空气质量排名d3实现-->
  <script src="js/LineUpJS.js"></script>    
    <script>
    
        var config = { };
        var $container = d3.select("#lugui-wrapper");
        
        
        
        function createLineUp(desc, data) {
            return LineUp.create(
		LineUp.createLocalStorage(
			data, 
			desc.columns, 
			desc.layout, 
			desc.primaryKey), 
			
		$container, config);
        }
        $(function() {
        
            var lineup = null;
            //把data_minimal.json的数据给了desc，通过desc和点运算符号
            //可以访问json中的属性，例如：desc.file
            d3.json('data/data_air.json', 
                     function (desc) {
                		  //根据制表符分割的数据属性信息，放入—data
                		  d3.tsv('data/'+desc.file, function (_data) {
                    
                    lineup = createLineUp(desc, _data);
                });
            });
        })
    </script>
  <!--空气质量排名d3实现结束-->
    <script type="text/javascript">
    $(function(){
        $("#year").change(function(event) {
            /* Act on the event */
            var searchData = {};
            searchData["year"] = $("#year").val();
            console.log(searchData);
            $.post('/path/to/file', searchData, function(data, textStatus, xhr) {
                /*optional stuff to do after success */
            });

        });
    });
    </script>

</body>
</html>