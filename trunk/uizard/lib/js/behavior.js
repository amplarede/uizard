/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function canvasClicked() {
	if(objectMouseOver == false) {
		objClicked(0);
	}
}

function canvasDblClicked() {
	if(objectMouseOver == false) {
		objDblClicked(0);
	}
}

function objMouseOver() {
	objectMouseOver = true;
}

function objMouseOut() {
	objectMouseOver = false;
}

function objClicked(objCount) {
	selectedObj = objCount;
	
	if(uizObj[objCount].type == "canvas") {
		uizSetStyle("objectSelection", "visibility", "hidden");
	}
	else if(uizObj[objCount].type == "mapGoogle" || uizObj[objCount].type == "mapYahoo" || uizObj[objCount].type == "mapDaum" || uizObj[objCount].type == "mapNaver" || uizObj[objCount].type == "mapLive" || uizObj[objCount].type == "pushButton" || uizObj[objCount].type == "checkboxButton") {
		setDragAndDropObj(objCount);
	}
	else if(uizObj[objCount].type != "canvas" || uizObj[objCount].type != "panel") {
		setResizeObj(objCount);
	}

	if(uizObj[objCount].contextMenu != null) {
		uizObj[objCount].contextMenu.destroy();
	}

	if(uizObj[objCount].type == "checkboxSet") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
																	trigger: "object"+objCount,
																	lazyload: true, 
																	itemdata: [
																		[
																		{ text: "Add a Checkbox", onclick: { fn: addCheckboxSetItem } },
																		{ text: "Remove a Checkbox", onclick: { fn: removeCheckboxSetItem } }
																		],
																		[
																		{ text: "View the Javascript Code", onclick: { fn: viewCode } },
																		{ text: "View the Html Code", onclick: { fn: viewHtml } }
																		],																		
																		[
																		{ text: "Delete", onclick: { fn: deleteObj } }
																		]
																	] });		
	}
	else if(uizObj[objCount].type == "radiobuttonSet") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
																	trigger: "object"+objCount,
																	lazyload: true, 
																	itemdata: [
																		[
																		{ text: "Add a Radiobutton", onclick: { fn: addRadioButtonSetItem } },
																		{ text: "Remove a Radiobutton", onclick: { fn: removeRadioButtonSetItem } }
																		],
																		[
																		{ text: "View the Javascript Code", onclick: { fn: viewCode } },
																		{ text: "View the Html Code", onclick: { fn: viewHtml } }
																		],																		
																		[
																		{ text: "Delete", onclick: { fn: deleteObj } }
																		]
																	] });		
	}
	else if(uizObj[objCount].type == "tabView") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
																	trigger: "object"+objCount,
																	lazyload: true, 
																	itemdata: [
																		[
																		{ text: "Add the Tab", onclick: { fn: addTabItem } },
																		{ text: "Remove the Tab", onclick: { fn: removeTabItem } }
																		],
																		[
																		{ text: "View the Javascript Code", onclick: { fn: viewCode } },
																		{ text: "View the Html Code", onclick: { fn: viewHtml }, disabled: true }
																		],																		
																		[
																		{ text: "Delete", onclick: { fn: deleteObj } }
																		]
																	] });	
	}
	else if(uizObj[objCount].type == "radioButton") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
                                                                trigger: "object"+objCount,
                                                                lazyload: true, 
                                                                itemdata: [
                                                                    [
																	{ text: "Add a Radio Button", onclick: { fn: addRadioButtonItem } },
																	{ text: "Remove a Radio Button", onclick: { fn: removeRadioButtonItem } }
																	],
                                                                    [
																	{ text: "View the Javascript Code", onclick: { fn: viewCode } },
																	{ text: "View the Html Code", onclick: { fn: viewHtml }, disabled: true }
																	],																	
																	[
																	{ text: "Delete", onclick: { fn: deleteObj } }
																	]
                                                                ] });
	}
	else {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
                                                                trigger: "object"+objCount,
                                                                lazyload: true, 
                                                                itemdata: [
                                                                    [
																	{ text: "View the Javascript Code", onclick: { fn: viewCode } },
																	{ text: "View the Html Code", onclick: { fn: viewHtml } }
																	],																		   
																	[
																	{ text: "Delete", onclick: { fn: deleteObj } }
																	]
                                                                ] });		
	}
	

	
	getObjStyle(objCount);
	codeEditor.setCode(uizObj[objCount].code);
	htmlEditor.setCode(uizObj[objCount].html);
	
	if(uizObj[objCount].type != "canvas") {
		var left = uizGetStyle("object"+objCount, "left");
		left = parseInt(replaceAll(left, "px", ""));
		var top = uizGetStyle("object"+objCount, "top");
		top = parseInt(replaceAll(top, "px", ""));
		var width = uizGetStyle("object"+objCount, "width");
		width = parseInt(replaceAll(width, "px", ""));
		var height = uizGetStyle("object"+objCount, "height");
		height = parseInt(replaceAll(height, "px", ""));		
		uizSetStyle("objectSelection", "left", (left-2) + "px");
		uizSetStyle("objectSelection", "top", (top-2) + "px");
		uizSetStyle("objectSelection", "width", (width+2) + "px");
		uizSetStyle("objectSelection", "height", (height+2) + "px");
		uizSetStyle("objectSelection", "visibility", uizGetStyle("object"+objCount, "visibility"));		
	}
	
	//writeMessage("<font color=blue><b>You selected the object#" + selectedObj + "</b></font>");
}

