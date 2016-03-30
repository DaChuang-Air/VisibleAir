<?php

$param = $_POST['param'];
$year = $_POST['year'];
$month = $_POST['month'];
if($month=="5"){
if($param=="PM25")
copy("../data/j_datapm25.tsv","../data/j_data.tsv");
if($param=="O31H")
copy("../data/j_datao31.tsv","../data/j_data.tsv");
if($param=="O38H")
copy("../data/j_datao38.tsv","../data/j_data.tsv");
if($param=="AQI")
copy("../data/j_dataaqi.tsv","../data/j_data.tsv");
if($param=="PM10")
copy("../data/j_datapm10.tsv","../data/j_data.tsv");
if($param=="SO2")
copy("../data/j_dataso2.tsv","../data/j_data.tsv");
if($param=="CO")
copy("../data/j_dataco.tsv","../data/j_data.tsv");
}
else
{
if($param=="PM25")
copy("../data/sj_datapm25.tsv","../data/j_data.tsv");
if($param=="O31H")
copy("../data/sj_datao31.tsv","../data/j_data.tsv");
if($param=="O38H")
copy("../data/sj_datao38.tsv","../data/j_data.tsv");
if($param=="CO")
copy("../data/sj_dataco.tsv","../data/j_data.tsv");
if($param=="AQI")
copy("../data/sj_dataaqi.tsv","../data/j_data.tsv");
if($param=="PM10")
copy("../data/sj_datapm10.tsv","../data/j_data.tsv");
if($param=="SO2")
copy("../data/sj_dataso2.tsv","../data/j_data.tsv");
}

// //return status
// echo "_POST OK";

// //test
// $fp = fopen("test.txt","w");

// fwrite($fp,$param);
// fwrite($fp,$year);
// fwrite($fp,$month);


// fclose($fp);


?>