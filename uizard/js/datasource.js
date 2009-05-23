/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function addDsHTML() {
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.util.XHRDataSource("No Need");
	uizObj[objectCount].type = "DATASOURCE";
	uizObj[objectCount].provider = "SELF";
	uizObj[objectCount].datasourceType = "HTML";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	uizObj[objectCount].html += "<table id='datasourceHTMLTable"+objectCount+"'>\n";
	uizObj[objectCount].html += "\t<thead>\n";
	uizObj[objectCount].html += "\t\t<tr>\n";
	uizObj[objectCount].html += "\t\t\t<th>Column1</th>\n";
	uizObj[objectCount].html += "\t\t\t<th>Column2</th>\n";
	uizObj[objectCount].html += "\t\t\t<th>Column3</th>\n";
	uizObj[objectCount].html += "\t\t\t<th>Column4</th>\n";
	uizObj[objectCount].html += "\t\t</tr>\n";
	uizObj[objectCount].html += "\t</thead>\n";
	uizObj[objectCount].html += "\t<tbody>\n";
	uizObj[objectCount].html += "\t\t<tr>\n";
	uizObj[objectCount].html += "\t\t\t<td>Data1</td>\n";
	uizObj[objectCount].html += "\t\t\t<td>Data2</td>\n";
	uizObj[objectCount].html += "\t\t\t<td>Data3</td>\n";
	uizObj[objectCount].html += "\t\t\t<td>Data4</td>\n";
	uizObj[objectCount].html += "\t\t</tr>\n";
	uizObj[objectCount].html += "\t</tbody>\n";
	uizObj[objectCount].html += "</table>\n";
	
	uizObj[objectCount].resultNode = "No Need";
	uizObj[objectCount].fields = "No Need";
	uizObj[objectCount].query = "No Need";
	
	uizGetElementById('canvasDataSource').innerHTML += "<div id='object" + objectCount+"' style='height:260px; background-color:#FCFCFC; border:1px #CCCCCC solid; margin:5px; cursor:pointer; font-size:11px;' onClick='objDsClicked(" + objectCount + ")' onDblClick='objDsDblClicked(" + objectCount + ")'><table width='100%' border='0'><tr><td width='70' rowspan='4' valign='top' style='padding:6px; text-align:center;'><img src='images/datasource.png'><br><br><a href='#' onclick=\"deleteDs(" + objectCount + ");\"><img src='images/toolbox/delete.png' border='0' align='absmiddle'> DELETE</a></td><td colspan='2' style='font-size:14px; font-weight:bold;'><div style='padding-top:5px; padding-bottom:3px;'>object" + objectCount + " (datasource)</div></td></tr><tr><td width='150' style='padding:2px;'><b>Datasource Type</b><br /><div id='divDsType" + objectCount + "'>" + uizObj[objectCount].datasourceType + "</div></td><td style='padding:2px;'><b>Datasource URL</b><div id='divLiveData" + objectCount + "'>" + uizObj[objectCount].obj.liveData + "</div></td></tr><tr><td width='150' style='padding:2px;'><b>Provider</b><br />" + uizObj[objectCount].provider + "</div></td><td style='padding:2px;'></td></tr><tr><td colspan='2' style='padding:2px;'><b>Data Preview</b><div id='dataPreview" + objectCount + "'>table</div></td></tr></table><div id='datasourceHTML"+objectCount+"' style='position:absolute; visibility: hidden;'></div></div>";
	
	uizGetElementById('datasourceHTML'+objectCount).innerHTML += uizObj[objectCount].html;
	
	var myColumnDefs = [
		{key:"column1",label:"column1"},
		{key:"column2",label:"column2"},
		{key:"column3",label:"column3"},
		{key:"column4",label:"column4"}
	];

	uizObj[objectCount].datasource = new YAHOO.util.DataSource(YAHOO.util.Dom.get("datasourceHTMLTable"+objectCount));
	uizObj[objectCount].datasource.responseType = YAHOO.util.DataSource.TYPE_HTMLTABLE;
	uizObj[objectCount].datasource.responseSchema = {
		fields: [{key:"column1"},
				{key:"column2"},
				{key:"column3"},
				{key:"column4"}
		]
	};
	
	var oConfigs = {   
		paginator: new YAHOO.widget.Paginator({   
			rowsPerPage: 3,
			alwaysVisible: false	   
		}),   
	}; 

	uizObj[objectCount].datatable = new YAHOO.widget.DataTable("dataPreview" + objectCount, myColumnDefs, uizObj[objectCount].datasource, oConfigs);
	
	uizObj[objectCount].code  = "\n\n//Do Not Remove This Function Prototype\n";	
	
	addObjDsFinish();
	
}

