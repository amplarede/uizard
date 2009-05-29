<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

if($_POST['inputProjectAuthor'] != "" && $_POST['inputProjectName'] != "") {
	$projectname = $_POST['inputProjectAuthor']."_".$_POST['inputProjectName'];
	
	if(!is_dir("./".$projectname)) {
		mkdir("./".$projectname);
	}	
	
	$fp = fopen("./".$projectname."/objProperties.xml", "w");
	fwrite($fp, "");
	fclose($fp);
		
	copy("../config/apiKeys.xml", "./".$projectname."/apiKeys.xml");
	copy("../config/project.xml", "./".$projectname."/project.xml");
	copy("../config/template/".$_POST['inputProjectTemplateFile'], "./".$projectname."/template.xml");
	copy("../config/css/default.css", "./".$projectname."/".$projectname.".css") ;
	copy("../php/xmlProxy.php", "./".$projectname."/xmlProxy.php");
	copy("../js/stdfunc.js", "./".$projectname."/stdfunc.js") ;

	echo "New Project is Successfully Generated...";
	echo "<script>location.href='../uizard.php?action=load&width=".$_POST['inputProjectWidth']."&height=".$_POST['inputProjectHeight']."&projectDir=".$projectname."';</script>";
}
else {
	echo "Error (".$_POST['inputProjectAuthor'].", ".$_POST['inputProjectName'].")";
}

?>