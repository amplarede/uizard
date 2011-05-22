/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.debug.message = function () {

};

org.uizard.core.debug.message.prototype = {
	
	/*
		Print message  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	m: function (text, from) {
		var header = "[MSG] ";
		var color = "black";
	
		$("#debug").prepend(this.makeMessage(header, color, text, from)); 
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
		$("#debug").html("");
	}
};