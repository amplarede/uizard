/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.object.ui.line = function () {
	this.target = null;
	this.timestamp = null;
	this.contextMenu = null;

	this.isDrag = false;
	this.isDrawFinished = false;
	this.selectedNode = null;
	
	this.sx = null;
	this.sy = null;
	this.ex = null;
	this.ey = null;
	
	this.prevX = null;
	this.prevY = null;
	
	this.id = null;
	this.name = null;	
	this.x = null;
	this.y = null;
	this.width = null;
	this.height = null;	
};

org.uizard.core.object.ui.line.prototype = {
	
	/*
		Initializing Line Object
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	init: function (target) {
		var self = this;
		
		//Set 
		this.target = target;
		this.timestamp = new Date().getTime();
		
		//Set the properties
		this.id = null;
		this.name = null;	
		this.x = 0;
		this.y = 0;
		this.width = 0;
		this.height = 0;
		
		//Set context menu
		this.contextMenu = new org.uizard.core.menu.context();
		this.contextMenu.init("../../config/menu/org.uizard.core.object/object.ui.html", "object.ui", "", this.timestamp);

		//Set Mouse Down Event in Canvas
		$(target).find("canvas").mousedown(function (e) {
			
			//Calculate the position (x, y) in Canvas Axis
			var parentOffset = $(this).parent().offset(); 
			x = e.pageX - parentOffset.left;
			y = e.pageY - parentOffset.top;
			
			
			//Dragging Body
			if ( ( (self.sx - 5 < x && x < self.ex + 5) || (self.ex - 5 < x && x < self.sx + 5) ) && ( (self.sy - 5 < y && y < self.ey + 5) || (self.ey - 5 < y && y < self.sy + 5) ) ) { //Body Selection
				//Calculate the constant for Line Function : y = ax + b
				var a;
				var b1, b2;
				var c = 5;
				
				if ( self.ex - self.sx != 0) {
					a = (self.ey - self.sy) / (self.ex - self.sx);
					
					c = Math.round(5 * Math.sqrt(a * a + 1) * 1000)/1000; // +- 5px
					
					b1 = self.sy - a * self.sx - c;
					b2 = self.sy - a * self.sx + c;
					
					
					if ( Math.round((Math.abs(a)*1000))/1000 < 0.01 || Math.round((Math.abs(1/a)*1000))/1000 < 0.01 ||
					     ( (a * x + b1 <= y && y <= a * x + b2 && (((y - b1) / a <= x && x <=  (y - b2) / a) || ((y - b2) / a <= x && x <=  (y - b1) / a))) ) ) {
						self.isDrag = true;
						self.isDrawFinished = false;
							  
						self.selectedNode = "body";
						
						//Using Current x, y
						x = e.pageX - parentOffset.left;
						y = e.pageY - parentOffset.top;
						
						self.prevX = x;
						self.prevY = y;
						
						if (e.which === 3) {
							/* Right Mousebutton was clicked! */
							self.contextMenu.menu.show();
		
							$("#object.ui_" + self.timestamp).css("z-index", 5);
							$("#object.ui_" + self.timestamp).css("left", e.pageX);
							$("#object.ui_" + self.timestamp).css("top", e.pageY);	
						}
					}
				}
			}

			//First Drawing			
			if (!self.isDrawFinished && !self.isDrag) {
				self.isDrag = true;
				self.isDrawFinished = false;
				
				//Using Current x, y
				x = e.pageX - parentOffset.left;
				y = e.pageY - parentOffset.top;
				
				self.sx = x;
				self.sy = y;
				
				self.selectedNode = null;
			}
			else {
				//Using Current x, y
				x = e.pageX - parentOffset.left;
				y = e.pageY - parentOffset.top;
				
				//Dragging Head
				if (self.sy - 3 < y && y < self.sy + 3 && self.sx - 3 < x && x <  self.sx + 3) {
					self.isDrag = true;
					self.isDrawFinished = false;
		
					self.selectedNode = "head";
				}
				//Dragging Tail
				else if (self.ey - 3 < y && y < self.ey + 3 && self.ex - 3 < x && x <  self.ex + 3) {
					self.isDrag = true;
					self.isDrawFinished = false;
					
					self.selectedNode = "tail";
				}
			}

		});
		
		//Set Mouse Move Event in Canvas
		$(target).find("canvas").mousemove(function (e) {
			
			//Calculate the position (x, y) in Canvas Axis
			var parentOffset = $(this).parent().offset(); 	
			x = Math.floor(e.pageX - parentOffset.left);
			y = Math.floor(e.pageY - parentOffset.top);
			  
			if(!self.isDrawFinished && self.isDrag) {
				//Dragging Head
				if (self.selectedNode == "head") {
					self.sx = x;
					self.sy = y;
				}
				else if (self.selectedNode == "body") {
					self.sx += x - self.prevX;
					self.sy += y - self.prevY;
					self.ex += x - self.prevX;
					self.ey += y - self.prevY;
					
					self.prevX = x;
					self.prevY = y;
				}
				//Dragging Tail and Default
				else {
					self.ex = x;
					self.ey = y;
				}	
				
				self.drawLine(self.sx, self.sy, self.ex, self.ey);
			}
			
			if((self.sy - 3 < y && y < self.sy + 3 && self.sx - 3 < x && x <  self.sx + 3) || (self.ey - 3 < y && y < self.ey + 3 && self.ex - 3 < x && x <  self.ex + 3)) {
				//Set the cursor is crosshair
				$(self.target).removeClass("statusDefault");
				$(self.target).removeClass("statusMove");
				$(self.target).removeClass("statusDrawingSquare");
				$(self.target).addClass("statusDrawingLine");
			}
		});		
		
		//Set Mouse Up Event in Canvas  
		$(target).find("canvas").mouseup(function (e) {
			
			//If Drawing and Dragging is not finished and
			if(!self.isDrawFinished && self.isDrag) {	
				self.isDrag = false;
				self.isDrawFinished = true;
			}
			
			//Set the cursor is default
			$(self.target).removeClass("statusDrawingLine");
			$(self.target).removeClass("statusMove");
			$(self.target).removeClass("statusDrawingSquare");
			$(self.target).addClass("statusDefault");
		});
		
		return this;
	},
	
	/*
		Drawing Line Function
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	drawLine: function (sx, sy, ex, ey) {
		
		//drawing the line
		if($(this.target).find("canvas")[0].getContext) {
			var context = $(this.target).find("canvas")[0].getContext('2d');
			
			//clear whole canvas
			context.clearRect (0, 0, $(this.target).find("canvas").width(), $(this.target).find("canvas").height());	
			context.beginPath();
			
			context.strokeStyle = "#000000";
			context.moveTo(sx, sy);
			context.lineTo(ex, ey);				
			context.lineWidth = 0.5;
			context.stroke();
		}
	},
	
	/*
		Removing Line Object
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	remove: function () {
		
	}
};