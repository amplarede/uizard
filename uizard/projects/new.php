<?

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
		
	copy("../conf/apiKeys.xml", "./".$projectname."/apiKeys.xml") ;
	copy("../conf/project.xml", "./".$projectname."/project.xml") ;
	copy("../conf/css/default.css", "./".$projectname."/".$projectname.".css") ;
	copy("../php/xmlProxy.php", "./".$projectname."/xmlProxy.php");
	copy("../lib/js/stdfunc.js", "./".$projectname."/stdfunc.js") ;

	echo "New Project is Generated Successfully...";
	echo "<script>location.href='../uizard.php?action=load&projectDir=".$projectname."';</script>";
}
else {
	echo "Error (".$_POST['inputProjectAuthor'].", ".$_POST['inputProjectName'].")";
}

?>