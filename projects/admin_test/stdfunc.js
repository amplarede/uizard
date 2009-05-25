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

function convertHex(Dec) {
	var Value;
	
	if(Dec == 10) { Value = "A"; }
	else if(Dec == 11) { Value = "B"; }
	else if(Dec == 12) { Value = "C"; }
	else if(Dec == 13) { Value = "D"; }	
	else if(Dec == 14) { Value = "E"; }
	else if(Dec == 15) { Value = "F"; }
	else { Value = "" + Dec; }
	
	return Value;
}

function convertDecToHex(Red, Green, Blue) {
	var a, b, c, d, e, f;
	a = convertHex(Math.floor(Red / 16));
	b = convertHex(Red % 16);
	c = convertHex(Math.floor(Green / 16));
	d = convertHex(Green % 16);
	e = convertHex(Math.floor(Blue / 16));
	f = convertHex(Blue % 16);	
	
	return a + b + c + d + e + f;
}