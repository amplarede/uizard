<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

if($_GET['projectNewDir']) {
	if(!is_dir($_GET['projectNewDir'])) {
		mkdir($_GET['projectNewDir']);
	}
	
	copy($_GET['projectDir']."/objProperties.xml", $_GET['projectNewDir']."/objProperties.xml") ;
	copy($_GET['projectDir']."/apiKeys.xml", $_GET['projectNewDir']."/apiKeys.xml") ;
	copy($_GET['projectDir']."/project.xml", $_GET['projectNewDir']."/project.xml") ;
	copy($_GET['projectDir']."/".$_GET['projectDir'].".html", $_GET['projectNewDir']."/".$_GET['projectNewDir'].".html") ;
	copy($_GET['projectDir']."/".$_GET['projectDir'].".js", $_GET['projectNewDir']."/".$_GET['projectNewDir'].".js") ;
	copy($_GET['projectDir']."/".$_GET['projectDir'].".css", $_GET['projectNewDir']."/".$_GET['projectNewDir'].".css") ;	
	
	echo "<b>".$_GET['projectNewDir']." is saved successfully.</b>";
	echo "<script>location.href='../uizard.php?action=load&projectDir=".$_GET['projectNewDir']."';</script>";	
}

?>