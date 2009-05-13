

// Object Data Class
function uizObjClass(obj, type, datasourceNo, contextMenu, resize, childCount, provider, datasourceType, resultNode, fields, query, columnWidth, dragAndDrop, code) {
	this.obj = obj;
	this.type = type;
	this.datasourceNo = datasourceNo;
	this.contextMenu = contextMenu;
	this.resize = resize;
	this.childCount = childCount;
	this.provider = provider;
	this.datasourceType = datasourceType;
	this.resultNode = resultNode;
	this.fields = fields;	
	this.query = query;
	this.columnWidth = columnWidth;
	this.dragAndDrop = dragAndDrop;
	this.code = code;
}

// Object Data structure
var uizObj = Array();


uizObj[1] = new uizObjClass();
		
uizObj[2] = new uizObjClass();
		

(function() {


	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#1(MenuBar)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	uizObj[1].type = "treeView";
	uizObj[1].obj = new YAHOO.widget.TreeView("objectTreeview1");
	uizObj[1].obj.render();
	
	uizObj[1].obj.subscribe("show", onShow_Object1);
	uizObj[1].obj.subscribe("hide", onHide_Object1);
	//Do Not Remove This Function Prototype
	function onShow_Object1() {
	
	}
	
	function onHide_Object1() {
	
	}
	
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////		
	//Generating a object#2(MenuBar)
	///////////////////////////////////////////////////////////////////////////////////////////////////////////	
	uizObj[2].type = "treeView";
	uizObj[2].obj = new YAHOO.widget.TreeView("objectTreeview2");
	uizObj[2].obj.render();
	
	uizObj[2].obj.subscribe("show", onShow_Object2);
	uizObj[2].obj.subscribe("hide", onHide_Object2);
	//Do Not Remove This Function Prototype
	function onShow_Object2() {
	
	}
	
	function onHide_Object2() {
	
	}
	
	

})();

