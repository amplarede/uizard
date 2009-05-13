/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

var mainMenuData =
	[
		{
			id: "file", 
			itemdata:
			[ 
				[
					{ text: "New...", helptext: "Shift + N", onclick: { fn: showNewProject } },
					{ text: "Open...", helptext: "Shift + O", onclick: { fn: showOpenProject } },
					{ text: "Save...", helptext: "Shift + S", onclick: { fn: saveProject } },
					{ text: "Save As...", helptext: "Shift + Ctrl + S", onclick: { fn: showSaveAsProject } },
					{ text: "Export The Project", helptext: "Shift + E", onclick: { fn: showExportProject } }
				],
				[
					{ text: "RealCode in New Window", onclick: { fn: openRealCode } },
					{ text: "RealHtml in New Window", onclick: { fn: openRealHtml } },
					{ text: "Preview in New Window", onclick: { fn: openPreview } },
					{ text: "Print a RealCode", onclick: { fn: printRealCode } },
					{ text: "Print a RealHtml", onclick: { fn: printRealHtml } },
					{ text: "Print a Preview", onclick: { fn: printPreview } }
				],
				[
					{ text: "Exit" }
				]
			]
		},
		{
			id: "object", 
			itemdata:
			[
				[
					{ text: "Copy The Object", helptext: "Shift + C", onclick: { fn: doObjCopy } },
					{ text: "Paste The Object", helptext: "Shift + V", onclick: { fn: doObjPaste } }
				],																		
				[
					{ text: "View The Javascript Code", helptext: "Shift + J", onclick: { fn: viewCode } },
					{ text: "View The Html Code", helptext: "Shift + H", onclick: { fn: viewHtml } }
				],
				[
					{ text: "Delete The Object", helptext: "Shift + D", onclick: { fn: deleteObj } }
				]
			]
		},		
		{
			id: "editor", 
			itemdata:
			[
				[
					{ text: "Undo", helptext: "Shift + Z", onclick: { fn: doUndo } },
					{ text: "Redo", helptext: "Shift + Y", onclick: { fn: doRedo } }
				],
				[
					{ text: "Copy", helptext: "Ctrl + C", onclick: { fn: doCopy }, disabled:true },
					{ text: "Cut", helptext: "Ctrl + X", onclick: { fn: doCut }, disabled:true },
					{ text: "Paste", helptext: "Ctrl + V", onclick: { fn: doPaste }, disabled:true },
					{ text: "Delete", helptext: "Delete", onclick: { fn: doDelete }, disabled:true }
				],
				[
					{ text: "Indent All", helptext: "Shift + I", onclick: { fn: doIndentAll } },
					{ text: "Select All", helptext: "Shift + A", onclick: { fn: doSelectAll } }
				],
				[
					{ text: "Find", helptext: "Shift + F", onclick: { fn: doFind }  },
					{ text: "Replace", helptext: "Shift + R", onclick: { fn: doReplace }  }              
				],
				[
					{ text: "Preferences", helptext: "Shift + B", onclick: { fn: showPreferences } } 
				]
			]
		},
		{
			id: "view", 
			itemdata:
			[
				[
					{ text: "Toogle The Tool Box", onclick: { fn: toggleLeft } },
					{ text: "Toogle The Object Explorer & Properties", onclick: { fn: toggleRight } },
					{ text: "Toogle The Message", onclick: { fn: toggleBottom } }
				],
				[
					{ text: "View The Design Tab", onclick: { fn: viewDesignTab } },
					{ text: "View The DataSource Tab", onclick: { fn: viewDataSourceTab } },
					{ text: "View The Code Tab", onclick: { fn: viewCodeTab } },
					{ text: "View The RealCode Tab", onclick: { fn: viewRealCodeTab } },
					{ text: "View The Html Tab", onclick: { fn: viewHtmlTab } },
					{ text: "View The RealHtml Tab", onclick: { fn: viewRealHtmlTab } },					
					{ text: "View The Preview Tab", onclick: { fn: viewPreviewTab } }
				]              
			] 
		},
		{
			id: "option",
			itemdata:
			[
				[
					{ text: "Grid Setting", helptext: "Shift + G", onclick: { fn: showGridSetting } },
					{ text: "API Key Setting", helptext: "Shift + K", onclick: { fn: showAPIKeySetting } },
					{ text: "CSS Setting", helptext: "Shift + W", onclick: { fn: showCSSSetting } }
				],
				[
					{ text: "Project Setting", helptext: "Shift + P", onclick: { fn: showProjectSetting } }
				]
			]
		},
		{
			id: "help",
			itemdata:
			[
			 	[
				 	{ text: "UIzard Official Manual", url: "http://uizard.org/OfficialManual", target: "_blank" },
					{ text: "UIzard Tutorial Video", url: "http://uizard.org/TutorialVideo", target: "_blank" },
					{ text: "UIzard Q&A Board", url: "http://uizard.org/QNA", target: "_blank" },
					{ text: "UIzard Bug Report", url: "http://uizard.org/BugReport", target: "_blank" }
				],
				[
					{ text: "Yahoo! Develper Network", url: "http://developer.yahoo.com", target: "_blank" },
					{ text: "Google Code", url: "http://code.google.com", target: "_blank" },
					{ text: "Windows Live Services", url: "http://dev.live.com", target: "_blank" }
				],
				[
					{ text: "Naver Developer Center", url: "http://dev.naver.com", target: "_blank" },
					{ text: "Daum DNA", url: "http://dna.daum.net", target: "_blank" },
				],
				[
					{ text: "UIzard Information", onclick: { fn: showUIzardInfo } },
				]
			]
		}                     
	];
	
