/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function showNewProject() {
	panelNewProject.show();
}

function showMakeProject() {
	panelMakeProject.show();
}

function showOpenProject() {
	if(demomode == false) panelOpenProject.show();
	else alert("This is demo mode");
}

function showUIzardInfo() {
	panelUIzardInfo.show();
}

function showGridSetting() {
	panelGridSetting.show();
}

function showAPIKeySetting() {
	setAPIKeySetting(null, null, null, null, null, null, null, null, null);
	
	panelAPIKeySetting.show();
}

function showCSSSetting() {
	loadCss();
	panelCSSSetting.show();
}

function showLocalXMLSetting() {
	panelLocalXMLSetting.show();
}

function showPreferences() {
	panelPreferences.show();
}

function showProjectSetting() {
	if(demomode == false) panelProjectSetting.show();
	else alert("This is demo mode");
}

function showExportProject() {
	if(demomode == false) panelExportProject.show();
	else alert("This is demo mode");
}

function showSaveAsProject() {
	if(demomode == false) panelSaveAsProject.show();
	else alert("This is demo mode");
}