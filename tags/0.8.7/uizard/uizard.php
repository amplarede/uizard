<?php
/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

/*
//제로보드XE에 가입된 사용자를 인증하여 사용할 수 있도록 해주기 위한 코드입니다.
define('__ZBXE__',true);
require_once("../config/config.inc.php");
$oContext = &Context::getInstance();
$oContext->init();

$no = $logged_info->member_srl;
$id = $logged_info->user_id;
$email = $logged_info->email_address;
$is_admin = $logged_info->is_admin;

//인증된 경우
if($no) {
	$demomode = FALSE;
	
	$projectName = $_GET['projectname'];
	$projectAuthor = $id;
	
	if($_GET['projectDir'] != "") {
		$projectDir = split("_", $_GET['projectDir']);
		$projectName = $projectDir[1];
		$projectAuthor = $projectDir[0];
		$projectname = $_GET['projectDir'];
	}
	else {
		$projectname = $_GET['projectauthor']."_".$_GET['projectname'];
	}	
}
//인증되지 않은 경우
else {
	$demomode = TRUE;
	$projectAuthor = time();
	
	if($_GET['projectDir'] != "") {
		$projectDir = split("_", $_GET['projectDir']);
		$projectName = $projectDir[1];
		$projectAuthor = $projectDir[0];
		$projectname = $_GET['projectDir'];
	}
	else {
		$projectname = $_GET['projectauthor']."_".$_GET['projectname'];
	}	
}
*/

//인증 없이 사용하기 위해선 아래 코드를 사용합니다.
//$projectAuthor는 사용자에 맞게 수정이 가능합니다.

	$demomode = FALSE;
	
	$projectName = $_GET['projectname'];
	$projectAuthor = "uizard";
	
	if($_GET['projectDir'] != "") {
		$projectDir = split("_", $_GET['projectDir']);
		$projectName = $projectDir[1];
		$projectAuthor = $projectDir[0];
		$projectname = $_GET['projectDir'];
	}
	else {
		$projectname = $_GET['projectauthor']."_".$_GET['projectname'];
	}

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>UIzard</title>

<!-- CSS : CODEMIRROR -->
<link rel="stylesheet" href="lib/codeMirror/css/docs.css" type="text/css">

<!-- CSS : YAHOO USER INTERFACE LIBRARY -->
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/resize/assets/skins/sam/resize.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/layout/assets/skins/sam/layout.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset/reset.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/fonts/fonts.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/container/assets/skins/sam/container.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/tabview/assets/skins/sam/tabview.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/button/assets/skins/sam/button.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/colorpicker/assets/skins/sam/colorpicker.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/datatable/assets/skins/sam/datatable.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/editor/assets/skins/sam/simpleeditor.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/autocomplete/assets/skins/sam/autocomplete.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/calendar/assets/skins/sam/calendar.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/treeview/assets/skins/sam/treeview.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/slider/assets/skins/sam/slider.css">
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/paginator/assets/skins/sam/paginator.css" />
<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/menu/assets/skins/sam/menu.css">

<!-- JS : CODEMIRROR -->
<script type="text/javascript" src="lib/codeMirror/js/codemirror.js"></script>

<!-- JS : GOOGLE MAP -->
<script type="text/javascript" src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAAnxp9-CxpjSEUiYZNuqxVfxR_0InGTL-Nzc80coSUi8WNryh4LRRsXN1hieBp1JgRZTLsocZFCUvQdQ" charset="utf-8"></script>

<!-- JS : DAUM MAP -->
<script type="text/javascript" src="http://apis.daum.net/maps/maps.js?apikey=26ddf6fa25d3ae044759c779c02d7df6bed2195a"></script>

<!-- JS : NAVER MAP -->
<script type="text/javascript" src="http://maps.naver.com/js/naverMap.naver?key=016200523a6f4851d55ae4ea563f4a1e"></script>

<!-- JS : LIVE MAP -->
<script type="text/javascript" src="http://dev.virtualearth.net/mapcontrol/mapcontrol.ashx?v=6.2"></script>

