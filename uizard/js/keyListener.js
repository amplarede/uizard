/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.2
*/


function enableKeyListener() {
	var keyListener = Array();
	
	//New Project
	keyListener[0] = new YAHOO.util.KeyListener(document, { shift:true, keys:78 }, { fn:showNewProject } );	
	keyListener[0].enable();
	
	//Open Project
	keyListener[1] = new YAHOO.util.KeyListener(document, { shift:true, keys:79 }, { fn:showOpenProject });	
	keyListener[1].enable();
	
	//Save Project
	keyListener[2] = new YAHOO.util.KeyListener(document, { shift:true, keys:83 }, { fn:saveProject });	
	keyListener[2].enable();
	
	//Save As Project
	keyListener[3] = new YAHOO.util.KeyListener(document, { ctrl:true, shift:true, keys:83 }, { fn:showSaveAsProject });	
	keyListener[3].enable();
	
	//Export The Project
	keyListener[4] = new YAHOO.util.KeyListener(document, { shift:true, keys:69 }, { fn:showExportProject });	
	keyListener[4].enable();
	
	//Copy The Object
	keyListener[5] = new YAHOO.util.KeyListener(document, { shift:true, keys:67 }, { fn:doObjCopy });	
	keyListener[5].enable();
	
	//Paste The Object
	keyListener[6] = new YAHOO.util.KeyListener(document, { shift:true, keys:86 }, { fn:doObjPaste });	
	keyListener[6].enable();
	
	//View The Javascript Code
	keyListener[7] = new YAHOO.util.KeyListener(document, { shift:true, keys:74 }, { fn:viewCode });	
	keyListener[7].enable();
	
	//View The Html Code
	keyListener[8] = new YAHOO.util.KeyListener(document, { shift:true, keys:72 }, { fn:viewHtml });	
	keyListener[8].enable();
	
	//Delete The Object
	keyListener[9] = new YAHOO.util.KeyListener(document, { shift:true, keys:68 }, { fn:deleteObj });	
	keyListener[9].enable();
	
	//Undo
	keyListener[10] = new YAHOO.util.KeyListener(document, { shift:true, keys:90 }, { fn:doUndo });	
	keyListener[10].enable();
	
	//Redo
	keyListener[11] = new YAHOO.util.KeyListener(document, { shift:true, keys:89 }, { fn:doRedo });	
	keyListener[11].enable();
	
	//Indent All
	keyListener[13] = new YAHOO.util.KeyListener(document, { shift:true, keys:73 }, { fn:doIndentAll });	
	keyListener[13].enable();
	
	//Select All
	keyListener[14] = new YAHOO.util.KeyListener(document, { shift:true, keys:65 }, { fn:doSelectAll });	
	keyListener[14].enable();
	
	//Find
	keyListener[15] = new YAHOO.util.KeyListener(document, { shift:true, keys:70 }, { fn:doFind });	
	keyListener[15].enable();
	
	//Replace
	keyListener[16] = new YAHOO.util.KeyListener(document, { shift:true, keys:82 }, { fn:doReplace });	
	keyListener[16].enable();
	
	//Preferences
	keyListener[17] = new YAHOO.util.KeyListener(document, { shift:true, keys:66 }, { fn:showPreferences });	
	keyListener[17].enable();
	
	//Grid Setting
	keyListener[18] = new YAHOO.util.KeyListener(document, { shift:true, keys:71 }, { fn:showGridSetting });	
	keyListener[18].enable();
	
	//API Key Setting
	keyListener[19] = new YAHOO.util.KeyListener(document, { shift:true, keys:75 }, { fn:showAPIKeySetting });	
	keyListener[19].enable();
	
	//CSS Setting
	keyListener[20] = new YAHOO.util.KeyListener(document, { shift:true, keys:87 }, { fn:showCSSSetting });	
	keyListener[20].enable();	
	
	//Project Setting
	keyListener[21] = new YAHOO.util.KeyListener(document, { shift:true, keys:80 }, { fn:showProjectSetting });	
	keyListener[21].enable();
}
