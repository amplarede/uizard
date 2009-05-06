/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

///////////////////////////////////////////////////////////////////////////////////////////////
// addCanvas()
///////////////////////////////////////////////////////////////////////////////////////////////
function addCanvas() {
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "canvas";

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onLoad_Canvas() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onUnLoad_Canvas() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjDiv()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjDiv() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:150px; height:150px; font-size:12px; color:#888;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'>No Contents Now...</div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "div";	

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjImage()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjImage() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:150px; height:150px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<img id='objectImg"+objectCount+"' style='width:100%; height:100%;' src='http://no-src'>";
	uizObj[objectCount].type = "image";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjSWF()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjSWF() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:150px; height:150px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<div id=\"objectSWFcontainer"+objectCount+"\"></div>";
	uizObj[objectCount].type = "swf";

	uizGetElementById('object'+objectCount).innerHTML = uizObj[objectCount].obj;
	
	var flashvars = false;
	var params = {};
	var attributes = {
	  id: "objectSWF"+objectCount,
	  name: "objectSWF"+objectCount
	};

	swfobject.embedSWF("images/test.swf", "objectSWFcontainer"+objectCount, "150", "150", "9.0.0", "expressInstall.swf", flashvars, params, attributes);
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjForm()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjForm() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<img src='images/toolbox/form.png' align='absmiddle'> Form"+objectCount+"<form id='objectForm"+objectCount+"' name='objectForm"+objectCount+"' action=\"no-target\" method=\"post\" target=\"\"></form>";	
	uizObj[objectCount].type = "form";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjInputbox()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjInputbox() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:200px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<input id='objectInput"+objectCount+"' type='text' style='width:100%;'>";
	uizObj[objectCount].type = "inputBox";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjCheckboxSet()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjCheckboxSet() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:200px; height:100px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "checkboxSet";
	uizObj[objectCount].childCount = 1;

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<form id='objectCheckboxForm"+objectCount+"'>\n";
	uizObj[objectCount].html += "\t<div id='objectCheckboxSet"+objectCount+"Container"+uizObj[objectCount].childCount+"' style='font-size:12px;'>\n\t\t<input id='objectCheckboxSet"+objectCount+"Item"+uizObj[objectCount].childCount+"' type='checkbox' value='1' checked> Checkbox Label\n\t</div>\n";
	uizObj[objectCount].html += "</form>";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjRadiobuttonSet()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjRadiobuttonSet() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:200px; height:100px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "radiobuttonSet";
	uizObj[objectCount].childCount = 1;
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<form id='objectRadioForm"+objectCount+"'>\n";
	uizObj[objectCount].html += "\t<div id='objectRadiobuttonSet"+objectCount+"Container"+uizObj[objectCount].childCount+"' style='font-size:12px;'>\n\t\t<input id='objectRadiobuttonSet"+objectCount+"Item"+uizObj[objectCount].childCount+"' name='objectRadiobutton"+objectCount+"' type='radio' value='1' checked> Radiobutton Label\n\t</div>\n";
	uizObj[objectCount].html += "</form>";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjTextarea()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjTextarea() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:300px; height:200px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<textarea id='objectTextArea"+objectCount+"' style='width:100%; height:100%; padding:0px; margin:0px;'></textarea>";
	uizObj[objectCount].type = "textArea";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish();   
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjTable()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjTable() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:200px; height:100px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "table";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<table width='100%' border='1'>\n";
	uizObj[objectCount].html += "\t<tr>\n";
	uizObj[objectCount].html += "\t\t<td>&nbsp;</td>\n";
	uizObj[objectCount].html += "\t\t<td>&nbsp;</td>\n";
	uizObj[objectCount].html += "\t</tr>\n";
	uizObj[objectCount].html += "\t<tr>\n";
	uizObj[objectCount].html += "\t\t<td>&nbsp;</td>\n";
	uizObj[objectCount].html += "\t\t<td>&nbsp;</td>\n";
	uizObj[objectCount].html += "\t</tr>\n";
	uizObj[objectCount].html += "</table>\n";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjTimer()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjTimer() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<img src='images/toolbox/timer.png' align='absmiddle'> Timer"+objectCount;
	uizObj[objectCount].type = "timer";
	uizObj[objectCount].interval = 1000;
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjPushButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjPushButton() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"Handle' style='position:absolute; z-index:1; left:50px; top:50px; cursor:move; width:20px; height:20px; background:url(images/handle.png); opacity:0.5; filter:alpha(opacity=50);' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "pushButton";
		
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<input type=\"button\" id=\"objectPushButton"+objectCount+"\" name=\"objectPushButton"+objectCount+"\" value=\"Button\">\n";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;
	
	uizObj[objectCount].obj = new YAHOO.widget.Button("objectPushButton"+objectCount);
	
	uizObj[objectCount].disabled = "false";
	uizObj[objectCount].tabindex = "0";	
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDblClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseOver_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseOut_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// modObjPushButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function modObjPushButton(objCount, label, disabled, tabindex) {
	uizObj[objCount].obj.set("label", label);
	uizObj[objCount].disabled = disabled;
	uizObj[objCount].tabindex = tabindex;
	//uizObj[objCount].obj.destroy();
	//uizGetElementById('object' + objCount).innerHTML = "";
	//uizObj[objCount].obj = new YAHOO.widget.Button({ id:"objectPushButton"+objCount, container:"object"+objCount, label:label, disabled:disabled, tabindex:tabindex });
	//uizObj[objCount].type = "pushButton";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjRadioButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjRadioButton() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")'   onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "radioButton";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<div id=\"objectRadioButtonGroup"+objectCount+"\" class=\"yui-buttongroup\">\n";
	uizObj[objectCount].html += "\t<span id=\"objectRadio1\" class=\"yui-button yui-radio-button yui-button-checked\">\n";
	uizObj[objectCount].html += "\t\t<span class=\"first-child\">\n";
	uizObj[objectCount].html += "\t\t\t<button type=\"button\" name=\"objectRadioField1\" value=\"1\">\n";
	uizObj[objectCount].html += "\t\t\t\tRadio1\n";
	uizObj[objectCount].html += "\t\t\t</button>\n";
	uizObj[objectCount].html += "\t\t</span>\n";
	uizObj[objectCount].html += "\t</span>\n";
	uizObj[objectCount].html += "\t<span id=\"objectRadio2\" class=\"yui-button yui-radio-button\">\n";
	uizObj[objectCount].html += "\t\t<span class=\"first-child\">\n";
	uizObj[objectCount].html += "\t\t\t<button type=\"button\" name=\"objectRadioField2\" value=\"2\">\n";
	uizObj[objectCount].html += "\t\t\t\tRadio2\n";
	uizObj[objectCount].html += "\t\t\t</button>\n";
	uizObj[objectCount].html += "\t\t</span>\n";
	uizObj[objectCount].html += "\t</span>\n";
	uizObj[objectCount].html += "\t<span id=\"objectRadio3\" class=\"yui-button yui-radio-button\">\n";
	uizObj[objectCount].html += "\t\t<span class=\"first-child\">\n";
	uizObj[objectCount].html += "\t\t\t<button type=\"button\" name=\"objectRadioField3\" value=\"3\">\n";
	uizObj[objectCount].html += "\t\t\t\tRadio3\n";
	uizObj[objectCount].html += "\t\t\t</button>\n";
	uizObj[objectCount].html += "\t\t</span>\n";
	uizObj[objectCount].html += "\t</span>\n";
	uizObj[objectCount].html += "</div>\n";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;

	uizObj[objectCount].obj = new YAHOO.widget.ButtonGroup("objectRadioButtonGroup"+objectCount);
	
	uizObj[objectCount].childCount = 3;
		
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onValueChange_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjCheckboxButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjCheckboxButton() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"Handle' style='position:absolute; z-index:1; left:50px; top:50px; cursor:move; width:20px; height:20px; background:url(images/handle.png); opacity:0.5; filter:alpha(opacity=50);' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";	

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "checkboxButton";

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<input type=\"checkbox\" id=\"objectCheckBoxButton"+objectCount+"\" name=\"objectCheckBoxButton"+objectCount+"\" value=\"1\">\n";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;
	
	uizObj[objectCount].obj = new YAHOO.widget.Button("objectCheckBoxButton"+objectCount, { label: "CheckBox" });

	uizObj[objectCount].disabled = "false";
	uizObj[objectCount].tabindex = "0";

	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onCheckedChange_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	

	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// modObjCheckboxButton()
///////////////////////////////////////////////////////////////////////////////////////////////
function modObjCheckboxButton(objCount, label, disabled, tabindex) {
	uizObj[objCount].obj.set("label", label);
	uizObj[objCount].disabled = disabled;
	uizObj[objCount].tabindex = tabindex;
	//uizObj[objCount].obj.destroy();
	//uizGetElementById('object' + objCount).innerHTML = "";
	//uizObj[objCount].obj = new YAHOO.widget.Button({ id:"objectCheckboxButton"+objCount, container:"object"+objCount, type:"checkbox", label:label, disabled:disabled, tabindex:tabindex });
	//uizObj[objCount].type = "checkboxButton";
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjColorPicker()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjColorPicker() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; padding:6px; width:350px; height:190px' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.widget.ColorPicker("object"+objectCount, {
		showhsvcontrols: true,
		showhexcontrols: true,
		images: {
			PICKER_THUMB: "lib/yui/colorpicker/assets/picker_thumb.png",
			HUE_THUMB: "lib/yui/colorpicker/assets/hue_thumb.png"
		}
	});
	uizObj[objectCount].type = "colorPicker";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onRGBChange_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjTabview()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjTabview() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='width:400px; height:100px; position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "tabView";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<div id='objectTabView"+objectCount+"' class='yui-navset'>\n";
	uizObj[objectCount].html += "\t<ul id='objectTabView"+objectCount+"Nav' class='yui-nav'>\n";
	uizObj[objectCount].html += "\t\t<li class='selected'><a href='tab1'><em>Tab1 Label</em></a></li>\n";
	uizObj[objectCount].html += "\t\t<li><a href='tab2'><em>Tab2 Label</em></a></li>\n";
	uizObj[objectCount].html += "\t\t<li><a href='tab3'><em>Tab3 Label</em></a></li>\n";
	uizObj[objectCount].html += "\t</ul>\n";
	uizObj[objectCount].html += "\t<div id='objectTabView"+objectCount+"Contents' class='yui-content'>\n";
	uizObj[objectCount].html += "\t\t<div id='tab1'><p>Tab1 Content</p></div>\n";
	uizObj[objectCount].html += "\t\t<div id='tab2' class=\"yui-hidden\"><p>Tab2 Content</p></div>\n";
	uizObj[objectCount].html += "\t\t<div id='tab3' class=\"yui-hidden\"><p>Tab3 Content</p></div>\n";
	uizObj[objectCount].html += "\t</div>\n";
	uizObj[objectCount].html += "</div>\n";

	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;
	
	uizObj[objectCount].obj = new YAHOO.widget.TabView("objectTabView"+objectCount);
	uizObj[objectCount].childCount = 3;
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onClickTab0_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onContentChangeTab0_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onClickTab1_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onContentChangeTab1_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	
	addObjFinish();  
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjDatatable()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjDatatable() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:300px; height:300px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	var dummyDs = new YAHOO.util.XHRDataSource("conf/toolbox/default.xml");
	dummyDs.connMethodPost = true; 
	dummyDs.responseType = YAHOO.util.DataSource.TYPE_XML;
	dummyDs.responseSchema = { 
		resultNode: "property", 
		fields: ["id","value"] 
	}; 

	var tableColumnDefs = [
		{key:"id", width:80 },
		{key:"value", width:220 }
	];
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.widget.DataTable("object"+objectCount, tableColumnDefs, dummyDs);
	uizObj[objectCount].type = "dataTable";
	uizObj[objectCount].fields = "id,value";	
	uizObj[objectCount].columnWidth = "80,220";	
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onCellClickEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onCellDblclickEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onCellMousedownEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onCellMouseoutEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onCellMouseoverEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onCellMouseupEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onRowMouseoverEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onRowMouseoutEvent_Object" + objectCount +"(oArgs) {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	
	addObjFinish();	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// modObjDatatable()
///////////////////////////////////////////////////////////////////////////////////////////////
function modObjDatatable(objCount, fields, columnWidth) {
	uizGetElementById('object'+objCount).innerHTML = "";
	
	var dummyDs = new YAHOO.util.XHRDataSource("conf/toolbox/default.xml");
	dummyDs.connMethodPost = true; 
	dummyDs.responseType = YAHOO.util.DataSource.TYPE_XML;
	dummyDs.responseSchema = { 
		resultNode: "property", 
		fields: ["id","value"] 
	};
	
	if(fields.length == columnWidth.length) {
		var tableColumnDefs = new Array();
		
		for(var i=0; i<fields.length; i++) {
			tableColumnDefs[i] = {key: fields[i], width: parseInt(columnWidth[i])};
		}
	
		uizObj[objCount].obj = new YAHOO.widget.DataTable("object"+objCount, tableColumnDefs, dummyDs);
	}
	else {
		alert("the number of fields should match with that of the columnWidth");
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjCalendar()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjCalendar() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.widget.Calendar("objectCalendar"+objectCount,"object"+objectCount);
	uizObj[objectCount].type = "calendar";
	uizObj[objectCount].obj.render();
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onSelect_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	
	addObjFinish();	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjPanel()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjPanel() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='width:300px; height:200px; position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "panel";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<div id='objectPanel"+objectCount+"'>\n";
	uizObj[objectCount].html += "\t<div class='hd'>Panel Header</div>\n";
	uizObj[objectCount].html += "\t<div class='bd'>Panel Body</div>\n";
	uizObj[objectCount].html += "\t<div class='ft'>Panel Footer</div>\n";
	uizObj[objectCount].html += "</div>";

	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].html;
	
	uizObj[objectCount].obj = new YAHOO.widget.Panel("objectPanel"+objectCount, { width:"300px", height:"200px", visible:true, draggable:false, close:false } );
	uizObj[objectCount].obj.render();

	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onDragEvent_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onHideMaskEvent_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onShowMaskEvent_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMoveEvent_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onRenderEvent_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";		
		
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjSlider()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjSlider() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='width:220px; height:30px; position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizGetElementById('object'+objectCount).innerHTML += "<div id='slider-bg" + objectCount + "' style='background:url(http://yui.yahooapis.com/2.6.0/build/slider/assets/bg-fader.gif) 5px 0 no-repeat;' class=\"yui-h-slider\" tabindex=\"-1\" title=\"Slider\"><div id='slider-thumb" + objectCount + "' class=\"yui-slider-thumb\"><img src=\"http://yui.yahooapis.com/2.6.0/build/slider/assets/thumb-n.gif\"></div></div>";

	var topConstraint = 0;
	var bottomConstraint = 200;

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.widget.Slider.getHorizSlider("slider-bg" + objectCount, "slider-thumb" + objectCount, topConstraint, bottomConstraint, 20);
	uizObj[objectCount].type = "slider";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onChange_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onSlideStart_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onSlideEnd_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	
	addObjFinish();	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjAutoComplete()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjAutoComplete() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:200px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	//AutoComplete
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<input id='object"+objectCount+"Input' type='text' style='width:100%;'>";
	uizObj[objectCount].type = "autoComplete";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;
		
	uizObj[objectCount].code  = "\n\n//Do Not Remove This Function Prototype ( & => and! )\n";
	uizObj[objectCount].code += "var generateRequest_Object" + objectCount + " = function(sQuery) {\n";
	uizObj[objectCount].code += "	return \"and!query=\" + sQuery + \"and!q=\" + sQuery;\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "var formatResult_Object" + objectCount + " = function(oResultItem, sQuery) {\n";
	uizObj[objectCount].code += "	return oResultItem[0];\n";
	uizObj[objectCount].code += "}\n\n";

	addObjFinish();   
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjRichTextEditor()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjRichTextEditor() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:600px; height:300px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
    
    var myConfig = {
        dompath: true,
		width: "100%",
		height: "100%"
    };

	uizGetElementById("object"+objectCount).innerHTML = "<textarea id='textarea"+objectCount+"'></textarea>";
	
	uizObj[objectCount] = new uizObjClass();
    uizObj[objectCount].obj = new YAHOO.widget.Editor('textarea'+objectCount, myConfig);
	uizObj[objectCount].type = "richTextEditor";
	
    uizObj[objectCount].obj.render();

	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish();   
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjMenuBar()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjMenuBar() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "menuBar";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<div id=\"objectMenuBar"+objectCount+"\">\n";
    uizObj[objectCount].html += "\t<div class=\"bd\">\n";
    uizObj[objectCount].html += "\t\t<ul class=\"first-of-type\">\n";
    uizObj[objectCount].html += "\t\t\t<li class=\"yuimenubaritem first-of-type\">\n";
    uizObj[objectCount].html += "\t\t\t\t<a class=\"yuimenubaritemlabel\" onclick=''>Menu1</a>\n";
	uizObj[objectCount].html += "\t\t\t\t<div id=\"menu1\" class=\"yuimenu\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t<div class=\"bd\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t<ul class=\"first-of-type\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu1-1</a></li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu1-2</a></li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu1-3</a></li>\n";	
	uizObj[objectCount].html += "\t\t\t\t\t\t</ul>\n";
	uizObj[objectCount].html += "\t\t\t\t\t</div>\n";	
	uizObj[objectCount].html += "\t\t\t\t</div>\n";	
    uizObj[objectCount].html += "\t\t\t</li>\n";
    uizObj[objectCount].html += "\t\t\t<li class=\"yuimenubaritem\">\n";
    uizObj[objectCount].html += "\t\t\t\t<a class=\"yuimenubaritemlabel\" onclick=''>Menu2</a>\n";
	uizObj[objectCount].html += "\t\t\t\t<div id=\"menu2\" class=\"yuimenu\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t<div class=\"bd\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t<ul class=\"first-of-type\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu2-1</a></li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu2-2</a></li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu2-3</a></li>\n";	
	uizObj[objectCount].html += "\t\t\t\t\t\t</ul>\n";
	uizObj[objectCount].html += "\t\t\t\t\t</div>\n";	
	uizObj[objectCount].html += "\t\t\t\t</div>\n";	
    uizObj[objectCount].html += "\t\t\t</li>\n";
    uizObj[objectCount].html += "\t\t\t<li class=\"yuimenubaritem\">\n";
    uizObj[objectCount].html += "\t\t\t\t<a class=\"yuimenubaritemlabel\" onclick=''>Menu3</a>\n";
	uizObj[objectCount].html += "\t\t\t\t<div id=\"menu3\" class=\"yuimenu\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t<div class=\"bd\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t<ul class=\"first-of-type\">\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu3-1</a></li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu3-2</a></li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t\t<li class=\"yuimenuitem\"><a class=\"yuimenuitemlabel\" onclick=''>Menu3-3</a></li>\n";	
	uizObj[objectCount].html += "\t\t\t\t\t\t</ul>\n";
	uizObj[objectCount].html += "\t\t\t\t\t</div>\n";	
	uizObj[objectCount].html += "\t\t\t\t</div>\n";	
    uizObj[objectCount].html += "\t\t\t</li>\n";;
    uizObj[objectCount].html += "\t\t</ul>\n";        
    uizObj[objectCount].html += "\t</div>\n";
	uizObj[objectCount].html += "</div>\n";
	
	uizGetElementById('object'+objectCount).innerHTML = uizObj[objectCount].html;

	uizObj[objectCount].obj = new YAHOO.widget.MenuBar("objectMenuBar"+objectCount);	
	uizObj[objectCount].obj.render();
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onShow_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onHide_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	
	addObjFinish();	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjTreeview()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjTreeview() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "treeView";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<div id=\"objectTreeview"+objectCount+"\">\n";
	uizObj[objectCount].html += "\t<ul>\n";
	uizObj[objectCount].html += "\t\t<li>item 0\n";
	uizObj[objectCount].html += "\t\t\t<ul>\n";
	uizObj[objectCount].html += "\t\t\t\t<li>item 0-0\n";
	uizObj[objectCount].html += "\t\t\t\t\t<ul>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t<li>item 0-0-0</li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t\t<li>item 0-0-1</li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t</ul>\n";
	uizObj[objectCount].html += "\t\t\t\t</li>\n";
	uizObj[objectCount].html += "\t\t\t</ul>\n";
	uizObj[objectCount].html += "\t\t</li>\n";
	uizObj[objectCount].html += "\t\t<li>item 1\n";
	uizObj[objectCount].html += "\t\t\t<ul>\n";
	uizObj[objectCount].html += "\t\t\t\t<li>item 1-0\n";
	uizObj[objectCount].html += "\t\t\t\t<ul>\n";
	uizObj[objectCount].html += "\t\t\t\t\t<li>item 1-0-0</li>\n";
	uizObj[objectCount].html += "\t\t\t\t\t<li>item 1-0-1</li>\n";
	uizObj[objectCount].html += "\t\t\t\t</ul>\n";
	uizObj[objectCount].html += "\t\t\t\t</li>\n";
	uizObj[objectCount].html += "\t\t\t</ul>\n";
	uizObj[objectCount].html += "\t\t</li>\n";
	uizObj[objectCount].html += "\t</ul>\n";
	uizObj[objectCount].html += "</div>\n";
	
	uizGetElementById('object'+objectCount).innerHTML = uizObj[objectCount].html;

	uizObj[objectCount].obj = new YAHOO.widget.TreeView("objectTreeview"+objectCount);
	uizObj[objectCount].obj.render();
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onShow_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onHide_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	
	addObjFinish();		
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjYUIChart()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjYUIChart() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:250px; height:200px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "yuiChart";	
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<div style='visibility:hidden; position:absolute;'>\n";
	uizObj[objectCount].html += "<table id='objectChartData"+objectCount+"' width='100%' border='1'>\n";
	uizObj[objectCount].html += "\t<thead>\n";
	uizObj[objectCount].html += "\t\t<tr>\n";
	uizObj[objectCount].html += "\t\t\t<th>Name</th>\n";
	uizObj[objectCount].html += "\t\t\t<th>Value</th>\n";
	uizObj[objectCount].html += "\t\t</tr>\n";
	uizObj[objectCount].html += "\t</thead>\n";	
	uizObj[objectCount].html += "\t<tbody>\n";
	uizObj[objectCount].html += "\t\t<tr>\n";
	uizObj[objectCount].html += "\t\t\t<td>A</td>\n";
	uizObj[objectCount].html += "\t\t\t<td>50</td>\n";
	uizObj[objectCount].html += "\t\t</tr>\n";
	uizObj[objectCount].html += "\t\t<tr>\n";
	uizObj[objectCount].html += "\t\t\t<td>B</td>\n";
	uizObj[objectCount].html += "\t\t\t<td>70</td>\n";
	uizObj[objectCount].html += "\t\t</tr>\n";
	uizObj[objectCount].html += "\t\t<tr>\n";
	uizObj[objectCount].html += "\t\t\t<td>C</td>\n";
	uizObj[objectCount].html += "\t\t\t<td>30</td>\n";
	uizObj[objectCount].html += "\t\t</tr>\n";	
	uizObj[objectCount].html += "\t\t<tr>\n";
	uizObj[objectCount].html += "\t\t\t<td>D</td>\n";
	uizObj[objectCount].html += "\t\t\t<td>90</td>\n";
	uizObj[objectCount].html += "\t\t</tr>\n";
	uizObj[objectCount].html += "\t</tbody>\n";
	uizObj[objectCount].html += "</table>\n";
	uizObj[objectCount].html += "</div>\n";
	
	makeYUIChart(objectCount);

	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// makeYUIChart()
///////////////////////////////////////////////////////////////////////////////////////////////
function makeYUIChart(objCount) {
	uizGetElementById('object'+objCount).innerHTML = uizObj[objCount].html;
	uizGetElementById('object'+objCount).innerHTML += "<div id=\"objectChart"+objCount+"\">Unable to load Flash content. The YUI Charts Control requires Flash Player 9.0.45 or higher. You can download the latest version of Flash Player from the <a href=\"http://www.adobe.com/go/getflashplayer\">Adobe Flash Player Download Center</a>.</p></div>";
	
	var chartData = new YAHOO.util.DataSource(YAHOO.util.Dom.get('objectChartData'+objCount));
	chartData.responseType = YAHOO.util.DataSource.TYPE_HTMLTABLE;
	chartData.responseSchema = { fields : ['Name', 'Value'] };
	
	YAHOO.widget.Chart.SWFURL = "http://yui.yahooapis.com/2.7.0/build/charts/assets/charts.swf";
	
	var yAxis = new YAHOO.widget.NumericAxis();
	yAxis.minimum = 0;
	yAxis.maximum = 100;
	
	uizObj[objCount].obj = new YAHOO.widget.ColumnChart("objectChart"+objCount, chartData,
	{
		xField: 'Name',
		yField: 'Value',
		yAxis: yAxis,
	});
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjPaginator()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjPaginator() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:350px; height:80px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].type = "paginator";	

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<div id='objectPaginator"+objectCount+"'>\n";
	uizObj[objectCount].html += "</div>\n";
	uizObj[objectCount].html += "<div id='objectPaginatorContent"+objectCount+"' style='background: white; border: 1px solid gray; padding: 1px 2px;'>\n";
	uizObj[objectCount].html += "\t<div style='display: block; padding:10px;'>\n";
	uizObj[objectCount].html += "\t\tContents of page1\n";
	uizObj[objectCount].html += "\t</div>\n";	
	uizObj[objectCount].html += "\t<div style='display: none; padding:10px;'>\n";
	uizObj[objectCount].html += "\t\tContents of page2\n";
	uizObj[objectCount].html += "\t</div>\n";	
	uizObj[objectCount].html += "\t<div style='display: none; padding:10px;'>\n";
	uizObj[objectCount].html += "\t\tContents of page3\n";
	uizObj[objectCount].html += "\t</div>\n";	
	uizObj[objectCount].html += "\t<div style='display: none; padding:10px;'>\n";
	uizObj[objectCount].html += "\t\tContents of page4\n";
	uizObj[objectCount].html += "\t</div>\n";	
	uizObj[objectCount].html += "\t<div style='display: none; padding:10px;'>\n";
	uizObj[objectCount].html += "\t\tContents of page5\n";
	uizObj[objectCount].html += "\t</div>\n";	
	uizObj[objectCount].html += "</div>\n";	
	
	makePaginator(objectCount);
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}
///////////////////////////////////////////////////////////////////////////////////////////////
// makePaginator()
///////////////////////////////////////////////////////////////////////////////////////////////
function makePaginator(objCount) {
	uizGetElementById('object'+objCount).innerHTML = uizObj[objCount].html;
	
	uizObj[objCount].obj = new YAHOO.widget.Paginator({
		rowsPerPage : 1,
		totalRecords : YAHOO.util.Dom.get('objectPaginatorContent'+objCount).getElementsByTagName('div').length,
		containers : 'objectPaginator'+objCount
	});

	var handlePagination = function (state) {
		var pageContents = YAHOO.util.Dom.get('objectPaginatorContent'+objCount).getElementsByTagName('div');
		var pageNum = YAHOO.util.Dom.get('objectPaginatorContent'+objCount).getElementsByTagName('div').length;
		for(var i=0; i<pageNum; i++) {
			uizSetStyle(pageContents[i], "display", "none");
		}
		uizSetStyle(pageContents[state.page-1], "display", "block");
		uizObj[objCount].obj.setState(state);
	};

	uizObj[objCount].obj.subscribe('changeRequest', handlePagination);
	uizObj[objCount].obj.render();	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjDragAndDrop()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjDragAndDrop() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<img src='images/toolbox/draganddrop.png' align='absmiddle'> Drag And Drop"+objectCount;
	uizObj[objectCount].type = "dragAndDrop";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjResize()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjResize() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; ' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<img src='images/toolbox/resize.png' align='absmiddle'> Resize"+objectCount;
	uizObj[objectCount].type = "resize";	
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjGoogleMap()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjGoogleMap() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:300px; height:200px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"Handle' style='position:absolute; cursor:move; width:20px; height:20px; background:url(images/handle.png); opacity:0.5; filter:alpha(opacity=50);' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizSetStyle("object"+objectCount+"Handle", "left", uizGetStyle("object"+objectCount, "left"));
	uizSetStyle("object"+objectCount+"Handle", "top", uizGetStyle("object"+objectCount, "top"));
	uizSetStyle("object"+objectCount+"Handle", "z-index", uizGetStyle("object"+objectCount, "z-index"));
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new google.maps.Map2(uizGetElementById("object"+objectCount));
	uizObj[objectCount].type = "mapGoogle";
	
	uizObj[objectCount].obj.setCenter(new google.maps.LatLng(37.4419, -122.1419), 13);

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onAddMapType_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onRemoveMapType_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDblClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onSingleRightClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMoveStart_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMove_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMoveEnd_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onZoomEnd_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMapTypeChange_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onInfoWindowOpen_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onInfoWindowBeforeClose_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onInfoWindowClose_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onAddOverlay_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onRemoveOverlay_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onClearOverlays_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseOver_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onMouseOut_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onMouseMove_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDragStart_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDrag_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onDragEnd_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onLoad_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjGoogleChart()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjGoogleChart() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:150px; height:150px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";

	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = "<img id='objectImg"+objectCount+"' src='http://chart.apis.google.com/chart?cht=p3&chd=t:60,40&chs="+uizGetStyle("object"+objectCount, "width").replace("px", "")+"x"+uizGetStyle("object"+objectCount, "height").replace("px", "")+"'>";
	uizObj[objectCount].type = "googleChart";
	
	uizGetElementById("object"+objectCount).innerHTML = uizObj[objectCount].obj;
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	
	addObjFinish(); 
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjDaumMap()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjDaumMap() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:300px; height:200px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"Handle' style='position:absolute; cursor:move; width:20px; height:20px; background:url(images/handle.png); opacity:0.5; filter:alpha(opacity=50);' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizSetStyle("object"+objectCount+"Handle", "left", uizGetStyle("object"+objectCount, "left"));
	uizSetStyle("object"+objectCount+"Handle", "top", uizGetStyle("object"+objectCount, "top"));
	uizSetStyle("object"+objectCount+"Handle", "z-index", uizGetStyle("object"+objectCount, "z-index"));
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new DMap("object"+objectCount, {point:new DLatLng(37.48879895934866, 127.03130020103005), level:2}); 
	uizObj[objectCount].type = "mapDaum";

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onMove_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDrag_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onStartDrag_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onEndDrag_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDblClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseMove_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onZoom_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onRedraw_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMoveEnd_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";		

	addObjFinish();  
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjNaverMap()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjNaverMap() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:300px; height:200px;' onMouseUp='objClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"Handle' style='position:absolute; cursor:move; width:20px; height:20px; background:url(images/handle.png); opacity:0.5; filter:alpha(opacity=50);' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";	

	uizSetStyle("object"+objectCount+"Handle", "left", uizGetStyle("object"+objectCount, "left"));
	uizSetStyle("object"+objectCount+"Handle", "top", uizGetStyle("object"+objectCount, "top"));
	uizSetStyle("object"+objectCount+"Handle", "z-index", uizGetStyle("object"+objectCount, "z-index"));
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new NMap(uizGetElementById("object"+objectCount));
	uizObj[objectCount].type = "mapNaver";
	
	uizObj[objectCount].obj.setCenterAndZoom(new NPoint(321198,529730),3);

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onMove_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDrag_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onStartDrag_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onEndDrag_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDblClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseMove_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onZoom_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onRedraw_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	
	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjLiveMap()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjLiveMap() {
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"' style='position:absolute; z-index:1; left:50px; top:50px; width:300px; height:200px;' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";
	
	uizGetElementById('objectStorage').innerHTML += "<div id='object"+objectCount+"Handle' style='position:absolute; cursor:move; width:20px; height:20px; background:url(images/handle.png); opacity:0.5; filter:alpha(opacity=50);' onMouseUp='objClicked("+objectCount+")' onDblClick='objDblClicked("+objectCount+")' onMouseOver='objMouseOver();' onMouseOut='objMouseOut();'></div>";	

	uizSetStyle("object"+objectCount+"Handle", "left", uizGetStyle("object"+objectCount, "left"));
	uizSetStyle("object"+objectCount+"Handle", "top", uizGetStyle("object"+objectCount, "top"));
	uizSetStyle("object"+objectCount+"Handle", "z-index", uizGetStyle("object"+objectCount, "z-index"));
	
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new VEMap('object'+objectCount);
	uizObj[objectCount].type = "mapLive";
	
	uizObj[objectCount].obj.LoadMap();

	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].code  = "//Do Not Remove This Function Prototype\n";
	uizObj[objectCount].code += "function onClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onDoubleClick_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseMove_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseDown_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseUp_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseOver_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseOut_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onMouseWheel_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onStartSpan_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onEndSpan_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onStartZoom_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onEndZoom_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	
	uizObj[objectCount].code += "function onResize_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";
	uizObj[objectCount].code += "function onChangeView_Object" + objectCount +"() {\n\n";
	uizObj[objectCount].code += "}\n\n";	

	addObjFinish();
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addObjFinish()
///////////////////////////////////////////////////////////////////////////////////////////////
function addObjFinish() {
	if(objectCount != 0) {
		objClicked(objectCount);
		
		uizGetElementById("treeNodeObjects").innerHTML += "<li id='treeNodeObject"+objectCount+"'><a onclick='objClicked("+objectCount+");'><img src='images/toolbox/"+uizObj[objectCount].type.toLowerCase()+".png' align='absmiddle'> object"+objectCount+"("+uizObj[objectCount].type+")</a></li>";
		uizGetElementById("objectsExplorerTreeview").innerHTML = uizGetElementById("objectsExplorerTreeviewDummy").innerHTML;
				
		treeviewObjects = new YAHOO.widget.TreeView("objectsExplorerTreeview");
		treeviewObjects.render();
		treeviewObjects.expandAll();
		treeviewObjects.subscribe("labelClick", labelClicked);
	}
	
	writeMessage("<font color=blue><b>Added the object#" + objectCount + "</b></font>");
	objectCount++;	
}

///////////////////////////////////////////////////////////////////////////////////////////////
// deleteObj()
///////////////////////////////////////////////////////////////////////////////////////////////
function deleteObj() {
	uizObj[selectedObj].type = "";
	getObjStyle(selectedObj);
	
	uizGetElementById('objectStorage').removeChild(uizGetElementById('object'+selectedObj));
	if(uizGetElementById('object'+selectedObj+"Handle")) uizGetElementById('objectStorage').removeChild(uizGetElementById('object'+selectedObj+"Handle"));
	//writeMessage("<textarea style='width:800px; height:60px;'>"+uizGetElementById('objectStorage').innerHTML+"</textarea>");

	uizObj[selectedObj] = null;
	
	uizGetElementById("treeNodeObjects").removeChild(uizGetElementById("treeNodeObject"+selectedObj));
	uizGetElementById("objectsExplorerTreeview").innerHTML = uizGetElementById("objectsExplorerTreeviewDummy").innerHTML;

	treeviewObjects = new YAHOO.widget.TreeView("objectsExplorerTreeview");
	treeviewObjects.render();
	treeviewObjects.expandAll();
	treeviewObjects.subscribe("labelClick", labelClicked);
	
	writeMessage("<font color=red><b>Deleted the object#" + selectedObj + "</b></font>");
}

///////////////////////////////////////////////////////////////////////////////////////////////
// labelClicked(node)
///////////////////////////////////////////////////////////////////////////////////////////////
function labelClicked(node) {
	var label = node.label;
	label = replaceAll(label, /<img.*(.*)>/, "");
	label = replaceAll(label, " ", "");

	if(label == "Canvas") {
		objClicked(0);
	}
	else {
		label = replaceAll(label, /[^0-9]/, "");
		objClicked(label);
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addRadioButtonItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function addRadioButtonItem() {
	uizObj[selectedObj].childCount++;
	
	uizGetElementById("objectRadioButtonGroup"+selectedObj).innerHTML += "\t<span id=\"objectRadio"+uizObj[selectedObj].childCount+"\" class=\"yui-button yui-radio-button\">\n\t\t<span class=\"first-child\">\n\t\t\t<button type=\"button\" name=\"objectRadioField"+uizObj[selectedObj].childCount+"\" value=\""+uizObj[selectedObj].childCount+"\">\n\t\t\t\tRadio"+uizObj[selectedObj].childCount+"\n\t\t\t</button>\n\t\t</span>\n\t</span>\n";
	
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	
	
	uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
	htmlEditor.setCode(uizObj[selectedObj].html);
	
	uizObj[selectedObj].obj = new YAHOO.widget.ButtonGroup("objectRadioButtonGroup"+objectCount);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// removeRadioButtonItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function removeRadioButtonItem() {
	if(uizObj[selectedObj].childCount >= 3) {
		uizGetElementById("objectRadioButtonGroup"+selectedObj).removeChild(YAHOO.util.Dom.getLastChild("objectRadioButtonGroup"+selectedObj));
		
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	
		
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "\n\t\n", "\n");	
	
		uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
		htmlEditor.setCode(uizObj[selectedObj].html);
		uizObj[selectedObj].obj = new YAHOO.widget.ButtonGroup("objectRadioButtonGroup"+objectCount);
		uizObj[selectedObj].childCount--;
	}
}	

///////////////////////////////////////////////////////////////////////////////////////////////
// addRadioButtonSetItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function addRadioButtonSetItem() {
	uizObj[selectedObj].childCount++;
	uizGetElementById("objectRadioForm"+selectedObj).innerHTML += "\t<div id='objectRadiobuttonSet"+selectedObj+"Container"+uizObj[selectedObj].childCount+"'>\n\t\t<input id='objectRadiobuttonSet"+selectedObj+"Item"+uizObj[selectedObj].childCount+"' name='objectRadiobutton"+selectedObj+"' type='radio' value='1'> Radiobutton Label\n\t</div>\n";
	
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	
		
	uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
	htmlEditor.setCode(uizObj[selectedObj].html);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// removeRadioButtonSetItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function removeRadioButtonSetItem() {
	if(uizObj[selectedObj].childCount >= 2) {
		uizGetElementById("objectRadioForm"+selectedObj).removeChild(YAHOO.util.Dom.getLastChild("objectRadioForm"+selectedObj));

		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	

		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "\n\t\n", "\n");	

		uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
		htmlEditor.setCode(uizObj[selectedObj].html);
		uizObj[selectedObj].childCount--;
	}	
}	

///////////////////////////////////////////////////////////////////////////////////////////////
// addCheckboxSetItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function addCheckboxSetItem() {
	uizObj[selectedObj].childCount++;
	uizGetElementById("objectCheckboxForm"+selectedObj).innerHTML += "\t<div id='objectCheckboxSet"+selectedObj+"Container"+uizObj[selectedObj].childCount+"'>\n\t\t<input id='objectCheckboxSet"+selectedObj+"Item"+uizObj[selectedObj].childCount+"' type='checkbox' value='1'> Checkbox Label\n\t</div>\n";
	
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	
	
	uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
	htmlEditor.setCode(uizObj[selectedObj].html);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// removeCheckboxSetItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function removeCheckboxSetItem() {
	if(uizObj[selectedObj].childCount >= 2) {
		uizGetElementById("objectCheckboxForm"+selectedObj).removeChild(YAHOO.util.Dom.getLastChild("objectCheckboxForm"+selectedObj));
		
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	

		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "\n\t\n", "\n");	
		
		uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
		htmlEditor.setCode(uizObj[selectedObj].html);
		uizObj[selectedObj].childCount--;
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////
// addTabItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function addTabItem() {
	uizObj[selectedObj].childCount++;
	
	uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML += "<li><a href=\"tab"+uizObj[selectedObj].childCount+"\"><em>Tab"+uizObj[selectedObj].childCount+" Label</em></a></li>\n";
	uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML += "\t<div id=\"tab"+uizObj[selectedObj].childCount+"\" class=\"yui-hidden\"><p>Tab"+uizObj[selectedObj].childCount+" Content</p></div>\n\t";

	var num = YAHOO.util.Dom.getElementsByClassName('yui-resize-handle', 'div').length;
	var elements = YAHOO.util.Dom.getElementsByClassName('yui-resize-handle', 'div')

	uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML, "\n", "");
	uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML, "\t\t", "");
	uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML, "<li", "\n\t\t<li");
	uizGetElementById("objectTabView"+selectedObj).innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj).innerHTML, "</ul", "\n\t</ul");
	
	uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML, "\n", "");
	uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML, "\t", "");
	uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML, "<div", "\n\t\t<div");	
	uizGetElementById("objectTabView"+selectedObj).innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj).innerHTML, "></div", ">\n\t</div");
	uizGetElementById("objectTabView"+selectedObj).innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj).innerHTML, "/p>\n\t</div", "/p></div");;

	//uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle-inner-(.*)\".*>(.*)<\/div>/, "");
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
	uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	
	
	uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
	htmlEditor.setCode(uizObj[selectedObj].html);	
	
	uizObj[selectedObj].obj = new YAHOO.widget.TabView("objectTabView"+selectedObj);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// removeTabItem()
