<?php
/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

include("xmlClass.php");
include("generatingFunc.php");

$dirLib = "../lib/";

$xmlProject		= new uizXmlClass; 
$project 		= $xmlProject->xmlOpen("../projects/".$_GET['projectName']."/project.xml",'project'); 

$projectName	= $_GET['projectName'];
$projectTitle	= $project['title'][0]['value'];
$projectAuthor	= $project['owner'][0]['value'];

$xmlTemplate	= new uizXmlClass; 
$template 		= $xmlTemplate->xmlOpen("../projects/".$_GET['projectName']."/template.xml",'Template'); 

$Expansion	= $template['Expansion'][0]['value'];
$Header		= $template['Header'][0]['value'];
$Body		= $template['Body'][0]['value'];
$Footer		= $template['Footer'][0]['value'];

$codedata = "";

$cssfiles = "
<!-- CSS : YAHOO USER INTERFACE LIBRARY -->
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/resize/assets/skins/sam/resize.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/layout/assets/skins/sam/layout.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/reset/reset.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/fonts/fonts.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/container/assets/skins/sam/container.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/tabview/assets/skins/sam/tabview.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/button/assets/skins/sam/button.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/colorpicker/assets/skins/sam/colorpicker.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/datatable/assets/skins/sam/datatable.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/editor/assets/skins/sam/simpleeditor.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/autocomplete/assets/skins/sam/autocomplete.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/calendar/assets/skins/sam/calendar.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/treeview/assets/skins/sam/treeview.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/slider/assets/skins/sam/slider.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/paginator/assets/skins/sam/paginator.css\" />
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://yui.yahooapis.com/2.7.0/build/menu/assets/skins/sam/menu.css\" />
";


$xmlAPIKey = new uizXmlClass; 
$apiKey = $xmlAPIKey->xmlOpen("../projects/".$_GET['projectName']."/apiKeys.xml",'keySetting'); 

$keyDaumMap = $apiKey['DaumDataAPI'][0]['value'];
$keyGoogleMap = $apiKey['GoogleMapAPI'][0]['value'];
$keyNaverMap = $apiKey['NaverMapAPI'][0]['value'];
$keyLiveMap = $apiKey['LiveMapAPI'][0]['value'];
$keyYahooAPI = $apiKey['YahooAPI'][0]['value'];
$keyNaverDataAPI = $apiKey['NaverDataAPI'][0]['value'];
$keyDaumSearchAPI = $apiKey['DaumSearchAPI'][0]['value'];
$keyDaumShoppingAPI = $apiKey['DaumShoppingAPI'][0]['value'];
$keyDaumRecommendAPI = $apiKey['DaumRecommendAPI'][0]['value'];

$jsfiles = "
<!-- JS : GOOGLE MAP -->
<script type=\"text/javascript\" src=\"http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAnxp9-CxpjSEUiYZNuqxVfxR_0InGTL-Nzc80coSUi8WNryh4LRRsXN1hieBp1JgRZTLsocZFCUvQdQ\" charset=\"utf-8\"></script>

<!-- JS : DAUM MAP -->
<script type=\"text/javascript\" src=\"http://apis.daum.net/maps/maps.js?apikey=26ddf6fa25d3ae044759c779c02d7df6bed2195a\"></script>

<!-- JS : NAVER MAP -->
<script type=\"text/javascript\" src=\"http://maps.naver.com/js/naverMap.naver?key=016200523a6f4851d55ae4ea563f4a1e\"></script>

<!-- JS : LIVE MAP -->
<script type=\"text/javascript\" src=\"http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=6.2\"></script>

