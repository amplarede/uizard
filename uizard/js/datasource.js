/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function addDs(provider, datasourceType, livedata, resultNode, fields) {
	uizObj[objectCount] = new uizObjClass();
	uizObj[objectCount].obj = new YAHOO.util.XHRDataSource(livedata);
	uizObj[objectCount].type = "DATASOURCE";
	uizObj[objectCount].provider = provider;
	uizObj[objectCount].datasourceType = datasourceType;
	if(datasourceType == "XML") {
		uizObj[objectCount].obj.responseType =  YAHOO.util.DataSourceBase.TYPE_XML;
	}
	else if(datasourceType == "JSON") {
		uizObj[objectCount].obj.responseType =  YAHOO.util.DataSourceBase.TYPE_JSON;
	}	
	uizObj[objectCount].resultNode = resultNode;
	uizObj[objectCount].fields = fields;
	uizObj[objectCount].query = "query";
	
	uizGetElementById('canvasDataSource').innerHTML += "<div id='object" + objectCount+"' style='background:url(images/datasource.png) 10px 10px no-repeat; height:140px; background-color:#FCFCFC; border-top:1px #CCCCCC solid; border-bottom:1px #CCCCCC solid; margin:1px; cursor:pointer;' onClick='objDsClicked(" + objectCount + ")'><div style='margin:5px; margin-left:130px;'><div style='font-weight:bold; font-size:13px;'><div style='margin:5px;'>object" + objectCount + " (datasource)</div></div><div style='margin-left:20px;'><b>Source URL</b><div id='divLiveData" + objectCount + "'>" + uizObj[objectCount].obj.liveData + "</div><b>Type</b><br>" + uizObj[objectCount].type + "<br><b>Provider</b><br>" + provider + "</div><div style='text-align:right;'>test | <a href='#' onclick=\"deleteDs(" + objectCount + ");\">delete</a></div></div></div>";
	
	uizObj[objectCount].code  = "\n\n//Do Not Remove This Function Prototype\n";	
	
	addObjDsFinish();
	
	tabView.set('activeIndex', 1);
}

	
function deleteDs(objCount) {
	uizObj[objCount].type = "";
	getObjStyle(objCount);
	
	uizGetElementById('canvasDataSource').removeChild(uizGetElementById('object'+objCount));
	
	uizObj[objCount] = null;
	
	writeMessage("Deleted a object#" + objCount);
}

function addObjDsFinish() {
	writeMessage("Added a object#" + objectCount + "(datasource)");	
	
	objDsClicked(objectCount);
	objectCount++;
}