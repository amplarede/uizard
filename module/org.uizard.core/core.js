/*
Copyright Sung-tae Ryu. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 3.0.0
*/

var org = function() {
	var uizard = null;
};

org.uizard = function() {
	var core = null;
};

org.uizard.core = function() {
	
	this.browserVersion = 0;
	this.version = 0;

	this.isiPad = false;
	
	this.container = "";
	
	this.skinName = "";
	
	this.html5Available = false;
	
	this.authorization = null;
	this.codegenerator = null;
	this.collaboration = null;
	this.debug = null;
	this.designer = null;
	this.dialog = null;
	this.editor = null;
	this.file = null;
	this.keylistener = null;
	this.mainLayout = "";
	this.localization = null;
	this.menu = null;
	this.object = null;
	this.preference = null;
	this.project = null;
	this.scm = null;
	this.stencil = null;
	this.template = null;
	this.utility = null;
	this.window = null;
	this.xml = null;
	
	this.action = null;
	
};

org.uizard.core.prototype = {
	
	/*
		UIzard initialization Process   
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	init: function(container) {
		
		this.container = container;
		
		
		//this.load();
		
		
		//Need for device identification
		this.isiPad = navigator.userAgent.match(/iPad/i) != null;
		
		if(this.isiPad) {
			alert("iPad!");
		}
		else {
			this.mainLayout = new org.uizard.core.layout();
			this.mainLayout.init(container);
			
			this.action = new org.uizard.core.menu.action();
			this.action.init();
			
			$(document).bind("contextmenu", function(e) {
                e.preventDefault();
            });
		}
		
		
		/*
		
		//Application Cache 지원여부 확인
		If (!!window.applicationCache) { // 지원함 
		
			//Application Cache 상태
			if ( window.applicationCache.status == window.applicationCache.UPDATEREADY) {
				// 작업진행
				
			}
		
		} else {
			
		}
		
		//Web Storage 사용하기 (UIzard 설정 값을 이용할 때 사용)
		localStorage.setItem ( key , value )  // 키/밸류 아이템을 저장
		localStorage.getItem ( key ) // 해당키의 아이템을 가져온다.
		localStorage.removeItem ( key ) // 해당키의 아이템을 삭제한다
		localStorage.clear ( )  // 전체 아이템을 삭제한다
		localStorage.length  // 스토리지에 들어있는 아이템의 개수

		*/
		
		
	},
	
	/*
		UIzard main process
		: (description)
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/
	main: function() {
		
	},

	/*
		Javascript loading
		: (description)		
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	load: function() {
		
		/*
		* CSS features
		*/
		
		
		
		/*
		* Javascript features
		*/
		
		
		
		
	},
	
	/*
		Plugin loading
		: (description)		
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	plugin: function() {
		$.getScript("javascript file");
		$.getScript("javascript file");
		$.getScript("javascript file");
		$.getScript("javascript file");
		$.getScript("javascript file");
		$.getScript("javascript file");
	},

	/*
		Skin loading
		: (description)		
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/		
	skin: function(skinName) {
		this.getCSS(skinName);
	},
	
	/*
		CSS loading
		: (description)		
		First written : Sung-tae Ryu
		Lastest modified : Sung-tae Ryu
	*/	
	getCSS: function(url) {
		$("head").append("<link>");
		css = $("head").children(":last");
		css.attr({
		  rel:  "stylesheet",
		  type: "text/css",
		  href: url
		});
	}
	
	
};