<!-- JS : YAHOO USER INTERFACE LIBRARY -->
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/yahoo/yahoo-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/event/event-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/dom/dom-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/yahoo/yahoo.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/event/event.js\" ></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/dom/dom.js\" ></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/datasource/datasource-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/element/element-beta-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/animation/animation-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/yahoo-dom-event/yahoo-dom-event.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/get/get-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/utilities/utilities.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/slider/slider-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/connection/connection-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/animation/animation-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/json/json-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/dragdrop/dragdrop-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/resize/resize-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/layout/layout-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/button/button-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/colorpicker/colorpicker-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/tabview/tabview-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/container/container-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/menu/menu.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/autocomplete/autocomplete-min.js\"></script> 
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/yuiloader/yuiloader.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/datatable/datatable-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/editor/editor-min.js\"></script> 
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/editor/simpleeditor-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/calendar/calendar.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/treeview/treeview.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/charts/charts-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/paginator/paginator-min.js\"></script>
<script type=\"text/javascript\" src=\"http://yui.yahooapis.com/2.7.0/build/assets/js/data.js\"></script>
";

$xmlProjectSetting = new uizXmlClass; 
$projectSetting = $xmlProjectSetting->xmlOpen("../projects/".$_GET['projectName']."/project.xml",'project');

if($projectSetting['Prototype'][0]['value'] == "true") {
$jsfiles .= "
<!-- JS : PROTOTYPE -->
<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/prototype/1.6.0.3/prototype.js\"></script>
";
}
if($projectSetting['jQuery'][0]['value'] == "true") {
$jsfiles .= "
<!-- JS : JQUERY -->
<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js\"></script>
";
}
if($projectSetting['MooTools'][0]['value'] == "true") {
$jsfiles .= "
<!-- JS : MOOTOOLS -->
<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/mootools/1.2.2/mootools-yui-compressed.js\"></script>
";
}
if($projectSetting['Dojo'][0]['value'] == "true") {
$jsfiles .= "
<!-- JS : DOJO -->
<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/dojo/1.3.1/dojo/dojo.xd.js\"></script>
";
}
if($projectSetting['SWFObject'][0]['value'] == "true") {
$jsfiles .= "
<!-- JS : SWFOBJECT -->
<script type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/swfobject/2.1/swfobject.js\"></script>
";
}
if($projectSetting['debuggerFireBug'][0]['value'] == "true") {
$jsfiles .= "
<!-- JS : FIREBUG -->
<script type=\"text/javascript\" src=\"http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js\"></script>
";
}

$jsfiles .= "
<!-- JS : UIZARD -->
<script type=\"text/javascript\" src=\"http://uizard.org/UIzard/projects/".$_GET['projectName']."/stdfunc.js\"></script>
";

$cssfiles .= "
<!-- CSS : UIZARD -->
<link rel=\"stylesheet\" type=\"text/css\" href=\"http://uizard.org/UIzard/projects/".$_GET['projectName']."/".$_GET['projectName'].".css\" />
";

$cssfiles_dynamically = "
<script>
";

$cssfiles_dynamically .= str_replace("\" />", "\" />';", str_replace("<link", "document.getElementsByTagName('head')[0].innerHTML += '<link", $cssfiles));

$cssfiles_dynamically .= "

alert(document.getElementsByTagName('head')[0].innerHTML);
</script>
";


