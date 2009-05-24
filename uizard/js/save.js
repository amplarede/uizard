/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

function saveProject() {
	writeMessage("<font color=#F90><b>Start Saving...</b></font>");
	writeMessage("<font color=gray><b>Saving the Properties...</b></font>");
	
	for(var i=0; i<objectCount; i++) {
		setTimeout('objClicked('+i+')', 500 + i*200);
	}
	
	setTimeout('writeMessage(\"<font color=green><b>Saving Complete.</b></font>\")', 500 + objectCount*200);
}

function saveCss() {
	writeMessage("<font color=#F90><b>Saving "+projectName+".css Start...</b></font>");
	
	var responseSuccess = function(o) {
		writeMessage("<font color=green><b>CSS File Saving Succeeded.</b></font>");
	 	cssEditor.setCode(o.responseText);
		var sheet = new YAHOO.util.StyleSheet(cssEditor.getCode());
		sheet.enable();
	};
	
	var responseFailure = function(o) {
		writeMessage("<font color=red><b>Saving Error : " + o.statusText + ".</b></font>");
	}
	
	var callback =
	{
		success:responseSuccess,
		failure:responseFailure,
	};	
	
	var transaction = YAHOO.util.Connect.asyncRequest('GET', "php/cssGenerator.php?mode=save&projectName=" + projectName + "&cssContent=" + encodeURIComponent(cssEditor.getCode()), callback); 
}

function saveSetting() {	
	writeMessage("<font color=#F90><b>Saving The Project Setting Start...</b></font>");
	
	var title = uizGetElementById("inputProjectTitle").value; 
	var owner = uizGetElementById("inputProjectOwner").value;  
	var description = uizGetElementById("textAreaProjectDescription").value; 
	var gridSize;
	if(gridSettingButtonGroup.get("checkedButton") == "Button yui-gen10") gridSize = 5;
	else if(gridSettingButtonGroup.get("checkedButton") == "Button yui-gen11") gridSize = 10;
	else if(gridSettingButtonGroup.get("checkedButton") == "Button yui-gen12") gridSize = 20;	
	var gridOpacity = gridSettingSlider.getValue() / 2;  
	var objectSelection = uizGetElementById("chkboxShowSelection").checked;
	var objectFill = uizGetElementById("chkboxFillSelection").checked; 
	var resizeHandle = uizGetElementById("chkboxShowResizeHandle").checked; 
	//var resizeProxy = uizGetElementById("chkboxProxyResize").checked; 
	var resizeProxy = true;
	//var dragProxy = uizGetElementById("chkboxProxyDrag").checked;  
	var dragProxy = true;
	var font = "false";  
	var lineSpacing = "false"; 
	var debuggerFireBug = uizGetElementById("chkboxDebuggerFireBug").checked;
	var YUI = uizGetElementById("chkboxUseYUI").checked; 
	var Prototype = uizGetElementById("chkboxUsePrototype").checked; 
	var jQuery = uizGetElementById("chkboxUsejQuery").checked; 
	var MooTools = uizGetElementById("chkboxUseMooTools").checked; 
	var Dojo = uizGetElementById("chkboxUseDojo").checked; 
	//var Jindo = uizGetElementById("chkboxUseJindo").checked; 		
	var SWFObject = uizGetElementById("chkboxUseSWFObject").checked; 
	
	var responseSuccess = function(o) {
		writeMessage("<font color=green><b>The Project Setting Saving Succeeded.</b></font>");
	};
	
	var responseFailure = function(o) {
		writeMessage("<font color=red><b>Saving Error : " + o.statusText + ".</b></font>");
	}
	
	var callback =
	{
		success:responseSuccess,
		failure:responseFailure,
	};	
	
	//var transaction = YAHOO.util.Connect.asyncRequest('GET', "php/xmlProject.php?mode=save&projectName=" + projectName + "&title=" + title + "&owner=" + owner + "&description=" + description + "&gridSize=" + gridSize + "&gridOpacity=" + gridOpacity + "&objectSelection=" + objectSelection + "&objectFill=" + objectFill + "&resizeHandle=" + resizeHandle + "&resizeProxy=" + resizeProxy + "&dragProxy=" + dragProxy + "&font=" + font + "&lineSpacing=" + lineSpacing + "&YUI=" + YUI + "&Prototype=" + Prototype + "&jQuery=" + jQuery + "&MooTools=" + MooTools + "&Dojo=" + Dojo + "&Jindo=" + Jindo + "&SWFObject=" + SWFObject, callback); 
	var transaction = YAHOO.util.Connect.asyncRequest('GET', "php/xmlProject.php?mode=save&projectName=" + projectName + "&title=" + title + "&owner=" + owner + "&description=" + description + "&gridSize=" + gridSize + "&gridOpacity=" + gridOpacity + "&objectSelection=" + objectSelection + "&objectFill=" + objectFill + "&resizeHandle=" + resizeHandle + "&resizeProxy=" + resizeProxy + "&dragProxy=" + dragProxy + "&font=" + font + "&lineSpacing=" + lineSpacing + "&debuggerFireBug=" + debuggerFireBug + "&YUI=" + YUI + "&Prototype=" + Prototype + "&jQuery=" + jQuery + "&MooTools=" + MooTools + "&Dojo=" + Dojo + "&SWFObject=" + SWFObject, callback); 
	
	if(objectSelection == true) {
		for(var i=0; i < objectCount; i++) {
			if(uizGetElementById("objectSelection"+i)) uizSetStyle("objectSelection"+i, "visibility", "visible");
		}
		showObjectSelection = true;
	}
	else {
		for(var i=0; i < objectCount; i++) {
			if(uizGetElementById("objectSelection"+i)) uizSetStyle("objectSelection"+i, "visibility", "hidden");
		}
		showObjectSelection = false;		
	}
	
	if(objectFill == true) {
		fillObjectSelection = true;
		
		var sheet = new YAHOO.util.StyleSheet(".objBorder { background-color: #FFC8C8; }");
		sheet.enable();
	}
	else if(objectFill == false) {
		fillObjectSelection = false;
		
		var sheet = new YAHOO.util.StyleSheet(".objBorder { background-color: transparent; }");
		sheet.enable();
	}
	
	if(resizeHandle == true) {
		uizGetElementById("chkboxShowResizeHandle").checked = true;
		hoverResizeHandle = false;
	}
	else if(resizeHandle == false) {
		uizGetElementById("chkboxShowResizeHandle").checked = false;
		hoverResizeHandle = true;
	}
	/*
	if(resizeProxy == true) {
		uizGetElementById("chkboxProxyResize").checked = true;
		proxyResize = true;
	}
	else if(resizeProxy == false) {
		uizGetElementById("chkboxProxyResize").checked = false;
		proxyResize = false;
	}
	*/
}