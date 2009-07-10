/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

function initCodeEditor() {
	writeMessage("<font color=#F90><b>Initializing The Code Editor...</b></font>");
	
	var textarea = uizGetElementById('textAreaCode');
	var height = layoutCanvas.getUnitByPosition('center').get("height")+'px';
	
	codeEditor = new CodeMirror(CodeMirror.replace(textarea), {
		parserfile : ["tokenizejavascript.js", "parsejavascript.js"],
		stylesheet : 'lib/codeMirror/css/jscolors.css',
		autoMatchParens: true,
		path : 'lib/codeMirror/js/',
		height : height,
		lineNumbers: true,
		textWrapping: false,		
		saveFunction: objSaveCode
	});	
	
	writeMessage("<font color=green><b>The Code Editor has been successfully initialized.</b></font>");
}

function initHtmlEditor() {
	writeMessage("<font color=#F90><b>Initializing The Html Editor...</b></font>");	
	
	var textarea = uizGetElementById('textAreaHtml');
	var height = layoutCanvas.getUnitByPosition('center').get("height")+'px';
	
	htmlEditor = new CodeMirror(CodeMirror.replace(textarea), {
		parserfile : "parsexml.js",
		stylesheet : 'lib/codeMirror/css/xmlcolors.css',
		autoMatchParens: true,
		path : 'lib/codeMirror/js/',
		height : height,
		lineNumbers: true,
		textWrapping: false,		
		saveFunction: objSaveHtml
	});	
	
	writeMessage("<font color=green><b>The Html Editor has been successfully initialized.</b></font>");
}

function initCssEditor() {
	writeMessage("<font color=#F90><b>Initializing The CSS Editor...</b></font>");

	var textarea = uizGetElementById('cssEditor');
	
	cssEditor = new CodeMirror(CodeMirror.replace(textarea), {
		parserfile : "parsecss.js",
		stylesheet : 'lib/codeMirror/css/csscolors.css',
		autoMatchParens : true,
		path : 'lib/codeMirror/js/',
		height : '270px',
		lineNumbers: true,
		textWrapping: false,
		saveFunction: saveCss
	});
	
	writeMessage("<font color=green><b>The CSS Editor has been successfully initialized.</b></font>");
}