$Header	=  str_replace("{!ProjectName!}", 			$projectName, 				stripslashes($Header));
$Header	=  str_replace("{!ProjectTitle!}", 			$projectTitle, 				stripslashes($Header));
$Header	=  str_replace("{!ProjectAuthor!}",	 		$projectAuthor, 			stripslashes($Header));
$Header	=  str_replace("{!CDATASTART!}", 			"<![CDATA[", 				stripslashes($Header));
$Header	=  str_replace("{!CDATAEND!}", 				"]]>", 						stripslashes($Header));
$Header	=  str_replace("{!CSSFILES_DYNAMICALLY!}",	$cssfiles_dynamically,		stripslashes($Header));
$Header	=  str_replace("{!CSSFILES!}", 				$cssfiles,					stripslashes($Header));
$Header	=  str_replace("{!JSFILES!}", 				$jsfiles,					stripslashes($Header));
$Body	=  str_replace("{!ProjectName!}", 			$projectName, 				stripslashes($Body));
$Body	=  str_replace("{!ProjectTitle!}", 			$projectTitle, 				stripslashes($Body));
$Body	=  str_replace("{!ProjectAuthor!}", 		$projectAuthor, 			stripslashes($Body));
$Body	=  str_replace("{!CDATASTART!}", 			"<![CDATA[", 				stripslashes($Body));
$Body	=  str_replace("{!CDATAEND!}", 				"]]>", 						stripslashes($Body));
$Body	=  str_replace("{!CSSFILES_DYNAMICALLY!}",	$cssfiles_dynamically,		stripslashes($Body));
$Body	=  str_replace("{!CSSFILES!}", 				$cssfiles,					stripslashes($Body));
$Body	=  str_replace("{!JSFILES!}", 				$jsfiles,					stripslashes($Body));
$Footer	=  str_replace("{!ProjectName!}", 			$projectName, 				stripslashes($Footer));
$Footer	=  str_replace("{!ProjectTitle!}", 			$projectTitle, 				stripslashes($Footer));
$Footer	=  str_replace("{!ProjectAuthor!}", 		$projectAuthor, 			stripslashes($Footer));
$Footer	=  str_replace("{!CDATASTART!}", 			"<![CDATA[", 				stripslashes($Footer));
$Footer	=  str_replace("{!CDATAEND!}", 				"]]>", 						stripslashes($Footer));
$Footer	=  str_replace("{!CSSFILES_DYNAMICALLY!}",	$cssfiles_dynamically,		stripslashes($Footer));
$Footer	=  str_replace("{!CSSFILES!}", 				$cssfiles,					stripslashes($Footer));
$Footer	=  str_replace("{!JSFILES!}", 				$jsfiles,					stripslashes($Footer));

$htmldata = $Header;

$htmldata .= $Body;

$xml = new uizXmlClass; 
$prt = $xml->xmlOpen("../projects/".$_GET['projectName']."/objProperties.xml",'object');

$count = count($prt['object']);

$htmldata .= "
<div id='designCanvas' style='width:".$prt['width'][0]['value']."; height:".$prt['height'][0]['value']."; background-color:".$prt['backgroundColor'][0]['value'].";'>
";

///////////////////////////////////////////////////////////////////////////////////////////////
// DIV GENERATION
///////////////////////////////////////////////////////////////////////////////////////////////
for($i=1; $i<$count; $i++) {
	
	$type = $prt['type'][$i]['value'];
	$objectid = $prt['object-id'][$i]['value'];
	$x = $prt['x'][$i]['value'];
	$y = $prt['y'][$i]['value'];
	$zindex = $prt['z-index'][$i]['value'];
	$width = $prt['width'][$i]['value'];
	$height = $prt['height'][$i]['value'];
	$align = $prt['align'][$i]['value'];
	$visibility = $prt['visibility'][$i]['value'];
	$backgroundColor = $prt['backgroundColor'][$i]['value'];
	$action = $prt['action'][$i]['value'];
	$method = $prt['method'][$i]['value'];
	$target = $prt['target'][$i]['value'];
	$html = $prt['html'][$i]['value'];
	$src = $prt['src'][$i]['value'];
	$value = $prt['value'][$i]['value'];
	
	
	if($type != "dataSource" && $type != "") {
		if($type == "FORM") {
			$htmldata .= genForm($i, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, $action, $method, $target);
		}
		else if($type == "DIV" || $type == "TABLE" || $type == "CHECKBOXSET"  || $type == "RADIOBUTTONSET" || $type == "PUSHBUTTON" || $type == "RADIOBUTTON" || $type == "CHECKBOXBUTTON" || $type == "TABVIEW" || $type == "PANEL" || $type == "MENUBAR" || $type == "TREEVIEW" || $type == "YUICHART" || $type == "PAGINATOR") {
			$htmldata .= genDiv($objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, $html);
		}
		else if($type == "IMAGE" || $type == "GOOGLECHART") {
			$htmldata .= genImage($i, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor,$src);
		}
		else if($type == "INPUTBOX") {
			$htmldata .= genInputBox($i, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, $value);
		}
		else if($type == "TEXTAREA") {
			$htmldata .= genTextArea($i, $objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor);
		}
		else {
			$htmldata .= genDiv($objectid, $type, $x, $y, $zindex, $width, $height, $align, $visibility, $backgroundColor, "");
		}
	}
}
$htmldata .= "
</div>
";

