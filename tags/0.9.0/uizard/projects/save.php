<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

include('../lib/pclzip.lib.php');

$zipfile = new PclZip($_GET['projectDir'].'.uiz');

$create = $zipfile->create($_GET['projectDir']); 

if(!empty($create)) {
	echo "<b>".$_GET['projectDir'].".uiz is saved successfully.</b>";
	echo "<script>location.href='../uizard.php?action=load&projectDir=".$_GET['projectDir']."';</script>";
}
else {
	echo "Failed to save ".$_GET['projectDir'].".uiz";
}

?>