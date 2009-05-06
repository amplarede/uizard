<?

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

include('../php/pclzip.lib.php');

$zipfile = new PclZip($_POST['projectDir'].'.zip');

if($_POST['chkboxIncludeHTMLFile']) {
	$create = $zipfile->create($_POST['projectDir']."/".$_POST['projectDir'].".html"); 
}
if($_POST['chkboxIncludeJSFile']) {
	$create = $zipfile->add($_POST['projectDir']."/".$_POST['projectDir'].".js"); 
}
if($_POST['chkboxIncludeStdFuncFile']) {
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