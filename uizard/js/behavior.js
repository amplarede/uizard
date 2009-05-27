/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
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
	
	if(showObjectSelection == false) {
		for(var i=0; i < objectCount; i++) {
			if(uizGetElementById("objectSelection"+i)) uizSetStyle("objectSelection"+i, "visibility", "hidden");
		}
	}
	
	if(uizObj[objCount].type == "CANVAS") {
		//uizSetStyle("objectSelection", "visibility", "hidden");
	}
	
	if(uizObj[objCount].type == "MAPGOOGLE" || uizObj[objCount].type == "MAPYAHOO" || uizObj[objCount].type == "MAPDAUM" || uizObj[objCount].type == "MAPNAVER" || uizObj[objCount].type == "MAPLIVE" || uizObj[objCount].type == "PUSHBUTTON" || uizObj[objCount].type == "CHECKBOXBUTTON") {
		setDragAndDropObj(objCount);
	}
//	else if(uizObj[objCount].type != "CANVAS" && uizObj[objCount].type != "PANEL") {
	else if(uizObj[objCount].type != "CANVAS" && uizObj[objCount].type != "DATASOURCE") {
		setResizeObj(objCount);
	}

	if(uizObj[objCount].contextMenu != null) {
		uizObj[objCount].contextMenu.destroy();
	}

	if(uizObj[objCount].type == "CHECKBOXSET") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
																	trigger: "object"+objCount,
																	lazyload: true, 
																	itemdata: [
																		[
																		{ text: "Add a Checkbox", onclick: { fn: addCheckboxSetItem } },
																		{ text: "Remove a Checkbox", onclick: { fn: removeCheckboxSetItem } }
																		],
																		[
																		{ text: "Copy The Object", onclick: { fn: doObjCopy } },
																		{ text: "Paste The Object", onclick: { fn: doObjPaste } }
																		],																		
																		[
																		{ text: "View The Javascript Code", onclick: { fn: viewCode } },
																		{ text: "View The Html Code", onclick: { fn: viewHtml } }
																		],																		
																		[
																		{ text: "Delete The Object", onclick: { fn: deleteObj } }
																		]
																	] });		
	}
	else if(uizObj[objCount].type == "RADIOBUTTONSET") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
																	trigger: "object"+objCount,
																	lazyload: true, 
																	itemdata: [
																		[
																		{ text: "Add a Radiobutton", onclick: { fn: addRadioButtonSetItem } },
																		{ text: "Remove a Radiobutton", onclick: { fn: removeRadioButtonSetItem } }
																		],
																		[
																		{ text: "Copy The Object", onclick: { fn: doObjCopy } },
																		{ text: "Paste The Object", onclick: { fn: doObjPaste } }
																		],
																		[
																		{ text: "View The Javascript Code", onclick: { fn: viewCode } },
																		{ text: "View The Html Code", onclick: { fn: viewHtml } }
																		],																		
																		[
																		{ text: "Delete The Object", onclick: { fn: deleteObj } }
																		]
																	] });		
	}
	else if(uizObj[objCount].type == "TABVIEW") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
																	trigger: "object"+objCount,
																	lazyload: true, 
																	itemdata: [
																		[
																		{ text: "Add The Tab", onclick: { fn: addTabItem } },
																		{ text: "Remove The Tab", onclick: { fn: removeTabItem } }
																		],
																		[
																		{ text: "Copy The Object", onclick: { fn: doObjCopy } },
																		{ text: "Paste The Object", onclick: { fn: doObjPaste } }
																		],
																		[
																		{ text: "View The Javascript Code", onclick: { fn: viewCode } },
																		{ text: "View The Html Code", onclick: { fn: viewHtml }, disabled: true }
																		],																		
																		[
																		{ text: "Delete The Object", onclick: { fn: deleteObj } }
																		]
																	] });	
	}
	else if(uizObj[objCount].type == "RADIOBUTTON") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
                                                                trigger: "object"+objCount,
                                                                lazyload: true, 
                                                                itemdata: [
                                                                    [
																	{ text: "Add a Radio Button", onclick: { fn: addRadioButtonItem } },
																	{ text: "Remove a Radio Button", onclick: { fn: removeRadioButtonItem } }
																	],
																	[
																	{ text: "Copy The Object", onclick: { fn: doObjCopy } },
																	{ text: "Paste The Object", onclick: { fn: doObjPaste } }
																	],
                                                                    [
																	{ text: "View The Javascript Code", onclick: { fn: viewCode } },
																	{ text: "View The Html Code", onclick: { fn: viewHtml } }
																	],																	
																	[
																	{ text: "Delete The Object", onclick: { fn: deleteObj } }
																	]
                                                                ] });
	}
	else if(uizObj[objCount].type == "AUTOCOMPLETE") {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
                                                                trigger: "object"+objCount,
                                                                lazyload: true, 
                                                                itemdata: [
																	[
																	{ text: "Focus on The Inputbox", onclick: { fn: doObjInputboxFocus } }
																	],																			   
																	[
																	{ text: "Copy The Object", onclick: { fn: doObjCopy } },
																	{ text: "Paste The Object", onclick: { fn: doObjPaste } }
																	],
                                                                    [
																	{ text: "View The Javascript Code", onclick: { fn: viewCode } },
																	{ text: "View The Html Code", onclick: { fn: viewHtml } }
																	],																	
																	[
																	{ text: "Delete The Object", onclick: { fn: deleteObj } }
																	]
                                                                ] });
	}	
	else {
		uizObj[objCount].contextMenu = new YAHOO.widget.ContextMenu("object"+objCount+"contextmenu", {
                                                                trigger: "object"+objCount,
                                                                lazyload: true, 
                                                                itemdata: [
																	[
																	{ text: "Copy The Object", onclick: { fn: doObjCopy } },
																	{ text: "Paste The Object", onclick: { fn: doObjPaste } }
																	],	
                                                                    [
																	{ text: "View The Javascript Code", onclick: { fn: viewCode } },
																	{ text: "View The Html Code", onclick: { fn: viewHtml } }
																	],																		   
																	[
																	{ text: "Delete The Object", onclick: { fn: deleteObj } }
																	]
                                                                ] });		
	}

	
	getObjStyle(objCount);
	codeEditor.setCode(uizObj[objCount].code);
	htmlEditor.setCode(uizObj[objCount].html);

	if(uizObj[objCount].type != "CANVAS") {
		var left = uizGetStyle("object"+objCount, "left");
		left = parseInt(replaceAll(left, "px", ""));
		var top = uizGetStyle("object"+objCount, "top");
		top = parseInt(replaceAll(top, "px", ""));
		var width = uizGetStyle("object"+objCount, "width");
		width = parseInt(replaceAll(width, "px", ""));
		var height = uizGetStyle("object"+objCount, "height");
		height = parseInt(replaceAll(height, "px", ""));		
		uizSetStyle("objectSelection"+objCount, "left", (left-2) + "px");
		uizSetStyle("objectSelection"+objCount, "top", (top-2) + "px");
		uizSetStyle("objectSelection"+objCount, "width", (width+2) + "px");
		uizSetStyle("objectSelection"+objCount, "height", (height+2) + "px");
		uizSetStyle("objectSelection"+objCount, "visibility", uizGetStyle("object"+objCount, "visibility"));		
	}
	
	//writeMessage("<font color=blue><b>You selected the object#" + selectedObj + "</b></font>");
}

