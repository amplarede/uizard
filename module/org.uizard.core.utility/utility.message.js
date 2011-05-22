/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.utility.message = function () {

};

org.uizard.core.utility.message.prototype = {
	
	/*
		Success message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	s: function (text, from) {
		var header = "Success";
		var color = "blue";
	
		$("#message").prepend(this.makeMessage(header, color, text, from)); 
	},
	
	/*
		Fail message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	f: function (text, from) {
		var header = "Fail";
		var color = "#f66";
		
		$("#message").prepend(this.makeMessage(header, color, text, from)); 
	},
	
	/*
		Warning message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	w: function (text, from) {
		var header = "Warning";
		var color = "orange";
		
		$("#message").prepend(this.makeMessage(header, color, text, from)); 
	},
	
	/*
		Error message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	er: function (text, from) {
		var header = "Error";
		var color = "red";
		
		$("#message").prepend(this.makeMessage(header, color, text, from)); 
	},
	
	/*
		Event message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	ev: function (text, from) {
		var header = "Event";
		var color = "sky";
		
		$("#message").prepend(this.makeMessage(header, color, text, from)); 
	},
	
	/*
		Alarm message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	a: function (text, from) {
		var header = "Alarm";
		var color = "black";
		
		$("#message").prepend(this.makeMessage(header, color, text, from)); 
	},
	
	/*
		Make message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	makeMessage: function (header, color, text, from) {	
		var message = "<font color=" + color + ">";
		message += header + ": ";
		message += text;
		message += "</font>";
		message += "<font color='gray'>";
		message += " (from " + from + ")";
		message += "</font>";
		message += "<br>";
		
		return message;
	},
	
	/*
		Clean all messages
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	clean: function () {
		$("#message").html("");
	}
};