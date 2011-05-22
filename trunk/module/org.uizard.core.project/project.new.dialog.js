/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.new.dialog = function () {
	this.dialog = null;
};

org.uizard.core.new.dialog.prototype = {
	init: function (title, path, width, height, modal) {
		this.dialog = new org.uizard.core.dialog(title, path, width, height, modal);
		
		return this;
	}
};