///////////////////////////////////////////////////////////////////////////////////////////////
// JS CODE GENERATION
///////////////////////////////////////////////////////////////////////////////////////////////
$codedata .= "

// Object Data Class
function uizObjClass(obj, type, datasourceNo, contextMenu, resize, childCount, provider, datasourceType, resultNode, fields, query, columnWidth, dragAndDrop, code) {
	this.obj = obj;
	this.type = type;
	this.datasourceNo = datasourceNo;
	this.contextMenu = contextMenu;
	this.resize = resize;
	this.childCount = childCount;
	this.provider = provider;
	this.datasourceType = datasourceType;
	this.resultNode = resultNode;
	this.fields = fields;	
	this.query = query;
	this.columnWidth = columnWidth;
	this.dragAndDrop = dragAndDrop;
	this.code = code;
}

// Object Data structure
var uizObj = Array();

";

for($i=1; $i<$count; $i++) {
	if($prt['type'][$i]['value'] != "") {
		$codedata .= "
uizObj[".$i."] = new uizObjClass();
		";
	}
}

$codedata .= "

var eventDOMReady = YAHOO.util.Event.onDOMReady(init);
												
function init() {

";

for($i=1; $i<$count; $i++) {
	
	$type 				= $prt['type'][$i]['value'];
	$objectid 			= $prt['object-id'][$i]['value'];
	$code 				= $prt['code'][$i]['value'];
	$provider 			= $prt['provider'][$i]['value'];
	$datasourceURL 		= $prt['datasourceURL'][$i]['value'];
	$datasourceType		= $prt['datasourceType'][$i]['value'];
	$resultNode 		= $prt['resultNode'][$i]['value'];
	$fields 			= $prt['fields'][$i]['value'];
	$query 				= $prt['query'][$i]['value'];
	
	if($type == "DATASOURCE") {
		$codedata .= genDatasource($i, $objectid, $provider, $datasourceURL, $datasourceType, $resultNode, $fields, $query, $code);
	}	
}


for($i=1; $i<$count; $i++) {
	
	$type 				= $prt['type'][$i]['value'];
	$objectid 			= $prt['object-id'][$i]['value'];
	$x 					= $prt['x'][$i]['value'];
	$y 					= $prt['y'][$i]['value'];
	$zindex 			= $prt['z-index'][$i]['value'];
	$width 				= $prt['width'][$i]['value'];
	$height 			= $prt['height'][$i]['value'];
	$align 				= $prt['align'][$i]['value'];
	$visibility 		= $prt['visibility'][$i]['value'];
	$backgroundColor 	= $prt['backgroundColor'][$i]['value'];
	$action 			= $prt['action'][$i]['value'];
	$method 			= $prt['method'][$i]['value'];
	$target 			= $prt['target'][$i]['value'];
	$html 				= $prt['html'][$i]['value'];
	$src 				= $prt['src'][$i]['value'];
	$value 				= $prt['value'][$i]['value'];
	$code 				= $prt['code'][$i]['value'];
	$label 				= $prt['label'][$i]['value'];
	$disabled 			= $prt['disabled'][$i]['value'];
	$tabindex 			= $prt['tabindex'][$i]['value'];
	$buttoncount 		= $prt['buttoncount'][$i]['value'];
	$tabcount 			= $prt['tabcount'][$i]['value'];
	$datasourceNo 		= $prt['datasourceNo'][$i]['value'];
	$fields 			= $prt['fields'][$i]['value'];
	$columnWidth 		= $prt['columnWidth'][$i]['value'];
	$paginator 			= $prt['paginator'][$i]['value'];
	$rowsPerPage 		= $prt['rowsPerPage'][$i]['value'];
	$closebutton 		= $prt['closebutton'][$i]['value'];
	$draggable 			= $prt['draggable'][$i]['value'];
	$provider 			= $prt['provider'][$i]['value'];
	$datasourceURL 		= $prt['datasourceURL'][$i]['value'];
	$datasourceType		= $prt['datasourceType'][$i]['value'];
	$resultNode 		= $prt['resultNode'][$i]['value'];
	$fields 			= $prt['fields'][$i]['value'];
	$query 				= $prt['query'][$i]['value'];
	
	if($type == "DIV") {
		
	}		
	else if($type == "IMAGE") {
		
	}		
	else if($type == "SWF") {
		$codedata .= genSWF($i, $objectid, $width, $height, $src);
	}	
	else if($type == "FORM") {

	}
	else if($type == "INPUTBOX") {
		
	}	
	else if($type == "CHECKBOXSET") {
		
	}	
	else if($type == "RADIOBUTTONSET") {
		
	}		
	else if($type == "TEXTAREA") {
		
	}
	else if($type == "TABLE") {
		
	}	
	else if($type == "TIMER") {
		$codedata .= genTimer($i, $objectid);
	}	
	else if($type == "PUSHBUTTON") {
		$codedata .= genPushButton($i, $objectid, $label, $disabled, $tabindex, $code);
	}
	else if($type == "RADIOBUTTON") {
		$codedata .= genRadioButton($i, $objectid, $buttoncount, $code);
	}
	else if($type == "CHECKBOXBUTTON") {
		$codedata .= genCheckboxButton($i, $objectid, $label, $disabled, $tabindex, $code);
	}
	else if($type == "COLORPICKER") {
		$codedata .= genColorPicker($i, $objectid, $code);
	}
	else if($type == "TABVIEW") {
		$codedata .= genTabView($i, $objectid, $tabcount, $code);
	}
	else if($type == "DATATABLE") {
		$codedata .= genDataTable($i, $objectid, $datasourceNo, $fields, $columnWidth, $paginator, $rowsPerPage, $code);
	}	
	else if($type == "CALENDAR") {
		$codedata .= genCalendar($i, $objectid, $code);
	}	
	else if($type == "PANEL") {
		$codedata .= genPanel($i, $objectid, $x, $y, $width, $height, $closebutton, $draggable, $code);
	}
	else if($type == "SLIDER") {
		$codedata .= genSlider($i, $objectid, $code);
	}
	else if($type == "AUTOCOMPLETE") {
		$codedata .= genAutoComplete($i, $objectid, $datasourceNo, $code);
	}
	else if($type == "RICHTEXTEDITOR") {
		$codedata .= genRichTextEditor($i, $objectid);
	}
	else if($type == "MENUBAR") {
		$codedata .= genMenuBar($i, $objectid, $code);
	}
	else if($type == "TREEVIEW") {
		$codedata .= genTreeView($i, $objectid, $code);
	}
	else if($type == "YUICHART") {
		$codedata .= genYuiChart($i, $objectid, $code);
	}
	else if($type == "PAGINATOR") {
		$codedata .= genPaginator($i, $objectid, $code);
	}
	else if($type == "DRAGANDDROP") {
		$codedata .= genDragAndDrop($i, $objectid);
	}	
	else if($type == "RESIZE") {
		$codedata .= genResize($i, $objectid);
	}	
	else if($type == "MAPDAUM") {
		$codedata .= genMapDaum($i, $objectid, $code);
	}	
	else if($type == "MAPGOOGLE") {
		$codedata .= genMapGoogle($i, $objectid, $code);
	}
	else if($type == "GOOGLECHART") {
		
	}
	else if($type == "MAPNAVER") {
		$codedata .= genMapNaver($i, $objectid, $code);
	}
	else if($type == "MAPLIVE") {
		$codedata .= genMapLive($i, $objectid, $code);
	}
}

$codedata .= "

}

