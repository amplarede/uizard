<?php

/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

include("xmlClass.php");


///////////////////////////////////////////////////////////////////////////////////////////////
// WRITE XML
///////////////////////////////////////////////////////////////////////////////////////////////
$xml = new uizXmlClass; 
$prt = $xml->xmlOpen("../projects/".$_GET['projectName']."/apiKeys.xml",'keySetting'); 

$xmlOutput = "<?xml version=\"1.0\"?>\n";
$xmlOutput .= "<objectSet xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"urn:yahoo:lcl\" xsi:schemaLocation=\"urn:yahoo:lcl http://api.local.yahoo.com/LocalSearchService/V2/LocalSearchResponse.xsd\" totalobjectsAvailable=\"1\" totalobjectsReturned=\"1\" firstobjectPosition=\"1\">\n";
	
	$xmlOutput .= "\t<keySetting>\n";
		
	if($_GET['GoogleMapAPI'] != "undefined" && $_GET['GoogleMapAPI'] != "null") {
		$xmlOutput .= "\t\t<GoogleMapAPI>".$_GET['GoogleMapAPI']."</GoogleMapAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<GoogleMapAPI>".$prt['GoogleMapAPI'][0]['value']."</GoogleMapAPI>\n";
	}
	if($_GET['YahooAPI'] != "undefined" && $_GET['YahooAPI'] != "null") {
		$xmlOutput .= "\t\t<YahooAPI>".$_GET['YahooAPI']."</YahooAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<YahooAPI>".$prt['YahooAPI'][0]['value']."</YahooAPI>\n";
	}	
	if($_GET['NaverDataAPI'] != "undefined" && $_GET['NaverDataAPI'] != "null") {
		$xmlOutput .= "\t\t<NaverDataAPI>".$_GET['NaverDataAPI']."</NaverDataAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<NaverDataAPI>".$prt['NaverDataAPI'][0]['value']."</NaverDataAPI>\n";
	}	
	if($_GET['NaverMapAPI'] != "undefined" && $_GET['NaverMapAPI'] != "null") {
		$xmlOutput .= "\t\t<NaverMapAPI>".$_GET['NaverMapAPI']."</NaverMapAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<NaverMapAPI>".$prt['NaverMapAPI'][0]['value']."</NaverMapAPI>\n";
	}
	if($_GET['DaumSearchAPI'] != "undefined" && $_GET['DaumSearchAPI'] != "null") {
		$xmlOutput .= "\t\t<DaumSearchAPI>".$_GET['DaumSearchAPI']."</DaumSearchAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<DaumSearchAPI>".$prt['DaumSearchAPI'][0]['value']."</DaumSearchAPI>\n";
	}
	if($_GET['DaumShoppingAPI'] != "undefined" && $_GET['DaumShoppingAPI'] != "null") {
		$xmlOutput .= "\t\t<DaumShoppingAPI>".$_GET['DaumShoppingAPI']."</DaumShoppingAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<DaumShoppingAPI>".$prt['DaumShoppingAPI'][0]['value']."</DaumShoppingAPI>\n";
	}	
	if($_GET['DaumRecommendAPI'] != "undefined" && $_GET['DaumRecommendAPI'] != "null") {
		$xmlOutput .= "\t\t<DaumRecommendAPI>".$_GET['DaumRecommendAPI']."</DaumRecommendAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<DaumRecommendAPI>".$prt['DaumRecommendAPI'][0]['value']."</DaumRecommendAPI>\n";
	}		
	if($_GET['DaumMapAPI'] != "undefined" && $_GET['DaumMapAPI'] != "null") {
		$xmlOutput .= "\t\t<DaumMapAPI>".$_GET['DaumMapAPI']."</DaumMapAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<DaumMapAPI>".$prt['DaumMapAPI'][0]['value']."</DaumMapAPI>\n";
	}
	if($_GET['LiveDataAPI'] != "undefined" && $_GET['LiveDataAPI'] != "null") {
		$xmlOutput .= "\t\t<LiveDataAPI>".$_GET['LiveDataAPI']."</LiveDataAPI>\n";
	}
	else {
		$xmlOutput .= "\t\t<LiveDataAPI>".$prt['LiveDataAPI'][0]['value']."</LiveDataAPI>\n";
	}	
	
	$xmlOutput .= "\t</keySetting>\n";

$xmlOutput .= "</objectSet>\n";
	
$fp = fopen("../projects/".$_GET['projectName']."/apiKeys.xml", "w");
fwrite($fp, $xmlOutput);
fclose($fp);
	

///////////////////////////////////////////////////////////////////////////////////////////////
// PRINT XML FOR YUI DATATABLE
///////////////////////////////////////////////////////////////////////////////////////////////
$xmlClass = new uizXmlClass; 
$result = $xmlClass->xmlOpen("../projects/".$_GET['projectName']."/apiKeys.xml",'keySetting'); 
	
header("Content-Type: text/xml; charset=utf-8");
	
echo "<?xml version=\"1.0\"?>\n";
echo "<keyvalueSet xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"urn:yahoo:lcl\" xsi:schemaLocation=\"urn:yahoo:lcl http://api.local.yahoo.com/LocalSearchService/V2/LocalSearchResponse.xsd\" totalkeyvaluesAvailable=\"1\" totalkeyvaluesReturned=\"1\" firstkeyvaluePosition=\"1\">\n";
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>GoogleMapAPI</apitype>\n";
	echo "\t\t<value>".$result['GoogleMapAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>YahooAPI</apitype>\n";
	echo "\t\t<value>".$result['YahooAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";		
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>NaverDataAPI</apitype>\n";
	echo "\t\t<value>".$result['NaverDataAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>NaverMapAPI</apitype>\n";
	echo "\t\t<value>".$result['NaverMapAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>DaumSearchAPI</apitype>\n";
	echo "\t\t<value>".$result['DaumSearchAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>DaumShoppingAPI</apitype>\n";
	echo "\t\t<value>".$result['DaumShoppingAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";	
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>DaumRecommendAPI</apitype>\n";
	echo "\t\t<value>".$result['DaumRecommendAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>DaumMapAPI</apitype>\n";
	echo "\t\t<value>".$result['DaumMapAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";
	echo "\t<keyvalue>\n";
	echo "\t\t<apitype>LiveDataAPI</apitype>\n";
	echo "\t\t<value>".$result['LiveDataAPI'][0]['value']."</value>\n";
	echo "\t</keyvalue>\n";
echo "</keyvalueSet>\n";

?>