/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.toolbar = function () {
	this.contextMenu = null;
};

org.uizard.core.toolbar.prototype = {
	add: function (path, name, container) {
		var self = this;
		
		var url = "module/org.uizard.core.file/file.getContents.php";

		$.ajax({
			url: url,			
			type: "POST",
			data: "path="+path,
			success: function(data) {

				$("#"+container).append(data);
				
				//self.contextMenu = 
				//self.contextMenu = new org.uizard.core.menu.context();
				//self.contextMenu.init("../../config/menu/org.uizard.core.window/window.panel.titlebar.html", "window.panel.titlebar", $("#"+container).find(".titlebar"), this.title);
			}
		});
	},
	
	remove: function () {
		//this.contextMenu.remove();
	
		delete this;
	}
};