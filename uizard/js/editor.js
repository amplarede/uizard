/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/

function initCodeEditor() {
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
}

function initHtmlEditor() {
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
}

function initCssEditor() {
	var textarea = uizGetElementById('cssEditor');
	
	cssEditor = new CodeMirror(CodeMirror.replace(textarea), {
		parserfile : "parsecss.js",
		stylesheet : 'lib/codeMirror/css/csscolors.css',
		autoMatchParens : true,
		content: textarea3.value,
		path : 'lib/codeMirror/js/',
		height : '270px',
		lineNumbers: true,
		textWrapping: false,
		saveFunction: saveCss
	});
}