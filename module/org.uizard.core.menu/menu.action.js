/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.menu.action = function () {
	
};

org.uizard.core.menu.action.prototype = {
	init: function () {
		$("a[action=newProject]").click(function () {
			var behavior = new org.uizard.core.new();
					
			behavior.init();
			behavior.dialog.show();
		});
	}
}