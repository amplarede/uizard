/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.new = function () {
	this.dialog = null;
};

org.uizard.core.new.prototype = {
	
	init: function () { 
	
		alert("!");
		
		this.dialog = new org.uizard.core.new.dialog();
		this.dialog.init("aa", "", 600, 400, true);
		this.dialog = this.dialog.dialog;
		
		this.dialog.setBody("AA");
	},
	
	show: function () {
		this.dialog.show();
	}	
};