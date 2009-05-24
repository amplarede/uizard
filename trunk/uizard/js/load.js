/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

function loadCss() {
	writeMessage("<font color=#F90><b>Loading "+projectName+".css Start...</b></font>");
	
	var responseSuccess = function(o) {
		writeMessage("<font color=green><b>CSS File Loading Succeeded.</b></font>");
	 	cssEditor.setCode(o.responseText);
	};
	
	var responseFailure = function(o) {
		writeMessage("<font color=red><b>Loading Error : " + o.statusText + ".</b></font>");
	}
	
	var callback =
	{
		success:responseSuccess,
		failure:responseFailure,
	};	
	
	var transaction = YAHOO.util.Connect.asyncRequest('GET', "php/cssGenerator.php?mode=load&projectName=" + projectName, callback); 
}

function loadSetting() {
	writeMessage("<font color=#F90><b>Loading The Project Setting Start...</b></font>");
	
	var responseSuccess = function(o) {
		var root = o.responseXML.documentElement;
		var title = root.getElementsByTagName('title')[0].firstChild.data; 		
		var owner = root.getElementsByTagName('owner')[0].firstChild.data; 
		var description = root.getElementsByTagName('description')[0].firstChild.data; 
		var gridSize = root.getElementsByTagName('gridSize')[0].firstChild.data; 
		var gridOpacity = root.getElementsByTagName('gridOpacity')[0].firstChild.data; 
		var objectSelection = root.getElementsByTagName('objectSelection')[0].firstChild.data; 
		var objectFill = root.getElementsByTagName('objectFill')[0].firstChild.data; 
		var resizeHandle = root.getElementsByTagName('resizeHandle')[0].firstChild.data; 
		//var resizeProxy = root.getElementsByTagName('resizeProxy')[0].firstChild.data; 
		//var dragProxy = root.getElementsByTagName('dragProxy')[0].firstChild.data; 
		var font = root.getElementsByTagName('font')[0].firstChild.data; 
		var lineSpacing = root.getElementsByTagName('lineSpacing')[0].firstChild.data;
		var debuggerFireBug = root.getElementsByTagName('debuggerFireBug')[0].firstChild.data;
		var YUI = root.getElementsByTagName('YUI')[0].firstChild.data;
		var Prototype = root.getElementsByTagName('Prototype')[0].firstChild.data;
		var jQuery = root.getElementsByTagName('jQuery')[0].firstChild.data;
		var MooTools = root.getElementsByTagName('MooTools')[0].firstChild.data;
		var Dojo = root.getElementsByTagName('Dojo')[0].firstChild.data;
		//var Jindo = root.getElementsByTagName('Jindo')[0].firstChild.data;		
		var SWFObject = root.getElementsByTagName('SWFObject')[0].firstChild.data;
		
		
		uizGetElementById("inputProjectTitle").value = title;
		uizGetElementById("inputProjectOwner").value = owner;
		uizGetElementById("textAreaProjectDescription").value = description;
		
		if(gridSize == "5") gridSettingButtonGroup.check(0);
		else if(gridSize == "10") gridSettingButtonGroup.check(1);
		else if(gridSize == "20") gridSettingButtonGroup.check(2);		

		gridSettingSlider.setValue(parseInt(gridOpacity) * 2);
		
		if(objectSelection == "true") {
			uizGetElementById("chkboxShowSelection").checked = true;
			showObjectSelection = true;
		}
		else if(objectSelection == "false") {
			uizGetElementById("chkboxShowSelection").checked = false;
			showObjectSelection = false;
		}
		if(objectFill == "true") {
			uizGetElementById("chkboxFillSelection").checked = true;
			fillObjectSelection = true;
			
			var sheet = new YAHOO.util.StyleSheet(".objBorder { background-color: #FFC8C8; }");
			sheet.enable();
		}
		else if(objectFill == "false") {
			uizGetElementById("chkboxFillSelection").checked = false;
			fillObjectSelection = false;
			
			var sheet = new YAHOO.util.StyleSheet(".objBorder { background-color: transparent; }");
			sheet.enable();
		}
		if(resizeHandle == "true") {
			uizGetElementById("chkboxShowResizeHandle").checked = true;
			hoverResizeHandle = false;
		}
		else if(resizeHandle == "false") {
			uizGetElementById("chkboxShowResizeHandle").checked = false;
			hoverResizeHandle = true;
		}
		
		/*
		if(resizeProxy == "true") {
			uizGetElementById("chkboxProxyResize").checked = true;
			proxyResize = true;
		}
		else if(resizeProxy == "false") {
			uizGetElementById("chkboxProxyResize").checked = false;
			proxyResize = false;
		}
		if(dragProxy == "true") uizGetElementById("chkboxProxyDrag").checked = dragProxy;
		else if(dragProxy == "false") uizGetElementById("chkboxProxyDrag").checked = false;
		*/
		
		//uizGetElementById("").value = font;
		//uizGetElementById("").value = lineSpacing;
		
		if(debuggerFireBug == "true") uizGetElementById("chkboxDebuggerFireBug").checked = true;
		else if(debuggerFireBug == "false") uizGetElementById("chkboxDebuggerFireBug").checked = false;
		
		if(YUI == "true") uizGetElementById("chkboxUseYUI").checked = true;
		else if(YUI == "false") uizGetElementById("chkboxUseYUI").checked = false;
		if(Prototype == "true") uizGetElementById("chkboxUsePrototype").checked = true;
		else if(Prototype == "false") uizGetElementById("chkboxUsePrototype").checked = false;
		if(jQuery == "true") uizGetElementById("chkboxUsejQuery").checked = true;
		else if(jQuery == "false") uizGetElementById("chkboxUsejQuery").checked = false;
		if(MooTools == "true") uizGetElementById("chkboxUseMooTools").checked = true;
		else if(MooTools == "false") uizGetElementById("chkboxUseMooTools").checked = false;
		if(Dojo == "true") uizGetElementById("chkboxUseDojo").checked = true;
		else if(Dojo == "false") uizGetElementById("chkboxUseDojo").checked = false;
		//if(Jindo == "true") uizGetElementById("chkboxUseJindo").checked = true;
		//else if(Jindo == "false") uizGetElementById("chkboxUseJindo").checked = false;
		if(SWFObject == "true") uizGetElementById("chkboxUseSWFObject").checked = true;
		else if(SWFObject == "false") uizGetElementById("chkboxUseSWFObject").checked = false;
		
		writeMessage("<font color=green><b>Project Setting has been successfully loaded.</b></font>");
	};
	
	var responseFailure = function(o) {
		writeMessage("<font color=red><b>Loading Error : " + o.statusText + ".</b></font>");
	}
	
	var callback =
	{
		success:responseSuccess,
		failure:responseFailure,
	};	
	
	var transaction = YAHOO.util.Connect.asyncRequest('GET', "php/xmlProject.php?mode=load&projectName=" + projectName, callback); 
}


