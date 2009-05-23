<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

header("Content-Type:text/xml");

include("xmlClass.php");

//LOAD PROJECT SETTING
if($_GET['mode'] == "load") {
	$xml = new uizXmlClass;
	$prt = $xml->xmlOpen("../projects/".$_GET['projectName']."/project.xml",'project'); 
	
	$xmlOutput = "<?xml version=\"1.0\"?>\n";
	$xmlOutput .= "<projectSet xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"urn:yahoo:lcl\" xsi:schemaLocation=\"urn:yahoo:lcl http://api.local.yahoo.com/LocalSearchService/V2/LocalSearchResponse.xsd\" totalprojectsAvailable=\"1\" totalprojectsReturned=\"1\" firstprojectPosition=\"1\">\n";
	$xmlOutput .= "\t<project>\n";
	
	$xmlOutput .= "\t\t<title>".$prt['title'][0]['value']."</title>\n";
	$xmlOutput .= "\t\t<owner>".$prt['owner'][0]['value']."</owner>\n";
	$xmlOutput .= "\t\t<description>".$prt['description'][0]['value']."</description>\n";
	$xmlOutput .= "\t\t<gridSize>".$prt['gridSize'][0]['value']."</gridSize>\n";
	$xmlOutput .= "\t\t<gridOpacity>".$prt['gridOpacity'][0]['value']."</gridOpacity>\n";
	$xmlOutput .= "\t\t<objectSelection>".$prt['objectSelection'][0]['value']."</objectSelection>\n";
	$xmlOutput .= "\t\t<objectFill>".$prt['objectFill'][0]['value']."</objectFill>\n";
	$xmlOutput .= "\t\t<resizeHandle>".$prt['resizeHandle'][0]['value']."</resizeHandle>\n";
	$xmlOutput .= "\t\t<resizeProxy>".$prt['resizeProxy'][0]['value']."</resizeProxy>\n";
	$xmlOutput .= "\t\t<dragProxy>".$prt['dragProxy'][0]['value']."</dragProxy>\n";
	$xmlOutput .= "\t\t<font>".$prt['font'][0]['value']."</font>\n";
	$xmlOutput .= "\t\t<lineSpacing>".$prt['lineSpacing'][0]['value']."</lineSpacing>\n";
	$xmlOutput .= "\t\t<debuggerFireBug>".$prt['debuggerFireBug'][0]['value']."</debuggerFireBug>\n";
	$xmlOutput .= "\t\t<YUI>".$prt['YUI'][0]['value']."</YUI>\n";
	$xmlOutput .= "\t\t<Prototype>".$prt['Prototype'][0]['value']."</Prototype>\n";
	$xmlOutput .= "\t\t<jQuery>".$prt['jQuery'][0]['value']."</jQuery>\n";
	$xmlOutput .= "\t\t<MooTools>".$prt['MooTools'][0]['value']."</MooTools>\n";
	$xmlOutput .= "\t\t<Dojo>".$prt['Dojo'][0]['value']."</Dojo>\n";
//	$xmlOutput .= "\t\t<Jindo>".$prt['Jindo'][0]['value']."</Jindo>\n";
	$xmlOutput .= "\t\t<SWFObject>".$prt['SWFObject'][0]['value']."</SWFObject>\n";
	
	$xmlOutput .= "\t</project>\n";
	$xmlOutput .= "</projectSet>\n";	
	
	echo $xmlOutput;	
}
//SAVE PROJECT SETTING
else if($_GET['mode'] == "save") {
	$xmlOutput = "<?xml version=\"1.0\"?>\n";
	$xmlOutput .= "<projectSet xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"urn:yahoo:lcl\" xsi:schemaLocation=\"urn:yahoo:lcl http://api.local.yahoo.com/LocalSearchService/V2/LocalSearchResponse.xsd\" totalprojectsAvailable=\"1\" totalprojectsReturned=\"1\" firstprojectPosition=\"1\">\n";
	$xmlOutput .= "\t<project>\n";
	
	$xmlOutput .= "\t\t<title>".$_GET['title']."</title>\n";
	$xmlOutput .= "\t\t<owner>".$_GET['owner']."</owner>\n";
	$xmlOutput .= "\t\t<description>".$_GET['description']."</description>\n";
	$xmlOutput .= "\t\t<gridSize>".$_GET['gridSize']."</gridSize>\n";
	$xmlOutput .= "\t\t<gridOpacity>".$_GET['gridOpacity']."</gridOpacity>\n";
	$xmlOutput .= "\t\t<objectSelection>".$_GET['objectSelection']."</objectSelection>\n";
	$xmlOutput .= "\t\t<objectFill>".$_GET['objectFill']."</objectFill>\n";
	$xmlOutput .= "\t\t<resizeHandle>".$_GET['resizeHandle']."</resizeHandle>\n";
	$xmlOutput .= "\t\t<resizeProxy>".$_GET['resizeProxy']."</resizeProxy>\n";
	$xmlOutput .= "\t\t<dragProxy>".$_GET['dragProxy']."</dragProxy>\n";
	$xmlOutput .= "\t\t<font>".$_GET['font']."</font>\n";
	$xmlOutput .= "\t\t<lineSpacing>".$_GET['lineSpacing']."</lineSpacing>\n";
	$xmlOutput .= "\t\t<debuggerFireBug>".$_GET['debuggerFireBug']."</debuggerFireBug>\n";
	$xmlOutput .= "\t\t<YUI>".$_GET['YUI']."</YUI>\n";
	$xmlOutput .= "\t\t<Prototype>".$_GET['Prototype']."</Prototype>\n";
	$xmlOutput .= "\t\t<jQuery>".$_GET['jQuery']."</jQuery>\n";
	$xmlOutput .= "\t\t<MooTools>".$_GET['MooTools']."</MooTools>\n";
	$xmlOutput .= "\t\t<Dojo>".$_GET['Dojo']."</Dojo>\n";
//	$xmlOutput .= "\t\t<Jindo>".$_GET['Jindo']."</Jindo>\n";
	$xmlOutput .= "\t\t<SWFObject>".$_GET['SWFObject']."</SWFObject>\n";
	
	$xmlOutput .= "\t</project>\n";
	$xmlOutput .= "</projectSet>\n";	
	
	$fp = fopen("../projects/".$_GET['projectName']."/project.xml", "w");
	fwrite($fp, $xmlOutput);
	fclose($fp);
	
	echo $xmlOutput;
}

?>