<!-- JS : YAHOO USER INTERFACE LIBRARY -->
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/yahoo/yahoo.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/event/event.js" ></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/dom/dom.js" ></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/datasource/datasource-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/yahoo-dom-event/yahoo-dom-event.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/connection/connection-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/dragdrop/dragdrop-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/animation/animation-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/container/container-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/slider/slider-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/element/element-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/colorpicker/colorpicker-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/get/get-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/utilities/utilities.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/slider/slider-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/json/json-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/resize/resize-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/layout/layout-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/button/button-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/tabview/tabview-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/menu/menu.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/autocomplete/autocomplete-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/yuiloader/yuiloader.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/datatable/datatable-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/editor/editor-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/editor/simpleeditor-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/calendar/calendar.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/treeview/treeview.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/charts/charts-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/paginator/paginator-min.js"></script>
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/stylesheet/stylesheet-min.js"></script> 
<script type="text/javascript" src="http://yui.yahooapis.com/2.7.0/build/assets/js/data.js"></script>

<!-- JS : SWFOBJECT -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/swfobject/2.1/swfobject.js"></script>

<!-- JS : UIZARD -->
<script type="text/javascript" src="js/editor.js"></script>
<script type="text/javascript" src="js/behavior.js"></script>
<script type="text/javascript" src="js/project.js"></script>
<script type="text/javascript" src="js/load.js"></script>
<script type="text/javascript" src="js/save.js"></script>
<script type="text/javascript" src="js/objects.js"></script>
<script type="text/javascript" src="js/panels.js"></script>
<script type="text/javascript" src="js/stdfunc.js"></script>
<script type="text/javascript" src="js/datasource.js"></script>
<script type="text/javascript" src="js/keyListener.js"></script>
<script type="text/javascript" src="js/menu.js"></script>
<script type="text/javascript" src="js/panels.js"></script>
<script type="text/javascript" src="js/layout.js"></script>
<script type="text/javascript" src="js/canvas.js"></script>

<!-- CSS : UIZARD -->
<link rel="stylesheet" type="text/css" href="config/css/uizard.css">

</head>

<!-- HTML : BODY -->
<body class="yui-skin-sam">

<script>