var designCanvasContextMenuData = [
		[
			{ text: "Copy The Object", onclick: { fn: doObjCopy } },
			{ text: "Paste The Object", onclick: { fn: doObjPaste } }
		],	
		[
			{ text: "Grid Setting", onclick: { fn: showGridSetting } },
			{ text: "Project Setting", onclick: { fn: showProjectSetting } }
		]
	];

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu Functions
//////////////////////////////////////////////////////////////////////////////////////////////////////

function doObjCopy() {
	if(uizObj[selectedObj].type != "canvas") {
		copiedObj = selectedObj;
	}
	else {
		alert("Can not copy the target is!");
	}
}

function doObjPaste() {
	var x = uizGetStyle("object"+copiedObj, "left");
	x = ( eval(x.replace("px", "")) + 10 ) + "px";	
	var y = uizGetStyle("object"+copiedObj, "top");
	y = ( eval(y.replace("px", "")) + 10 ) + "px";
	var zindex = uizGetStyle("object"+copiedObj, "z-index");
	var width = uizGetStyle("object"+copiedObj, "width");
	var height = uizGetStyle("object"+copiedObj, "height");
	var align = uizGetStyle("object"+copiedObj, "text-align");
	var visibility = uizGetStyle("object"+copiedObj, "visibility");
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
	
	if(uizObj[copiedObj].type == "pushButton" || uizObj[copiedObj].type == "checkboxButton") {
		label= uizObj[copiedObj].obj.get("label");
		disabled = uizObj[copiedObj].disabled;
		tabindex = uizObj[copiedObj].tabindex;
	}
	if(uizObj[copiedObj].type == "autoComplete" || uizObj[copiedObj].type == "dataTable") {
		datasourceNo = uizObj[copiedObj].datasourceNo;
	}
	if(uizObj[copiedObj].type == "dataSource") {
		provider = uizObj[copiedObj].provider;
		datasourceURL = uizObj[copiedObj].obj.liveData;
		datasourceType = uizObj[copiedObj].datasourceType;
		resultNode = uizObj[copiedObj].resultNode;
		query = uizObj[copiedObj].query;
	}	
	if(uizObj[copiedObj].type == "dataSource" || uizObj[copiedObj].type == "dataTable") {
		fields = uizObj[copiedObj].fields;
	}
	if(uizObj[copiedObj].type == "dataTable") {
		columnWidth = uizObj[copiedObj].columnWidth;
	}	
	if(uizObj[copiedObj].type == "tabView") {
		tabcount = uizObj[copiedObj].childCount;
	}
	if(uizObj[copiedObj].type == "image" || uizObj[copiedObj].type == "googleChart") {
		src = uizGetElementById("objectImg"+copiedObj).src;
	}
	if(uizObj[copiedObj].type == "swf") {
		src = uizGetElementById("objectSWF"+copiedObj).data;
	}
	if(uizObj[copiedObj].type == "form") {
		action = uizGetElementById("objectForm"+copiedObj).action;
		method = uizGetElementById("objectForm"+copiedObj).method;
		target = uizGetElementById("objectForm"+copiedObj).target;
	}		
	if(uizObj[copiedObj].type == "inputBox") {
		value = uizGetElementById("objectInput"+copiedObj).value;
	}
	if(uizObj[copiedObj].type == "div" || uizObj[copiedObj].type == "table") {
		backgroundColor = uizGetStyle("object"+copiedObj, "background-color");
	}
	if(uizObj[copiedObj].type == "radioButton") {
		buttoncount = uizObj[copiedObj].childCount;
	}
	if(uizObj[copiedObj].type == "panel") {
		closebutton = uizObj[copiedObj].obj.cfg.getProperty("close");
		draggable = uizObj[copiedObj].obj.cfg.getProperty("draggable");
	}
	if(uizObj[copiedObj].type == "timer") {
		interval = uizObj[copiedObj].interval;
	}	
	
	code = uizObj[copiedObj].code;
	html = uizObj[copiedObj].html;
	
	if(uizObj[copiedObj].type == "div") {
		addObjDiv();
		//replaceAll(html, "", "");
		//replaceAll(code, "", "");
	}
	else if(uizObj[copiedObj].type == "image") {
		addObjImage();
	}
	else if(uizObj[copiedObj].type == "swf") {
		addObjSWF(); 
	}
	else if(uizObj[copiedObj].type == "form") { 
		addObjForm();
	}
	else if(uizObj[copiedObj].type == "inputBox") {
		addObjInputbox();
	}
	else if(uizObj[copiedObj].type == "checkboxSet") {
		addObjCheckboxSet();
		html = replaceAll(html, "objectCheckboxForm"+copiedObj, "objectCheckboxForm"+(objectCount-1));
		html = replaceAll(html, "objectCheckboxSet"+copiedObj, "objectCheckboxSet"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));				
	}
	else if(uizObj[copiedObj].type == "radiobuttonSet") {
		addObjRadiobuttonSet();
		html = replaceAll(html, "objectPushButton"+copiedObj, "objectPushButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));				
	}
	else if(uizObj[copiedObj].type == "textArea") {
		addObjTextarea();
	}
	else if(uizObj[copiedObj].type == "table") {
		addObjTable();
		html = replaceAll(html, "objectPushButton"+copiedObj, "objectPushButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));			
	}
	else if(uizObj[copiedObj].type == "timer") {
		addObjTimer();
	}
	else if(uizObj[copiedObj].type == "pushButton") {
		addObjPushButton();
		html = replaceAll(html, "objectPushButton"+copiedObj, "objectPushButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "radioButton") {
		addObjRadioButton();
		html = replaceAll(html, "objectRadioButtonGroup"+copiedObj, "objectRadioButtonGroup"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "checkboxButton") {
		addObjCheckboxButton();
		html = replaceAll(html, "objectCheckBoxButton"+copiedObj, "objectCheckBoxButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "colorPicker") {
		addObjColorPicker();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));			
	}
	else if(uizObj[copiedObj].type == "tabView") {
		addObjTabview();
		html = replaceAll(html, "objectTabView"+copiedObj, "objectTabView"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "dataTable") {
		addObjDatatable();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "calendar") {
		addObjCalendar();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "panel") { 
		addObjPanel(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "slider") { 
		addObjSlider(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "autoComplete") { 
		addObjAutoComplete(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "rechTextEditor") { 
		addObjRichTextEditor(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "menuBar") {
		addObjMenuBar(); 
		html = replaceAll(html, "objectMenuBar"+copiedObj, "objectMenuBar"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "treeView") {
		addObjTreeview();
		html = replaceAll(html, "objectTreeview"+copiedObj, "objectTreeview"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "yuiChart") {
		addObjYUIChart();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "paginator") {
		addObjPaginator();
		html = replaceAll(html, "objectPaginator"+copiedObj, "objectPaginator"+(objectCount-1));
		html = replaceAll(html, "objectPaginatorContent"+copiedObj, "objectPaginatorContent"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "dragAndDrop") {
		addObjDragAndDrop();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "resize") {
		addObjResize();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "mapDaum") {
		addObjDaumMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "mapGoogle") {
		addObjGoogleMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "googleChart") {
		addObjGoogleChart();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "mapNaver") {
		addObjNaverMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "mapLive") {
		addObjLiveMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "dataSource") {
		addObjPushButton();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}	
	else {
		alert("Can not copy the object!");
		return 0;
	}
	
	setObjStyle(objectCount-1, x, y, zindex, width, height, align, visibility, label, disabled, tabindex, datasourceNo, provider, datasourceURL, datasourceType, resultNode, fields, query, columnWidth, tabcount, src, action, method, target, value, backgroundColor, buttoncount, closebutton, draggable, code, html, interval);
	
	objClicked(objectCount-1);
}

function doUndo() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();		
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	whichEditor.undo();
}

function doRedo() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	whichEditor.redo();
}	

function doCopy() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	var selectedText = whichEditor.selection();
	selectedText = eval(selectedText);
	var textRange = selectedText.createTextRange();
	alert(selectedText);
	textRange.execCommand("copy");
}

function doCut() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	tempstore = copiedtext;
	document.execCommand("cut");
	copiedtext=window.clipboardData.getData("Text");
}

function doPaste() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	tempstore = copiedtext;
	document.execCommand("paste");
}

function doDelete() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
}

function doIndentAll() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	whichEditor.reindent();
}

function doSelectAll() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.selectLines(whichEditor.firstLine(), 0, whichEditor.lastLine(), 0);
	whichEditor.focus();
}

function doFind() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	
	var text = prompt("Enter search term:", "");
    if (!text) return;

    var first = true;
    do {
      var cursor = whichEditor.getSearchCursor(text, first);
      first = false;
      while (cursor.findNext()) {
        cursor.select();
        if (!confirm("Search again?"))
          return;
      }
    } while (confirm("End of document reached. Start over?"));
}

function doReplace() {
	var whichEditor = codeEditor;
	if(tabView.get('activeIndex') == 4) {
		 whichEditor = htmlEditor;
	}
	else {
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();			
		tabView.set('activeIndex', 2);
	}
	
	whichEditor.focus();
	
	var from = prompt("Enter search string:", ""), to;
    if (from) to = prompt("What should it be replaced with?", "");
    if (to == null) return;

    var cursor = whichEditor.getSearchCursor(from, false);
    while (cursor.findNext())
      cursor.replace(to);
}

function openRealCode() {
	window.open("php/codeGenerator.php?mode=codeview&projectName=" + projectName);
}

function openRealHtml() {
	window.open("php/codeGenerator.php?mode=htmlview&projectName=" + projectName);
}

function openPreview() {
	window.open("php/codeGenerator.php?mode=print&projectName=" + projectName);
}

function printRealCode() {
	uizGetElementById('iframeRealCode').contentWindow.print();
}

function printRealHtml() {
	uizGetElementById('iframeRealHtml').contentWindow.print();
}

function printPreview() {
	uizGetElementById('iframePreview').contentWindow.print();
}

function toggleLeft() {
	layout.getUnitByPosition('left').toggle()
}

function toggleRight() {
	layout.getUnitByPosition('right').toggle()
}

function toggleBottom() {
	layout.getUnitByPosition('bottom').toggle()
}

function viewDesignTab() {
	tabView.set('activeIndex', 0);
	canvas1.show();
	canvas2.hide();
	canvas3.hide();
	canvas4.hide();
	canvas5.hide();
	canvas6.hide();
	canvas7.hide();		
}

function viewDataSourceTab() {
	tabView.set('activeIndex', 1);
	canvas1.hide();
	canvas2.show();
	canvas3.hide();
	canvas4.hide();
	canvas5.hide();
	canvas6.hide();
	canvas7.hide();		
}

function viewCodeTab() {
	tabView.set('activeIndex', 2);
	canvas1.hide();
	canvas2.hide();
	canvas3.show();
	canvas4.hide();
	canvas5.hide();
	canvas6.hide();
	canvas7.hide();		
}

function viewRealCodeTab() {
	tabView.set('activeIndex', 3);
	canvas1.hide();
	canvas2.hide();
	canvas3.hide();
	canvas4.show();
	canvas5.hide();
	canvas6.hide();
	canvas7.hide();		
}

function viewHtmlTab() {
	tabView.set('activeIndex', 4);
	canvas1.hide();
	canvas2.hide();
	canvas3.hide();
	canvas4.hide();
	canvas5.show();
	canvas6.hide();
	canvas7.hide();		
}

function viewRealHtmlTab() {
	tabView.set('activeIndex', 5);
	canvas1.hide();
	canvas2.hide();
	canvas3.hide();
	canvas4.hide();
	canvas5.hide();
	canvas6.show();
	canvas7.hide();		
}

function viewPreviewTab() {
	tabView.set('activeIndex', 6);
	canvas1.hide();
	canvas2.hide();
	canvas3.hide();
	canvas4.hide();
	canvas5.hide();
	canvas6.hide();
	canvas7.show();	
}

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