/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function showNewProject() {
	panelNewProject.show();
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

function initPanels() {
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// New Project Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelNewProject = new YAHOO.widget.Dialog("newProject",  
														{ width: "600px",
														  height: "400px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  modal: true,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleNewProjectCancel = function() {
		this.cancel();
	}
	var handleNewProjectSubmit = function() {
		this.submit();
	}
	var newProjectButtons = [{ text:"OK", handler:handleNewProjectSubmit, isDefault:true },
					 { text:"Cancel", handler:handleNewProjectCancel } ];
	panelNewProject.cfg.queueProperty("buttons", newProjectButtons);
	panelNewProject.render();
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Make Project Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	panelMakeProject = new YAHOO.widget.Dialog("makeProject",  
														{ width: "450px",
														  height: "330px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  modal: true,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleMakeProjectCancel = function() {
		this.cancel();
	}
	var handleMakeProjectSubmit = function() {
		var projectname = uizGetElementById('inputProjectName').value;
		var projectauthor = uizGetElementById('inputProjectAuthor').value;
		if(projectname == "") alert("You must input a project name field");
		else if(projectauthor == "") alert("You must input a project author field");
		else uizGetElementById("makeProjectForm").submit();
	}
	var makeProjectButtons = [{ text:"Make", handler:handleMakeProjectSubmit, isDefault:true },
					 { text:"Cancel", handler:handleMakeProjectCancel } ];
	panelMakeProject.cfg.queueProperty("buttons", makeProjectButtons);
	panelMakeProject.render();
	
	function makeNewProject() {
		window.location = "uizard.php?action=makenewproject&projectname="+projectname+"&projectauthor="+projectauthor;
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Open Project Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	panelOpenProject = new YAHOO.widget.Dialog("openProject",  
														{ width: "450px",
														  height: "150px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  modal: true,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleOpenCancel = function() {
		this.cancel();
	}
	var handleOpenSubmit = function() {
		window.location = "uizard.php?action=load&projectDir="+"<?php echo $projectAuthor;?>"+"_"+uizGetElementById("openProjectName").value;
	}
	var openButtons = [{ text:"Open", handler:handleOpenSubmit, isDefault:true },
					 { text:"Cancel", handler:handleOpenCancel } ];
	panelOpenProject.cfg.queueProperty("buttons", openButtons);
	panelOpenProject.render();
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Open Project Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelSaveAsProject = new YAHOO.widget.Dialog("saveAsProject",  
														{ width: "450px",
														  height: "150px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  modal: true,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleSaveAsCancel = function() {
		this.cancel();
	}
	var handleSaveAsSubmit = function() {
		location.href = 'projects/saveas.php?projectDir=<?php echo $projectname;?>&projectNewDir=' + uizGetElementById("newProjectName").value + "_" + "<?=$projectAuthor?>";
	}
	var saveAsButtons = [{ text:"Save As", handler:handleSaveAsSubmit, isDefault:true },
					 { text:"Cancel", handler:handleSaveAsCancel } ];
	panelSaveAsProject.cfg.queueProperty("buttons", saveAsButtons);
	panelSaveAsProject.render();
		
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Export Project Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelExportProject = new YAHOO.widget.Dialog("exportProject",  
														{ width: "600px",
														  height: "400px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  modal: true,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	
	var handleExportCancel = function() {
		this.cancel();
	}
	var handleExportSubmit = function() {
		uizGetElementById("exportProjectForm").submit();
	}
	var exportButtons = [{ text:"Export", handler:handleExportSubmit, isDefault:true },
					 { text:"Cancel", handler:handleExportCancel } ];
	panelExportProject.cfg.queueProperty("buttons", exportButtons);
	
	panelExportProject.render();
	
	var treeviewExportProject = new YAHOO.widget.TreeView("exportProjectOptionTreeview");
	treeviewExportProject.render();
	treeviewExportProject.expandAll();
	
	treeviewExportProject.subscribe("labelClick", exportLabelClicked);
	
	function exportLabelClicked(node) {
		var label = node.getEl();
	
		if(label.getElementsByTagName("input")[0].id != "chkboxIncludeHTMLFile") {
			if(label.getElementsByTagName("input")[0].checked == true) label.getElementsByTagName("input")[0].checked = false;
			else if(label.getElementsByTagName("input")[0].checked == false) label.getElementsByTagName("input")[0].checked = true;
		}
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// UIzard Info Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelUIzardInfo = new YAHOO.widget.Panel("UIzardInfo",  
														{ width: "580px", 
														  height: "300px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  modal: true,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	panelUIzardInfo.render();
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Grid Setting Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	panelGridSetting = new YAHOO.widget.Dialog("gridSetting",  
														{ width: "250px", 
														  height: "210px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleGridSettingCancel = function() {
		this.cancel();
	}
	var handleGridSettingSubmit = function() {
		saveSetting();
		this.cancel();
	}
	var gridSettingButtons = [{ text:"Save", handler:handleGridSettingSubmit, isDefault:true },
					 { text:"Cancel", handler:handleGridSettingCancel } ];
	panelGridSetting.cfg.queueProperty("buttons", gridSettingButtons);
	
	panelGridSetting.render();
	
	var gridTopConstraint = 0;
	var gridBottomConstraint = 200;
	gridSettingSlider = YAHOO.widget.Slider.getHorizSlider("gridSettingSlider", "gridSlider-thumb", gridTopConstraint, gridBottomConstraint, 20);
	
	gridSettingSlider.setValue(60);
	
	gridSettingSlider.subscribe("change", function(offsetFromStart) {
		if (navigator.appVersion.indexOf("MSIE") != -1) uizGetElementById('canvasGrid').filters.alpha.opacity = offsetFromStart/2;
		else uizGetElementById('canvasGrid').style.opacity = offsetFromStart/200;
		writeMessage("Grid Opacity is changed to "+offsetFromStart/2+"%");
	});
	
	gridSettingButtonGroup = new YAHOO.widget.ButtonGroup({ 
									id:  "gridSettingButtonGroup", 
									name:  "gridSettingButtonGroup", 
									container:  "gridSettingButtons" });
	
	gridSettingButtonGroup.addButtons([
		{ label: "5 Pixel", value: "5" },
		{ label: "10 Pixel", value: "10", checked: true }, 
		{ label: "20 Pixel", value: "20" }
	]);
	
	gridSettingButtonGroup.on("valueChange", function(oArgs) {
		uizSetStyle("canvasGrid", "background", "url(images/grid_"+oArgs.newValue+"px.png)");
		writeMessage("Grid size is changed to "+oArgs.newValue+"pixel");
	});
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// APIKey Setting Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	panelAPIKeySetting = new YAHOO.widget.Dialog("APIKeySetting",  
														{ width: "600px", 
														  height: "400px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleAPIKeyCancel = function() {
		this.cancel();
	}
	var handleAPIKeySubmit = function() {
		this.submit();
	}
	var apiKeyButtons = [{ text:"OK", handler:handleAPIKeySubmit, isDefault:true },
					 { text:"Cancel", handler:handleAPIKeyCancel } ];
	panelAPIKeySetting.cfg.queueProperty("buttons", apiKeyButtons);
	
	panelAPIKeySetting.render();
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// CSS Setting Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelCSSSetting = new YAHOO.widget.Dialog("CSSSetting",  
														{ width: "600px", 
														  height: "400px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleCSSSettingCancel = function() {
		this.cancel();
	}
	var handleCSSSettingSubmit = function() {
		saveCss();
		this.cancel();
	}
	var cssSettingButtons = [{ text:"OK", handler:handleCSSSettingSubmit, isDefault:true },
					 { text:"Cancel", handler:handleCSSSettingCancel } ];
	panelCSSSetting.cfg.queueProperty("buttons", cssSettingButtons);
	
	panelCSSSetting.render();
	
	var tabViewCSSSetting = new YAHOO.widget.TabView('tabCSSSetting');
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Preferences Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelPreferences = new YAHOO.widget.Dialog("Preferences",  
														{ width: "600px", 
														  height: "400px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	
	var handlePreferencesCancel = function() {
		this.cancel();
	}
	var handlePreferencesSubmit = function() {
		saveSetting();
		this.cancel();
	}
	var preferencesButtons = [{ text:"OK", handler:handlePreferencesSubmit, isDefault:true },
					 { text:"Cancel", handler:handlePreferencesCancel } ];
	panelPreferences.cfg.queueProperty("buttons", preferencesButtons);
	
	panelPreferences.render();
	
	var tabViewPreferences = new YAHOO.widget.TabView('tabPreferences');
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Project Setting Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelProjectSetting = new YAHOO.widget.Dialog("ProjectSetting",  
														{ width: "600px", 
														  height: "400px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  zindex:100,
														  visible: false,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	var handleProjectSettingCancel = function() {
		this.cancel();
	}
	var handleProjectSettingSubmit = function() {
		saveSetting();
		this.cancel();
	}
	var projectSettingButtons = [{ text:"OK", handler:handleProjectSettingSubmit, isDefault:true },
					 { text:"Cancel", handler:handleProjectSettingCancel } ];
	panelProjectSetting.cfg.queueProperty("buttons", projectSettingButtons);
	
	panelProjectSetting.render();
	
	var treeviewProjectSettingLibrary = new YAHOO.widget.TreeView("projectSettingLibraryTreeview");
	treeviewProjectSettingLibrary.render();
	treeviewProjectSettingLibrary.expandAll();
	
	treeviewProjectSettingLibrary.subscribe("labelClick", projSettingLabelClicked);
	
	function projSettingLabelClicked(node) {
		var label = node.getEl();
			
		if(label.getElementsByTagName("input")[0].id != "chkboxUseYUI" && label.getElementsByTagName("input")[0].id != "chkboxUseSWFObject") {
			if(label.getElementsByTagName("input")[0].checked == true) label.getElementsByTagName("input")[0].checked = false;
			else if(label.getElementsByTagName("input")[0].checked == false) label.getElementsByTagName("input")[0].checked = true;
		}
		
		libIntroHideAll();
		if(label.getElementsByTagName("input")[0].id == "chkboxUseYUI") {
			panelLibIntro1.show();
		}
		else if(label.getElementsByTagName("input")[0].id == "chkboxUsePrototype") {
			panelLibIntro2.show();
		}
		else if(label.getElementsByTagName("input")[0].id == "chkboxUsejQuery") {
			panelLibIntro3.show();
		}
		else if(label.getElementsByTagName("input")[0].id == "chkboxUseMooTools") {
			panelLibIntro4.show();
		}
		else if(label.getElementsByTagName("input")[0].id == "chkboxUseDojo") {
			panelLibIntro5.show();
		}	
		else if(label.getElementsByTagName("input")[0].id == "chkboxUseSWFObject") {
			panelLibIntro6.show();
		}	
	}
	
	var tabViewProjectSetting = new YAHOO.widget.TabView('tabProjectSetting');
	
	var panelLibIntro1 = new YAHOO.widget.Module("libIntroYUI", { visible: true });   
	panelLibIntro1.render("libIntro");
	var panelLibIntro2 = new YAHOO.widget.Module("libIntroPrototype", { visible: false });   
	panelLibIntro2.render("libIntro");
	var panelLibIntro3 = new YAHOO.widget.Module("libIntrojQuery", { visible: false });   
	panelLibIntro3.render("libIntro");
	var panelLibIntro4 = new YAHOO.widget.Module("libIntroMooTools", { visible: false });   
	panelLibIntro4.render("libIntro");
	var panelLibIntro5 = new YAHOO.widget.Module("libIntroDojo", { visible: false });   
	panelLibIntro5.render("libIntro");
	var panelLibIntro6 = new YAHOO.widget.Module("libIntroSWFObject", { visible: false });   
	panelLibIntro6.render("libIntro");
	
	function libIntroHideAll() {
		panelLibIntro1.hide();
		panelLibIntro2.hide();
		panelLibIntro3.hide();
		panelLibIntro4.hide();
		panelLibIntro5.hide();
		panelLibIntro6.hide();	
	}
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Project Setting Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	var handleColorPickerOK = function() {
		this.cancel();
	}
	
	colorPickerDialog = new YAHOO.widget.Dialog("ColorPicker", { 
					width : "400px",
					close: true,
					fixedcenter : true,
					visible : false, 
					constraintoviewport : true,
					buttons : [ { text:"OK", handler:handleColorPickerOK, isDefault:true } ]
	});
	
	
	var colorPicker;
	
	colorPickerDialog.renderEvent.subscribe(function() {
		if (!colorPicker) {
			colorPicker = new YAHOO.widget.ColorPicker("yui-picker", {
				container: colorPickerDialog,
				images: {
					PICKER_THUMB: "http://yui.yahooapis.com/2.7.0/build/colorpicker/assets/picker_thumb.png",
					HUE_THUMB: "http://yui.yahooapis.com/2.7.0/build/colorpicker/assets/hue_thumb.png"
				},
				showhexsummary: false,
				showwebsafe: true
			});
	
			colorPicker.on("rgbChange", function(o) {
				if(selectedObj == 0) {
					uizSetStyle("canvasDesign", "background-color", "#" + convertDecToHex(o.newValue[0], o.newValue[1], o.newValue[2]));
				}
				else {
					uizSetStyle("object"+selectedObj, "background-color", "#" + convertDecToHex(o.newValue[0], o.newValue[1], o.newValue[2]));
				}
			});
		}
	});
					
	colorPickerDialog.render();
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	// Select Datasource Panel
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	panelSelectDatasource = new YAHOO.widget.Dialog("SelectDatasource",  
														{ width: "350px", 
														  height: "500px",
														  fixedcenter: true, 
														  close: true, 
														  draggable: true, 
														  autofillheight: "body",
														  zindex:100,
														  visible: false,
														  modal: true,
														  effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
														} 
													);
	
	var handleSelectDatasourceOK = function() {
		setObj(selectedObj);
		this.cancel();
	}
	var handleSelectDatasourceCancel = function() {
		this.cancel();
	}
	
	var selectDatasourceButtons = [ { text:"OK", handler:handleSelectDatasourceOK, isDefault:true },
								   { text:"Cancel", handler:handleSelectDatasourceCancel } ];
	panelSelectDatasource.cfg.queueProperty("buttons", selectDatasourceButtons);
	
	panelSelectDatasource.render();
	
	var layoutSelectDatasource = new YAHOO.widget.Layout('layoutSelectDatasource', {
		width: 328,
		height: 420,
		units: [
			{ position:'top', body:'listSelectDatasource', scroll: true, height: 420 },
			{ position:'center', body:'adsfasdf', scroll: false, height: 1 }
		]
	});
			
	layoutSelectDatasource.render();
}