function loadAPIKeys() {
	writeMessage("<font color=#F90><b>Loading The API Keys Start...</b></font>");
	
	var responseSuccess = function(o) {
		var root = o.responseXML.documentElement;
		APIKeyGoogleMap = root.getElementsByTagName('GoogleMapAPI')[0].firstChild.data; 
		APIKeyYahoo = root.getElementsByTagName('YahooAPI')[0].firstChild.data;
		APIKeyNaverData = root.getElementsByTagName('NaverDataAPI')[0].firstChild.data;
		APIKeyNaverMap = root.getElementsByTagName('NaverMapAPI')[0].firstChild.data;
		APIKeyDaumSearch = root.getElementsByTagName('DaumSearchAPI')[0].firstChild.data;
		APIKeyDaumShopping = root.getElementsByTagName('DaumShoppingAPI')[0].firstChild.data;
		APIKeyDaumContents = root.getElementsByTagName('DaumContentsAPI')[0].firstChild.data;
		APIKeyDaumMAp = root.getElementsByTagName('DaumMapAPI')[0].firstChild.data;
		APIKeyLiveData = root.getElementsByTagName('LiveDataAPI')[0].firstChild.data;
		
		writeMessage("<font color=green><b>API Keys has been successfully loaded.</b></font>");
	}
	
	var responseFailure = function(o) {
		writeMessage("<font color=red><b>API Keys Loading Error : " + o.statusText + ".</b></font>");
	}
	
	var callback =
	{
		success:responseSuccess,
		failure:responseFailure,
	};	
	
	var transaction = YAHOO.util.Connect.asyncRequest('GET', "projects/" + projectName + "/apiKeys.xml", callback); 
}

