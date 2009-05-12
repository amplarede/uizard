<?
/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/


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

//인증 없이 사용하기 위해선 아래 코드를 사용합니다.
//$projectAuthor는 사용자에 맞게 수정이 가능합니다.
/*
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
*/



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
<script type="text/javascript" src="js/objects.js"></script>
<script type="text/javascript" src="js/behavior.js"></script>
<script type="text/javascript" src="js/panels.js"></script>
<script type="text/javascript" src="js/menu.js"></script>
<script type="text/javascript" src="js/stdfunc.js"></script>
<script type="text/javascript" src="js/datasource.js"></script>

<!-- JS : CODEMIRROR -->
<script src="lib/codeMirror/js/codemirror.js" type="text/javascript"></script>

<!-- CSS : UIZARD -->
<link rel="stylesheet" type="text/css" href="conf/css/uizard.css">

</head>

<!-- HTML : BODY -->
<body class="yui-skin-sam" bgcolor="#FFFFFF">

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
</script>

<!-- HTML : CONTAINER::PANELS -->
<div id="panels"></div>

<!-- HTML : LAYOUT::TOP -->
<div id="top1">
    <div id="mainMenu">
        <div class="bd" style="margin-left:60px;">
            <ul class="first-of-type">
                <li class="yuimenubaritem first-of-type">
                    <a class="yuimenubaritemlabel" href="#">File</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Object</a>
                </li>                
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Editor</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">View</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Option</a>
                </li>
                <li class="yuimenubaritem">
                    <a class="yuimenubaritemlabel" href="#">Help</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="toolbar" style="background:url(images/bg_toolbar.png); height:35px; border-bottom:#666 solid 1px;">
        <div id="toolbarContainer" style="margin-left:64px; padding-top:5px;">
      		<? include("php/toolbar.php"); ?>
        </div>
    </div>
</div>

<!-- HTML : LAYOUT::BOTTOM -->
<div id="bottom1">
    <div id="divMessage" style="font-size:11px;" class="divDefaultBackground">
    </div>
</div>

<!-- HTML : LAYOUT::RIGHT -->
<div id="right1" class="divDefaultBackground">

</div>

<!-- HTML : LAYOUT::LEFT -->
<div id="left1">
	<div id="divComponents" style="font-size:12px;" class="divDefaultBackground">
		<? include("php/toolbox.php"); ?>
	</div>
</div>

<!-- HTML : LAYOUT::CENTER -->
<div id="center1">
	<a name="anchorTapTop" id="anchorTapTop"></a>
    <div id="canvas" class="divDefaultBackground">
		
    </div>
    <div id="canvasTab" style="padding-right:0px;">
		
    </div>
</div>

<!-- HTML : CONTAINER::PROPERTIES -->
<div id="divProperties" class="divDefaultBackground">
</div>  

<!-- HTML : CONTAINER::OBJECT EXPLORER -->
<div id="divObjectsExplorer">
	<div style="font-size:12px; padding-left:5px; padding-top:5px;">
    	<img src="images/layout/uizard.png" align="absmiddle"> <b>UIzard</b>
	</div>
	<div id="objectsExplorerTreeview" style="padding-left:5px; font-size:12px;">
	</div>
	<div id="objectsExplorerTreeviewDummy" style="display:none;">
		<ul id="treeNodeProject">
			<li><a onclick=""><img src="images/layout/project.png" align="absmiddle"> <b><?=$projectname?></b></a>
				<ul id="treeNodeCanvas">
					<li><a href="#" onclick="objClicked(0);"><img src="images/layout/canvas.png" align="absmiddle"> Canvas</a>
						<ul id="treeNodeObjects">
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>  

<!-- HTML : CONTAINER::DESIGN CANVAS -->
<div id='canvas1'>
	<div class="hd"></div>
	<div id='canvasDesign' class="bd" style='height:1000px; background-color:#ffffff;' onClick='canvasClicked();' onDblClick='canvasDblClicked();'>
	<div id="objectStorage" style=""></div>
	<div id="canvasGrid" style="height:100%; background:url(images/grid_10px.png); opacity:0.5; filter:alpha(opacity=40);"></div>
	</div>
</div>

<!-- HTML : CONTAINER::DATASOURCE CANVAS -->
<div id='canvas2'>
	<div class="hd"></div>
	<div id='canvasDataSource' class="bd" style='height:1000px; background:#ffffff;'>
	</div>
</div>

<!-- HTML : CONTAINER::CODE CANVAS -->
<div id='canvas3'>
	<div class="hd"></div>
	<div id='canvasCode' class="bd" style='background:#ffffff;'>
		<textarea name='textAreaCode' id='textAreaCode'></textarea>
	</div>
</div>

