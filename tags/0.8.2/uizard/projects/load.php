<?

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

$uploaddir = './';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);


if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {	
    include('../php/pclzip.lib.php');
	$zipfile = new PclZip($_FILES['userfile']['name']); 
	
	$extract = $zipfile->extract(PCLZIP_OPT_PATH, $_GET['projectDir'].'/'); 
	
	if(!empty($extract)) {
		echo $_GET['projectDir'].".uiz extracted successfully."; 
		echo "<script>location.href='../uizard.php?action=load&projectDir=".$_GET['projectDir']."';</script>";
	}
	else {
		echo "Failed to extract ".$_GET['projectDir'].".uiz";
	}
} 
else {
    print "There is a possibility to attack of file upload!\n";
}

?>