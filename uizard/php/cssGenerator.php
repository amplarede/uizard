<?
/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

header('Content-type: text/css'); 

//CSS파일 읽기
if($_GET['mode'] == "load") {
	$filename = "../projects/".$_GET['projectName']."/".$_GET['projectName'].".css";
	$handle = fopen($filename, "r");
	$contents = fread($handle, filesize($filename));
	fclose($handle);
	
	echo $contents;	
}
//CSS파일 쓰기
else if($_GET['mode'] == "save") {
	$filename = "../projects/".$_GET['projectName']."/".$_GET['projectName'].".css";
	$handle = fopen($filename, "w");
	fwrite($handle, $_GET['cssContent']);
	fclose($handle);

	echo $_GET['cssContent'];	
}

?>
