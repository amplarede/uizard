/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.design.ruler = function () {
	this.target = null;
	this.value = null;
	this.unit = null;
	this.contextMenu = new Array();
	
};

org.uizard.core.design.ruler.prototype = {
	init: function (target, value, unit, title) {
		this.target = target;
		this.title = title;
		
		$(target).append("<div class='ruler'></div>");
		$(target).append("<div class='ruler_x'></div>");
		$(target).append("<div class='ruler_y'></div>");

		
		this.setUnit(value, unit);
		
		this.contextMenu[0] = new org.uizard.core.menu.context();
		this.contextMenu[0].init("../../config/menu/org.uizard.core.design/design.ruler.html", "design.ruler", $(target).find(".ruler"), this.title);
		
		this.contextMenu[1] = new org.uizard.core.menu.context();
		this.contextMenu[1].init("../../config/menu/org.uizard.core.design/design.ruler_x.html", "design.ruler_x", $(target).find(".ruler_x"), this.title);		
		
		this.contextMenu[2] = new org.uizard.core.menu.context();
		this.contextMenu[2].init("../../config/menu/org.uizard.core.design/design.ruler_y.html", "design.ruler_y", $(target).find(".ruler_y"), this.title);		
	},
	
	setUnit: function (value, unit) {
		this.value = value;
		this.unit = unit;
		
	}
};