<!-- HTML : CONTAINER::REALCODE CANVAS -->
<div id='canvas4'>  
	<div class="hd"></div>
	<div id='canvasRealCode' class="bd" style='background:#ffffff; padding:0px;'>
		<iframe id='iframeRealCode' src='php/codeGenerator.php?projectName=<?=$projectname ?>&mode=codeview' width='100%' height="1000" frameborder='0' scrolling='no'></iframe>
	</div>
</div>    

<!-- HTML : CONTAINER::HTML CANVAS -->
<div id='canvas5'>  
	<div class="hd"></div>
	<div id='canvasHtml' class="bd" style='background:#ffffff;'>
		<textarea name='textAreaHtml' id='textAreaHtml'></textarea>
	</div>
</div>

<!-- HTML : CONTAINER::REALHTML CANVAS -->
<div id='canvas6'>  
	<div class="hd"></div>
	<div id='canvasRealHtml' class="bd" style='background:#ffffff; padding:0px;'>
		<iframe id='iframeRealHtml' src='php/codeGenerator.php?projectName=<?=$projectname ?>&mode=htmlview' width='100%' height="1000" frameborder='0' scrolling='no'></iframe>
	</div>
</div>

<!-- HTML : CONTAINER::PREVIEW CANVAS -->
<div id='canvas7'>   
	<div class="hd"></div>
	<div id='canvasPreview' class="bd" style='background:#ffffff; width:100%; height:1000px; padding:0px;'>
		<iframe id='iframePreview' src='php/codeGenerator.php?projectName=<?=$projectname ?>&mode=print' width='100%' height="1000" frameborder='0' scrolling='no'></iframe>
	</div>
</div>

<!-- HTML : CONTAINER::CANVAS -->    
<div id='canvasContainer'>   
</div>

<? include("php/panels.php"); ?>

<!-- HTML : CONTAINER::ICON -->
<div id="uizardIcon" style="position:absolute; z-index:2; left:2px; top:2px; width:60px; height:60px; background:url(images/uizardIcon.png);"></div>

<script>

<?
if($demomode == TRUE) {
?>
var demomode = true;
<?
}
else {
?>
var demomode = false;
<?
}
?>

//Object
var objectCount = 0;
var selectedObj = -1;
var copiedObj = null;

var projectName = "<?=$projectname?>";

var objDD;
var objResize;

