/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/


function createProject(templateTypeFile, width, height) {
	panelMakeProject.show();
	
	templateTypeFile = templateTypeFile;
	width = width;
	height = height;
}


function saveProject() {
	writeMessage("<font color=#F90><b>Start Saving...</b></font>");
	writeMessage("<font color=gray><b>Saving the Properties...</b></font>");
	
	for(var i=0; i<objectCount; i++) {
		setTimeout('objClicked('+i+')', 500 + i*200);
	}
	
	setTimeout('writeMessage(\"<font color=green><b>Saving Complete.</b></font>\")', 500 + objectCount*200);
}