/////////////////////////////////////////////////////////////////////////////////////////////////
// Loading Panel Start
/////////////////////////////////////////////////////////////////////////////////////////////////
var panelLoading = new YAHOO.widget.Panel("panelLoading",  
                                                    { width: "580px",
													  height: "300px",
                                                      fixedcenter: true, 
                                                      close: false, 
                                                      draggable: false, 
                                                      zindex:10,
                                                      modal: true,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
    
panelLoading.setHeader("Loading, please wait...");
panelLoading.setBody("<div style='background:url(images/loading.png); width:560px; height:250px; text-align:left;'><img src=\"http://us.i1.yimg.com/us.yimg.com/i/us/per/gr/gp/rel_interstitial_loading.gif\" style='margin-left:40px; margin-top:200px;'/></div>");
panelLoading.render(document.body);
panelLoading.show();
/////////////////////////////////////////////////////////////////////////////////////////////////

<?php
if($demomode == TRUE) {
?>
var demomode = true;
<?php
}
else {
?>
var demomode = false;
<?php
}
?>

//Environment
var showObjectSelection = false;
var fillObjectSelection = false;
var hoverResizeHandle = true;
var proxyResize = true;

//Object
var objectCount = 0;
var selectedObj = -1;
var copiedObj = null;

var projectName = "<?php echo $projectname;?>";

var objDD;
var objResize;

//Object Class
function uizObjClass(obj, type, datasourceNo, contextMenu, resize, childCount, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, dragAndDrop, code, html, tabindex, disabled, interval) {
	this.obj = obj;
	this.type = type;
	this.datasourceNo = datasourceNo;
	this.contextMenu = contextMenu;
	this.resize = resize;
	this.childCount = childCount;
	this.provider = provider;
	this.datasourceURL = datasourceURL;
	this.datasourceType = datasourceType;
	this.resultNode = resultNode;
	this.fields = fields;	
	this.query = query;
	this.columnWidth = columnWidth;
	this.paginator = paginator;
	this.rowsPerPage = rowsPerPage;
	this.dragAndDrop = dragAndDrop;
	this.code = code;
	this.html = html;
	this.tabindex = tabindex;
	this.disabled = disabled;
	this.interval = interval;
}

// Object Data structure
var uizObj = Array();

///////////////////////////////////////////////////////////////////////////////////////////////////////////	
// Global
///////////////////////////////////////////////////////////////////////////////////////////////////////////	

//CodeEditor
var codeEditor;

//HtmlEditor
var htmlEditor;

//CssEditor
var cssEditor;

//Layout
var layout;
var layoutCanvas;
var layoutProperties;

//Canvas
var canvas1;
var canvas2;
var canvas3;
var canvas4;
var canvas5;
var canvas6;
var canvas7;

//TabView
var tabView;

//Table
var tableProperties;
var tableColumnDefs;

//Treeview
var treeviewObjects;

//API Keys
var APIKeyGoogleMap;
var APIKeyYahoo;
var APIKeyNaverData;
var APIKeyNaverMap;
var APIKeyDaumSearch;
var APIKeyDaumShopping;
var APIKeyDaumContents;
var APIKeyDaumMAp;
var APIKeyLiveData;


var objectMouseOver = false;

//Panels
var panelNewProject;
var panelMakeProject;
var panelOpenProject;
var panelSaveAsProject;
var panelExportProject;
var panelUIzardInfo;
var panelGridSetting;
var panelAPIKeySetting;
var panelCSSSetting;
var panelPreferences;
var panelProjectSetting;
var colorPickerDialog;
var panelSelectDatasource;

//Button Groups
var gridSettingButtonGroup;

//Slider
var gridSettingSlider;

</script>


<?php include("config/layout/layout.php"); ?>

<?php include("config/layout/canvas.php"); ?>

<?php include("config/layout/panels.php"); ?>

</body>


<script>

///////////////////////////////////////////////////////////////////////////////////////////////////////////	
// Main Function
///////////////////////////////////////////////////////////////////////////////////////////////////////////	

var eventDOMReady = YAHOO.util.Event.onDOMReady(init);
										  
function init() {
																	  
	initPanels();
	
	initLayout();	
	
	addCanvas();
	
<?php
if($_GET['action'] == "newProject") {
?>
	showNewProject();
<?php
}
?>

	enableKeyListener();
	
	layout.getUnitByPosition('right').set("width", 350);	
}





/////////////////////////////////////////////////////////////////////////////////////////////////
// Loading Panel End
/////////////////////////////////////////////////////////////////////////////////////////////////


function panelLoadinghide() {
	loadProject();	
}

function loadProject() {
	

<?php
if($_GET['action'] == "load") {
	echo "\twriteMessage(\"<font color=#F90><b>Start Loading...</b></font>\");\n\n";
	
	include("php/xmlClass.php");
	$xml = new uizXmlClass; 
	$prt = $xml->xmlOpen("projects/".$_GET['projectDir']."/objProperties.xml",'object');
	$count = count($prt['object']);

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
		$code = $prt['code'][$i]['value'];
		$label = $prt['label'][$i]['value'];
		$disabled = $prt['disabled'][$i]['value'];
		$tabindex = $prt['tabindex'][$i]['value'];
		$buttoncount = $prt['buttoncount'][$i]['value'];
		$tabcount = $prt['tabcount'][$i]['value'];
		$datasourceNo = $prt['datasourceNo'][$i]['value'];
		$fields = $prt['fields'][$i]['value'];
		$columnWidth = $prt['columnWidth'][$i]['value'];
		$paginator = $prt['paginator'][$i]['value'];
		$rowsPerPage = $prt['rowsPerPage'][$i]['value'];
		$closebutton = $prt['closebutton'][$i]['value'];
		$draggable = $prt['draggable'][$i]['value'];
		$provider = $prt['provider'][$i]['value'];
		$datasourceURL = $prt['datasourceURL'][$i]['value'];
		$datasourceType = $prt['datasourceType'][$i]['value'];
		$resultNode = $prt['resultNode'][$i]['value'];
		$fields = $prt['fields'][$i]['value'];
		$query = $prt['query'][$i]['value'];
		
		echo "\t";
		
		if($type == "DIV") {
			echo "addObjDiv();\n";
		}		
		else if($type == "IMAGE") {
			echo "addObjImage();\n";
		}		
		else if($type == "SWF") {
			echo "addObjSWF();\n";
		}	
		else if($type == "FORM") {
			echo "addObjForm();\n";
		}
		else if($type == "INPUTBOX") {
			echo "addObjInputbox();\n";
		}	
		else if($type == "CHECKBOXSET") {
			echo "addObjCheckboxSet();\n";
		}	
		else if($type == "RADIOBUTTONSET") {
			echo "addObjRadiobuttonSet();\n";
		}		
		else if($type == "TEXTAREA") {
			echo "addObjTextarea();\n";
		}
		else if($type == "TABLE") {
			echo "addObjTable();\n";
		}	
		else if($type == "TIMER") {
			echo "addObjTimer();\n";
		}	
		else if($type == "PUSHBUTTON") {
			echo "addObjPushButton();\n";
		}
		else if($type == "RADIOBUTTON") {
			echo "addObjRadioButton();\n";
		}
		else if($type == "CHECKBOXBUTTON") {
			echo "addObjCheckboxButton();\n";
		}
		else if($type == "COLORPICKER") {
			echo "addObjColorPicker();\n";
		}
		else if($type == "TABVIEW") {
			echo "addObjTabview();\n";
		}
		else if($type == "DATATABLE") {
			echo "addObjDatatable();\n";
		}	
		else if($type == "CALENDAR") {
			echo "addObjCalendar();\n";
		}	
		else if($type == "PANEL") {
			echo "addObjPanel();\n";
		}
		else if($type == "SLIDER") {
			echo "addObjSlider();\n";
		}
		else if($type == "AUTOCOMPLETE") {
			echo "addObjAutoComplete();\n";
		}
		else if($type == "RICHTEXTEDITOR") {
			echo "addObjRichTextEditor();\n";
		}
		else if($type == "MENUBAR") {
			echo "addObjMenuBar();\n";
		}
		else if($type == "TREEVIEW") {
			echo "addObjTreeview();\n";
		}
		else if($type == "YUICHART") {
			echo "addObjYUIChart();\n";
		}
		else if($type == "PAGINATOR") {
			echo "addObjPaginator();\n";
		}
		else if($type == "DRAGANDDROP") {
			echo "addObjDragAndDrop();\n";
		}	
		else if($type == "RESIZE") {
			echo "addObjResize();\n";
		}	
		else if($type == "MAPDAUM") {
			echo "addObjDaumMap();\n";
		}	
		else if($type == "MAPGOOGLE") {
			echo "addObjGoogleMap();\n";
		}
		else if($type == "GOOGLECHART") {
			echo "addObjGoogleChart();\n";
		}
		else if($type == "MAPNAVER") {
			echo "addObjNaverMap();\n";
		}
		else if($type == "MAPLIVE") {
			echo "addObjLiveMap();\n";
		}
		else if($type == "DATASOURCE") {
			if($datasourceType == "HTML") {
				echo "addDsHTML();\n";
			}
			else if($datasourceType == "JSON") {
				echo "addDsJSON();\n";
			}
			else if($datasourceType == "XML") {
				echo "addDsXML();\n";
			}
		}

		if($type != "") {
			$code = str_replace("\n", "\\n", $code);
	
			$html = str_replace("\n", "\\n", $html);	
			
			echo "\tsetObjStyle(".$i.", '".$x."', '".$y."', '".$zindex."', '".$width."', '".$height."', '".$align."', '".$visibility."', '".$label."', '".$disabled."', '".$tabindex."', '".$datasourceNo."', '".$provider."', '".$datasourceURL."', '".$datasourceType."', '".$resultNode."', '".$fields."', '".$query."', '".$columnWidth."', '".$paginator."', '".$rowsPerPage."', '".$tabcount."', '".$src."', '".$action."', '".$method."', '".$target."', '".$value."', '".$backgroundColor."', '".$buttoncount."', '".$closebutton."', '".$draggable."', '".$code."', '".$html."', '".$interval."');\n";
			
			//echo "\tsetTimeout('objClicked(".$i.")', 500);\n\n";
		}
	}
	
	echo "\n\n";
	echo "writeMessage(\"<font color=gray><b>Saving the Properties...</b></font>\");";
	echo "\n\n";
	
	for($i=1; $i<$count; $i++) {
		$type = $prt['type'][$i]['value'];
		if($type != "") {
			//setTimeout ('FuncB()', 2000);
			echo "\tsetTimeout('objClicked(".$i.")', 500 + ".($i*200).");\n";
		}
	}
	
	echo "\n\tsetTimeout('writeMessage(\"<font color=green><b>Loading Complete.</b></font>\")', 500 + ".($count*200).");\n";
	
	echo "
	loadSetting();
	loadCss();
	loadAPIKeys();	
	";
}
?>
	loadTemplateList(0);

	
	setTimeout('panelLoading.hide()', 600 + (objectCount*200));	
	

	if(demomode == true) {
		alert("This is Demo mode. If you log in, you can launch the complete version.");
	}
}


var eventWindowReady = YAHOO.util.Event.on(window, "load", panelLoadinghide);

/////////////////////////////////////////////////////////////////////////////////////////////////


</script>

</html>