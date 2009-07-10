/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function initLayout() {

	layout = new YAHOO.widget.Layout({
		units:
		[
			{ position: 'top', height: 70, body: 'top1', scroll: null, zIndex: 2 },
			{ position: 'right', width: 350, resize: true, scroll: false, body: 'right1', animate: true, gutter: '0px 0px 0px 5px' },
			{ position: 'bottom', height: 200, body: 'bottom1', header: '<img src="images/layout/message.png" align="absmiddle"> Message', scroll: true, resize: true, collapse: true, gutter: '5px 0px 0px 0px' },
			{ position: 'left', header: '<img src="images/layout/toolbox.png" align="absmiddle"> Tool Box', width: 200, body: 'left1', scroll: true, zIndex: 1, resize: true, collapse: true, gutter: '0px 5px 0px 0px' },
			{ position: 'center', body: 'center1', scroll: false }
		]
	});
        
	layout.on('render', function() {
		YAHOO.util.Event.onAvailable("mainMenu", initTopMenu);  
		YAHOO.util.Event.onAvailable('divProperties', initProperties);		
		YAHOO.util.Event.onAvailable('canvas', initCanvas);
		YAHOO.util.Event.onAvailable('canvasCode', initCodeEditor);
		YAHOO.util.Event.onAvailable('canvasHtml', initHtmlEditor);
		YAHOO.util.Event.onAvailable('CSSSetting', initCssEditor);		
	});
		
	layout.render();

	function onFieldMenuRender(p_sType, p_aArgs) {
		if (this.parent) {  // submenu
			this.checkedItem = this.getItem(0);
		}
	}

	var oFieldContextMenuItemData = designCanvasContextMenuData;

	var oFieldContextMenu = new YAHOO.widget.ContextMenu(
		"fieldcontextmenu",
		{
			trigger: "canvasDesign",
			itemdata: oFieldContextMenuItemData,
			lazyload: true
		}
	);

	oFieldContextMenu.subscribe("render", onFieldMenuRender);
	
}

function initProperties() {
	var elementRight = layout.getUnitByPosition('right').get('wrap'); 
	layoutProperties = new YAHOO.widget.Layout(elementRight, {
		parent: layout, 
		units: [
			{ position: 'top', header: '<img src="images/layout/objects.png" align="absmiddle"> Object Explorer', body: 'divObjectsExplorer', scroll: true, resize: true, height: 200, gutter: '0px 0px 0px 1px' },					
			{ position: 'center', header: '<img src="images/layout/properties.png" align="absmiddle"> Properties', body: 'divProperties', scroll: true, gutter: '0px 0px 0px 0px' }
		]
	});
	layoutProperties.render();		
	
	uizGetElementById("objectsExplorerTreeview").innerHTML = uizGetElementById("objectsExplorerTreeviewDummy").innerHTML;
	treeviewObjects = new YAHOO.widget.TreeView("objectsExplorerTreeview");
	treeviewObjects.render();
	treeviewObjects.expandAll();
	
	treeviewObjects.subscribe("labelClick", labelClicked);
}