function objDblClicked(objCount) {
	selectedObj = objCount;
	
	viewCode();
}

function viewCode() {
	canvas1.hide();
	canvas2.hide();
	canvas3.show();
	canvas4.hide();
	canvas5.hide();
	canvas6.hide();
	canvas7.hide();
	
	getObjStyle(selectedObj);
	codeEditor.setCode(uizObj[selectedObj].code);
	
	tabView.set('activeIndex', 2);
	codeEditor.focus();
	
	writeMessage("Edit object#"+selectedObj+" Code");
}

function viewHtml() {
	canvas1.hide();
	canvas2.hide();
	canvas3.hide();
	canvas4.hide();
	canvas5.show();
	canvas6.hide();
	canvas7.hide();
	
	getObjStyle(selectedObj);
	htmlEditor.setCode(uizObj[selectedObj].html);
	
	tabView.set('activeIndex', 4);
	htmlEditor.focus();

	writeMessage("Edit object#"+selectedObj+" Html");	
}

function objDsClicked(objCount) {
	selectedObj = objCount;

	getObjStyle(objCount);
}

function objSaveCodeAndHtml() {
	objSaveCode();
	objSaveHtml();
}

function objSaveCode() {
	if(tabView.get('activeIndex') != 2 && codeEditor.getCode() != "") {	
		uizObj[selectedObj].code = codeEditor.getCode();
		getObjStyle(selectedObj);
		writeMessage("<font color=#F90><b>Code saved. (object#" + selectedObj + ")</b></font>");
	}
}

function objSaveHtml() {
	if(tabView.get('activeIndex') != 4 && htmlEditor.getCode() != "") {	
		uizObj[selectedObj].html = htmlEditor.getCode();
		getObjStyle(selectedObj);
		writeMessage("<font color=#F90><b>HTML saved. (object#" + selectedObj + ")</b></font>");
	}
}

function setResizeObj(objCount) {
	uizObj[objCount].resize = null;
	uizObj[objCount].resize = new YAHOO.util.Resize('object' + objCount, {
		handles: 'tr, tl, br, bl',
		knobHandles: true,
		hover: true,
		status: true,
		draggable: false,
		ghost: true,
		proxy: true
	});
	
	if(uizObj[objCount].type != "mapGoogle" && uizObj[objCount].type != "mapYahoo" && uizObj[objCount].type != "mapDaum" && uizObj[objCount].type != "mapNaver") uizObj[objCount].resize.set("draggable", true);

	var resizeEndMsg = function (args) {
		setObjStyle(selectedObj);		
	};
	
	uizObj[objCount].resize.subscribe("endResize", resizeEndMsg);
	
	uizObj[objCount].resize.on("resize", function(args) {
		if(uizObj[selectedObj].type == "panel") {
			var panelWidth = args.width;
			var panelHeight = args.height;  
			uizObj[selectedObj].obj.cfg.setProperty("height", panelWidth + "px");	
		}
		if(uizObj[selectedObj].type == "googleChart") {
			var imgWidth = args.width;  
			var imgHeight = args.height;
			uizGetElementById('objectImg'+selectedObj).src = "http://chart.apis.google.com/chart?cht=p3&chd=t:60,40&chs="+imgWidth+"x"+imgHeight;
		}
	});
}

