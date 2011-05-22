/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/



org.uizard.core.layout = function () {
	this.layout = null;
	this.innerLayout = null;

	this.leftTabView = null;
	this.innerRightTabView = null;
	this.innerBottomTabView = null;
	this.innerCenterTabView = null;
	
	this.tableProperties = null;
	
	this.treeviewProject = null;
	
	this.mainMenu = null;
	this.toolbar = null;

	this.windowManager = null;

};

org.uizard.core.layout.prototype = {
	
	/*
		Layout initialization   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	init: function(container) {
		
		var self = this;
		
		//Set layout
		this.layout = new YAHOO.widget.Layout({
			units:
			[
				{ position: 'top', height: 59, body: container+'Top', scroll: null, zIndex: 2, gutter: '0px 0px 3px 0px' },
				{ position: 'left', width: 250, body: container+'Left', scroll: false, zIndex: 1, resize: true, gutter: '0px 3px 0px 0px' },
				{ position: 'center', body: container+'CenterInnerLayout', scroll: false },
				{ position: 'bottom', height:30, body: container+'Bottom', scroll: false, gutter: '0px 0px 0px 0px' }
			]
		});

				

		this.layout.on('render', function() {
			
			//Set main menu
			self.attachMainMenu(container + "MainMenu"); 
			
			self.attachToolbar(container + "MainToolbar"); 
			
						
			//Set nested inner layout
			var el = self.layout.getUnitByPosition('center').get('wrap');
			self.innerLayout = new YAHOO.widget.Layout(el, {
				parent: self.layout,
				units:
				[
					{ position: 'right', width: 350, resize: true, scroll: false, body: container+'InnerLayoutRight', animate: true, gutter: '0px 0px 0px 3px' },
					{ position: 'bottom', height: 200, body: container+'InnerLayoutBottom', scroll: false, resize: true, gutter: '3px 0px 0px 0px' },
					{ position: 'center', body: container+'InnerLayoutCenter', scroll: false }
				]
			});
			
			self.innerLayout.render();
		});
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Left
		//////////////////////////////////////////////////////////////////////////////////////////
		
		//Left TabView
		this.leftTabView = new YAHOO.widget.TabView(container+'Left');
		
		//Project Explorer Tab
		this.attachProjectExplorer(this.leftTabView);
		
		this.attachToolBox(this.leftTabView);
		
		//Select first tab
		this.leftTabView.selectTab(0);
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Right
		//////////////////////////////////////////////////////////////////////////////////////////
				
		//Right TabView
		this.innerRightTabView = new YAHOO.widget.TabView(container+'InnerLayoutRight');
		
		//Properties Tab
		this.attachProperties(this.innerRightTabView);
		
		//Object Explorer Tab
		this.attachObjectExplorer(this.innerRightTabView);
		
		//Chat Tab
		this.attachChat(this.innerRightTabView);
		
		//Select first tab
		this.innerRightTabView.selectTab(0);		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Bottom
		//////////////////////////////////////////////////////////////////////////////////////////
				
		//Bottom TabView
		this.innerBottomTabView = new YAHOO.widget.TabView(container+'InnerLayoutBottom');
		
		//Message Tab
		this.attachMessage(this.innerBottomTabView);
		
		//Debug Tab
		this.attachDebug(this.innerBottomTabView);
		
		//Console Tab
		this.attachConsole(this.innerBottomTabView);
		
		//Select first tab
		this.innerBottomTabView.selectTab(0);		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Center
		//////////////////////////////////////////////////////////////////////////////////////////
		
		this.attachWorkspace(container+'InnerLayoutCenter');
		
		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Final
		//////////////////////////////////////////////////////////////////////////////////////////
		
		this.layout.render();		
		
		$(window).resize(this.resizeAll);
		this.innerLayout.getUnitByPosition('center').on("resize", this.resizeAll);
		this.resizeAll();
	},
	
	/*
		Attaching mainmenu  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	attachMainMenu: function(container) {
		this.mainMenu = new YAHOO.widget.MenuBar(container, { 
			autosubmenudisplay: false, 
			hidedelay: 750, 
			lazyload: true, 
			effect: { 
				effect: YAHOO.widget.ContainerEffect.FADE,
				duration: 0.25
			} 
		});

		this.mainMenu.render();
	
	},
	
	/*
		Attaching mainmenu  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	detachMainMenu: function() {
	},
	
	/*
		Show mainmenu  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showMainMenu: function() {
	},
	
	/*
		Hide mainmenu  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideMainMenu: function() {
	},
	
	/*
		Attaching project explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachProjectExplorer: function(target) {
		var self = this;
		
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Project", content: "<div id='projectExplorer'></div>" }));
		
		var projectName = "";
		
		var postdata = {
			kind: "project",
			projectName: projectName
		};
		
		$.post("module/org.uizard.core.file/file.getNodes.php", postdata, function (data) {
			
			var sortJsonData = function (x,y) {
				return ((x.cls > y.cls) ? -1 : ((x.cls < y.cls) ? 1 : 0 ));
			};
			
			var sortProjectTreeview = function (sortingData) { 				
				sortingData.sort(sortJsonData);
				
				for(i=0; i<sortingData.length; i++) {
					if(sortingData[i].children) {
						sortProjectTreeview(sortingData[i].children);
					}
				}
			};
			
			var sortingData = eval(data);
			//sortProjectTreeview(sortingData);
			
			//alert(sortingData.toSource());
			
			self.treeviewProject = new YAHOO.widget.TreeView("projectExplorer", sortingData);

			//this.projectProperties.files = sortingData;
			

			self.treeviewProject.subscribe("dblClickEvent", function(nodedata) {	
				if(nodedata.node.data.cls == "file") {
					var filename = nodedata.node.data.filename;
					var filetype = nodedata.node.data.filetype;
					var filepath = nodedata.node.data.parentLabel;
					
					self.windowManager.open(filepath, filename, filetype);
				}
			});
			
			
				
			self.treeviewProject.render();
			self.treeviewProject.expandAll();
			
			$("#projectExplorer").prepend("<div class='projectName'>Project Name</div>");
			
			var fileContextMenu = new org.uizard.core.menu.context();
			fileContextMenu.init("../../config/menu/org.uizard.core.project/project.explorer.file.html", "project.explorer.file", $("#projectExplorer").find(".ygtvcell"), null);			
			
			var projectContextMenu = new org.uizard.core.menu.context();
			projectContextMenu.init("../../config/menu/org.uizard.core.project/project.explorer.html", "project.explorer", "projectExplorer", null);
		});
	},
	
	/*
		Detaching project explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachProjectExplorer: function() {
	},
	
	/*
		Attaching Tool Box  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachToolBox: function(target) {
		var self = this;
		
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Tool Box", content: "<div id='toolBox'></div>" }));
		$("#toolBox").append("<div id='toolLine' style='cursor:poiinter; width:100%; height:20px; border-bottom:1px solid #ccc;'>Line Tool</div>");
		$("#toolBox").append("<div id='toolSquare' style='cursor:poiinter; width:100%; height:20px; border-bottom:1px solid #ccc;'>Square Tool</div>");
		
		$("#toolLine").click(function () {
			self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("line");
			self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("line");
		});
		$("#toolSquare").click(function () {
			self.windowManager.window[self.windowManager.activeWindow].designer.canvas.add("square");	
			//self.windowManager.window[self.windowManager.activeWindow].designer.canvas.setDrawingMode("square");		
		});		
	},
	
	/*
		Detaching Tool Box
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachToolBox: function() {
	},
	
	
	/*
		Show project explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showProjectExplorer: function() {
	},
	
	/*
		Hide project explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideProjectExplorer: function() {
	},
	
	/*
		Attaching object explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachObjectExplorer: function(target) {
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Object", content: "<div id='objectExplorer'></div>" }));
	},
	
	/*
		Detaching object explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachObjectExplorer: function() {
	},
	
	/*
		Show object explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showObjectExplorer: function() {
	},
	
	/*
		Hide object explorer  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideObjectExplorer: function() {
	},
	
	/*
		Attaching properties  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachProperties: function(target) {
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Properties", content: "<div id='properties'></div>" }));
		
		var textboxCellEditor = new YAHOO.widget.TextboxCellEditor({disableBtns:true});
				
		var tableColumnDefs = [
			{key:"attribute", label:"Attribute", sortable:false, width:70 },
			{key:"value", label:"Value", sortable:false, width:50, editor: textboxCellEditor}
		];
		
		var dataProperties = new YAHOO.util.DataSource();
		dataProperties.responseSchema = { 
			resultNode: "property", 
			fields: ["id","value"] 
		};

		this.tableProperties = new YAHOO.widget.DataTable("properties", tableColumnDefs, dataProperties);
		
		this.tableProperties.addRow({attribute: " ", value: " "}, 0);
	},
	
	/*
		Detaching properties  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachProperties: function() {
	},
	
	/*
		Show properties  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showProperties: function() {
	},
	
	/*
		Hide properties  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideProperties: function() {
	},
	
	/*
		Attaching message 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachMessage: function(target) {
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Message", content: "<div id='message'></div>" }));
	},
	
	/*
		Detaching message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachMessage: function() {
	},
	
	/*
		Show message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showMessage: function() {
	},
	
	/*
		Hide message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideMessage: function() {
	},
	
	/*
		Attaching toolbar  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachToolbar: function(target) {
		this.toolbar = new org.uizard.core.toolbar();
		this.toolbar.add("../../config/toolbar/org.uizard.core.file/file.toolbar.html", "file.toolbar", target);
		this.toolbar.add("../../config/toolbar/org.uizard.core.edit/edit.toolbar.html", "edit.toolbar", target);
		
		var contextMenu = new org.uizard.core.menu.context();
		contextMenu.init("../../config/menu/org.uizard.core.toolbar/toolbar.html", "menu.context.toolbar", target);
	},
	
	/*
		Detaching toolbar  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachToolbar: function() {
	},
	
	/*
		Show toolbar  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showToolbar: function() {
	},
	
	/*
		Hide toolbar  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideToolbar: function() {
	},
	
	/*
		Attaching debug  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachDebug: function(target) {
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Debug", content: "<div id='debug'></div>" }));
	},
	
	/*
		Detaching debug  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachDebug: function() {
	},
	
	/*
		Show debug  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showDebug: function() {
	},
	
	/*
		Hide debug  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideDebug: function() {
	},
	
	/*
		Attaching chat  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachChat: function(target) {
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Chat", content: "<div id='chat'></div>" }));

		$("#chat").append("<div class='chatUserContainer' style='height:100px; border-bottom:1px #CCC solid; padding:5px;'></div>");		
		$("#chat").append("<div class='chatMessageContainer' style='height:200px; border-bottom:1px #CCC solid; padding:5px;'></div>");
		$("#chat").append("<div class='chatMessageInputContainer' style='height:50px; border-bottom:1px #CCC solid; padding:5px; background-color:#EFEFEF; text-align:center;'><input value='Chatting Message' style='width:90%;' /></div>");
	},
	
	/*
		Detaching chat  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachChat: function() {
	},
	
	/*
		Show chat  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showChat: function() {
	},
	
	/*
		Hide chat  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideChat: function() {
	},
	
	/*
		Attaching console  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachConsole: function(target) {
		//attaching tab element
		target.addTab(new YAHOO.widget.Tab({ label: "Console", content: "<div id='console'></div>" }));
	},
	
	/*
		Detaching console  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachConsole: function() {
	},
	
	/*
		Show console  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showConsole: function() {
	},
	
	/*
		Hide console  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideConsole: function() {
	},
	
	/*
		Attaching workspace  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachWorkspace: function(target) {
		//attaching tab element
		$("#"+target).append("<div id='workspace' style='background-color:#bbb;'></div>");
		
		//attaching window manager
		this.attachWindowManager('workspace');
		
		$("#workspace").click(function (e) {
			$("#workspace").find(".hd").each(function(i) {
				$(this).removeClass("activated");
			});
		});
	},
	
	/*
		Detaching workspace  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachWorkspace: function() {
	},
	
	/*
		Show workspace  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showWorkspace: function() {
	},
	
	/*
		Hide workspace  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideWorkspace: function() {
	},
	
	/*
		Attaching window manager  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	attachWindowManager: function(target) {
		//attaching window manager
		this.windowManager = new org.uizard.core.window.manager();
		this.windowManager.init(target);
	},
	
	/*
		Detaching window manager  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	detachWindowManager: function() {
	},
	
	/*
		Show window manager  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showWindowManager: function() {
	},
	
	/*
		Hide window manager  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideWindowManager: function() {
	},
	
	/*
		Resize all  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	resizeAll: function() {
		var layoutLeftHeight = $(".yui-layout-unit-left").find(".yui-layout-wrap").height() - 26;
		$("#uizardLeft").find(".yui-content").height(layoutLeftHeight);
		$("#uizardLeft").find("#projectExplorer").height(layoutLeftHeight-6);
		
		var layoutRightHeight = $(".yui-layout-unit-right").find(".yui-layout-wrap").height() - 26;
		$("#uizardInnerLayoutRight").find(".yui-content").height(layoutRightHeight);
		
		var layoutBottomHeight = $(".yui-layout-unit-bottom").find(".yui-layout-wrap").height() - 26;
		$("#uizardInnerLayoutBottom").find(".yui-content").height(layoutBottomHeight);
		
		var layoutCenterHeight = $(".yui-layout-unit-center").find(".yui-layout-unit-center").find(".yui-layout-wrap").height() - 2;
		$("#uizardInnerLayoutCenter").find("#workspace").height(layoutCenterHeight);
	
		/*
		var divChatContentsHeight = $(".yui-layout-unit-bottom").find(".yui-layout-wrap").height() - 90;
		$("#uizardInnerLayoutBottom").find("#divChatContents").height(divChatContentsHeight);
		
			
		var divPropertiesValueColumnWidth = $("#divProperties").width() - 113;
		
		$("#divProperties").find("table").find("div").each(function(i) {
			//alert($(this).width());
			if(i == 1) {
				if($(this).hasClass("yui-dt-liner")) {
					$(this).width(divPropertiesValueColumnWidth);
				}
			}
		});
		*/
		
		var divPropertiesValueColumnWidth = $("#properties").width() - 200;
	
		$("#properties").find("table").width($("#properties").width());
		$("#properties").find("table").find(".yui-dt-liner").each(function(i) {
			if($(this).parent().hasClass("yui-dt-first")) {
				$(this).width(100);
			}
			else {
				$(this).width(divPropertiesValueColumnWidth);
			}
		});
	}


}