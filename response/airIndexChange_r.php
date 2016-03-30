<?php

$param = $_POST['param'];
$year = $_POST['year'];
$month = $_POST['month'];

//return status
echo "_POST OK";

//test
$fp = fopen("test.txt","w");

fwrite($fp,$param);
fwrite($fp,$year);
fwrite($fp,$month);


fclose($fp);


?>