function addDsJSON() {
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.util.XHRDataSource();
	uizObj[objectCount].type = "DATASOURCE";
	uizObj[objectCount].provider = "SELF";
	uizObj[objectCount].datasourceType = "JSON";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].resultNode = "resultNode";
	uizObj[objectCount].fields = "fields";
	uizObj[objectCount].query = "query";
	
	uizGetElementById('canvasDataSource').innerHTML += "<div id='object" + objectCount+"' style='height:260px; background-color:#FCFCFC; border:1px #CCCCCC solid; margin:5px; cursor:pointer; font-size:11px;' onClick='objDsClicked(" + objectCount + ")' onDblClick='objDsDblClicked(" + objectCount + ")'><table width='100%' border='0'><tr><td width='70' rowspan='4' valign='top' style='padding:6px; text-align:center;'><img src='images/datasource.png'><br><br><a href='#' onclick=\"deleteDs(" + objectCount + ");\"><img src='images/toolbox/delete.png' border='0' align='absmiddle'> DELETE</a></td><td colspan='2' style='font-size:14px; font-weight:bold;'><div style='padding-top:5px; padding-bottom:3px;'>object" + objectCount + " (datasource)</div></td></tr><tr><td width='150' style='padding:2px;'><b>Datasource Type</b><br /><div id='divDsType" + objectCount + "'>" + uizObj[objectCount].datasourceType + "</div></td><td style='padding:2px;'><b>Datasource URL</b><div id='divLiveData" + objectCount + "'>" + uizObj[objectCount].obj.liveData + "</div></td></tr><tr><td width='150' style='padding:2px;'><b>Provider</b><br />" + uizObj[objectCount].provider + "</div></td><td style='padding:2px;'></td></tr><tr><td colspan='2' style='padding:2px;'><b>Data Preview</b><div id='dataPreview" + objectCount + "'>table</div></td></tr></table></div>";
	
	uizObj[objectCount].code  = "\n\n//Do Not Remove This Function Prototype\n";	
	
	addObjDsFinish();

}

function addDsXML() {
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.util.XHRDataSource();
	uizObj[objectCount].type = "DATASOURCE";
	uizObj[objectCount].provider = "SELF";
	uizObj[objectCount].datasourceType = "XML";
	
	uizObj[objectCount].html  = "<!-- Write here the HTML code for this div Layer -->\n";
	
	uizObj[objectCount].resultNode = "resultNode";
	uizObj[objectCount].fields = "fields";
	uizObj[objectCount].query = "query";
	
	uizGetElementById('canvasDataSource').innerHTML += "<div id='object" + objectCount+"' style='height:260px; background-color:#FCFCFC; border:1px #CCCCCC solid; margin:5px; cursor:pointer; font-size:11px;' onClick='objDsClicked(" + objectCount + ")' onDblClick='objDsDblClicked(" + objectCount + ")'><table width='100%' border='0'><tr><td width='70' rowspan='4' valign='top' style='padding:6px; text-align:center;'><img src='images/datasource.png'><br><br><a href='#' onclick=\"deleteDs(" + objectCount + ");\"><img src='images/toolbox/delete.png' border='0' align='absmiddle'> DELETE</a></td><td colspan='2' style='font-size:14px; font-weight:bold;'><div style='padding-top:5px; padding-bottom:3px;'>object" + objectCount + " (datasource)</div></td></tr><tr><td width='150' style='padding:2px;'><b>Datasource Type</b><br /><div id='divDsType" + objectCount + "'>" + uizObj[objectCount].datasourceType + "</div></td><td style='padding:2px;'><b>Datasource URL</b><div id='divLiveData" + objectCount + "'>" + uizObj[objectCount].obj.liveData + "</div></td></tr><tr><td width='150' style='padding:2px;'><b>Provider</b><br />" + uizObj[objectCount].provider + "</div></td><td style='padding:2px;'></td></tr><tr><td colspan='2' style='padding:2px;'><b>Data Preview</b><div id='dataPreview" + objectCount + "'>table</div></td></tr></table></div>";
	
	uizObj[objectCount].code  = "\n\n//Do Not Remove This Function Prototype\n";	
	
	addObjDsFinish();	

}
	
function deleteDs(objCount) {
	uizObj[objCount].type = "";
	getObjStyle(objCount);
	
	uizGetElementById('canvasDataSource').removeChild(uizGetElementById('object'+objCount));
	
	uizObj[objCount] = null;
	
	writeMessage("Deleted a object#" + objCount);
}

function addObjDsFinish() {
	if(objectCount != 0) {
		tabView.set('activeIndex', 1);
		canvas1.hide();
		canvas2.show();
		canvas3.hide();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();
	}
	
	writeMessage("<font color=blue><b>Added a object#" + objectCount + "(datasource)</b></font>");	
	
	objDsClicked(objectCount);
	objectCount++;
}

function makeDatasourceList(datasourceNo) {
	uizGetElementById("listSelectDatasource").innerHTML = "";
	
	for(var i=0; i<objectCount; i++) {
		if(uizObj[i].type == "DATASOURCE") {
			var bgColor = "#FCFCFC";
			var fontColor = "#000000";
			if(i == datasourceNo) {
				bgColor = "#5398ee";
				fontColor = "#FFFFFF";
			}
			uizGetElementById("listSelectDatasource").innerHTML += "<div id='datasourceListElement" + i + "' style='height:80px; background-color:" + bgColor + ";  color:" + fontColor + ";border:1px #CCCCCC solid; margin:5px; cursor:pointer; font-size:11px; text-align:left;' onClick='chooseDatasource(" + i + ");'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tr><td width='70' rowspan='3' style='padding:5px;'><img src='images/datasource.png'></td><td colspan='2'><b>Object" + i + "</b></td></tr><tr><td><b>Type : </b>" + uizObj[i].datasourceType + "</td><td><b>Provider : </b>" + uizObj[i].provider + "</td></tr><tr><td colspan='2' style='overflow:hidden;'><b>URL : </b>" + uizObj[i].obj.liveData + "</td></tr></table></div>";
		}
	}
}

function chooseDatasource(datasourceNo) {
	for(var i=0; i<objectCount; i++) {
		if(uizObj[i].type == "DATASOURCE") {
			var bgColor = "#FCFCFC";
			var fontColor = "#000000";
			if(i == datasourceNo) {
				bgColor = "#5398ee";
				fontColor = "#FFFFFF";
			}
			uizSetStyle("datasourceListElement" + i, "background-color", bgColor);
			uizSetStyle("datasourceListElement" + i, "color", fontColor);
		}
	}
	
	modObjDatatable(selectedObj, datasourceNo);
}