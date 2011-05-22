/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.edit = function () {
	this.editor = null;
	this.filepath = null;
	this.filename = null;
	this.filetype = null;
};

org.uizard.core.edit.prototype = {
	init: function (target) {
		var self = this;
		
		$(target).append("<textarea class='codeEditor'>Loading Data...</textarea>");
		
		this.editor = CodeMirror.fromTextArea($(target).find(".codeEditor")[0], {
			lineNumbers: true,
			matchBrackets: true
		});
		
		$(target).keypress(function (e) {
			if (!(e.which == 115 && e.ctrlKey)) return true;

			self.save();
			
			e.preventDefault();
			return false;
		});
	},
	
	load: function (filepath, filename, filetype) {
		var self = this;
		
		var url = "module/org.uizard.core.file/file.getContents.php";
		var path = filepath + "/" + filename;
		
		$.ajax({
			url: url,			
			type: "POST",
			data: "path="+path,
			success: function(data) {
				self.editor.setValue(data);
			}
		});
	},
	
	save: function (filepath, filename, filetype) {
		var self = this;
		
		var url = "module/org.uizard.core.file/file.putContents.php";
		var path = filepath + "/" + filename;
		
		$.ajax({
			url: url,			
			type: "POST",
			data: "path="+path,
			success: function(data) {
				self.editor.setValue(data);
			}
		});
	},
	
	saveAs: function (filepath, filename, filetype) {
	}
};