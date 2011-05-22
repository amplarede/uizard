/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.object.ui = function () {
	this.target = null;
	this.type = null; // square or line
	this.properties = null;
};

org.uizard.core.object.ui.prototype = {
	init: function (target, type) {
		var self = this;
		
		this.target = target;
		this.type = type;
		
		
		if(type == "line") {
			this.properties = new org.uizard.core.object.ui.line().init(target);
		}
		else if(type == "square") {
			this.properties = new org.uizard.core.object.ui.square().init(target);			
		}

		return this;
	},
	
	setAdapter: function () {
		
	},
	
	select: function () {
		if(this.type == "square") {
			this.properties.select();
		}
	},
	
	deselect: function () {
		if(this.type == "square") {
			this.properties.deselect();
		}
	},
	
	remove: function () {
		
	}
};
