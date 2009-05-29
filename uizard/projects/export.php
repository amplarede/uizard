<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

include('../lib/pclzip.lib.php');
include("../php/xmlClass.php");

$xmlTemplate	= new uizXmlClass; 
$template 		= $xmlTemplate->xmlOpen($_POST['projectDir']."/template.xml",'Template'); 

$Expansion	= $template['Expansion'][0]['value'];

$zipfile = new PclZip($_POST['projectDir'].'.zip');

if($_POST['chkboxIncludeHTMLFile']) {
	$create = $zipfile->create($_POST['projectDir']."/".$_POST['projectDir'].".".$Expansion); 
}
if($_POST['chkboxIncludeJSFile']) {
	if($_POST['chkboxCompressJSFile'])
		exec("java -classpath ../lib/ -jar ../lib/yuicompressor-2.4.2.jar ".$_POST['projectDir']."/".$_POST['projectDir'].".js"." -o ".$_POST['projectDir']."/".$_POST['projectDir'].".js");
	$create = $zipfile->add($_POST['projectDir']."/".$_POST['projectDir'].".js");
	$create = $zipfile->add($_POST['projectDir']."/stdfunc.js");
}
if($_POST['chkboxIncludeCSSFile']) {
	$create = $zipfile->add($_POST['projectDir']."/".$_POST['projectDir'].".css");
}
if($_POST['chkboxIncludePHPFile']) {
	$create = $zipfile->add($_POST['projectDir']."/xmlProxy.php");
}


if(!empty($create)) {
	header("Content-type: application/octet-stream");
	header("Content-disposition: attachment; filename=".$_POST['projectDir'].".zip");
	readfile($_POST['projectDir'].".zip");
}
else {
	echo "Failed to save ".$_POST['projectDir'].".zip";
}

?>