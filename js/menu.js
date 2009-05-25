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
					{ text: "Javascript Code", helptext: "Shift + J", onclick: { fn: viewCode } },
					{ text: "Html Code", helptext: "Shift + H", onclick: { fn: viewHtml } }
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
					{ text: "Design Tab", onclick: { fn: viewDesignTab } },
					{ text: "DataSource Tab", onclick: { fn: viewDataSourceTab } },
					{ text: "Code Tab", onclick: { fn: viewCodeTab } },
					{ text: "RealCode Tab", onclick: { fn: viewRealCodeTab } },
					{ text: "Html Tab", onclick: { fn: viewHtmlTab } },
					{ text: "RealHtml Tab", onclick: { fn: viewRealHtmlTab } },					
					{ text: "Preview Tab", onclick: { fn: viewPreviewTab } }
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

function doObjInputboxFocus() {
	uizGetElementById("object" + selectedObj + "Input").focus();
}

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
	
	if(uizObj[copiedObj].type == "PUSHBUTTON" || uizObj[copiedObj].type == "CHECKBOXBUTTON") {
		label= uizObj[copiedObj].obj.get("label");
		disabled = uizObj[copiedObj].disabled;
		tabindex = uizObj[copiedObj].tabindex;
	}
	if(uizObj[copiedObj].type == "AUTOCOMPLETE" || uizObj[copiedObj].type == "DATATABLE") {
		datasourceNo = uizObj[copiedObj].datasourceNo;
	}
	if(uizObj[copiedObj].type == "DATASOURCE") {
		provider = uizObj[copiedObj].provider;
		datasourceURL = uizObj[copiedObj].obj.liveData;
		datasourceType = uizObj[copiedObj].datasourceType;
		resultNode = uizObj[copiedObj].resultNode;
		query = uizObj[copiedObj].query;
	}	
	if(uizObj[copiedObj].type == "DATASOURCE" || uizObj[copiedObj].type == "DATATABLE") {
		fields = uizObj[copiedObj].fields;
	}
	if(uizObj[copiedObj].type == "DATATABLE") {
		columnWidth = uizObj[copiedObj].columnWidth;
	}	
	if(uizObj[copiedObj].type == "TABVIEW") {
		tabcount = uizObj[copiedObj].childCount;
	}
	if(uizObj[copiedObj].type == "IMAGE" || uizObj[copiedObj].type == "GOOGLECHART") {
		src = uizGetElementById("objectImg"+copiedObj).src;
	}
	if(uizObj[copiedObj].type == "SWF") {
		src = uizGetElementById("objectSWF"+copiedObj).data;
	}
	if(uizObj[copiedObj].type == "FORM") {
		action = uizGetElementById("objectForm"+copiedObj).action;
		method = uizGetElementById("objectForm"+copiedObj).method;
		target = uizGetElementById("objectForm"+copiedObj).target;
	}		
	if(uizObj[copiedObj].type == "INPUTBOX") {
		value = uizGetElementById("objectInput"+copiedObj).value;
	}
	if(uizObj[copiedObj].type == "DIV" || uizObj[copiedObj].type == "TABLE") {
		backgroundColor = uizGetStyle("object"+copiedObj, "background-color");
	}
	if(uizObj[copiedObj].type == "RADIOBUTTON") {
		buttoncount = uizObj[copiedObj].childCount;
	}
	if(uizObj[copiedObj].type == "PANEL") {
		closebutton = uizObj[copiedObj].obj.cfg.getProperty("close");
		draggable = uizObj[copiedObj].obj.cfg.getProperty("draggable");
	}
	if(uizObj[copiedObj].type == "TIMER") {
		interval = uizObj[copiedObj].interval;
	}	
	
	code = uizObj[copiedObj].code;
	html = uizObj[copiedObj].html;
	
	if(uizObj[copiedObj].type == "DIV") {
		addObjDiv();
		//replaceAll(html, "", "");
		//replaceAll(code, "", "");
	}
	else if(uizObj[copiedObj].type == "IMAGE") {
		addObjImage();
	}
	else if(uizObj[copiedObj].type == "SWF") {
		addObjSWF(); 
	}
	else if(uizObj[copiedObj].type == "FORM") { 
		addObjForm();
	}
	else if(uizObj[copiedObj].type == "INPUTBOX") {
		addObjInputbox();
	}
	else if(uizObj[copiedObj].type == "CHECKBOXSET") {
		addObjCheckboxSet();
		html = replaceAll(html, "objectCheckboxForm"+copiedObj, "objectCheckboxForm"+(objectCount-1));
		html = replaceAll(html, "objectCheckboxSet"+copiedObj, "objectCheckboxSet"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));				
	}
	else if(uizObj[copiedObj].type == "RADIOBUTTONSET") {
		addObjRadiobuttonSet();
		html = replaceAll(html, "objectPushButton"+copiedObj, "objectPushButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));				
	}
	else if(uizObj[copiedObj].type == "TEXTAREA") {
		addObjTextarea();
	}
	else if(uizObj[copiedObj].type == "TABLE") {
		addObjTable();
		html = replaceAll(html, "objectPushButton"+copiedObj, "objectPushButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));			
	}
	else if(uizObj[copiedObj].type == "TIMER") {
		addObjTimer();
	}
	else if(uizObj[copiedObj].type == "PUSHBUTTON") {
		addObjPushButton();
		html = replaceAll(html, "objectPushButton"+copiedObj, "objectPushButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "RADIOBUTTON") {
		addObjRadioButton();
		html = replaceAll(html, "objectRadioButtonGroup"+copiedObj, "objectRadioButtonGroup"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "CHECKBOXBUTTON") {
		addObjCheckboxButton();
		html = replaceAll(html, "objectCheckBoxButton"+copiedObj, "objectCheckBoxButton"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "COLORPICKER") {
		addObjColorPicker();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));			
	}
	else if(uizObj[copiedObj].type == "TABVIEW") {
		addObjTabview();
		html = replaceAll(html, "objectTabView"+copiedObj, "objectTabView"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));	
	}
	else if(uizObj[copiedObj].type == "DATATABLE") {
		addObjDatatable();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "CALENDAR") {
		addObjCalendar();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "PANEL") { 
		addObjPanel(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "SLIDER") { 
		addObjSlider(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "AUTOCOMPLETE") { 
		addObjAutoComplete(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "RECHTEXTEDITOR") { 
		addObjRichTextEditor(); 
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "MENUBAR") {
		addObjMenuBar(); 
		html = replaceAll(html, "objectMenuBar"+copiedObj, "objectMenuBar"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "TREEVIEW") {
		addObjTreeview();
		html = replaceAll(html, "objectTreeview"+copiedObj, "objectTreeview"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "YUICHART") {
		addObjYUIChart();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "PAGINATOR") {
		addObjPaginator();
		html = replaceAll(html, "objectPaginator"+copiedObj, "objectPaginator"+(objectCount-1));
		html = replaceAll(html, "objectPaginatorContent"+copiedObj, "objectPaginatorContent"+(objectCount-1));
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "DRAGANDDROP") {
		addObjDragAndDrop();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "RESIZE") {
		addObjResize();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "MAPDAUM") {
		addObjDaumMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "MAPGOOGLE") {
		addObjGoogleMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "GOOGLECHART") {
		addObjGoogleChart();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "MAPNAVER") {
		addObjNaverMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "MAPLIVE") {
		addObjLiveMap();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}
	else if(uizObj[copiedObj].type == "DATASOURCE") {
		addObjPushButton();
		code = replaceAll(code, "Object"+copiedObj, "Object"+(objectCount-1));
	}	
	else {
		alert("Can not paste the object!");
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