";

$htmldata .= $Footer;

///////////////////////////////////////////////////////////////////////////////////////////////
// WRITE THE JS FILE
///////////////////////////////////////////////////////////////////////////////////////////////
$fp = fopen("../projects/".$_GET['projectName']."/".$_GET['projectName'].".js", "w");
fwrite($fp, $codedata);
fclose($fp);

///////////////////////////////////////////////////////////////////////////////////////////////
// WRITE THE HTML FILE
///////////////////////////////////////////////////////////////////////////////////////////////
$fp = fopen("../projects/".$_GET['projectName']."/".$_GET['projectName'].".".$Expansion, "w");
$htmldata = substr($htmldata, 2, strlen($htmldata) - 2);
$htmldata = str_replace("{!SCRIPT!}", $codedata, $htmldata);
fwrite($fp, $htmldata);
fclose($fp);

///////////////////////////////////////////////////////////////////////////////////////////////
// JS CODE VIEW
///////////////////////////////////////////////////////////////////////////////////////////////
if($_GET['mode'] == "codeview") {
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>UIzard Codeview</title>

<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shCore.js"></script>
<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shLegacy.js"></script>
<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shBrushBash.js"></script>
<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shBrushJScript.js"></script>

<link type="text/css" rel="stylesheet" href="<?php echo $dirLib;?>syntaxHighlighter/styles/shCore.css" />
<link type="text/css" rel="stylesheet" href="<?php echo $dirLib;?>syntaxHighlighter/styles/shThemeDefault.css" />
<script type="text/javascript">
SyntaxHighlighter.all();
</script>

</head>

<body onload="dp.SyntaxHighlighter.HighlightAll('code');">
  <textarea class="javascript" name="code">
<?php
	echo htmlspecialchars($codedata);
?>
  </textarea>
</body>
</html>
<?php
}

