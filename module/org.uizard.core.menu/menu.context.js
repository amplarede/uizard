/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.menu.context = function () {
	this.menu = null;
};

org.uizard.core.menu.context.prototype = {
	init: function (path, name, trigger, fingerprint, target) {
		var self = this;
		
		if (name == "none") {
			$(trigger).bind("contextmenu", function(e) {
				return false;
			});
		}
		else {
			var url = "module/org.uizard.core.file/file.getContents.php";
			
			if (trigger == "") {
				trigger = null;
			}
	
			$.ajax({
				url: url,			
				type: "POST",
				data: "path="+path,
				success: function(data) {
					if(fingerprint != null && fingerprint != "") {
						data = data.replace("[{@FINGERPRINT}]", fingerprint);
						name = name + "_" + fingerprint;
					}
					
					$("#uizardMenuContainer").append(data);
					
					self.menu = new YAHOO.widget.ContextMenu( 
						name,  
						{ 
							trigger: trigger, 
							lazyload: true                                     
						}
					); 
					
					/*
					if(fingerprint == "treeview") { //Does fingerprint div have a treeview?
		
						$("#"+trigger).find(".ygtvcell").bind("contextmenu", function (e) {

							var targetEl = e.target;
			 
							//m.s($(targetEl).html(), "menu.context");
							
							var currentNode = target.getNodeByElement(targetEl);
			 
			 				//m.s(currentNode.toSource(), "menu.context");
							
							if (currentNode) {
								m.s("show" + currentNode, "asdf");
								self.menu.show();
							}
							
							return false;
			 
						});
					}
					*/
				}
			});			
		}
	},
	
	blur: function () {
		if (this.menu) {
			this.menu.blur();
		}
	},
	
	remove: function () {
		$(this.menu.element).remove();
		
		delete this;
	}
};
