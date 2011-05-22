/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.window.panel = function () {
	this.panel = null;
	this.resize = null;
	this.contextMenu = null;
	
	this.container = null;
	this.workspaceContainer = null;
	this.tab = null;
	
	this.editor = null;
	this.designer = null;
	
	this.title = null;
	
	this.type = null;
	
	this.status = null;
	
	this.filepath = null;
	this.filename = null;
	this.filetype = null;
		
	this.left = null;
	this.top = null;
	this.width = null;
	this.height = null;
};

org.uizard.core.window.panel.prototype = {
	
	/*
		Window panel initialization   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	init: function(container, title, workspaceContainer, filepath, filename, filetype) {
		
		var self = this;
		
		this.container = container;
		this.workspaceContainer = workspaceContainer;
		
		this.filepath = filepath;
		this.filename = filename;
		this.filetype = filetype;
		
		if(filetype == "html") {		
			this.type = "codeEditor";
		}
		else if(filetype == "uml") {		
			this.type = "umlDesigner";
		}		
		
		this.panel = new YAHOO.widget.Panel(
			container, { 
				x: $(".yui-layout-unit-center").position().left + 5, 
				y: $(".yui-layout-unit-center").position().top + 30, 
				width: "800px",
				height: "600px", 
				visible: true, 
				underlay: "none",
				close: false,
				autofillheight: "body",
				draggable: true,
				constraintoviewport: true,
				context: ["showbtn", "tl", "bl"]
			} 
		);
	
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Window setting
		//////////////////////////////////////////////////////////////////////////////////////////	
		
		this.title = title;
		
		this.panel.setHeader("<div style='overflow:auto' class='titlebar'><div style='float:left'>"+this.title+"</div><div style='width:40px; text-align:right; float:right'><img src='config/image/icons/context/minimizebutton.png' class='minimize button' /> <img src='config/image/icons/context/maximizebutton.png' class='maximize button' /> <img src='config/image/icons/context/closebutton.png' class='close button' /></div></div>");
		this.panel.setBody("<div class='windowContainer'></div>");
		this.panel.setFooter("<div class='.footer'>footer</div>");
		this.panel.render();
		
		this.status = "unmaximized";
		//this.filename = filename;
		this.left = $("#"+container).css("left");
		this.top = $("#"+container).css("top");
		this.width = $("#"+container).width();
		this.height = $("#"+container).height();
		
		
		this.setFooter(); //native function to call the this.panel.setFooter()		
		
		
		if(this.type == "codeEditor") {
			this.editor = new org.uizard.core.edit();
			this.editor.init($("#"+container).find(".windowContainer"));
			this.editor.load(this.filepath, this.filename, this.filetype);
		}
		else if(this.type == "umlDesigner") {
			this.designer = new org.uizard.core.design();
			this.designer.init($("#"+container).find(".windowContainer")[0], this.title);
		}

		this.resizeAll();
		
		this.contextMenu = new org.uizard.core.menu.context();
		this.contextMenu.init("../../config/menu/org.uizard.core.window/window.panel.titlebar.html", "window.panel.titlebar", $("#"+container).find(".titlebar"), this.title);
		
		this.resize = new YAHOO.util.Resize(container+"_c", {
			handles: 'all',
			minWidth: 100,
            minHeight: 100,
			status: false,
			proxy: false, 
		});
		
		this.resize.on("startResize", function(args) {
			if (this.cfg.getProperty("constraintoviewport")) { 
				var D = YAHOO.util.Dom; 
				
				var clientRegion = D.getClientRegion(); 
				var elRegion = D.getRegion(this.element); 
				
				self.resize.set("maxWidth", clientRegion.right - elRegion.left - YAHOO.widget.Overlay.VIEWPORT_OFFSET); 
				self.resize.set("maxHeight", clientRegion.bottom - elRegion.top - YAHOO.widget.Overlay.VIEWPORT_OFFSET); 
			} 
			else { 
				self.resize.set("maxWidth", null); 
				self.resize.set("maxHeight", null); 
			} 
			
			self.onStartResize();
		}, this.panel, true);
		
		this.resize.on("resize", function(args) {
			var panelWidth = args.width;
			var panelHeight = args.height;
	
			if(panelWidth != 0) {
            	this.cfg.setProperty("width", panelWidth + "px");
			}
			if(panelHeight != 0) {
            	this.cfg.setProperty("height", panelHeight + "px");
			}
			
			self.resizeAll()
			
			self.onResize();	
		}, this.panel, true);
		
		this.resize.on("endResize", function(args) {
			
			self.resizeAll();

		}, this.panel, true);
		

		//////////////////////////////////////////////////////////////////////////////////////////
		// Window events
		//////////////////////////////////////////////////////////////////////////////////////////
		
		//window body click event assign
		$("#"+container).click(function() {
			self.windowBodyClick();
			
			return false;
		});
		
		//title bar click event assign
		$("#"+container).find(".titlebar").click(function() {
			
			return false;
		});
		
		//title bar mousedown event assign
		$("#"+container).find(".titlebar").mousedown(function() {
			self.titlebarClick();
		});
		
		//title bar dbl click event assign
		$("#"+container).find(".titlebar").dblclick(function() {
			self.titlebarDblclick();
			
			return false;
		});
		
		//minimize button click event assign
		$("#"+container).find(".minimize").click(function() {
			self.minimize();
			
			return false;
		});

		//maxmize button click event assign
		$("#"+container).find(".maximize").click(function() {
			self.maximize();
			
			return false;
		});
				
		//cloase button click event assign
		$("#"+container).find(".close").click(function() {
			self.close();
			
			return false;
		});	
	},
	
	/*
		Connect tab
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	connect: function(tab) {
		this.tab = tab;
	},
	
	/*
		Window body click event function 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	windowBodyClick: function() {
		this.activate();
	},
	
	/*
		Titlebar click event function 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	titlebarClick: function() {
		this.activate();
	},
	
	/*
		Titlebar double click event function    
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	titlebarDblclick: function() {
		this.maximize();
	},
	
	/*
		Maximize event function    
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	maximize: function () {
		var self = this;
		
		if(this.status != "maximized") {			
			this.left = $("#" + this.container + "_c").offset().left;
			this.top = $("#" + this.container + "_c").offset().top;
			this.width = $("#" + this.container + "_c").width();
			this.height = $("#" + this.container + "_c").height();
			
			$("#" + this.container + "_c").offset({left:$("#" + this.workspaceContainer).offset().left - 1, top:$("#" + this.workspaceContainer).offset().top + 24});
			$("#" + this.container + "_c").width($("#" + this.workspaceContainer).width());
			$("#" + this.container + "_c").height($("#" + this.workspaceContainer).height() - 24);
			
            this.panel.cfg.setProperty("width", $("#" + this.workspaceContainer).width() + "px");
            this.panel.cfg.setProperty("height", $("#" + this.workspaceContainer).height() - 24 + "px");
			
			this.status = "maximized";
			
			this.resize.lock();
			
			$("#" + this.container + "_c").find(".yui-resize-handle").hide();
		}
		else {
			$("#" + this.container + "_c").offset({left:self.left, top:self.top});
			$("#" + this.container + "_c").width(this.width);
			$("#" + this.container + "_c").height(this.height);
			
			this.panel.cfg.setProperty("width", this.width + "px");
            this.panel.cfg.setProperty("height", this.height - 3 + "px");
			
			this.status = null;
			
			this.resize.unlock();
			
			$("#" + this.container + "_c").find(".yui-resize-handle").show();
		}
		
		this.resizeAll();
		
		this.activate();
	},	

	/*
		Minimize event function   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	minimize: function () {
		var self = this;
		
		if(this.status != "minimized") {			
			$("#" + self.container + "_c").hide("fast");
			
			this.status = "minimized";	
		}
		else {
			$("#" + self.container + "_c").show("slow");
			
			this.status = null;
		}
		
		this.resizeAll();
				
		this.activate();				
	},
	
	/*
		Close event function 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	close: function() {
		$("#" + this.container).parent().remove();

		this.contextMenu.remove();

		if(this.tab) {
			this.tab.window = null;
			this.tab.close();
		}
		
		delete this;
	},
	
	/*
		Window panel show function
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	show: function() {
		$("#" + this.container + "_c").show();
	},
	
	/*
		Window panel hide function
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hide: function() {
		$("#" + this.container + "_c").hide();
	},	
	
	/*
		Window panel activate function 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	activate: function() {
		$("#"+this.workspaceContainer).find(".activated").each(function(i) {
			$(this).removeClass("activated");
		});
		
		$("#"+this.workspaceContainer).find(".yui-panel-container").each(function(i) {
			$(this).css("z-index", "2");
		});
		
		$("#" + this.container).find(".hd").addClass("activated");	
		$("#" + this.container).parent().css("z-index", "3");	
		
		this.tab.activate();
	},
	
	/*
		Set the window header function
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	setHeader: function(contents) {

	},
	
	/*
		Set the window body function
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	setBody: function(contents) {

	},
	
	/*
		Set the window footer function
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	setFooter: function(contents) {
		if(this.type == "codeEditor") {
		}
		else if(this.type == "umlDesigner") {
			this.panel.setFooter("<div class='designerMessage'>Welcome to the UIzard Designer Panel!</div><div class='mousePositionView'>(0, 0)</div>");
		}
	},
	
	/*
		Window start resize event function   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	onStartResize: function () {
		this.activate();
	},
	
	/*
		Window drag event function   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	onDrag: function () {

	},
	
	/*
		Window resize event function  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	onResize: function () {
		this.activeWindow = i;
					
		if(this.panel.status != "maximized") {		
			this.width = this.panel.cfg.getProperty("width");
			this.height = this.panel.cfg.getProperty("height");
		}
		var windowContentHeight = $("#fileWindow"+i+"_c").height() - 47;
		$("#fileWindow"+i+"_c").find(".yui-content").height(windowContentHeight);
		
		/*
		if($("#codeEditor_fileWindow"+i+"Container").get(0)) {
			codeEditor_load_callback("codeEditor_fileWindow"+i+"Container");
		}
		
		if($("#codeViewer_fileWindow"+i+"Container").get(0)) {
			codeViewer_load_callback("codeViewer_fileWindow"+i+"Container");
		}
		
		if($("#generatedCode_fileWindow"+i+"Container").get(0)) {
			generatedCode_load_callback("generatedCode_fileWindow"+i+"Container");
		}
		*/
	},
	
	resizeAll: function() {
		if(this.type == "codeEditor") {
			$("#"+this.container).find(".windowContainer").height($("#"+this.container).height() - 53);
			$("#"+this.container).find(".windowContainer").find(".CodeMirror").height($("#"+this.container).height() - 53);
		}
		else if(this.type == "umlDesigner") {
			this.designer.resizeAll();
		}
	}
};