function setDragAndDropObj(objCount) {
	uizObj[objCount].dragAndDrop = new YAHOO.util.DD("object"+selectedObj);
	
	uizObj[objCount].dragAndDrop.setOuterHandleElId("object"+selectedObj+"Handle");  
	
	function draging() {
		uizSetStyle("object"+selectedObj+"Handle", "left", uizGetStyle("object"+selectedObj, "left"));
		uizSetStyle("object"+selectedObj+"Handle", "top", uizGetStyle("object"+selectedObj, "top"));
		uizSetStyle("object"+selectedObj+"Handle", "z-index", uizGetStyle("object"+selectedObj, "z-index")+1);
	}
	
	function mouseUp() {
		getObjStyle(selectedObj);
	}
	
	uizObj[objCount].dragAndDrop.subscribe("dragEvent", draging);
	uizObj[objCount].dragAndDrop.subscribe("mouseUpEvent", mouseUp);
}

function setProperties(objCount, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval) {
	var uri = "php/xmlio.php?projectName="+projectName+"&objNo=" + objCount + "&type=" + uizObj[objCount].type + "&x=" + x + "&y=" + y + "&z-index=" + zindex + "&width=" + width + "&height=" + height + "&align=" + align + "&visibility=" + visibility;

	if(uizObj[objCount].type == "canvas") {
		uri += "&backgroundColor=" + backgroundColor;
	}	
	if(uizObj[objCount].type == "pushButton" || uizObj[objCount].type == "checkboxButton") {
		uri += "&label=" + label;
		uri += "&disabled=" + disabled;
		uri += "&tabindex=" + tabindex;
	}
	if(uizObj[objCount].type == "autoComplete" || uizObj[objCount].type == "dataTable") {
		uri += "&datasourceNo=" + datasourceNo;
	}
	if(uizObj[objCount].type == "dataSource") {
		uri += "&provider=" + provider;
		uri += "&datasourceURL=" + escape(datasourceURL);
		uri += "&datasourceType=" + datasourceType;
		uri += "&resultNode=" + resultNode;
		uri += "&query=" + query;	
	}
	if(uizObj[objCount].type == "dataSource" || uizObj[objCount].type == "dataTable") {
		uri += "&fields=" + fields;	
	}
	if(uizObj[objCount].type == "dataTable") {
		uri += "&columnWidth=" + columnWidth;
	}	
	if(uizObj[objCount].type == "tabView") {
		uri += "&tabcount=" + tabcount;
	}
	if(uizObj[objCount].type == "image" || uizObj[objCount].type == "googleChart") {
		uri += "&src=" + replaceAll(src, "&", "!and");
	}
	if(uizObj[objCount].type == "swf") {
		uri += "&src=" + replaceAll(src, "&", "!and");
	}
	if(uizObj[objCount].type == "form") {
		uri += "&action=" + replaceAll(action, "&", "!and");
		uri += "&method=" + method;
		uri += "&target=" + target;
	}
	if(uizObj[objCount].type == "inputBox") {
		uri += "&value=" + value;
	}	
	if(uizObj[objCount].type == "div" || uizObj[objCount].type == "table") {
		uri += "&backgroundColor=" + backgroundColor;
	}
	if(uizObj[objCount].type == "radioButton") {
		uri += "&buttoncount=" + buttoncount;
	}
	if(uizObj[objCount].type == "panel") {
		uri += "&closebutton=" + closebutton;
		uri += "&draggable=" + draggable;
	}
	if(uizObj[objCount].type == "timer") {
		uri += "&interval=" + interval;
	}	
	
	if(html != null) {
		uizObj[objCount].html = html;
		html = replaceAll(html, "\n", "!nl");
		html = replaceAll(html, "&", "!and");
		html = replaceAll(html, "+", "!plus");
	}
	else {
		html = uizObj[objCount].html;
	}	
	uri += "&html=" + html;	

	if(code != null) {
		uizObj[objCount].code = code;
		code = replaceAll(code, "\n", "!nl");
		code = replaceAll(code, "&", "!and");
		code = replaceAll(code, "+", "!plus");
	}
	else {
		code = uizObj[objCount].code;
	}
	uri += "&code=" + code;
	
	
	var dataProperties = new YAHOO.util.DataSource(uri);
	dataProperties.connMethodPost = true; 
	dataProperties.responseType = YAHOO.util.DataSource.TYPE_XML;
	dataProperties.responseSchema = { 
		resultNode: "property", 
		fields: ["id","value"] 
	};
	
	var textboxCellEditor = new YAHOO.widget.TextboxCellEditor({disableBtns:true});
	
	tableColumnDefs = [
		{key:"id", label:"ID", sortable:false, width:100 },
		{key:"value", label:"VALUE", sortable:false, width:198, editor: textboxCellEditor}
	];
	
	tableProperties = new YAHOO.widget.DataTable("divProperties", tableColumnDefs, dataProperties);

	var highlightEditableCell = function(oArgs) { 
		var elCell = oArgs.target; 
		if(YAHOO.util.Dom.hasClass(elCell, "yui-dt-editable")) { 
			this.highlightCell(elCell); 
		}
	};
	
	var onCellEdit = function(oArgs) {
		var elCell = oArgs.editor.getTdEl();
		var parsingData = this.getTrEl(elCell).innerHTML;		
		var parsingLength = parsingData.length;
		var parsingStartPoint = parsingData.indexOf("er\">") + 4;
		var parsingEndPoint = parsingData.indexOf("</div>");
		var parsedData = parsingData.substr(parsingStartPoint, parsingEndPoint - parsingStartPoint);
		
		var newData = oArgs.newData;
		var x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code;
		
		if(parsedData == "x") { x = newData; }
		else if(parsedData == "y") { y = newData; }
		else if(parsedData == "z-index") { zindex = newData; }
		else if(parsedData == "width") { width = newData; }
		else if(parsedData == "height") { height = newData; }
		else if(parsedData == "align") { align = newData; }
		else if(parsedData == "visibility") { visibility = newData; }	
		//pushButton | checkboxButton
		else if(parsedData == "label") { label = newData; }
		else if(parsedData == "disabled") { disabled = newData; }
		else if(parsedData == "tabindex") { tabindex = newData; }	
		//autoComplete
		else if(parsedData == "datasourceNo") { datasourceNo = newData; }
		//dataSource
		else if(parsedData == "provider") { provider = newData; }		
		else if(parsedData == "datasourceURL") { datasourceURL = newData; }
		else if(parsedData == "datasourceType") { datasourceType = newData; }
		else if(parsedData == "resultNode") { resultNode = newData; }
		else if(parsedData == "query") { query = newData; }	
		//dataSource | dataTable
		else if(parsedData == "fields") { fields = newData; }	
		//dataTable
		else if(parsedData == "columnWidth") columnWidth = newData;
		//tabView
		else if(parsedData == "tabcount") { tabcount = newData; }	
		//image, swf
		else if(parsedData == "src") { src = newData; }
		//form
		else if(parsedData == "action") { action = newData; }
		else if(parsedData == "method") { method = newData; }
		else if(parsedData == "target") { target = newData; }
		//inputBox
		else if(parsedData == "value") { value = newData; }
		//div
		else if(parsedData == "backgroundColor") { backgroundColor = newData; }
		//radioButton
		else if(parsedData == "buttoncount") { buttoncount = newData; }	
		//panel
		else if(parsedData == "closebutton") { closebutton = newData; }			
		else if(parsedData == "draggable") { draggable = newData; }
		//timer
		else if(parsedData == "timer") { interval = newData; }
		
		
		code = uizObj[selectedObj].code;
		
		html = uizObj[selectedObj].html;
		
		setObjStyle(selectedObj, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval);
		
		writeMessage("<font color=green><b>" + parsedData + " is changed to " + newData + " (object#" + objCount + ")</b></font>");
	};
	
	tableProperties.subscribe("cellMouseoverEvent", highlightEditableCell); 
	tableProperties.subscribe("cellMouseoutEvent", tableProperties.onEventUnhighlightCell); 
	tableProperties.subscribe("cellClickEvent", tableProperties.onEventShowCellEditor); 
	tableProperties.subscribe("editorSaveEvent", onCellEdit);
}

