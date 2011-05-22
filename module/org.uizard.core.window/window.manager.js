/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.window.manager = function () {
	this.window = null;
	this.tab = null;
	this.contextMenu = null;
	
	this.listmenu = null;
	
	this.windowListMenu = null;
		
	this.workspaceContainer = null;
	this.windowListContainer = null;
		
	this.index = 0;
	this.windowTabView = null;
	this.activeWindow = -1;
};

org.uizard.core.window.manager.prototype = {
	
	/*
		Window manager initialization   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	init: function(container) {
		var self = this;
		
		this.window = $.makeArray();
		this.tab = $.makeArray();
		this.contextMenu = $.makeArray();
		this.windowListMenu = $.makeArray();
		
		this.workspaceContainer = container;
		$("#" + container).append("<div id='" + container + "WindowList'><div style='float:right;'><img class='windowList button' src='config/image/icons/context/windows.jpg' /></div></div>");
		
		this.windowListContainer = container + "WindowList";
		
		this.windowTabView = new YAHOO.widget.TabView(this.windowListContainer);

		this.listmenu = new YAHOO.widget.Menu("windowListMenu");
		this.listmenu.render(document.body);
		
		this.contextMenu[0] = new org.uizard.core.menu.context();
		this.contextMenu[0].init("../../config/menu/org.uizard.core.window/window.manager.html", "window.manager", container);
		
		this.contextMenu[1] = new org.uizard.core.menu.context();
		this.contextMenu[1].init("../../config/menu/org.uizard.core.window/window.manager.tabView.html", "window.manager.tabView", container + "WindowList");
		
		//testCode
		/*
		$("#" + container + "WindowList").dblclick(function() {
			self.add("designer"); //type : designer or editor
		});
		*/
		
		/*
		$("#workspace").append("<button id='addWindowButton'>add a window</button>");
		
		var self = this;
		$("#addWindowButton").click(function() {
			self.add();
			m.s("added a window", "window manager");
		});
		*/
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Window events
		//////////////////////////////////////////////////////////////////////////////////////////

		$("#" + container).click(function () {
			self.contextMenu[0].blur();
			self.contextMenu[1].blur();
			
			for(i=0; i<self.index; i++) {
				if (self.window[i].contextMenu) {
					self.window[i].contextMenu.blur();
				}
				
				if (self.tab[i].contextMenu) {
					self.tab[i].contextMenu.blur();					
				}
			}
			
		});
				
		$("#" + container + "WindowList").find(".windowList").click(function () {
			self.listmenu.show();
			
			$("#windowListMenu").css("z-index", 5);
			$("#windowListMenu").css("left", $("#" + container + "WindowList").find(".windowList").offset().left - $("#windowListMenu").width() + 10);
			$("#windowListMenu").css("top", $("#" + container + "WindowList").find(".windowList").offset().top + 10);	
		
			return false;
		});
	},

	/*
		Open window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	open: function(filepath, filename, filetype) {
		var i = this.isOpened(filepath, filename);
		
		if(i >= 0) {
			this.window[i].activate();
		}
		else {
			this.add(filepath, filename, filetype);
		}
	},
	
	/*
		Is opened?
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	isOpened: function (filepath, filename) {
		var windowIndex = -1;
		
		$(this.window).each(function (i) {
			if($(this)[0].filepath == filepath && $(this)[0].filename == filename) {
				windowIndex = i;
			}
		});
		
		return windowIndex;
	},	

	/*
		Add window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	add: function(filepath, filename, filetype) {
		
		if(this.checkAlreadyOpened()) {
			m.s("warning", "This file is already opened!!", "windowManager");
		}
		else {			
			var self = this;
			this.activeWindow = this.index;
			
			var title = filename;
			
			$("#"+this.workspaceContainer).append("<div id='fileWindow"+this.index+"'></div>");
			
			this.window[this.index] = new org.uizard.core.window.panel();
			this.window[this.index].init("fileWindow"+this.index, title, this.workspaceContainer, filepath, filename, filetype);	
			
			this.tab[this.index] = new org.uizard.core.window.tab();
			this.tab[this.index].init("fileWindow"+this.index, title, this.windowTabView, this.listmenu);			
			
			this.window[this.index].connect(this.tab[this.index]);
			this.tab[this.index].connect(this.window[this.index]);
						
			this.window[this.index].activate();				
			this.tab[this.index].activate();
			
			this.index++;
		}
	},
	
	/*
		Check the window is already opened
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	checkAlreadyOpened: function(fullpath, filename) {
	},
		
	/*
		Previous window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	previousWindow: function (i) {			

	},

	/*
		Next window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	nextWindow: function (i) {
	
	},
	
	/*
		Hide all windows
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	hideAllWindows: function () {

	},

	/*
		Show all windows
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	showAllWindows: function () {
	},
	
	/*
		Cascade window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	cascade: function () {
	},
	
	/*
		Tile vertically window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	tileVertically: function () {
	},
	
	/*
		Tile horizontally window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	tileHorizontally: function() {
	}
};