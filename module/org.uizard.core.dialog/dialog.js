/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.dialog = function () {
	this.panel = null;
	this.contextMenu = null;
	this.path = null;
	
	this.title = null;
	
	this.type = null;

	this.left = null;
	this.top = null;
	this.width = null;
	this.height = null;
};

org.uizard.core.dialog.prototype = {
	
	init: function (title, path, width, height, modal) {
		var self = this;

		this.width = width;
		this.height = height;
		this.modal = modal;
		
		this.path = "module/org.uizard.core.file/file.getContents.php";		
		
		this.panel = new YAHOO.widget.Panel(
			container, { 
				width: self.width,
				height: self.height, 
				visible: true, 
				underlay: "none",
				close: false,
				autofillheight: "body",
				draggable: true,
				constraintoviewport: true,
				modal: self.modal,
				context: ["showbtn", "tl", "bl"]
			} 
		);
		
		this.panel.setHeader(this.title);
		this.panel.setBody("Loading Data...");
		this.panel.setFooter("");
		this.panel.render();
		
		$.ajax({
			url: url,			
			type: "POST",
			data: "path="+path,
			success: function(data) {
				
				self.setBody(data);
				
			}
		});
		
		return this;
	}
	
};