function getObjStyle(objCount) {
	var x = uizGetStyle("object"+objCount, "left");
	var y = uizGetStyle("object"+objCount, "top");
	var zindex = uizGetStyle("object"+objCount, "z-index");
	var width = uizGetStyle("object"+objCount, "width");
	var height = uizGetStyle("object"+objCount, "height");
	var align = uizGetStyle("object"+objCount, "text-align");
	var visibility = uizGetStyle("object"+objCount, "visibility");
	//pushButton | checkboxButton
	var label = "";	
	var disabled = "";
	var tabindex = "";
	//autoComplete
	var datasourceNo = "";
	//dataSource
	var provider = "";
	var datasourceURL = "";
	var datasourceType = "";
	var resultNode = "";
	var query = "";
	//dataSource | dataTable
	var fields = "";
	//dataTable
	var columnWidth = "";
	//tabView
	var tabcount = "";
	//image, swf
	var src = "";
	//form
	var action = "";
	var method = "";
	var target = "";
	//inputBox
	var value = "";
	//div
	var backgroundColor = "";
	//buttoncount
	var buttoncount = "";	
	//panel
	var closebutton = "";
	var draggable = "";
	//timer 
	var interval = "";
	
	//code
	var code = "";
	//html
	var html = "";

	if(uizObj[objCount].type == "canvas") {
		width = uizGetStyle("canvasDesign", "width");
		height = uizGetStyle("canvasDesign", "height");
		backgroundColor = uizGetStyle("canvasDesign", "background-color");
	}
	if(uizObj[objCount].type == "pushButton" || uizObj[objCount].type == "checkboxButton") {
		label= uizObj[objCount].obj.get("label");
		disabled = uizObj[objCount].disabled;
		tabindex = uizObj[objCount].tabindex;
	}
	if(uizObj[objCount].type == "autoComplete" || uizObj[objCount].type == "dataTable") {
		datasourceNo = uizObj[objCount].datasourceNo;
	}
	if(uizObj[objCount].type == "dataSource") {
		provider = uizObj[objCount].provider;
		datasourceURL = uizObj[objCount].obj.liveData;
		datasourceType = uizObj[objCount].datasourceType;
		resultNode = uizObj[objCount].resultNode;
		query = uizObj[objCount].query;
	}	
	if(uizObj[objCount].type == "dataSource" || uizObj[objCount].type == "dataTable") {
		fields = uizObj[objCount].fields;
	}
	if(uizObj[objCount].type == "dataTable") {
		columnWidth = uizObj[objCount].columnWidth;
	}	
	if(uizObj[objCount].type == "tabView") {
		tabcount = uizObj[objCount].childCount;
	}
	if(uizObj[objCount].type == "image" || uizObj[objCount].type == "googleChart") {
		src = uizGetElementById("objectImg"+objCount).src;
	}
	if(uizObj[objCount].type == "swf") {
		src = uizGetElementById("objectSWF"+objCount).data;
	}
	if(uizObj[objCount].type == "form") {
		action = uizGetElementById("objectForm"+objCount).action;
		method = uizGetElementById("objectForm"+objCount).method;
		target = uizGetElementById("objectForm"+objCount).target;
	}		
	if(uizObj[objCount].type == "inputBox") {
		value = uizGetElementById("objectInput"+objCount).value;
	}
	if(uizObj[objCount].type == "div" || uizObj[objCount].type == "table") {
		backgroundColor = uizGetStyle("object"+objCount, "background-color");
	}
	if(uizObj[objCount].type == "radioButton") {
		buttoncount = uizObj[objCount].childCount;
	}
	if(uizObj[objCount].type == "panel") {
		closebutton = uizObj[objCount].obj.cfg.getProperty("close");
		draggable = uizObj[objCount].obj.cfg.getProperty("draggable");
	}
	if(uizObj[objCount].type == "timer") {
		interval = uizObj[objCount].interval;
	}	
	
	code = uizObj[objCount].code;
	html = uizObj[objCount].html;

	setProperties(objCount, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval);
	
	return {
		x: x,
		y: y,
		zindex: zindex,
		width: width,
		height: height,
		align: align,
		visibility: visibility,
		label: label,
		disabled: disabled,
		tabindex: tabindex,
		datasourceNo: datasourceNo,
		provider: provider,
		datasourceURL: datasourceURL,
		datasourceType: datasourceType,
		resultNode: resultNode,
		fields: fields,		
		query: query,
		columnWidth: columnWidth,
		tabcount: tabcount,
		src: src,
		action: action,
		method: method,
		target: target,
		value: value,
		backgroundColor: backgroundColor,
		buttoncount: buttoncount,
		closebutton: closebutton,
		draggable: draggable,
		code: code,
		html: html,
		interval: interval,
	}
}

