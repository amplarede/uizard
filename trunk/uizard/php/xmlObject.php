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
if($_GET['objNo'] != "")
{
	$xml = new uizXmlClass; 
	$prt = $xml->xmlOpen("../projects/".$_GET['projectName']."/objProperties.xml",'object'); 

	$count = count($prt['object']);
	
	if($_GET['objNo'] > ($count-1)) $count++;

	$xmlOutput = "<?xml version=\"1.0\"?>\n";
	$xmlOutput .= "<objectSet xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"urn:yahoo:lcl\" xsi:schemaLocation=\"urn:yahoo:lcl http://api.local.yahoo.com/LocalSearchService/V2/LocalSearchResponse.xsd\" totalobjectsAvailable=\"".$count."\" totalobjectsReturned=\"".$count."\" firstobjectPosition=\"1\">\n";
	
	for($i=0; $i<$count; $i++) {
		
		if($i == $_GET['objNo']) {
			$prt['object-id'][$i]['value'] = "object".$_GET['objNo'];
			$prt['type'][$i]['value'] = $_GET['type'];
			$prt['x'][$i]['value'] = $_GET['x'];
			$prt['y'][$i]['value'] = $_GET['y'];
			$prt['z-index'][$i]['value'] = $_GET['z-index'];
			$prt['width'][$i]['value'] = $_GET['width'];
			$prt['height'][$i]['value'] = $_GET['height'];
			$prt['align'][$i]['value'] = $_GET['align'];
			$prt['visibility'][$i]['value'] = $_GET['visibility'];			
			//pushButton | checkboxButton
			$prt['label'][$i]['value'] = $_GET['label'];
			$prt['disabled'][$i]['value'] = $_GET['disabled'];
			$prt['tabindex'][$i]['value'] = $_GET['tabindex'];
			//autoComplete | dataTable
			$prt['datasourceNo'][$i]['value'] = $_GET['datasourceNo'];
			//dataSource
			$prt['provider'][$i]['value'] = $_GET['provider'];
			$prt['datasourceURL'][$i]['value'] = $_GET['datasourceURL'];
			$prt['datasourceType'][$i]['value'] = $_GET['datasourceType'];
			$prt['resultNode'][$i]['value'] = $_GET['resultNode'];
			$prt['query'][$i]['value'] = $_GET['query'];
			//dataSource | dataTable
			$prt['fields'][$i]['value'] = $_GET['fields'];
			//dataTable
			$prt['columnWidth'][$i]['value'] = $_GET['columnWidth'];
			$prt['paginator'][$i]['value'] = $_GET['paginator'];
			$prt['rowsPerPage'][$i]['value'] = $_GET['rowsPerPage'];
			//tabView
			$prt['tabcount'][$i]['value'] = $_GET['tabcount'];
			//image | googleChart
			$prt['src'][$i]['value'] = $_GET['src'];
			$prt['src'][$i]['value'] = str_replace("!and", "&", $prt['src'][$i]['value']);
			//form
			$prt['action'][$i]['value'] = $_GET['action'];
			$prt['action'][$i]['value'] = str_replace("!and", "&", $prt['action'][$i]['value']);			
			$prt['method'][$i]['value'] = $_GET['method'];
			$prt['target'][$i]['value'] = $_GET['target'];
			//inputBox
			$prt['value'][$i]['value'] = $_GET['value'];
			//div
			$prt['backgroundColor'][$i]['value'] = $_GET['backgroundColor'];
			//radioButton
			$prt['buttoncount'][$i]['value'] = $_GET['buttoncount'];
			//panel
			$prt['closebutton'][$i]['value'] = $_GET['closebutton'];
			$prt['draggable'][$i]['value'] = $_GET['draggable'];
			//timer
			$prt['interval'][$i]['value'] = $_GET['interval'];
			
			//code
			$prt['code'][$i]['value'] = $_GET['code'];
			$prt['code'][$i]['value'] = str_replace("!nl", "\n", $prt['code'][$i]['value']);
			$prt['code'][$i]['value'] = str_replace("!and", "&", $prt['code'][$i]['value']);
			$prt['code'][$i]['value'] = str_replace("!plus", "+", $prt['code'][$i]['value']);
			//html
			$prt['html'][$i]['value'] = $_GET['html'];
			$prt['html'][$i]['value'] = str_replace("!nl", "\n", $prt['html'][$i]['value']);
			$prt['html'][$i]['value'] = str_replace("!and", "&", $prt['html'][$i]['value']);
			$prt['html'][$i]['value'] = str_replace("!plus", "+", $prt['html'][$i]['value']);			
		}
		
		$xmlOutput .= "\t<object>\n";
		
			$xmlOutput .= "\t\t<object-id>".$prt['object-id'][$i]['value']."</object-id>\n";
			$xmlOutput .= "\t\t<type>".$prt['type'][$i]['value']."</type>\n";
			$xmlOutput .= "\t\t<x>".$prt['x'][$i]['value']."</x>\n";
			$xmlOutput .= "\t\t<y>".$prt['y'][$i]['value']."</y>\n";
			$xmlOutput .= "\t\t<z-index>".$prt['z-index'][$i]['value']."</z-index>\n";
			$xmlOutput .= "\t\t<width>".$prt['width'][$i]['value']."</width>\n";
			$xmlOutput .= "\t\t<height>".$prt['height'][$i]['value']."</height>\n";
			$xmlOutput .= "\t\t<align>".$prt['align'][$i]['value']."</align>\n";			
			$xmlOutput .= "\t\t<visibility>".$prt['visibility'][$i]['value']."</visibility>\n";
			//pushButton | checkboxButton
			$xmlOutput .= "\t\t<label>".$prt['label'][$i]['value']."</label>\n";
			$xmlOutput .= "\t\t<disabled>".$prt['disabled'][$i]['value']."</disabled>\n";
			$xmlOutput .= "\t\t<tabindex>".$prt['tabindex'][$i]['value']."</tabindex>\n";
			//autoComplete | dataTable
			$xmlOutput .= "\t\t<datasourceNo>".$prt['datasourceNo'][$i]['value']."</datasourceNo>\n";
			//dataSource
			$xmlOutput .= "\t\t<provider>".$prt['provider'][$i]['value']."</provider>\n";
			$xmlOutput .= "\t\t<datasourceURL><![CDATA[".$prt['datasourceURL'][$i]['value']."]]></datasourceURL>\n";
			$xmlOutput .= "\t\t<datasourceType>".$prt['datasourceType'][$i]['value']."</datasourceType>\n";
			$xmlOutput .= "\t\t<resultNode>".$prt['resultNode'][$i]['value']."</resultNode>\n";
			$xmlOutput .= "\t\t<query><![CDATA[".$prt['query'][$i]['value']."]]></query>\n";
			//dataSource | dataTable
			$xmlOutput .= "\t\t<fields><![CDATA[".$prt['fields'][$i]['value']."]]></fields>\n";
			//dataTable
			$xmlOutput .= "\t\t<columnWidth><![CDATA[".$prt['columnWidth'][$i]['value']."]]></columnWidth>\n";
			$xmlOutput .= "\t\t<paginator><![CDATA[".$prt['paginator'][$i]['value']."]]></paginator>\n";
			$xmlOutput .= "\t\t<rowsPerPage><![CDATA[".$prt['rowsPerPage'][$i]['value']."]]></rowsPerPage>\n";			
			//tabView
			$xmlOutput .= "\t\t<tabcount>".$prt['tabcount'][$i]['value']."</tabcount>\n";
			//image | googleChart
			$xmlOutput .= "\t\t<src><![CDATA[".$prt['src'][$i]['value']."]]></src>\n";	
			//form
			$xmlOutput .= "\t\t<action><![CDATA[".$prt['action'][$i]['value']."]]></action>\n";				
			$xmlOutput .= "\t\t<method><![CDATA[".$prt['method'][$i]['value']."]]></method>\n";	
			$xmlOutput .= "\t\t<target><![CDATA[".$prt['target'][$i]['value']."]]></target>\n";				
			//inputBox
			$xmlOutput .= "\t\t<value><![CDATA[".$prt['value'][$i]['value']."]]></value>\n";
			//div
			$xmlOutput .= "\t\t<backgroundColor><![CDATA[".$prt['backgroundColor'][$i]['value']."]]></backgroundColor>\n";
			//radioButton
			$xmlOutput .= "\t\t<buttoncount>".$prt['buttoncount'][$i]['value']."</buttoncount>\n";
			//panel
			$xmlOutput .= "\t\t<closebutton>".$prt['closebutton'][$i]['value']."</closebutton>\n";
			$xmlOutput .= "\t\t<draggable>".$prt['draggable'][$i]['value']."</draggable>\n";
			//timer
			$xmlOutput .= "\t\t<interval>".$prt['interval'][$i]['value']."</interval>\n";
			
			//code
			$xmlOutput .= "\t\t<code><![CDATA[".$a.$prt['code'][$i]['value']."]]></code>\n";
			//html
			$xmlOutput .= "\t\t<html><![CDATA[".$a.$prt['html'][$i]['value']."]]></html>\n";			
		
		$xmlOutput .= "\t</object>\n";
	
	}
	$xmlOutput .= "</objectSet>\n";
	
	$fp = fopen("../projects/".$_GET['projectName']."/objProperties.xml", "w");
	fwrite($fp, $xmlOutput);
	fclose($fp);
	
	writeXML($_GET['objNo']);
}


