/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function writeMessage(msg) {
	uizGetElementById('divMessage').innerHTML = "<font color=gray></b>MESSAGE></b></font>" + msg + "<br>" + document.getElementById('divMessage').innerHTML;        
}

function uizGetElementById(elementID) {
	return YAHOO.util.Dom.get(elementID);
}

function uizGetStyle(elementID, attribute) {
	return YAHOO.util.Dom.getStyle(elementID, attribute);
}

function uizSetStyle(elementID, attribute, value) {
	YAHOO.util.Dom.setStyle(elementID, attribute, value);  
}

function replaceAll(str, orgStr, repStr) { 
	return str.split(orgStr).join(repStr);
} 

function domGetX(elementID) {
	return YAHOO.util.Dom.getX(elementID);
}

function domGetY(elementID) {
	return YAHOO.util.Dom.getY(elementID);
}