function setObjStyle(objCount, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval) {

	var objStyle = getObjStyle(objCount);
		
	if(x == null) x = objStyle.x;
	if(y == null) y = objStyle.y;
	if(zindex == null) zindex = objStyle.zindex;
	if(width == null) width = objStyle.width;
	if(height == null) height = objStyle.height;
	if(align == null) align = objStyle.align;
	if(visibility == null) visibility = objStyle.visibility;
	if(label == null) label = objStyle.label;
	if(disabled == null) disabled = objStyle.disabled;
	if(tabindex == null) tabindex = objStyle.tabindex;
	if(datasourceNo == null) datasourceNo = objStyle.datasourceNo;
	if(provider == null) provider = objStyle.provider;
	if(datasourceURL == null) datasourceURL = objStyle.datasourceURL;
	if(datasourceType == null) datasourceType = objStyle.datasourceType;
	if(resultNode == null) resultNode = objStyle.resultNode;
	if(fields == null) fields = objStyle.fields;
	if(query == null) query = objStyle.query;
	if(columnWidth == null) columnWidth = objStyle.columnWidth;	
	if(tabcount == null) tabcount = objStyle.tabcount;
	if(src == null) src = objStyle.src;
	if(action == null) action = objStyle.action;
	if(method == null) method = objStyle.method;
	if(target == null) method = objStyle.target;
	if(value == null) value = objStyle.value;
	if(backgroundColor == null) backgroundColor = objStyle.backgroundColor;
	if(buttoncount == null) buttoncount = objStyle.buttoncount;
	if(closebutton == null) closebutton = objStyle.closebutton;
	if(draggable == null) draggable = objStyle.draggable;
	if(code == null) code = objStyle.code;
	if(html == null) html = objStyle.html;
	if(interval == null) interval = objStyle.interval;
	
	uizSetStyle("object"+objCount, "left", x);
	uizSetStyle("object"+objCount, "top", y);
	uizSetStyle("object"+objCount, "z-index", zindex);
	uizSetStyle("object"+objCount, "width", width);
	uizSetStyle("object"+objCount, "height", height);
	uizSetStyle("object"+objCount, "text-align", align);
	uizSetStyle("object"+objCount, "visibility", visibility);

	if(uizObj[objCount].type == "canvas") {
		uizSetStyle("canvasDesign", "width", width);
		uizSetStyle("canvasDesign", "height", height);
		uizSetStyle("canvasDesign", "background-color", backgroundColor);
		uizSetStyle("canvasGrid", "width", width);
		uizSetStyle("canvasGrid", "height", height);	
	}	
	if(uizObj[objCount].type == "pushButton") {
		modObjPushButton(objCount, label, disabled, tabindex);
		uizSetStyle("object"+objCount+"Handle", "left", x);
		uizSetStyle("object"+objCount+"Handle", "top", y);
	}
	if(uizObj[objCount].type == "checkboxButton") {
		modObjCheckboxButton(objCount, label, disabled, tabindex);
		uizSetStyle("object"+objCount+"Handle", "left", x);
		uizSetStyle("object"+objCount+"Handle", "top", y);		
	}
	if(uizObj[objCount].type == "autoComplete" || uizObj[objCount].type == "dataTable") {
		uizObj[objCount].datasourceNo = datasourceNo;
	}
	if(uizObj[objCount].type == "dataSource") {
		uizObj[objCount].provider = provider;
		uizObj[objCount].obj.liveData = datasourceURL;
		uizGetElementById("divLiveData" + objCount).innerHTML = datasourceURL;
		uizObj[objCount].datasourceType = datasourceType;
		uizObj[objCount].resultNode = resultNode;
		uizObj[objCount].query = query;
	}
	if(uizObj[objCount].type == "dataSource" || uizObj[objCount].type == "dataTable") {
		uizObj[objCount].fields = fields;
	}
	if(uizObj[objCount].type == "dataTable") {
		uizObj[objCount].columnWidth = columnWidth;
		var keys = fields.split(",");
		var widths = columnWidth.split(",");
		modObjDatatable(objCount, keys, widths);
	}
	if(uizObj[objCount].type == "tabView") {
		uizGetElementById("object"+objCount).innerHTML = html;
		uizObj[objCount].obj = new YAHOO.widget.TabView("objectTabView"+objCount);
	}
	if(uizObj[objCount].type == "image" || uizObj[objCount].type == "googleChart") {
		uizGetElementById("objectImg"+objCount).src = src;
	}
	if(uizObj[objCount].type == "swf") {
		uizGetElementById("objectSWF"+objCount).data = src;		
		uizGetElementById("objectSWF"+objCount).width = width.replace("px", "");
		uizGetElementById("objectSWF"+objCount).height = height.replace("px", "");
	}
	if(uizObj[objCount].type == "form") {
		uizGetElementById("objectForm"+objCount).action = action;
		uizGetElementById("objectForm"+objCount).method = method;
		uizGetElementById("objectForm"+objCount).target = target;
	}		
	if(uizObj[objCount].type == "inputBox") {
		uizGetElementById("objectInput"+objCount).value = value;
	}
	if(uizObj[objCount].type == "div" || uizObj[objCount].type == "table" || uizObj[objCount].type == "checkboxSet" || uizObj[objCount].type == "radiobuttonSet") {
		uizSetStyle("object"+objCount, "background-color", backgroundColor);
		uizGetElementById("object"+objCount).innerHTML = html;
	}
	if(uizObj[objCount].type == "radioButton") {
		uizGetElementById("object"+objCount).innerHTML = html;
		uizObj[objCount].obj.destroy();
		uizObj[objCount].obj = new YAHOO.widget.ButtonGroup("objectRadioButtonGroup"+objCount);
	}
	if(uizObj[objCount].type == "panel") {
		uizGetElementById('object'+objCount).innerHTML = html;
		uizObj[objCount].obj = new YAHOO.widget.Panel("objectPanel"+objCount, { width:width, height:height, visible:true, draggable:draggable, close:closebutton } );
		uizObj[objCount].obj.render();		
	}	
	if(uizObj[objCount].type == "mapGoogle" || uizObj[objCount].type == "mapYahoo" || uizObj[objCount].type == "mapDaum" || uizObj[objCount].type == "mapNaver" || uizObj[objCount].type == "mapLive") {
		uizSetStyle("object"+objCount+"Handle", "z-index", zindex);
		uizSetStyle("object"+objCount+"Handle", "left", x);
		uizSetStyle("object"+objCount+"Handle", "top", y);		
	}
	if(uizObj[objCount].type == "panel") {
		uizObj[objCount].interval = interval;
	}
	if(uizObj[objCount].type == "treeView") {	
		uizGetElementById('object'+objCount).innerHTML = html;
		uizObj[objCount].obj.destroy();
		uizObj[objCount].obj = new YAHOO.widget.TreeView("objectTreeview"+objCount);
		uizObj[objCount].obj.render();
	}
	if(uizObj[objCount].type == "menuBar") {	
		uizGetElementById('object'+objCount).innerHTML = html;
		uizObj[objCount].obj.destroy();
		uizObj[objCount].obj = new YAHOO.widget.MenuBar("objectMenuBar"+objCount);
		uizObj[objCount].obj.render();
	}
	if(uizObj[objCount].type == "yuiChart") {	
		uizGetElementById('object'+objCount).innerHTML = "";
		makeYUIChart(objCount);
	}	
	if(uizObj[objCount].type == "paginator") {	
		uizGetElementById('object'+objCount).innerHTML = "";
		makePaginator(objCount);
	}
	uizObj[objCount].code = code;
	uizObj[objCount].html = html;
	
	getObjStyle(objCount);
}