///////////////////////////////////////////////////////////////////////////////////////////////
// PRINT XML FOR YUI DATATABLE
///////////////////////////////////////////////////////////////////////////////////////////////
function writeXML($No) {

	$xmlClass = new uizXmlClass; 
	$result = $xmlClass->xmlOpen("../projects/".$_GET['projectName']."/objProperties.xml",'object'); 
	
	header("Content-Type: text/xml; charset=utf-8");
	
	echo "<?xml version=\"1.0\"?>\n";
	echo "<propertySet xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"urn:yahoo:lcl\" xsi:schemaLocation=\"urn:yahoo:lcl http://api.local.yahoo.com/LocalSearchService/V2/LocalSearchResponse.xsd\" totalpropertysAvailable=\"1\" totalpropertysReturned=\"1\" firstpropertyPosition=\"1\">\n";
		echo "\t<property>\n";
		echo "\t\t<id>object-id</id>\n";
		echo "\t\t<value>".$result['object-id'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>type</id>\n";
		echo "\t\t<value>".$result['type'][$No]['value']."</value>\n";
		echo "\t</property>\n";		
	if($result['type'][$No]['value'] != "DATASOURCE" && $result['type'][$No]['value'] != "CANVAS") {		
		echo "\t<property>\n";
		echo "\t\t<id>x</id>\n";
		echo "\t\t<value>".$result['x'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>y</id>\n";
		echo "\t\t<value>".$result['y'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>z-index</id>\n";
		echo "\t\t<value>".$result['z-index'][$No]['value']."</value>\n";
		echo "\t</property>\n";	
	}
	if($result['type'][$No]['value'] != "DATASOURCE" ) {
		echo "\t<property>\n";
		echo "\t\t<id>width</id>\n";
		echo "\t\t<value>".$result['width'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>height</id>\n";
		echo "\t\t<value>".$result['height'][$No]['value']."</value>\n";
		echo "\t</property>\n";	
	}
	if($result['type'][$No]['value'] != "DATASOURCE" && $result['type'][$No]['value'] != "CANVAS") {
		echo "\t<property>\n";
		echo "\t\t<id>align</id>\n";
		echo "\t\t<value>".$result['align'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>visibility</id>\n";
		echo "\t\t<value>".$result['visibility'][$No]['value']."</value>\n";
		echo "\t</property>\n";
	}
	if($result['type'][$No]['value'] == "PUSHBUTTON" || $result['type'][$No]['value'] == "checkboxButton") {
		echo "\t<property>\n";
		echo "\t\t<id>label</id>\n";
		echo "\t\t<value>".$result['label'][$No]['value']."</value>\n";
		echo "\t</property>\n";	
		echo "\t<property>\n";
		echo "\t\t<id>disabled</id>\n";
		echo "\t\t<value>".$result['disabled'][$No]['value']."</value>\n";
		echo "\t</property>\n";	
		echo "\t<property>\n";
		echo "\t\t<id>tabindex</id>\n";
		echo "\t\t<value>".$result['tabindex'][$No]['value']."</value>\n";
		echo "\t</property>\n";		
	}
	if($result['type'][$No]['value'] == "AUTOCOMPLETE" || $result['type'][$No]['value'] == "DATATABLE") {
		echo "\t<property>\n";
		echo "\t\t<id>datasourceNo</id>\n";
		echo "\t\t<value>".$result['datasourceNo'][$No]['value']."</value>\n";
		echo "\t</property>\n";
	}
	if($result['type'][$No]['value'] == "DATASOURCE") {
		echo "\t<property>\n";
		echo "\t\t<id>provider</id>\n";
		echo "\t\t<value>".$result['provider'][$No]['value']."</value>\n";
		echo "\t</property>\n";		
		echo "\t<property>\n";
		echo "\t\t<id>datasourceURL</id>\n";
		echo "\t\t<value><![CDATA[".$result['datasourceURL'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>datasourceType</id>\n";
		echo "\t\t<value><![CDATA[".$result['datasourceType'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";	
		echo "\t<property>\n";
		echo "\t\t<id>resultNode</id>\n";
		echo "\t\t<value>".$result['resultNode'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>query</id>\n";
		echo "\t\t<value><![CDATA[".$result['query'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";	
	}
	if($result['type'][$No]['value'] == "DATASOURCE" || $result['type'][$No]['value'] == "DATATABLE") {
		echo "\t<property>\n";
		echo "\t\t<id>fields</id>\n";
		echo "\t\t<value><![CDATA[".$result['fields'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";			
	}	
	if($result['type'][$No]['value'] == "DATATABLE") {
		echo "\t<property>\n";
		echo "\t\t<id>columnWidth</id>\n";
		echo "\t\t<value>".$result['columnWidth'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>paginator</id>\n";
		echo "\t\t<value>".$result['paginator'][$No]['value']."</value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>rowsPerPage</id>\n";
		echo "\t\t<value>".$result['rowsPerPage'][$No]['value']."</value>\n";
		echo "\t</property>\n";		
	}
	if($result['type'][$No]['value'] == "TABVIEW") {
		echo "\t<property>\n";
		echo "\t\t<id>tabcount</id>\n";
		echo "\t\t<value>".$result['tabcount'][$No]['value']."</value>\n";
		echo "\t</property>\n";
	}
	if($result['type'][$No]['value'] == "IMAGE" || $result['type'][$No]['value'] == "GOOGLECHART" || $result['type'][$No]['value'] == "SWF" ) {
		echo "\t<property>\n";
		echo "\t\t<id>src</id>\n";
		echo "\t\t<value><![CDATA[".$result['src'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";
	}
	if($result['type'][$No]['value'] == "FORM") {
		echo "\t<property>\n";
		echo "\t\t<id>action</id>\n";
		echo "\t\t<value><![CDATA[".$result['action'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>method</id>\n";
		echo "\t\t<value><![CDATA[".$result['method'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";		
		echo "\t<property>\n";
		echo "\t\t<id>target</id>\n";
		echo "\t\t<value><![CDATA[".$result['target'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";			
	}	
	if($result['type'][$No]['value'] == "INPUTBOX") {
		echo "\t<property>\n";
		echo "\t\t<id>value</id>\n";
		echo "\t\t<value><![CDATA[".$result['value'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";
	}	
	if($result['type'][$No]['value'] == "CANVAS" || $result['type'][$No]['value'] == "DIV") {
		echo "\t<property>\n";
		echo "\t\t<id>backgroundColor</id>\n";
		echo "\t\t<value><![CDATA[".$result['backgroundColor'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";
	}
	if($result['type'][$No]['value'] == "RADIOBUTTON") {
		echo "\t<property>\n";
		echo "\t\t<id>buttoncount</id>\n";
		echo "\t\t<value><![CDATA[".$result['buttoncount'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";
	}
	if($result['type'][$No]['value'] == "PANEL") {
		echo "\t<property>\n";
		echo "\t\t<id>closebutton</id>\n";
		echo "\t\t<value><![CDATA[".$result['closebutton'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";
		echo "\t<property>\n";
		echo "\t\t<id>draggable</id>\n";
		echo "\t\t<value><![CDATA[".$result['draggable'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";		
	}	
	if($result['type'][$No]['value'] == "TIMER") {
		echo "\t<property>\n";
		echo "\t\t<id>interval</id>\n";
		echo "\t\t<value><![CDATA[".$result['interval'][$No]['value']."]]></value>\n";
		echo "\t</property>\n";		
	}		
	echo "</propertySet>\n";
}


?>