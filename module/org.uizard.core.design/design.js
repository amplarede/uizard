/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.design = function () {
	this.title = null;
	this.container = null;
	this.designer = null;
	this.ruler = null;
	this.canvas = null;
	
};

org.uizard.core.design.prototype = {
	init: function (target, title) {
		var self = this;
		
		this.container = target;
		this.title = title;
		
		$(target).append("<div class='toolbarContainer'></div>");
		$(target).append("<div class='canvasContainer'></div>");
		
		$(target).find(".canvasContainer").css("left", 14);
		$(target).find(".canvasContainer").css("top", 14);
		
		//Ruler Initialization		
		this.ruler = new org.uizard.core.design.ruler();
		this.ruler.init($(target), "10", "px", this.title);
		
		//Canvas Initialization		
		this.canvas = new org.uizard.core.design.canvas();
		this.canvas.init($(target).find(".canvasContainer"), 600, 400, this.title);

		//Blocking Context Menus for Empty Space		
		var emptyContextMenu = new org.uizard.core.menu.context();
		emptyContextMenu.init("", "none", $(target).find(".canvasContainer"), "");
	},
	
	resizeAll: function () {
		$(this.container).find(".canvasContainer").width($(this.container).parent().width() - 14);
		$(this.container).find(".canvasContainer").height($(this.container).parent().height() - 14);	

		$(this.container).find(".ruler_x").width($(this.container).find(".canvasContainer").width());
		$(this.container).find(".ruler_y").height($(this.container).find(".canvasContainer").height());
		
		
			
		
		if(this.canvas.height + 95 > $(this.container).find(".canvasContainer").height()) {
			$(this.container).find(".canvasContainer").find(".canvas").css("top", 50);	
			$(this.container).find(".canvasContainer").find(".canvas").css("margin-top", 0);
			
			$(this.container).find(".ruler_y").css("background-position", "0px 50px");			
		}
		else {
			$(this.container).find(".canvasContainer").find(".canvas").css("top", "50%");		
			$(this.container).find(".canvasContainer").find(".canvas").css("margin-top", 0 - (this.canvas.height/2) + 10);	
			
			$(this.container).find(".ruler_y").css("background-position", "0px " +  2 + ($(this.container).height() - this.canvas.height)/2 + "px");
		}		
		
		if(this.canvas.width + 95 > $(this.container).find(".canvasContainer").width()) {
			$(this.container).find(".canvasContainer").find(".canvas").css("left", 50);	
			$(this.container).find(".canvasContainer").find(".canvas").css("margin-left", 0);
			
			$(this.container).find(".ruler_x").css("background-position", "50px 0px");
		}
		else {
			$(this.container).find(".canvasContainer").find(".canvas").css("left", "50%");		
			$(this.container).find(".canvasContainer").find(".canvas").css("margin-left", 0 - (this.canvas.width/2) + 10);	
			
			$(this.container).find(".ruler_x").css("background-position", ($(this.container).width() - this.canvas.width)/2 + 2 + "px 0px");
		}
	}
};