function setAPIKeySetting(googleMapAPI, yahooAPI, naverDataAPI, naverMapAPI, daumSearchAPI, daumShoppingAPI, daumRecommendAPI, daumMapAPI, liveDataAPI) {
	var uri="php/xmlAPIKey.php?projectName="+projectName+"&GoogleMapAPI=" + googleMapAPI + "&YahooAPI=" + yahooAPI + "&NaverDataAPI=" + naverDataAPI + "&NaverMapAPI=" + naverMapAPI + "&DaumSearchAPI=" + daumSearchAPI + "&DaumShoppingAPI=" + daumShoppingAPI + "&DaumRecommendAPI=" + daumRecommendAPI +"&DaumMapAPI=" + daumMapAPI + "&LiveDataAPI=" + liveDataAPI;
	
	var dataAPIKey = new YAHOO.util.DataSource(uri);
	dataAPIKey.connMethodPost = true; 
	dataAPIKey.responseType = YAHOO.util.DataSource.TYPE_XML;
	dataAPIKey.responseSchema = { 
		resultNode: "keyvalue", 
		fields: ["apitype","value"] 
	}; 	

	var textboxCellEditor = new YAHOO.widget.TextboxCellEditor({disableBtns:true});

	var tableColumnDefs = [
		{key:"apitype", label:"API TYPE", sortable:false, width:120 },
		{key:"value", label:"KEY VALUE", sortable:false, width:415, editor:textboxCellEditor}
	];
	
	var tableAPIKeySetting = new YAHOO.widget.DataTable("tableAPIKeySetting", tableColumnDefs, dataAPIKey);
	
	var highlightEditableCell = function(oArgs) { 
		var elCell = oArgs.target; 
		if(YAHOO.util.Dom.hasClass(elCell, "yui-dt-editable")) { 
			this.highlightCell(elCell); 
		}
	};
	
	var onCellEdit = function(oArgs) {
		var elCell = oArgs.editor.getTdEl();
		var parsingData = this.getTrEl(elCell).innerHTML;		
		var parsingLength = parsingData.length;
		var parsingStartPoint = parsingData.indexOf("er\">") + 4;
		var parsingEndPoint = parsingData.indexOf("</div>");
		var parsedData = parsingData.substr(parsingStartPoint, parsingEndPoint - parsingStartPoint);
		
		var newData = oArgs.newData;
		var googleMapAPI, yahooAPI, naverDataAPI, naverMapAPI, daumSearchAPI, daumShoppingAPI, daumRecommendAPI, daumMapAPI, liveDataAPI;
		
		if(parsedData == "GoogleMapAPI") { googleMapAPI = newData; }
		else if(parsedData == "YahooAPI") { yahooAPI = newData; }
		else if(parsedData == "NaverDataAPI") { naverDataAPI = newData; }
		else if(parsedData == "NaverMapAPI") { naverMapAPI = newData; }
		else if(parsedData == "DaumSearchAPI") { daumSearchAPI = newData; }
		else if(parsedData == "DaumShoppingAPI") { daumShoppingAPI = newData; }
		else if(parsedData == "DaumRecommendAPI") { daumRecommendAPI = newData; }
		else if(parsedData == "DaumMapAPI") { daumMapAPI = newData; }
		else if(parsedData == "LiveDataAPI") { liveDataAPI = newData; }
		
		setAPIKeySetting(googleMapAPI, yahooAPI, naverDataAPI, naverMapAPI, daumSearchAPI, daumShoppingAPI, daumRecommendAPI, daumMapAPI, liveDataAPI);
		
		writeMessage(parsedData + " Key Value is changed to " + newData);
	};
	
	tableAPIKeySetting.subscribe("cellMouseoverEvent", highlightEditableCell); 
	tableAPIKeySetting.subscribe("cellMouseoutEvent", tableAPIKeySetting.onEventUnhighlightCell); 
	tableAPIKeySetting.subscribe("cellClickEvent", tableAPIKeySetting.onEventShowCellEditor); 
	tableAPIKeySetting.subscribe("editorSaveEvent", onCellEdit);
}
