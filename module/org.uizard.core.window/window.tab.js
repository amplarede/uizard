/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.window.tab = function () {
	this.tabView = null;
	this.listmenu = null;
	this.tab = null;
	this.menuitem = null;
	this.window = null;
	this.contextMenu = null;
	
	this.title = null;
};

org.uizard.core.window.tab.prototype = {
	
	/*
		Window tab initialization   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	init: function(container, title, tabView, listmenu) {
		var self = this;
		
		this.tabView = tabView;
		this.listmenu = listmenu;
		
		this.title = title;
		
		this.tab = new YAHOO.widget.Tab({ label: this.title + " <img src='config/image/icons/context/closebutton.png' class='close button' />", content: "" });
		
		this.tabView.addTab(this.tab);
		this.tabView.selectTab(this.tabView.getTabIndex(this.tab));
				
		//For window list menu
		var activateDummy = function () {
			self.activate();
		};
		
		this.menuitem = new YAHOO.widget.MenuItem("windowListMenu", {text: this.title, onclick: {fn: activateDummy}});
		
		this.listmenu.addItem(this.menuitem);
		this.listmenu.render();
		
		this.contextMenu = new org.uizard.core.menu.context();
		this.contextMenu.init("../../config/menu/org.uizard.core.window/window.tab.html", "window.tab", this.tab.get("labelEl"), this.title);
		
		
		//////////////////////////////////////////////////////////////////////////////////////////
		// Window tab events
		//////////////////////////////////////////////////////////////////////////////////////////
		
		//tab click event assign
		$(this.tab.get("labelEl")).click(function() {
			self.activate();
			
			return false;
		});	
		
		//close button click event assign
		$(this.tab.get("labelEl")).find(".close").click(function() {
			self.close();
			
			return false;
		});	
	},
	
	/*
		Connect window
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	connect: function(window) {
		this.window = window;
	},
	
	/*
		Close window tab
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	close: function () {
		this.tabView.removeTab(this.tab);
		this.listmenu.removeItem(this.menuitem);
		
		this.contextMenu.remove();
		
		if(this.window) {
			this.window.tab = null;
			this.window.close();
		}
		
		delete this;
	},
	
	/*
		Window tab activate function 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	activate: function() {
		this.tabView.selectTab(this.tabView.getTabIndex(this.tab));
		
		
		$("#windowListMenu").find(".yuimenuitem-checked").each(function(i) {
			$(this).removeClass("yuimenuitem-checked");
		});
		
		$(this.menuitem.element).addClass("yuimenuitem-checked");	
		
		this.window.show();
		
		if (!$("#" + this.window.container).find(".hd").hasClass("activated")) {
			this.window.activate();
		}
	}
	
};