/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.project = function () {
	
	this.treeview = null;
	
};

org.uizard.core.project.prototype = {
	
	/*
		Make treeview  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	makeTreeview: function(target) {
		
		this.treeview = new YAHOO.widget.TreeView(target, this.getDirectoriesAndFiles("type", "url"));
	
				//projectProperties.files = sortingData;
				
				/*
				self.treeview.subscribe("dblClickEvent", function(nodedata) {	
					if(nodedata.node.data.cls == "file") {
						var filename = nodedata.node.data.filename;
						var filetype = nodedata.node.data.filetype;
						var fullpath = nodedata.node.data.parentLabel;
						
						windowManager.add(filename, filetype, fullpath);
						//windowManager.show();
						//messageManager.write("alarm", directory, "adsf");
					}
				});
				*/
					
		this.treeview.render();
		this.treeview.expandAll();
	},
	
	/*
		Refresh treeview 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	refreshTreeview: function() {
		this.treeview.refresh();
		
	},
	
	/*
		Get directories and files for treeview 
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	getDirectoriesAndFiles: function(type, url) {
		
		var postdata = {
			type: type,
			url: url,
			kind: "directoriesAndFiles"
		};
		
		var result = null;
		
		$.post("modules/org.uizard.core.file/file.getNodes.php", postdata, function (data) {
			
				var sortJsonData = function (x,y) {
					return ((x.cls > y.cls) ? -1 : ((x.cls < y.cls) ? 1 : 0 ));
				};
				
				var quickSort = function (data) { 				
					data.sort(sortJsonData);
					
					for(i=0; i<data.length; i++) {
						if(data[i].children) {
							quickSort(data[i].children);
						}
					}
				};
				
				result = eval(data);
				quickSort(result);
		});
		
		return result;		
	}
	
	
};