function loadTemplateList(indexCategory) {
	writeMessage("<font color=#F90><b>Loading The Project Templates Start...</b></font>");
	
	var responseSuccess = function(o) {
		uizGetElementById("projectCategory").innerHTML = "";
		uizGetElementById("projectType").innerHTML = "";
		
		var root = o.responseXML.documentElement;
		var TemplateCategory = root.getElementsByTagName('TemplateCategory');
		
		for(var i=0; i<TemplateCategory.length; i++) {
			var TemplateCategoryName 		= TemplateCategory[i].getElementsByTagName('TemplateCategoryName')[0].firstChild.data;
			var TemplateCategoryDirectory 	= TemplateCategory[i].getElementsByTagName('TemplateCategoryDirectory')[0].firstChild.data;
			var TemplateCategoryIcon 		= TemplateCategory[i].getElementsByTagName('TemplateCategoryIcon')[0].firstChild.data;
			var TemplateType		 		= TemplateCategory[i].getElementsByTagName('TemplateType');
			
			var bgImage = "categoryBg.png";
			var fontColor = "#333";
			
			if(i == indexCategory) {
				for(var j=0; j<TemplateType.length; j++) {
					var TemplateTypeName	= TemplateType[j].getElementsByTagName('TemplateTypeName')[0].firstChild.data;
					var TemplateTypeFile	= TemplateType[j].getElementsByTagName('TemplateTypeFile')[0].firstChild.data;				
					var TemplateTypeIcon	= TemplateType[j].getElementsByTagName('TemplateTypeIcon')[0].firstChild.data;
					var Width 				= TemplateType[j].getElementsByTagName('Width')[0].firstChild.data;
					var Height 				= TemplateType[j].getElementsByTagName('Height')[0].firstChild.data;
					
					uizGetElementById("projectType").innerHTML += "<div style='float:left; width:120px; text-align:center;'><a href='#' onClick='createProject(\"" + TemplateTypeFile + "\", \"" + Width + "\", \"" + Height + "\");'><img src='config/template/" + TemplateCategoryDirectory + "/" + TemplateTypeIcon + "' border='0'><br>New Project<br />(" + TemplateTypeName + ")</a></div>";
				}
				
				bgImage = "categoryBgSelected.png";
				fontColor = "#FFF";
			}
			
			uizGetElementById("projectCategory").innerHTML += "<div style='height:40px; border-bottom:1px solid #CCC; background:url(images/layout/" + bgImage + "); cursor:pointer;' onclick='loadTemplateList(" + i + ")'><div style='float:left; width:40px; height:40px; border-bottom:1px solid #CCC;'><img src='config/template/" + TemplateCategoryIcon + "' border='0' /></div><div style='float:right; margin-top:6px; width:125px; font-size:11px; font-weight:bold; color:" + fontColor + "; padding-right:5px;'>" + TemplateCategoryName + "</div></div>";
		}
		
		writeMessage("<font color=green><b>Project Templates has been successfully loaded.</b></font>");
	}
	
	var responseFailure = function(o) {
		writeMessage("<font color=red><b>Project Templates Loading Error : " + o.statusText + ".</b></font>");
	}
	
	var callback =
	{
		success:responseSuccess,
		failure:responseFailure,
	};	

	var transaction = YAHOO.util.Connect.asyncRequest('GET', "config/template/templateList.xml", callback); 
}