///////////////////////////////////////////////////////////////////////////////////////////////
// HTMLCODE VIEW
///////////////////////////////////////////////////////////////////////////////////////////////
else if($_GET['mode'] == "htmlview") {
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>UIzard Codeview</title>

<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shCore.js"></script>
<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shLegacy.js"></script>
<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shBrushBash.js"></script>
<script type="text/javascript" src="<?php echo $dirLib;?>syntaxHighlighter/scripts/shBrushXml.js "></script>

<link type="text/css" rel="stylesheet" href="<?php echo $dirLib;?>syntaxHighlighter/styles/shCore.css" />
<link type="text/css" rel="stylesheet" href="<?php echo $dirLib;?>syntaxHighlighter/styles/shThemeDefault.css" />
<script type="text/javascript">
SyntaxHighlighter.all();
</script>

</head>

<body onload="dp.SyntaxHighlighter.HighlightAll('code');">
  <textarea class="html" name="code">
<?php
	echo htmlspecialchars($htmldata);
?>
  </textarea>
</body>
</html>
<?php
}

///////////////////////////////////////////////////////////////////////////////////////////////
// Preview
///////////////////////////////////////////////////////////////////////////////////////////////
else if($_GET['mode'] == "print") {
	if($Expansion == "html") {
		echo "<script>location.href='../projects/".$_GET['projectName']."/".$_GET['projectName'].".".$Expansion."';</script>";
	}
	else if($Expansion == "xml") {
		echo "
<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
<title>UIzard Gadget/Widget Preview</title>

</head>

<body leftmargin='0' topmargin='0'>

<script src='http://www.gmodules.com/ig/ifr?url=http://uizard.org/UIzard/projects/".$_GET['projectName']."/".$_GET['projectName'].".".$Expansion."&amp;synd=open&amp;w=".str_replace("px", "", $prt['width'][0]['value'])."&amp;h=".str_replace("px", "", $prt['height'][0]['value'])."&amp;title=".$projectName."&amp;border=%23ffffff%7C3px%2C1px+solid+%23999999&amp;output=js&amp;nocache=1'></script>

</body>

</html>
		";	
	}
}
?>