///////////////////////////////////////////////////////////////////////////////////////////////
function removeTabItem() {
	if(uizObj[selectedObj].childCount >= 2) {
		uizGetElementById("objectTabView"+selectedObj+"Nav").removeChild(YAHOO.util.Dom.getLastChild("objectTabView"+selectedObj+"Nav"));
		uizGetElementById("objectTabView"+selectedObj+"Contents").removeChild(YAHOO.util.Dom.getLastChild("objectTabView"+selectedObj+"Contents"));
		
		uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML, "\n", "");
		uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML, "\t\t", "");
		uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Nav").innerHTML, "<li", "\n\t\t<li");
		uizGetElementById("objectTabView"+selectedObj).innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj).innerHTML, "</ul", "\n\t</ul");
	
		uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML, "\n", "");
		uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML, "\t", "");
		uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj+"Contents").innerHTML, "<div", "\n\t\t<div");
		uizGetElementById("objectTabView"+selectedObj).innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj).innerHTML, "></div", ">\n\t</div");
		uizGetElementById("objectTabView"+selectedObj).innerHTML = replaceAll(uizGetElementById("objectTabView"+selectedObj).innerHTML, "/p>\n\t</div", "/p></div");		
		
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, /<div.*class=\"yui-resize-handle(.*)\".*>(.*)<\/div>/, "");
		uizGetElementById("object"+selectedObj).innerHTML = replaceAll(uizGetElementById("object"+selectedObj).innerHTML, "-inner-bl", "");	

		uizObj[selectedObj].html = uizGetElementById("object"+selectedObj).innerHTML;
		htmlEditor.setCode(uizObj[selectedObj].html);
		
		uizObj[selectedObj].obj = new YAHOO.widget.TabView("objectTabView"+selectedObj);
		uizObj[selectedObj].childCount--;
	}
}

