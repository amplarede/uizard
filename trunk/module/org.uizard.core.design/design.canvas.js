/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

org.uizard.core.design.canvas = function () {
	this.target = null;
	this.title = null;
	this.width = null;
	this.height = null;
	this.contextMenu = null;
	this.objects = null;
	
	this.hoveredIndex = null;
	this.selectedIndex = null;
	
	this.sx = null;
	this.sy = null;
	this.ex = null;
	this.ey = null;
};

org.uizard.core.design.canvas.prototype = {
	
	/*
		Initializing Cavnas  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	init: function (target, width, height, title) {
		var self = this;
		
		//adding html container
		$(target).append("<div class='space'></div>"); //This is a margin when parent window is smaller than canvas size
		$(target).append("<div class='canvas'></div>"); //This is a canvas layer
		$(target).find(".canvas").append("<div class='grid'></div>"); //This is a grid layer which has grid background image and opacity
		$(target).find(".canvas").append("<canvas width='"+width+"' height='"+height+"'></canvas>"); //This is a canvas element which is supported in HTML5
		
		//Set Properties
		this.target = target;
		this.title = title;
		this.objects = $.makeArray();
		this.selectedIndex = $.makeArray();
		
		//Set canvas size
		this.setSize(width, height);
		
		//Set Context Menu
		this.contextMenu = new org.uizard.core.menu.context();
		this.contextMenu.init("../../config/menu/org.uizard.core.design/design.canvas.html", "design.canvas", $(target).find(".canvas"), this.title);
		
				
		//Set Mouse Down Event in Canvas
		$(target).find(".canvas").find("canvas").mousedown(function (e) {
			
			self.deselect();
			
			//Calculate the position (x, y) in Canvas Axis
			var parentOffset = $(this).parent().offset(); 	
			var x = Math.floor(e.pageX - parentOffset.left);
			var y = Math.floor(e.pageY - parentOffset.top);
			
			if (!($(self.target).find(".canvas").hasClass("statusDrawingLine")) && 
			    !($(self.target).find(".canvas").hasClass("statusDrawingSquare")) &&
				!($(self.target).find(".canvas").hasClass("statusMove")) ) {
				//Set the start position for selection layer
				self.sx = x;
				self.sy = y;
			
				$(self.target).find(".canvas").append("<div class='selection'></div>");
			}
			
			//Objects
			$(self.objects).each(function (i) {
				x = Math.floor(e.pageX - parentOffset.left);
				y = Math.floor(e.pageY - parentOffset.top);
				
				//sx, sy : Line Start Position,
				//ex, ey : Line End Position
				var sx = $(this)[0].properties.sx;
				var ex = $(this)[0].properties.ex;
				var sy = $(this)[0].properties.sy;
				var ey = $(this)[0].properties.ey;
				
				if ( ( (sx - 5 <= x && x <= ex + 5) || (ex - 5 <= x && x <= sx + 5) ) && ( (sy - 5 <= y && y <= ey + 5) || (ey - 5 <= y && y <= sy + 5) ) ) {
				
					//Calculate the constant for Line Function : y = ax + b
					var a;
					var b1, b2;
					var c = 5;
					
					if ( $(this)[0].properties.ex - $(this)[0].properties.sx != 0) {
						a = ($(this)[0].properties.ey - $(this)[0].properties.sy) / ($(this)[0].properties.ex - $(this)[0].properties.sx);
						
						c = Math.round(5 * Math.sqrt(a * a + 1) * 1000)/1000; // +- 5px
						
						b1 = $(this)[0].properties.sy - a * $(this)[0].properties.sx - c;
						b2 = $(this)[0].properties.sy - a * $(this)[0].properties.sx + c;
						
						
						if ( Math.round((Math.abs(a)*1000))/1000 < 0.01 || Math.round((Math.abs(1/a)*1000))/1000 < 0.01 ) {
							self.selectedIndex.push(i); //Set current selected object
						
							//Set the cursor shape to move
							$(self.target).find(".canvas").removeClass("statusDefault");
							$(self.target).find(".canvas").removeClass("statusDrawingLine");
							$(self.target).find(".canvas").removeClass("statusDrawingSquare");
							$(self.target).find(".canvas").addClass("statusMove");
								
							return false; //exit the each function, because the cursor status can be changed by the other object	
						}
						else {
							//if a mouse cursor is in line selection coverage,
							if (a * x + b1 <= y && y <= a * x + b2 && (((y - b1) / a <= x && x <=  (y - b2) / a) || ((y - b2) / a <= x && x <=  (y - b1) / a))) {
								self.selectedIndex.push(i); //Set current selected object
								
								//Set the cursor shape to move
								$(self.target).find(".canvas").removeClass("statusDefault");
								$(self.target).find(".canvas").removeClass("statusDrawingLine");
								$(self.target).find(".canvas").removeClass("statusDrawingSquare");
								$(self.target).find(".canvas").addClass("statusMove");
									
								return false; //exit the each function, because the cursor status can be changed by the other object		
							}
							else {
								self.selectedIndex.pop(i);
								
								//If user has selected the line drawing tool, keep the cursor is crosshair, unless, chanage the cursor is default
								if (!($(self.target).find(".canvas").hasClass("statusDrawingLine"))) {
									$(self.target).find(".canvas").removeClass("statusMove");
									$(self.target).find(".canvas").removeClass("statusDrawingLine");
									$(self.target).find(".canvas").removeClass("statusDrawingSquare");
									$(self.target).find(".canvas").addClass("statusDefault");		
								}
							}
						}
					}
					else {
						self.selectedIndex.push(i); //Set current selected object
								
						//Set the cursor shape to move
						$(self.target).find(".canvas").removeClass("statusDefault");
						$(self.target).find(".canvas").removeClass("statusDrawingLine");
						$(self.target).find(".canvas").removeClass("statusDrawingSquare");
						$(self.target).find(".canvas").addClass("statusMove");
							
						return false; //exit the each function, because the cursor status can be changed by the other object
					}
				}
				else {
					self.selectedIndex.pop(i);
								
					//If user has selected the line drawing tool, keep the cursor is crosshair, unless, chanage the cursor is default
					if (!($(self.target).find(".canvas").hasClass("statusDrawingLine"))) {
						$(self.target).find(".canvas").removeClass("statusMove");
						$(self.target).find(".canvas").removeClass("statusDrawingLine");
						$(self.target).find(".canvas").removeClass("statusDrawingSquare");
						$(self.target).find(".canvas").addClass("statusDefault");		
					}
				}				
			});	
			

		});
		
		//Mouse Move Event in Canvas
		$(target).find(".canvas").find("canvas").mousemove(function (e) {
			
			//Calculate the position (x, y) in Canvas Axis
			var parentOffset = $(this).parent().offset(); 	
			var x = Math.floor(e.pageX - parentOffset.left);
			var y = Math.floor(e.pageY - parentOffset.top);
			
			//Print the current position (x, y) to right bottom space of parent window. (window footer)
			$(target).parent().parent().parent().find(".ft").find(".mousePositionView").html("(" + x + ", " + y + ")");
			
			//Selection Layer
			if (!($(self.target).find(".canvas").hasClass("statusDrawingLine")) && 
			    !($(self.target).find(".canvas").hasClass("statusDrawingSquare")) &&
				!($(self.target).find(".canvas").hasClass("statusMove")) ) {
				//Set the end position for selection layer
				self.ex = x;
				self.ey = y;
				
				if(self.ex - self.sx < 0) {
					$(self.target).find(".canvas").find(".selection").css("left", self.ex);
				}
				else {
					$(self.target).find(".canvas").find(".selection").css("left", self.sx);
				}
				
				if(self.ey - self.sy < 0) {
					$(self.target).find(".canvas").find(".selection").css("top", self.ey);
				}
				else {
					$(self.target).find(".canvas").find(".selection").css("top", self.sy);
				}
				
				$(self.target).find(".canvas").find(".selection").width(Math.abs(self.ex - self.sx));
				$(self.target).find(".canvas").find(".selection").height(Math.abs(self.ey - self.sy));
			}
			
			//Objects
			$(self.objects).each(function (i) {
				x = Math.floor(e.pageX - parentOffset.left);
				y = Math.floor(e.pageY - parentOffset.top);
				
				//sx, sy : Start Position,
				//ex, ey : End Position
				var sx = $(this)[0].properties.sx;
				var ex = $(this)[0].properties.ex;
				var sy = $(this)[0].properties.sy;
				var ey = $(this)[0].properties.ey;
				
				if  ( ( (sx - 5 <= x && x <= ex + 5) || (ex - 5 <= x && x <= sx + 5) ) && ( (sy - 5 <= y && y <= ey + 5) || (ey - 5 <= y && y <= sy + 5) ) ) {
				
					//Calculate the constant for Line Function : y = ax + b
					var a;
					var b1, b2;
					var c = 5;
					
					if ( $(this)[0].properties.ex - $(this)[0].properties.sx != 0) {
						//m.s(new Date().getTime(), "canvas");
						
						a = ($(this)[0].properties.ey - $(this)[0].properties.sy) / ($(this)[0].properties.ex - $(this)[0].properties.sx);
						
						c = Math.round(5 * Math.sqrt(a * a + 1) * 1000)/1000; // +- 5px
						
						b1 = $(this)[0].properties.sy - a * $(this)[0].properties.sx - c;
						b2 = $(this)[0].properties.sy - a * $(this)[0].properties.sx + c;
						
						
						if ( Math.round((Math.abs(a)*1000))/1000 < 0.01 ||  Math.round((Math.abs(1/a)*1000))/1000 < 0.01) {
							self.hoveredIndex = i; //Set current hovered object
								
							//Set the cursor shape to move
							$(self.target).find(".canvas").removeClass("statusDefault");
							$(self.target).find(".canvas").removeClass("statusDrawingLine");
							$(self.target).find(".canvas").removeClass("statusDrawingSquare");
							$(self.target).find(".canvas").addClass("statusMove");
							
							return false; //exit the each function, because the cursor status can be changed by the other object
						}
						else {
							//if a mouse cursor is in line selection coverage,
							if (a * x + b1  <= y && y <= a * x + b2 && (((y - b1) / a <= x && x <=  (y - b2) / a) || ((y - b2) / a <= x && x <=  (y - b1) / a))) {
								self.hoveredIndex = i; //Set current hovered object
								
								//Set the cursor shape to move
								$(self.target).find(".canvas").removeClass("statusDefault");
								$(self.target).find(".canvas").removeClass("statusDrawingLine");
								$(self.target).find(".canvas").removeClass("statusDrawingSquare");
								$(self.target).find(".canvas").addClass("statusMove");
								
								return false; //exit the each function, because the cursor status can be changed by the other object
							}
							else {
								self.hoveredIndex = null; //Canvas has no hovered object
									
								//If user has selected the line drawing tool, keep the cursor is crosshair, unless, chanage the cursor is default
								if (!($(self.target).find(".canvas").hasClass("statusDrawingLine"))) {
									$(self.target).find(".canvas").removeClass("statusMove");
									$(self.target).find(".canvas").removeClass("statusDrawingSquare");
									$(self.target).find(".canvas").addClass("statusDefault");
								}
							}
						}
					}
					else {
						self.hoveredIndex = i; //Set current hovered object
								
						//Set the cursor shape to move
						$(self.target).find(".canvas").removeClass("statusDefault");
						$(self.target).find(".canvas").removeClass("statusDrawingLine");
						$(self.target).find(".canvas").removeClass("statusDrawingSquare");
						$(self.target).find(".canvas").addClass("statusMove");
						
						return false; //exit the each function, because the cursor status can be changed by the other object
					}
					
					
				}
				else {
					self.hoveredIndex = null; //Canvas has no hovered object
						
					//If user has selected the line drawing tool, keep the cursor is crosshair, unless, chanage the cursor is default
					if (!($(self.target).find(".canvas").hasClass("statusDrawingLine"))) {
						$(self.target).find(".canvas").removeClass("statusMove");
						$(self.target).find(".canvas").removeClass("statusDrawingSquare");
						$(self.target).find(".canvas").addClass("statusDefault");
					}
				}
			});
			
			
			
			//Occuring mouse move event, draw the canvas
			self.draw();						
		});
		
		//Set Mouse Up Event in Canvas
		$(target).find(".canvas").mouseup(function (e) {
			self.draw();
			
			//Selection Layer
			if(!($(self.target).find(".canvas").hasClass("statusDrawingLine")) && 
			    !($(self.target).find(".canvas").hasClass("statusDrawingSquare")) &&
				!($(self.target).find(".canvas").hasClass("statusMove")) ) {
					
				$(self.target).find(".canvas").find(".selection").remove();
				
				self.select();
			}
		});
		
	},
	
	/*
		Set Size  
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	setSize: function (width, height) {
		//Set width, height properties
		this.width = width;
		this.height = height;
		
		//Set Canvas Layer Style for aligning center
		$(this.target).find(".canvas").width(width);
		$(this.target).find(".canvas").height(height);	
		$(this.target).find(".canvas").css("margin-left", 0 - (width/2));	
		$(this.target).find(".canvas").css("margin-top", 0 - (height/2));	
		
		//Set Canvas Element Style
		$(this.target).find(".canvas").find("canvas").css("position", "absolute");
		$(this.target).find(".canvas").find("canvas").css("left", 0);
		$(this.target).find(".canvas").find("canvas").css("top", 0);		
		
		//Set Canvas Space Style : default margin is 50 (100 = 50 x 2)
		$(this.target).find(".space").width(width + 100);
		$(this.target).find(".space").height(height + 100);			
	},
	
	/*
		Add an Object
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	add: function (type) {
		//Add the object
		this.objects.push(new org.uizard.core.object.ui().init($(this.target).find(".canvas"), type));
		
		//Refresh the Object Explorer (for Testing)
		this.refresh();
	},
	
	/*
		Select
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	select: function () {
		var self = this;
		
		//All objects
		$(this.objects).each(function (i) {
			var sx = $(this)[0].properties.sx;
			var sy = $(this)[0].properties.sy;
			
			if ( ( (self.sx <= sx && sx <= self.ex) || (self.ex <= sx && sx <= self.sx) ) && ( (self.sy <= sy && sy <= self.ey) || (self.ey <= sy && sy <= self.sy) ) ) {
				var ex = $(this)[0].properties.ex;
				var ey = $(this)[0].properties.ey;
			
				if( ( (self.sx <= ex && ex <= self.ex) || (self.ex <= ex && ex <= self.sx) ) && ( (self.sy <= ey && ey <= self.ey) || (self.ey <= ey && ey <= self.sy) ) ) {
					self.selectedIndex.push(i);
					
					if($(this)[0].type == 'square') {
						//is selected?
						if($.inArray(i, $(self.selectedIndex)) >= 0) {
							$(this)[0].select();
						}
					}
				}
			}
		});
	},
	
	/*
		Deselect
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	deselect: function () {
		var self = this;
		
		//All objects
		$(this.objects).each(function (i) {
			if($(this)[0].type == 'square') {
				//is selected?
				if($.inArray(i, $(self.selectedIndex)) >= 0) {
					$(this)[0].deselect();
				}
			}
		});
		
		$(this.objects).each(function (i) {			
			self.selectedIndex.pop();		
		});
	},
	
	/*
		Refresh Object Explorer (For Test)
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	refresh: function () {
		var self=this;
		//test
		$("#objectExplorer").empty();
		
		$(this.objects).each(function (i) {
			$("#objectExplorer").append("<div style='border-bottom:1px solid #ccc; padding:5px;'>" + i + ": " + $(this)[0].properties.isDrag + " " + $(this)[0].properties.isDrawFinished + "</div>");
		});
		
		$("#objectExplorer").append("<input type=button id=refreshButton value='refresh' />");
		$("#refreshButton").click(function () {
			self.refresh();
		});
	},
	
	/*
		Resize Canvas
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	resize: function () {
					
	},
	
	/*
		Drawing Status
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	draw: function () {
		var self = this;
		
		//Canvas Element (Supported in HTML5)
		if($(this.target).find(".canvas").find("canvas")[0].getContext) {
			//Get Context
			var context = $(this.target).find("canvas")[0].getContext('2d');
			
			//Clear the canvas
			context.clearRect (0, 0, $(this.target).find(".canvas").find("canvas").width(), $(this.target).find(".canvas").find("canvas").height());	
			
			//All objects
			$(this.objects).each(function (i) {
				//if the object is line type
				if($(this)[0].type == 'line') {
					
					//is hovered?
					if(self.hoveredIndex == i) {
						context.beginPath();
						context.strokeStyle = "#FFFF00";
						
						context.moveTo($(this)[0].properties.sx, $(this)[0].properties.sy);
						context.lineTo($(this)[0].properties.ex, $(this)[0].properties.ey);
						context.lineWidth = 5;
						context.stroke();
					}
					
					//is selected?
					if($.inArray(i, $(self.selectedIndex)) >= 0) {
						context.beginPath();
						context.strokeStyle = "#666666";
						
						context.rect($(this)[0].properties.sx- 3, $(this)[0].properties.sy - 3, 6, 6);
						context.closePath();
						context.lineWidth = 1;
						context.stroke();
						
						context.fillStyle = "#FFFFFF";
						context.fill();
						
						context.beginPath();
						context.strokeStyle = "#666666";
						
						context.rect($(this)[0].properties.ex- 3, $(this)[0].properties.ey - 3, 6, 6);
						context.closePath();
						context.lineWidth = 1;
						context.stroke();
						
						context.fillStyle = "#FFFFFF";
						context.fill();
					}
					
					//drawing the object
					context.beginPath();
					context.strokeStyle = "#000000";
					
					context.moveTo($(this)[0].properties.sx, $(this)[0].properties.sy);
					context.lineTo($(this)[0].properties.ex, $(this)[0].properties.ey);
					context.lineWidth = 0.5;
					context.stroke();
				}
			});
		}
	},
	
	/*
		Set Cursor
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	setCursor: function (cursorType) {
		//Set the cursor in cavas layer
		$(this.target).find(".canvas").css("cursor", cursorType);
	},
	
	/*
		Set Drawing Mode
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	setDrawingMode: function (mode) {
		//Remove all status
		$(this.target).find(".canvas").removeClass("statusDefault");
		$(this.target).find(".canvas").removeClass("statusDrawingLine");
		$(this.target).find(".canvas").removeClass("statusDrawingSquare");
		$(this.target).find(".canvas").removeClass("statusMove");
		
		//If line mode
		if(mode == "line") {			
			$(this.target).find(".canvas").addClass("statusDrawingLine");
		}
		//If square mode
		else if(mode == "square") {
			$(this.target).find(".canvas").addClass("statusDrawingSquare");
		}
	}
};