//Object Class
function uizObjClass(obj, type, datasourceNo, contextMenu, resize, childCount, provider, datasourceType, resultNode, fields, query, columnWidth, dragAndDrop, code, html, tabindex, disabled, interval) {
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

var objectMouseOver = false;




///////////////////////////////////////////////////////////////////////////////////////////////////////////	
// Panels
///////////////////////////////////////////////////////////////////////////////////////////////////////////	
var panelNewProject = new YAHOO.widget.Dialog("newProject",  
                                                    { width: "600px",
													  height: "400px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      modal: true,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleNewProjectCancel = function() {
    this.cancel();
}
var handleNewProjectSubmit = function() {
    this.submit();
}
var newProjectButtons = [{ text:"OK", handler:handleNewProjectSubmit, isDefault:true },
                 { text:"Cancel", handler:handleNewProjectCancel } ];
panelNewProject.cfg.queueProperty("buttons", newProjectButtons);
panelNewProject.render();

var panelMakeProject = new YAHOO.widget.Dialog("makeProject",  
                                                    { width: "450px",
													  height: "330px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      modal: true,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleMakeProjectCancel = function() {
    this.cancel();
}
var handleMakeProjectSubmit = function() {
	var projectname = uizGetElementById('inputProjectName').value;
	var projectauthor = uizGetElementById('inputProjectAuthor').value;
	if(projectname == "") alert("You must input a project name field");
	else if(projectauthor == "") alert("You must input a project author field");
	else uizGetElementById("makeProjectForm").submit();
}
var makeProjectButtons = [{ text:"Make", handler:handleMakeProjectSubmit, isDefault:true },
                 { text:"Cancel", handler:handleMakeProjectCancel } ];
panelMakeProject.cfg.queueProperty("buttons", makeProjectButtons);
panelMakeProject.render();

function makeNewProject() {
	window.location = "uizard.php?action=makenewproject&projectname="+projectname+"&projectauthor="+projectauthor;
}

var panelOpenProject = new YAHOO.widget.Dialog("openProject",  
                                                    { width: "450px",
													  height: "150px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      modal: true,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleOpenCancel = function() {
    this.cancel();
}
var handleOpenSubmit = function() {
	window.location = "uizard.php?action=load&projectDir="+"<?=$projectAuthor?>"+"_"+uizGetElementById("openProjectName").value;
}
var openButtons = [{ text:"Open", handler:handleOpenSubmit, isDefault:true },
                 { text:"Cancel", handler:handleOpenCancel } ];
panelOpenProject.cfg.queueProperty("buttons", openButtons);
panelOpenProject.render();

var panelSaveAsProject = new YAHOO.widget.Dialog("saveAsProject",  
                                                    { width: "450px",
													  height: "150px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      modal: true,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleSaveAsCancel = function() {
    this.cancel();
}
var handleSaveAsSubmit = function() {
	location.href = 'projects/saveas.php?projectDir=<?=$projectname?>&projectNewDir=' + uizGetElementById("newProjectName").value + "_" + "<?=$projectAuthor?>";
}
var saveAsButtons = [{ text:"Save As", handler:handleSaveAsSubmit, isDefault:true },
                 { text:"Cancel", handler:handleSaveAsCancel } ];
panelSaveAsProject.cfg.queueProperty("buttons", saveAsButtons);
panelSaveAsProject.render();



var panelExportProject = new YAHOO.widget.Dialog("exportProject",  
                                                    { width: "600px",
													  height: "400px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      modal: true,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );

var handleExportCancel = function() {
    this.cancel();
}
var handleExportSubmit = function() {
    uizGetElementById("exportProjectForm").submit();
}
var exportButtons = [{ text:"Export", handler:handleExportSubmit, isDefault:true },
                 { text:"Cancel", handler:handleExportCancel } ];
panelExportProject.cfg.queueProperty("buttons", exportButtons);

panelExportProject.render();

var treeviewExportProject = new YAHOO.widget.TreeView("exportProjectOptionTreeview");
treeviewExportProject.render();
treeviewExportProject.expandAll();

treeviewExportProject.subscribe("labelClick", exportLabelClicked);

function exportLabelClicked(node) {
	var label = node.getEl();
	if(label.getElementsByTagName("input")[0].checked == true) label.getElementsByTagName("input")[0].checked = false;
	else if(label.getElementsByTagName("input")[0].checked == false) label.getElementsByTagName("input")[0].checked = true;
}


var panelUIzardInfo = new YAHOO.widget.Panel("UIzardInfo",  
                                                    { width: "580px", 
													  height: "300px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      modal: true,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
panelUIzardInfo.render();

var panelGridSetting = new YAHOO.widget.Dialog("gridSetting",  
                                                    { width: "250px", 
													  height: "210px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleGridSettingCancel = function() {
    this.cancel();
}
var handleGridSettingSubmit = function() {
    saveSetting();
	this.cancel();
}
var gridSettingButtons = [{ text:"Save", handler:handleGridSettingSubmit, isDefault:true },
                 { text:"Cancel", handler:handleGridSettingCancel } ];
panelGridSetting.cfg.queueProperty("buttons", gridSettingButtons);

panelGridSetting.render();

var gridTopConstraint = 0;
var gridBottomConstraint = 200;
var gridSettingSlider = YAHOO.widget.Slider.getHorizSlider("gridSettingSlider", "gridSlider-thumb", gridTopConstraint, gridBottomConstraint, 20);

gridSettingSlider.setValue(60);

gridSettingSlider.subscribe("change", function(offsetFromStart) {
	if (navigator.appVersion.indexOf("MSIE") != -1) uizGetElementById('canvasGrid').filters.alpha.opacity = offsetFromStart/2;
	else uizGetElementById('canvasGrid').style.opacity = offsetFromStart/200;
	writeMessage("Grid Opacity is changed to "+offsetFromStart/2+"%");
});

var gridSettingButtonGroup = new YAHOO.widget.ButtonGroup({ 
                                id:  "gridSettingButtonGroup", 
                                name:  "gridSettingButtonGroup", 
                                container:  "gridSettingButtons" });

gridSettingButtonGroup.addButtons([
    { label: "5 Pixel", value: "5" },
    { label: "10 Pixel", value: "10", checked: true }, 
    { label: "20 Pixel", value: "20" }
]);

gridSettingButtonGroup.on("valueChange", function(oArgs) {
	uizSetStyle("canvasGrid", "background", "url(images/grid_"+oArgs.newValue+"px.png)");
	writeMessage("Grid size is changed to "+oArgs.newValue+"pixel");
});


var panelAPIKeySetting = new YAHOO.widget.Dialog("APIKeySetting",  
                                                    { width: "600px", 
													  height: "400px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleAPIKeyCancel = function() {
    this.cancel();
}
var handleAPIKeySubmit = function() {
    this.submit();
}
var apiKeyButtons = [{ text:"OK", handler:handleAPIKeySubmit, isDefault:true },
                 { text:"Cancel", handler:handleAPIKeyCancel } ];
panelAPIKeySetting.cfg.queueProperty("buttons", apiKeyButtons);

panelAPIKeySetting.render();

var panelCSSSetting = new YAHOO.widget.Dialog("CSSSetting",  
                                                    { width: "600px", 
													  height: "400px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleCSSSettingCancel = function() {
    this.cancel();
}
var handleCSSSettingSubmit = function() {
    saveCss();
	this.cancel();
}
var cssSettingButtons = [{ text:"OK", handler:handleCSSSettingSubmit, isDefault:true },
                 { text:"Cancel", handler:handleCSSSettingCancel } ];
panelCSSSetting.cfg.queueProperty("buttons", cssSettingButtons);

panelCSSSetting.render();

//CSSSetting
var tabViewCSSSetting = new YAHOO.widget.TabView('tabCSSSetting');


var panelPreferences = new YAHOO.widget.Dialog("Preferences",  
                                                    { width: "600px", 
													  height: "400px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );

var handlePreferencesCancel = function() {
    this.cancel();
}
var handlePreferencesSubmit = function() {
    saveSetting();
	this.cancel();
}
var preferencesButtons = [{ text:"OK", handler:handlePreferencesSubmit, isDefault:true },
                 { text:"Cancel", handler:handlePreferencesCancel } ];
panelPreferences.cfg.queueProperty("buttons", preferencesButtons);

panelPreferences.render();

var tabViewPreferences = new YAHOO.widget.TabView('tabPreferences');



var panelProjectSetting = new YAHOO.widget.Dialog("ProjectSetting",  
                                                    { width: "600px", 
													  height: "400px",
                                                      fixedcenter: true, 
                                                      close: true, 
                                                      draggable: true, 
                                                      zindex:100,
                                                      visible: false,
													  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
                                                    } 
                                                );
var handleProjectSettingCancel = function() {
    this.cancel();
}
var handleProjectSettingSubmit = function() {
    saveSetting();
	this.cancel();
}
var projectSettingButtons = [{ text:"OK", handler:handleProjectSettingSubmit, isDefault:true },
                 { text:"Cancel", handler:handleProjectSettingCancel } ];
panelProjectSetting.cfg.queueProperty("buttons", projectSettingButtons);

panelProjectSetting.render();

var treeviewProjectSettingLibrary = new YAHOO.widget.TreeView("projectSettingLibraryTreeview");
treeviewProjectSettingLibrary.render();
treeviewProjectSettingLibrary.expandAll();

treeviewProjectSettingLibrary.subscribe("labelClick", projSettingLabelClicked);

function projSettingLabelClicked(node) {
	var label = node.getEl();
	if(label.getElementsByTagName("input")[0].checked == true) label.getElementsByTagName("input")[0].checked = false;
	else if(label.getElementsByTagName("input")[0].checked == false) label.getElementsByTagName("input")[0].checked = true;
}

//ProjectSetting
var tabViewProjectSetting = new YAHOO.widget.TabView('tabProjectSetting');

//ColorPicker
var handleColorPickerOK = function() {
	this.cancel();
}

var colorPickerDialog = new YAHOO.widget.Dialog("ColorPicker", { 
				width : "400px",
				close: true,
				fixedcenter : true,
				visible : false, 
				constraintoviewport : true,
				buttons : [ { text:"OK", handler:handleColorPickerOK, isDefault:true } ]
});


var colorPicker;

colorPickerDialog.renderEvent.subscribe(function() {
	if (!colorPicker) {
		colorPicker = new YAHOO.widget.ColorPicker("yui-picker", {
			container: colorPickerDialog,
			images: {
				PICKER_THUMB: "http://yui.yahooapis.com/2.7.0/build/colorpicker/assets/picker_thumb.png",
				HUE_THUMB: "http://yui.yahooapis.com/2.7.0/build/colorpicker/assets/hue_thumb.png"
			},
			showhexsummary: false,
			showwebsafe: true
		});

		colorPicker.on("rgbChange", function(o) {
			if(selectedObj == 0) {
				uizSetStyle("canvasDesign", "background-color", "#" + convertDecToHex(o.newValue[0], o.newValue[1], o.newValue[2]));
			}
			else {
				uizSetStyle("object"+selectedObj, "background-color", "#" + convertDecToHex(o.newValue[0], o.newValue[1], o.newValue[2]));
			}
		});
	}
});
				
colorPickerDialog.render();


///////////////////////////////////////////////////////////////////////////////////////////////////////////	
// Main Function
///////////////////////////////////////////////////////////////////////////////////////////////////////////	

(function() {

	var Dom = YAHOO.util.Dom,
	Event = YAHOO.util.Event;

	var initTopMenu = function() {

		var oMenuBar = new YAHOO.widget.MenuBar("mainMenu",
														{ 
                                                            autosubmenudisplay: true, 
                                                            hidedelay: 750, 
                                                            lazyload: true,
                                                            effect: { 
                                                                effect: YAHOO.widget.ContainerEffect.FADE,
                                                                duration: 0.25
                                                            } 
                                                        });
		var aSubmenuData = mainMenuData;

		oMenuBar.subscribe("beforeRender", function () {
			if (this.getRoot() == this) {
				this.getItem(0).cfg.setProperty("submenu", aSubmenuData[0]);
				this.getItem(1).cfg.setProperty("submenu", aSubmenuData[1]);
				this.getItem(2).cfg.setProperty("submenu", aSubmenuData[2]);
				this.getItem(3).cfg.setProperty("submenu", aSubmenuData[3]);
				this.getItem(4).cfg.setProperty("submenu", aSubmenuData[4]);
				this.getItem(5).cfg.setProperty("submenu", aSubmenuData[5]);
			}
		});
		
		oMenuBar.render();         
	};

	var initCanvas = function() {
		tabView = new YAHOO.widget.TabView();
		
		var tabDesign = new YAHOO.widget.Tab({
			label: '<img src="images/layout/design.png" align="absmiddle"> <b>Design</b>',
			content: '',
			active: true
		});		
		tabView.addTab(tabDesign);
		
		function clickedDesign() {
			uizSetStyle("canvasGrid", "width", uizGetStyle("canvasDesign", "width"));
			uizSetStyle("canvasGrid", "height", uizGetStyle("canvasDesign", "height"));
			uizSetStyle("canvasGrid", "left", uizGetStyle("canvasDesign", "left"));
			uizSetStyle("canvasGrid", "top", uizGetStyle("canvasDesign", "top")-uizGetStyle("canvasDesign", "height"));
				
			setObjStyle(selectedObj);
			
			layoutCanvas.getUnitByPosition('center').set("scroll", true);
			canvas1.show();
			canvas2.hide();
			canvas3.hide();
			canvas4.hide();
			canvas5.hide();
			canvas6.hide();
			canvas7.hide();
			writeMessage("you clicked a design tab");
		}				
		tabDesign.addListener('click', clickedDesign);

		var tabDataSource = new YAHOO.widget.Tab({
			label: '<img src="images/layout/datasource.png" align="absmiddle"> <b>DataSource</b>',
			content: ''
		});
		tabView.addTab(tabDataSource);
		
		function clickedDataSource() {
			layoutCanvas.getUnitByPosition('center').set("scroll", true);
			canvas1.hide();
			canvas2.show();
			canvas3.hide();
			canvas4.hide();
			canvas5.hide();
			canvas6.hide();
			canvas7.hide();
			writeMessage("you clicked a datasource tab");
		}				
		tabDataSource.addListener('click', clickedDataSource);		

		var tabCode = new YAHOO.widget.Tab({
			label: '<img src="images/layout/code.png" align="absmiddle"> <b>Code</b>',
			content: ''
		});
		tabView.addTab(tabCode);
		
		function clickedCode() {
			/*
			var height = uizGetElementById('textAreaCode').scrollHeight+4;			
			if(height > 300) {
				uizSetStyle("textAreaCode", "height", height.scrollHeight+"px");
			}
			*/
			
			codeEditor.focus();
			
			layoutCanvas.getUnitByPosition('center').set("scroll", false);
			canvas1.hide();
			canvas2.hide();
			canvas3.show();
			canvas4.hide();
			canvas5.hide();
			canvas6.hide();
			canvas7.hide();
			writeMessage("you clicked a code tab");
		}
		tabCode.on('click', clickedCode);		
		
		var tabRealCode = new YAHOO.widget.Tab({
			label: '<img src="images/layout/realcode.png" align="absmiddle"> <b>RealCode</b>',
			content: ''
		});
		tabView.addTab(tabRealCode);

		function clickedRealCode() {
			uizGetElementById('iframeRealCode').contentWindow.document.location.href = uizGetElementById('iframeRealCode').contentWindow.document.location.href;
			var height = uizGetElementById('iframeRealCode').contentWindow.document.body.scrollHeight;
			if(height > 1000) {			
				uizSetStyle("iframeRealCode", "height", height+"px");
				uizSetStyle("canvasRealCode", "height", (height+20)+"px");
			}

			layoutCanvas.getUnitByPosition('center').set("scroll", true);
			canvas1.hide();
			canvas2.hide();
			canvas3.hide();
			canvas4.show();
			canvas5.hide();
			canvas6.hide();
			canvas7.hide();
			writeMessage("you clicked a realcode tab");
		}				
		tabRealCode.on('click', clickedRealCode);		
		
		var tabHtml = new YAHOO.widget.Tab({
			label: '<img src="images/layout/html.png" align="absmiddle"> <b>Html</b>',
			content: ''
		});
		tabView.addTab(tabHtml);
		
		function clickedHtml() {
			/*
			var height = uizGetElementById('textAreaCode').scrollHeight+4;			
			if(height > 300) {
				uizSetStyle("textAreaCode", "height", height.scrollHeight+"px");
			}
			*/
			
			htmlEditor.focus();
			
			layoutCanvas.getUnitByPosition('center').set("scroll", false);
			canvas1.hide();
			canvas2.hide();
			canvas3.hide();
			canvas4.hide();
			canvas5.show();
			canvas6.hide();
			canvas7.hide();
			writeMessage("you clicked a html tab");
		}
		tabHtml.on('click', clickedHtml);			

		var tabRealHtml = new YAHOO.widget.Tab({
			label: '<img src="images/layout/realhtml.png" align="absmiddle"> <b>RealHtml</b>',
			content: ''
		});
		tabView.addTab(tabRealHtml);

		function clickedRealHtml() {
			uizGetElementById('iframeRealHtml').contentWindow.document.location.href = uizGetElementById('iframeRealHtml').contentWindow.document.location.href;
			var height = uizGetElementById('iframeRealHtml').contentWindow.document.body.scrollHeight;
			if(height > 1000) {			
				uizSetStyle("iframeRealHtml", "height", height+"px");
				uizSetStyle("canvasRealHtml", "height", (height+20)+"px");
			}

			layoutCanvas.getUnitByPosition('center').set("scroll", true);
			canvas1.hide();
			canvas2.hide();
			canvas3.hide();
			canvas4.hide();
			canvas5.hide();
			canvas6.show();
			canvas7.hide();
			writeMessage("you clicked a realhtml tab");
		}				
		tabRealHtml.on('click', clickedRealHtml);

		var tabPreview = new YAHOO.widget.Tab({
			label: '<img src="images/layout/preview.png" align="absmiddle"> <b>Preview</b>',
			content: ''
		});
		tabView.addTab(tabPreview);
		
		function clickedPreview() {
			uizGetElementById('iframeRealHtml').contentWindow.document.location.href = uizGetElementById('iframeRealHtml').contentWindow.document.location.href;
			uizGetElementById('iframePreview').contentWindow.document.location.href = uizGetElementById('iframePreview').contentWindow.document.location.href;
			var height = uizGetElementById('iframePreview').contentWindow.document.body.scrollHeight;
			if(height > 1000) {
				uizSetStyle("iframePreview", "height", height+"px");
				uizSetStyle("canvasPreview", "height", (height+20)+"px");			
			}
			
			layoutCanvas.getUnitByPosition('center').set("scroll", true);
			canvas1.hide();
			canvas2.hide();
			canvas3.hide();
			canvas4.hide();
			canvas5.hide();
			canvas6.hide();
			canvas7.show();
			writeMessage("you clicked a preview tab");
		}				
		tabPreview.addListener('click', clickedPreview);
		
		tabView.addListener('activeTabChange', objSaveCodeAndHtml);

		tabView.appendTo('canvasTab');
		
		var elementCenter = layout.getUnitByPosition('center').get('wrap'); 
		layoutCanvas = new YAHOO.widget.Layout(elementCenter, {
			parent: layout, 
			units: [
				{ position: 'top', body: 'canvasTab', scroll: false, height: 27, gutter: '0px 0px 0px 0px' },					
				{ position: 'center', body: 'canvasContainer', scroll: true, gutter: '0px 0px 0px 0px' }
			]
		});
		layoutCanvas.render();
		
		addCanvas();
		
		canvas1 = new YAHOO.widget.Module("canvas1", { visible: true });   
		canvas1.render("canvasContainer");
		canvas2 = new YAHOO.widget.Module("canvas2", { visible: false });   
		canvas2.render("canvasContainer");
		canvas3 = new YAHOO.widget.Module("canvas3", { visible: false });   
		canvas3.render("canvasContainer"); 
		canvas4 = new YAHOO.widget.Module("canvas4", { visible: false });   
		canvas4.render("canvasContainer"); 
		canvas5 = new YAHOO.widget.Module("canvas5", { visible: false });   
		canvas5.render("canvasContainer"); 
		canvas6 = new YAHOO.widget.Module("canvas6", { visible: false });   
		canvas6.render("canvasContainer"); 	
		canvas7 = new YAHOO.widget.Module("canvas7", { visible: false });   
		canvas7.render("canvasContainer"); 	
		
		uizGetElementById('objectStorage').innerHTML += "<div id='objectSelection' class='objBorder'></div>"
	};
	
	var initProperties = function() {
		var elementRight = layout.getUnitByPosition('right').get('wrap'); 
		layoutProperties = new YAHOO.widget.Layout(elementRight, {
			parent: layout, 
			units: [
				{ position: 'top', header: '<img src="images/layout/objects.png" align="absmiddle"> Object Explorer', body: 'divObjectsExplorer', scroll: true, resize: true, height: 200, gutter: '0px 0px 0px 1px' },					
				{ position: 'center', header: '<img src="images/layout/properties.png" align="absmiddle"> Properties', body: 'divProperties', scroll: true, gutter: '0px 0px 0px 0px' }
			]
		});
		layoutProperties.render();		
		
		uizGetElementById("objectsExplorerTreeview").innerHTML = uizGetElementById("objectsExplorerTreeviewDummy").innerHTML;
		treeviewObjects = new YAHOO.widget.TreeView("objectsExplorerTreeview");
		treeviewObjects.render();
		treeviewObjects.expandAll();
		
		treeviewObjects.subscribe("labelClick", labelClicked);
	};
	
	Event.onDOMReady(function() {
		layout = new YAHOO.widget.Layout({
			units:
			[
				{ position: 'top', height: 70, body: 'top1', scroll: null, zIndex: 2 },
				{ position: 'right', width: 350, resize: true, scroll: false, body: 'right1', animate: true, gutter: '0px 0px 0px 5px' },
				{ position: 'bottom', height: 200, body: 'bottom1', header: '<img src="images/layout/message.png" align="absmiddle"> Message', scroll: true, resize: true, collapse: true, gutter: '5px 0px 0px 0px' },
				{ position: 'left', header: '<img src="images/layout/toolbox.png" align="absmiddle"> Tool Box', width: 200, body: 'left1', scroll: true, zIndex: 1, resize: true, collapse: true, gutter: '0px 5px 0px 0px' },
				{ position: 'center', body: 'center1', scroll: false }
			]
		});
        
		layout.on('render', function() {
			YAHOO.util.Event.onContentReady("mainMenu", initTopMenu);  
			YAHOO.util.Event.onAvailable('canvas', initCanvas);
			YAHOO.util.Event.onAvailable('divProperties', initProperties);
		});
		
		layout.render();
		
	});

	function onFieldMenuRender(p_sType, p_aArgs) {
		if (this.parent) {  // submenu
			this.checkedItem = this.getItem(0);
		}
	}

	var oFieldContextMenuItemData = designCanvasContextMenuData;

	var oFieldContextMenu = new YAHOO.widget.ContextMenu(
		"fieldcontextmenu",
		{
			trigger: "canvasDesign",
			itemdata: oFieldContextMenuItemData,
			lazyload: true
		}
	);

	oFieldContextMenu.subscribe("render", onFieldMenuRender);
	
	

	
})();




/////////////////////////////////////////////////////////////////////////////////////////////////
// Loading Panel End
/////////////////////////////////////////////////////////////////////////////////////////////////
function makeCodeEditor() {
	var textarea1 = uizGetElementById('textAreaCode');
	
	codeEditor = new CodeMirror(CodeMirror.replace(textarea1), {
		parserfile : ["tokenizejavascript.js", "parsejavascript.js"],
		stylesheet : 'lib/codeMirror/css/jscolors.css',
		autoMatchParens: true,
		path : 'lib/codeMirror/js/',
		height : layoutCanvas.getUnitByPosition('center').get("height")+'px',
		lineNumbers: false,
		initCallback: loadProject,
		saveFunction: objSaveCode
	});
	
}

function makeHtmlEditor() {
	var textarea2 = uizGetElementById('textAreaHtml');
	
	htmlEditor = new CodeMirror(CodeMirror.replace(textarea2), {
		parserfile : "parsexml.js",
		stylesheet : 'lib/codeMirror/css/xmlcolors.css',
		autoMatchParens: true,
		path : 'lib/codeMirror/js/',
		height : layoutCanvas.getUnitByPosition('center').get("height")+'px',
		lineNumbers: false,
		saveFunction: objSaveHtml
	});	
}

function makeCssEditor() {
	var textarea3 = uizGetElementById('cssEditor');
	
	cssEditor = new CodeMirror(CodeMirror.replace(textarea3), {
		parserfile : "parsecss.js",
		stylesheet : 'lib/codeMirror/css/csscolors.css',
		autoMatchParens : true,
		content: textarea3.value,
		path : 'lib/codeMirror/js/',
		height : '270px',
		lineNumbers: false,
		saveFunction: saveCss
	});
}

function panelLoadinghide() {
	makeCodeEditor();
	makeHtmlEditor();
	makeCssEditor();

<?
if($_GET['action'] == "newProject") {
?>
	showNewProject();
<?
}
?>

	layout.getUnitByPosition('right').set("width", 350);
	
	//location.href = "#anchorTapTop";
}

function loadProject() {
	

<?
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
		$closebutton = $prt['closebutton'][$i]['value'];
		$draggable = $prt['draggable'][$i]['value'];
		$provider = $prt['provider'][$i]['value'];
		$datasourceURL = $prt['datasourceURL'][$i]['value'];
		$datasourceType = $prt['datasourceType'][$i]['value'];
		$resultNode = $prt['resultNode'][$i]['value'];
		$fields = $prt['fields'][$i]['value'];
		$query = $prt['query'][$i]['value'];
		
		echo "\t";
		
		if($type == "div") {
			echo "addObjDiv();\n";
		}		
		else if($type == "image") {
			echo "addObjImage();\n";
		}		
		else if($type == "swf") {
			echo "addObjSWF();\n";
		}	
		else if($type == "form") {
			echo "addObjForm();\n";
		}
		else if($type == "inputBox") {
			echo "addObjInputbox();\n";
		}	
		else if($type == "checkboxSet") {
			echo "addObjCheckboxSet();\n";
		}	
		else if($type == "radiobuttonSet") {
			echo "addObjRadiobuttonSet();\n";
		}		
		else if($type == "textArea") {
			echo "addObjTextarea();\n";
		}
		else if($type == "table") {
			echo "addObjTable();\n";
		}	
		else if($type == "timer") {
			echo "addObjTimer();\n";
		}	
		else if($type == "pushButton") {
			echo "addObjPushButton();\n";
		}
		else if($type == "radioButton") {
			echo "addObjRadioButton();\n";
		}
		else if($type == "checkboxButton") {
			echo "addObjCheckboxButton();\n";
		}
		else if($type == "colorPicker") {
			echo "addObjColorPicker();\n";
		}
		else if($type == "tabView") {
			echo "addObjTabview();\n";
		}
		else if($type == "dataTable") {
			echo "addObjDatatable();\n";
		}	
		else if($type == "calendar") {
			echo "addObjCalendar();\n";
		}	
		else if($type == "panel") {
			echo "addObjPanel();\n";
		}
		else if($type == "slider") {
			echo "addObjSlider();\n";
		}
		else if($type == "autoComplete") {
			echo "addObjAutoComplete();\n";
		}
		else if($type == "richTextEditor") {
			echo "addObjRichTextEditor();\n";
		}
		else if($type == "menuBar") {
			echo "addObjMenuBar();\n";
		}
		else if($type == "treeView") {
			echo "addObjTreeview();\n";
		}
		else if($type == "yuiChart") {
			echo "addObjYUIChart();\n";
		}
		else if($type == "paginator") {
			echo "addObjPaginator();\n";
		}
		else if($type == "dragAndDrop") {
			echo "addObjDragAndDrop();\n";
		}	
		else if($type == "resize") {
			echo "addObjResize();\n";
		}	
		else if($type == "mapDaum") {
			echo "addObjDaumMap();\n";
		}	
		else if($type == "mapGoogle") {
			echo "addObjGoogleMap();\n";
		}
		else if($type == "googleChart") {
			echo "addObjGoogleChart();\n";
		}
		else if($type == "mapNaver") {
			echo "addObjNaverMap();\n";
		}
		else if($type == "mapLive") {
			echo "addObjLiveMap();\n";
		}
		else if($type == "dataSource") {
			echo "addObjPushButton();\n";
		}

		if($type != "") {
			$code = str_replace("\n", "\\n", $code);
	
			$html = str_replace("\n", "\\n", $html);	
			
			echo "\tsetObjStyle(".$i.", '".$x."', '".$y."', '".$zindex."', '".$width."', '".$height."', '".$align."', '".$visibility."', '".$label."', '".$disabled."', '".$tabindex."', '".$datasourceNo."', '".$provider."', '".$datasourceURL."', '".$datasourceType."', '".$resultNode."', '".$fields."', '".$query."', '".$columnWidth."', '".$tabcount."', '".$src."', '".$action."', '".$method."', '".$target."', '".$value."', '".$backgroundColor."', '".$buttoncount."', '".$closebutton."', '".$draggable."', '".$code."', '".$html."', '".$interval."');\n";
			
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
}
?>
	loadSetting();
	loadCss();
	
	setTimeout('panelLoading.hide()', 600 + (objectCount*200));	
	

	if(demomode == true) {
		alert("This is Demo mode. If you log in, you can launch the complete version.");
	}
}


		

var eventReady = YAHOO.util.Event.on(window, "load", panelLoadinghide);

/////////////////////////////////////////////////////////////////////////////////////////////////


</script>
</body>
</html>