function objDblClicked(objCount) {
	selectedObj = objCount;
	
	viewCode();
}

function objDsClicked(objCount) {
	selectedObj = objCount;

	getObjStyle(objCount);
	
	codeEditor.setCode(uizObj[objCount].code);
	htmlEditor.setCode(uizObj[objCount].html);
}

function objDsDblClicked(objCount) {
	selectedObj = objCount;

	viewHtml();
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
		hover: hoverResizeHandle,
		status: proxyResize,
		draggable: false,
		ghost: true,
		proxy: true
	});
	
	if(uizObj[objCount].type != "MAPGOOGLE" && uizObj[objCount].type != "MAPYAHOO" && uizObj[objCount].type != "MAPDAUM" && uizObj[objCount].type != "MAPNAVER") uizObj[objCount].resize.set("draggable", true);

	uizObj[objCount].resize.subscribe("endResize", function (args) {
		setObjStyle(selectedObj);		
		
		var left = uizGetStyle("object"+selectedObj, "left");
		left = parseInt(replaceAll(left, "px", ""));
		var top = uizGetStyle("object"+selectedObj, "top");
		top = parseInt(replaceAll(top, "px", ""));
		var width = uizGetStyle("object"+selectedObj, "width");
		width = parseInt(replaceAll(width, "px", ""));
		var height = uizGetStyle("object"+selectedObj, "height");
		height = parseInt(replaceAll(height, "px", ""));		
		uizSetStyle("objectSelection"+objCount, "left", (left-2) + "px");
		uizSetStyle("objectSelection"+objCount, "top", (top-2) + "px");
		uizSetStyle("objectSelection"+objCount, "width", (width+2) + "px");
		uizSetStyle("objectSelection"+objCount, "height", (height+2) + "px");
		uizSetStyle("objectSelection"+objCount, "visibility", uizGetStyle("object"+selectedObj, "visibility"));		
	});
	
	uizObj[objCount].resize.on("resize", function(args) {
		if(uizObj[selectedObj].type == "PANEL") {
			var panelWidth = args.width;
			var panelHeight = args.height;  
			uizObj[selectedObj].obj.cfg.setProperty("height", panelWidth + "px");	
		}
		else if(uizObj[selectedObj].type == "GOOGLECHART") {
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
		setObjStyle(selectedObj);		
		
		var left = uizGetStyle("object"+selectedObj, "left");
		left = parseInt(replaceAll(left, "px", ""));
		var top = uizGetStyle("object"+selectedObj, "top");
		top = parseInt(replaceAll(top, "px", ""));
		var width = uizGetStyle("object"+selectedObj, "width");
		width = parseInt(replaceAll(width, "px", ""));
		var height = uizGetStyle("object"+selectedObj, "height");
		height = parseInt(replaceAll(height, "px", ""));		
		uizSetStyle("objectSelection"+objCount, "left", (left-2) + "px");
		uizSetStyle("objectSelection"+objCount, "top", (top-2) + "px");
		uizSetStyle("objectSelection"+objCount, "width", (width+2) + "px");
		uizSetStyle("objectSelection"+objCount, "height", (height+2) + "px");
		uizSetStyle("objectSelection"+objCount, "visibility", uizGetStyle("object"+selectedObj, "visibility"));		
		
		getObjStyle(selectedObj);
	}
	
	uizObj[objCount].dragAndDrop.subscribe("dragEvent", draging);
	uizObj[objCount].dragAndDrop.subscribe("mouseUpEvent", mouseUp);
}

function setProperties(objCount, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval) {
	var uri = "php/xmlObject.php?projectName="+projectName+"&objNo=" + objCount + "&type=" + uizObj[objCount].type + "&x=" + x + "&y=" + y + "&z-index=" + zindex + "&width=" + width + "&height=" + height + "&align=" + align + "&visibility=" + visibility;

	if(uizObj[objCount].type == "CANVAS") {
		uri += "&backgroundColor=" + backgroundColor;
	}	
	else if(uizObj[objCount].type == "PUSHBUTTON" || uizObj[objCount].type == "CHECKBOXBUTTON") {
		uri += "&label=" + label;
		uri += "&disabled=" + disabled;
		uri += "&tabindex=" + tabindex;
	}
	else if(uizObj[objCount].type == "AUTOCOMPLETE") {
		uri += "&datasourceNo=" + datasourceNo;
	}
	else if(uizObj[objCount].type == "DATASOURCE") {
		uri += "&provider=" + provider;
		uri += "&datasourceURL=" + escape(datasourceURL);
		uri += "&datasourceType=" + datasourceType;
		uri += "&resultNode=" + resultNode;
		uri += "&query=" + query;
		uri += "&fields=" + fields;	
	}
	else if(uizObj[objCount].type == "DATATABLE") {
		uri += "&datasourceNo=" + datasourceNo;
		uri += "&fields=" + fields;	
		uri += "&columnWidth=" + columnWidth;
		uri += "&paginator=" + paginator;
		uri += "&rowsPerPage=" + rowsPerPage;
	}	
	else if(uizObj[objCount].type == "TABVIEW") {
		uri += "&tabcount=" + tabcount;
	}
	else if(uizObj[objCount].type == "IMAGE" || uizObj[objCount].type == "GOOGLECHART") {
		uri += "&src=" + replaceAll(src, "&", "!and");
	}
	else if(uizObj[objCount].type == "SWF") {
		uri += "&src=" + replaceAll(src, "&", "!and");
	}
	else if(uizObj[objCount].type == "FORM") {
		uri += "&action=" + replaceAll(action, "&", "!and");
		uri += "&method=" + method;
		uri += "&target=" + target;
	}
	else if(uizObj[objCount].type == "INPUTBOX") {
		uri += "&value=" + value;
	}	
	else if(uizObj[objCount].type == "DIV" || uizObj[objCount].type == "TABLE") {
		uri += "&backgroundColor=" + backgroundColor;
	}
	else if(uizObj[objCount].type == "RADIOBUTTON") {
		uri += "&buttoncount=" + buttoncount;
	}
	else if(uizObj[objCount].type == "PANEL") {
		uri += "&closebutton=" + closebutton;
		uri += "&draggable=" + draggable;
	}
	else if(uizObj[objCount].type == "TIMER") {
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
		var x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code;
		
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
		else if(parsedData == "columnWidth") { columnWidth = newData; }
		else if(parsedData == "paginator") { paginator = newData; }
		else if(parsedData == "rowsPerPage") { rowsPerPage = newData; }
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
		else if(parsedData == "backgroundColor") {	backgroundColor = newData; }
		//radioButton
		else if(parsedData == "buttoncount") { buttoncount = newData; }	
		//panel
		else if(parsedData == "closebutton") { closebutton = newData; }			
		else if(parsedData == "draggable") { draggable = newData; }
		//timer
		else if(parsedData == "timer") { interval = newData; }
		
		
		code = uizObj[selectedObj].code;
		
		html = uizObj[selectedObj].html;
		
		setObjStyle(selectedObj, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval);
		
		writeMessage("<font color=green><b>" + parsedData + " is changed to " + newData + " (object#" + objCount + ")</b></font>");
	};
	
	var onRowClick = function(oArgs) {
		var parsingData = YAHOO.util.Dom.getChildren(oArgs.target)[0].innerHTML;		
		var parsingLength = parsingData.length;
		var parsingStartPoint = parsingData.indexOf("er\">") + 4;
		var parsingEndPoint = parsingData.indexOf("</div>");
		var parsedData = parsingData.substr(parsingStartPoint, parsingEndPoint - parsingStartPoint);

		if(parsedData == "backgroundColor") {
			colorPickerDialog.show();
		}
		else if(parsedData == "datasourceNo") {
			makeDatasourceList(datasourceNo);
			panelSelectDatasource.show();
		}
	}
	
	tableProperties.subscribe("cellMouseoverEvent", highlightEditableCell); 
	tableProperties.subscribe("cellMouseoutEvent", tableProperties.onEventUnhighlightCell); 
	tableProperties.subscribe("cellClickEvent", tableProperties.onEventShowCellEditor);
	tableProperties.subscribe("rowClickEvent", onRowClick);
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
	var paginator = "";
	var rowsPerPage = "";
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


	if(uizObj[objCount].type == "CANVAS") {
		width = uizGetStyle("canvasDesign", "width");
		height = uizGetStyle("canvasDesign", "height");
		backgroundColor = uizGetStyle("canvasDesign", "background-color");
	}
	else if(uizObj[objCount].type == "PUSHBUTTON" || uizObj[objCount].type == "CHECKBOXBUTTON") {
		label= uizObj[objCount].obj.get("label");
		disabled = uizObj[objCount].disabled;
		tabindex = uizObj[objCount].tabindex;
	}
	else if(uizObj[objCount].type == "AUTOCOMPLETE") {
		datasourceNo = uizObj[objCount].datasourceNo;
	}
	else if(uizObj[objCount].type == "DATASOURCE") {
		provider = uizObj[objCount].provider;
		datasourceURL = uizObj[objCount].datasourceURL;
		datasourceType = uizObj[objCount].datasourceType;
		resultNode = uizObj[objCount].resultNode;
		query = uizObj[objCount].query;
		fields = uizObj[objCount].fields;
	}	
	else if(uizObj[objCount].type == "DATATABLE") {
		datasourceNo = uizObj[objCount].datasourceNo;
		fields = uizObj[objCount].fields;
		columnWidth = uizObj[objCount].columnWidth;
		paginator = uizObj[objCount].paginator;
		rowsPerPage = uizObj[objCount].rowsPerPage;
	}	
	else if(uizObj[objCount].type == "TABVIEW") {
		tabcount = uizObj[objCount].childCount;
	}
	else if(uizObj[objCount].type == "IMAGE" || uizObj[objCount].type == "GOOGLECHART") {
		src = uizGetElementById("objectImg"+objCount).src;
	}
	else if(uizObj[objCount].type == "SWF") {
		src = uizGetElementById("objectSWF"+objCount).data;
	}
	else if(uizObj[objCount].type == "FORM") {
		action = uizGetElementById("objectForm"+objCount).action;
		method = uizGetElementById("objectForm"+objCount).method;
		target = uizGetElementById("objectForm"+objCount).target;
	}		
	else if(uizObj[objCount].type == "INPUTBOX") {
		value = uizGetElementById("objectInput"+objCount).value;
	}
	else if(uizObj[objCount].type == "DIV" || uizObj[objCount].type == "TABLE") {
		backgroundColor = uizGetStyle("object"+objCount, "background-color");
	}
	else if(uizObj[objCount].type == "RADIOBUTTON") {
		buttoncount = uizObj[objCount].childCount;
	}
	else if(uizObj[objCount].type == "PANEL") {
		closebutton = uizObj[objCount].obj.cfg.getProperty("close");
		draggable = uizObj[objCount].obj.cfg.getProperty("draggable");
	}
	else if(uizObj[objCount].type == "TIMER") {
		interval = uizObj[objCount].interval;
	}	
	
	code = uizObj[objCount].code;
	html = uizObj[objCount].html;
	
	setProperties(objCount, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval);
	
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
		paginator: paginator,
		rowsPerPage: rowsPerPage,
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

function setObjStyle(objCount, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval) {

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
	if(paginator == null) paginator = objStyle.paginator;	
	if(rowsPerPage == null) rowsPerPage = objStyle.rowsPerPage;		
	if(tabcount == null) tabcount = objStyle.tabcount;
	if(src == null) src = objStyle.src;
	if(action == null) action = objStyle.action;
	if(method == null) method = objStyle.method;
	if(target == null) target = objStyle.target;
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
	
	if(uizObj[objCount].type == "CANVAS") {
		uizSetStyle("canvasDesign", "width", width);
		uizSetStyle("canvasDesign", "height", height);
		uizSetStyle("canvasDesign", "background-color", backgroundColor);
		uizSetStyle("canvasGrid", "width", width);
		uizSetStyle("canvasGrid", "height", height);	
	}	
	else if(uizObj[objCount].type == "PUSHBUTTON") {
		modObjPushButton(objCount, label, disabled, tabindex);
		uizSetStyle("object"+objCount+"Handle", "left", x);
		uizSetStyle("object"+objCount+"Handle", "top", y);
	}
	else if(uizObj[objCount].type == "CHECKBOXBUTTON") {
		modObjCheckboxButton(objCount, label, disabled, tabindex);
		uizSetStyle("object"+objCount+"Handle", "left", x);
		uizSetStyle("object"+objCount+"Handle", "top", y);		
	}
	else if(uizObj[objCount].type == "AUTOCOMPLETE") {
		uizObj[objCount].datasourceNo = datasourceNo;
		
		modObjAutoComplete(objCount, datasourceNo);
	}
	else if(uizObj[objCount].type == "DATASOURCE") {
		uizSetStyle("object"+objCount, "width", "97%");
		
		uizObj[objCount].provider = provider;
		uizGetElementById("divProvider" + objCount).innerHTML = provider;
		uizObj[objCount].datasourceURL = datasourceURL;
		uizGetElementById("divLiveData" + objCount).innerHTML = datasourceURL;
		uizObj[objCount].datasourceType = datasourceType;
		uizGetElementById("divDsType" + objCount).innerHTML = datasourceType;
		uizObj[objCount].resultNode = resultNode;
		uizObj[objCount].query = query;
		uizObj[objCount].fields = fields;
		
		var oConfigs = {   
			paginator: new YAHOO.widget.Paginator({   
				rowsPerPage: 3,
				alwaysVisible: false					
			})   
		}; 		
		
		if(uizObj[objCount].datasourceType == "HTML") {
			uizGetElementById('datasourceHTML'+objCount).innerHTML = html;
			
			var column = uizGetElementById('datasourceHTML'+objCount).getElementsByTagName('th');
			var myColumnDefs = new Array();
			var myColumnFields = new Array();
			
			for(var i=0; i<column.length; i++) {
				myColumnDefs[i] = {key:column[i].innerHTML, label:column[i].innerHTML, width:100};
				myColumnFields[i] = {key:column[i].innerHTML};
			}
			
			uizObj[objCount].obj = new YAHOO.util.DataSource(YAHOO.util.Dom.get("datasourceHTMLTable"+objCount));
			uizObj[objCount].obj.responseType = YAHOO.util.DataSource.TYPE_HTMLTABLE;
			uizObj[objCount].obj.responseSchema = {
				fields: myColumnFields
			};
			
			uizGetElementById("dataPreview" + objCount).innerHTML = "";
			var dataPreviewTable = new YAHOO.widget.DataTable("dataPreview" + objCount, myColumnDefs, uizObj[objCount].obj, oConfigs);
		}
		else if(uizObj[objCount].datasourceType == "JSON") {
			var column = fields.split(',');
			var myColumnDefs = new Array();
			var myColumnFields = new Array();
			
			YAHOO.widget.DataTable.formatterCellData = function(elCell, oRecord, oColumn, oData) {   
				var data = oData.substr(0,16);
				elCell.innerHTML = data;
			};
			
			for(var i=0; i<column.length; i++) {
				myColumnDefs[i] = {key:column[i], label:column[i], formatter:YAHOO.widget.DataTable.formatterCellData};
				myColumnFields[i] = {key:column[i]};
			}
			
			if(datasourceURL != "" && query != "query" && query != "") {
				datasourceURL = datasourceURL + "&" + query;
			}
			
			var connectionCallback = {   
	            success: function(o) {
					if(datasourceURL != "" && query != "query") {			
						uizObj[objCount].obj = new YAHOO.util.DataSource("php/jsonProxy.php?url=" + replaceAll(datasourceURL, "&", "and!"));
						uizObj[objCount].obj.responseType = YAHOO.util.DataSource.TYPE_JSON;
						//uizObj[objCount].obj.connXhrMode = "queueRequests";
						uizObj[objCount].obj.responseSchema = {
							resultsList: resultNode,
							fields: myColumnFields
						};
						
						uizGetElementById("dataPreview" + objCount).innerHTML = "";
						var dataPreviewTable = new YAHOO.widget.DataTable("dataPreview" + objCount, myColumnDefs, uizObj[objCount].obj, oConfigs);
					}
				},
				failure: function(o) {
					alert("Connection Failed.");   
				}   
			} 
			
			var getJSON = YAHOO.util.Connect.asyncRequest("GET", "php/jsonProxy.php?url=" + replaceAll(datasourceURL, "&", "and!"), connectionCallback);
		}
		else if(uizObj[objCount].datasourceType == "XML") {
			var column = fields.split(',');
			var myColumnDefs = new Array();
			var myColumnFields = new Array();
			
			YAHOO.widget.DataTable.formatterCellData = function(elCell, oRecord, oColumn, oData) {   
				var data = oData.substr(0,26);
				elCell.innerHTML = data;
			};

			for(var i=0; i<column.length; i++) {
				myColumnDefs[i] = {key:column[i], label:column[i], formatter:YAHOO.widget.DataTable.formatterCellData};
				myColumnFields[i] = {key:column[i]};
			}
			
			if(datasourceURL != "" && query != "query" && query != "") {
				datasourceURL = datasourceURL + "&" + query;
			}
			
			var connectionCallback = {   
	            success: function(o) {
					if(datasourceURL != "" && query != "query") {
						uizObj[objCount].obj = new YAHOO.util.DataSource("php/xmlProxy.php?url=" + replaceAll(datasourceURL, "&", "and!"));
						uizObj[objCount].obj.responseType = YAHOO.util.DataSource.TYPE_XML;
						uizObj[objCount].obj.responseSchema = {
							resultNode: resultNode,
							fields: myColumnFields
						};
						
						uizGetElementById("dataPreview" + objCount).innerHTML = "";
						var dataPreviewTable = new YAHOO.widget.DataTable("dataPreview" + objCount, myColumnDefs, uizObj[objCount].obj, oConfigs);
					}
				},
				failure: function(o) {
					alert("Connection Failed.");   
				}   
			}
			
			var getXML = YAHOO.util.Connect.asyncRequest("GET", "php/xmlProxy.php?url=" + replaceAll(datasourceURL, "&", "and!"), connectionCallback);  
		}
	}
	else if(uizObj[objCount].type == "DATATABLE") {
		uizObj[objCount].datasourceNo = datasourceNo;
		uizObj[objCount].fields = fields;
		uizObj[objCount].columnWidth = columnWidth;
		uizObj[objCount].paginator = paginator;
		uizObj[objCount].rowsPerPage = rowsPerPage;	

		modObjDatatable(objCount, datasourceNo);
	}
	else if(uizObj[objCount].type == "TABVIEW") {
		uizGetElementById("object"+objCount).innerHTML = html;
		uizObj[objCount].obj = new YAHOO.widget.TabView("objectTabView"+objCount);
	}
	else if(uizObj[objCount].type == "IMAGE" || uizObj[objCount].type == "GOOGLECHART") {
		uizGetElementById("objectImg"+objCount).src = src;
	}
	else if(uizObj[objCount].type == "SWF") {
		uizGetElementById("objectSWF"+objCount).data = src;		
		uizGetElementById("objectSWF"+objCount).width = width.replace("px", "");
		uizGetElementById("objectSWF"+objCount).height = height.replace("px", "");
	}
	else if(uizObj[objCount].type == "FORM") {
		uizGetElementById("objectForm"+objCount).action = action;
		uizGetElementById("objectForm"+objCount).method = method;
		uizGetElementById("objectForm"+objCount).target = target;
	}		
	else if(uizObj[objCount].type == "INPUTBOX") {
		uizGetElementById("objectInput"+objCount).value = value;
	}
	else if(uizObj[objCount].type == "DIV" || uizObj[objCount].type == "TABLE" || uizObj[objCount].type == "CHECKBOXSET" || uizObj[objCount].type == "RADIOBUTTONSET") {
		uizSetStyle("object"+objCount, "background-color", backgroundColor);
		uizGetElementById("object"+objCount).innerHTML = html;
	}
	else if(uizObj[objCount].type == "RADIOBUTTON") {
		uizGetElementById("object"+objCount).innerHTML = html;
		uizObj[objCount].obj = new YAHOO.widget.ButtonGroup("objectRadioButtonGroup"+objCount);
	}
	else if(uizObj[objCount].type == "PANEL") {
		uizGetElementById('object'+objCount).innerHTML = html;
		uizObj[objCount].obj = new YAHOO.widget.Panel("objectPanel"+objCount, { width:width, height:height, visible:true, draggable:draggable, close:closebutton } );
		uizObj[objCount].obj.render();		
	}	
	else if(uizObj[objCount].type == "MAPGOOGLE" || uizObj[objCount].type == "MAPYAHOO" || uizObj[objCount].type == "MAPDAUM" || uizObj[objCount].type == "MAPNAVER" || uizObj[objCount].type == "MAPLIVE") {
		uizSetStyle("object"+objCount+"Handle", "z-index", zindex);
		uizSetStyle("object"+objCount+"Handle", "left", x);
		uizSetStyle("object"+objCount+"Handle", "top", y);		
	}
	else if(uizObj[objCount].type == "PANEL") {
		uizObj[objCount].interval = interval;
	}
	else if(uizObj[objCount].type == "TREEVIEW") {	
		uizGetElementById('object'+objCount).innerHTML = html;
		uizObj[objCount].obj.destroy();
		uizObj[objCount].obj = new YAHOO.widget.TreeView("objectTreeview"+objCount);
		uizObj[objCount].obj.render();
	}
	else if(uizObj[objCount].type == "MENUBAR") {	
		uizGetElementById('object'+objCount).innerHTML = html;
		uizObj[objCount].obj.destroy();
		uizObj[objCount].obj = new YAHOO.widget.MenuBar("objectMenuBar"+objCount);
		uizObj[objCount].obj.render();
	}
	else if(uizObj[objCount].type == "YUICHART") {	
		uizGetElementById('object'+objCount).innerHTML = "";
		makeYUIChart(objCount);
	}	
	else if(uizObj[objCount].type == "PAGINATOR") {	
		uizGetElementById('object'+objCount).innerHTML = "";
		makePaginator(objCount);
	}
	uizObj[objCount].code = code;
	uizObj[objCount].html = html;
	
	getObjStyle(objCount);
}

function setObj(objCount) {
	var x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code;

	var objStyle = getObjStyle(objCount);

	x = objStyle.x;
	y = objStyle.y;
	zindex = objStyle.zindex;
	width = objStyle.width;
	height = objStyle.height;
	align = objStyle.align;
	visibility = objStyle.visibility;
	label = objStyle.label;
	disabled = objStyle.disabled;
	tabindex = objStyle.tabindex;
	datasourceNo = objStyle.datasourceNo;
	provider = objStyle.provider;
	datasourceURL = objStyle.datasourceURL;
	datasourceType = objStyle.datasourceType;
	resultNode = objStyle.resultNode;
	fields = objStyle.fields;
	query = objStyle.query;
	columnWidth = objStyle.columnWidth;	
	paginator = objStyle.paginator;	
	rowsPerPage = objStyle.rowsPerPage;		
	tabcount = objStyle.tabcount;
	src = objStyle.src;
	action = objStyle.action;
	method = objStyle.method;
	target = objStyle.target;
	value = objStyle.value;
	backgroundColor = objStyle.backgroundColor;
	buttoncount = objStyle.buttoncount;
	closebutton = objStyle.closebutton;
	draggable = objStyle.draggable;
	code = objStyle.code;
	html = objStyle.html;
	interval = objStyle.interval;
	
	setObjStyle(objCount, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, paginator, rowsPerPage, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval);
}

function setAPIKeySetting(googleMapAPI, yahooAPI, naverDataAPI, naverMapAPI, daumSearchAPI, daumShoppingAPI, daumContentsAPI, daumMapAPI, liveDataAPI) {
	var uri="php/xmlAPIKey.php?projectName="+projectName+"&GoogleMapAPI=" + googleMapAPI + "&YahooAPI=" + yahooAPI + "&NaverDataAPI=" + naverDataAPI + "&NaverMapAPI=" + naverMapAPI + "&DaumSearchAPI=" + daumSearchAPI + "&DaumShoppingAPI=" + daumShoppingAPI + "&DaumContentsAPI=" + daumContentsAPI +"&DaumMapAPI=" + daumMapAPI + "&LiveDataAPI=" + liveDataAPI;
	
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
		var googleMapAPI, yahooAPI, naverDataAPI, naverMapAPI, daumSearchAPI, daumShoppingAPI, daumContentsAPI, daumMapAPI, liveDataAPI;
		
		if(parsedData == "GoogleMapAPI") { googleMapAPI = newData; }
		else if(parsedData == "YahooAPI") { yahooAPI = newData; }
		else if(parsedData == "NaverDataAPI") { naverDataAPI = newData; }
		else if(parsedData == "NaverMapAPI") { naverMapAPI = newData; }
		else if(parsedData == "DaumSearchAPI") { daumSearchAPI = newData; }
		else if(parsedData == "DaumShoppingAPI") { daumShoppingAPI = newData; }
		else if(parsedData == "DaumContentsAPI") { daumContentsAPI = newData; }
		else if(parsedData == "DaumMapAPI") { daumMapAPI = newData; }
		else if(parsedData == "LiveDataAPI") { liveDataAPI = newData; }
		
		setAPIKeySetting(googleMapAPI, yahooAPI, naverDataAPI, naverMapAPI, daumSearchAPI, daumShoppingAPI, daumContentsAPI, daumMapAPI, liveDataAPI);
		
		writeMessage(parsedData + " Key Value is changed to " + newData);
	};
	
	tableAPIKeySetting.subscribe("cellMouseoverEvent", highlightEditableCell); 
	tableAPIKeySetting.subscribe("cellMouseoutEvent", tableAPIKeySetting.onEventUnhighlightCell); 
	tableAPIKeySetting.subscribe("cellClickEvent", tableAPIKeySetting.onEventShowCellEditor); 
	tableAPIKeySetting.subscribe("editorSaveEvent", onCellEdit);
	
	loadAPIKeys();
}
