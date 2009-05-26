/*
Copyright Ryu Sung Tae. All rights reserved.
Code licensed under the GPL v2 License:
http://www.uizard.org/License
version: 0.8.0
*/

function initCanvas() {
	tabView = new YAHOO.widget.TabView();
		
	var tabDesign = new YAHOO.widget.Tab({
		label: '<img src="images/layout/design.png" align="absmiddle"> <b>Design</b>',
		content: '',
		active: true
	});		
	tabView.addTab(tabDesign);
	
	function clickedDesign() {
		uizSetStyle("canvasGrid", "width", uizGetStyle("canvasDesign", "width"));
		uizSetStyle("canvasGrid", "height", uizGetStyle("canvasDesign", "height"));
		uizSetStyle("canvasGrid", "left", uizGetStyle("canvasDesign", "left"));
		uizSetStyle("canvasGrid", "top", uizGetStyle("canvasDesign", "top")-uizGetStyle("canvasDesign", "height"));
			
		setObjStyle(selectedObj);
		
		layoutCanvas.getUnitByPosition('center').set("scroll", true);
		canvas1.show();
		canvas2.hide();
		canvas3.hide();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();
		writeMessage("you clicked a design tab");
	}				
	tabDesign.addListener('click', clickedDesign);
		var tabDataSource = new YAHOO.widget.Tab({
		label: '<img src="images/layout/datasource.png" align="absmiddle"> <b>DataSource</b>',
		content: ''
	});
	tabView.addTab(tabDataSource);
	
	function clickedDataSource() {
		layoutCanvas.getUnitByPosition('center').set("scroll", true);
		canvas1.hide();
		canvas2.show();
		canvas3.hide();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();
		writeMessage("you clicked a datasource tab");
	}				
	tabDataSource.addListener('click', clickedDataSource);		
		var tabCode = new YAHOO.widget.Tab({
		label: '<img src="images/layout/code.png" align="absmiddle"> <b>Code</b>',
		content: ''
	});
	tabView.addTab(tabCode);
	
	function clickedCode() {
		/*
		var height = uizGetElementById('textAreaCode').scrollHeight+4;			
		if(height > 300) {
			uizSetStyle("textAreaCode", "height", height.scrollHeight+"px");
		}
		*/
		
		codeEditor.focus();
		
		layoutCanvas.getUnitByPosition('center').set("scroll", false);
		canvas1.hide();
		canvas2.hide();
		canvas3.show();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();
		writeMessage("you clicked a code tab");
	}
	tabCode.on('click', clickedCode);		
	
	var tabRealCode = new YAHOO.widget.Tab({
		label: '<img src="images/layout/realcode.png" align="absmiddle"> <b>RealCode</b>',
		content: ''
	});
	tabView.addTab(tabRealCode);

	function clickedRealCode() {
		uizGetElementById('iframeRealCode').contentWindow.document.location.href = "php/codeGenerator.php?projectName=" + projectName + "&mode=codeview";
		var height = uizGetElementById('iframeRealCode').contentWindow.document.body.scrollHeight;
		if(height > 1000) {			
			uizSetStyle("iframeRealCode", "height", height+"px");
			uizSetStyle("canvasRealCode", "height", (height+20)+"px");
		}
			layoutCanvas.getUnitByPosition('center').set("scroll", true);
		canvas1.hide();
		canvas2.hide();
		canvas3.hide();
		canvas4.show();
		canvas5.hide();
		canvas6.hide();
		canvas7.hide();
		writeMessage("you clicked a realcode tab");
	}				
	tabRealCode.on('click', clickedRealCode);		
	
	var tabHtml = new YAHOO.widget.Tab({
		label: '<img src="images/layout/html.png" align="absmiddle"> <b>Html</b>',
		content: ''
	});
	tabView.addTab(tabHtml);
	
	function clickedHtml() {
		/*
		var height = uizGetElementById('textAreaCode').scrollHeight+4;			
		if(height > 300) {
			uizSetStyle("textAreaCode", "height", height.scrollHeight+"px");
		}
		*/
		
		htmlEditor.focus();
		
		layoutCanvas.getUnitByPosition('center').set("scroll", false);
		canvas1.hide();
		canvas2.hide();
		canvas3.hide();
		canvas4.hide();
		canvas5.show();
		canvas6.hide();
		canvas7.hide();
		writeMessage("you clicked a html tab");
	}
	tabHtml.on('click', clickedHtml);			
		var tabRealHtml = new YAHOO.widget.Tab({
		label: '<img src="images/layout/realhtml.png" align="absmiddle"> <b>RealHtml</b>',
		content: ''
	});
	tabView.addTab(tabRealHtml);
		function clickedRealHtml() {
		uizGetElementById('iframeRealHtml').contentWindow.document.location.href = "php/codeGenerator.php?projectName=" + projectName + "&mode=htmlview";
		var height = uizGetElementById('iframeRealHtml').contentWindow.document.body.scrollHeight;
		if(height > 1000) {			
			uizSetStyle("iframeRealHtml", "height", height+"px");
			uizSetStyle("canvasRealHtml", "height", (height+20)+"px");
		}

		layoutCanvas.getUnitByPosition('center').set("scroll", true);
		canvas1.hide();
		canvas2.hide();
		canvas3.hide();
		canvas4.hide();
		canvas5.hide();
		canvas6.show();
		canvas7.hide();
		writeMessage("you clicked a realhtml tab");
	}				
	tabRealHtml.on('click', clickedRealHtml);
		var tabPreview = new YAHOO.widget.Tab({
		label: '<img src="images/layout/preview.png" align="absmiddle"> <b>Preview</b>',
		content: ''
	});
	tabView.addTab(tabPreview);
	
	function clickedPreview() {
		uizGetElementById('iframePreview').contentWindow.document.location.href = "php/codeGenerator.php?projectName=" + projectName + "&mode=print";
		var height = uizGetElementById('iframePreview').contentWindow.document.body.scrollHeight;
		if(height > 1000) {
			uizSetStyle("iframePreview", "height", height+"px");
			uizSetStyle("canvasPreview", "height", (height+20)+"px");			
		}
		
		layoutCanvas.getUnitByPosition('center').set("scroll", true);
		canvas1.hide();
		canvas2.hide();
		canvas3.hide();
		canvas4.hide();
		canvas5.hide();
		canvas6.hide();
		canvas7.show();
		writeMessage("you clicked a preview tab");
	}				
	tabPreview.addListener('click', clickedPreview);
	
	tabView.addListener('activeTabChange', objSaveCodeAndHtml);
		tabView.appendTo('canvasTab');
	
	var elementCenter = layout.getUnitByPosition('center').get('wrap'); 
	
	layoutCanvas = new YAHOO.widget.Layout(elementCenter, {
		parent: layout, 
		units: [
			{ position: 'top', body: 'canvasTab', scroll: false, height: 27, gutter: '0px 0px 0px 0px' },					
			{ position: 'center', body: 'canvasContainer', scroll: true, gutter: '0px 0px 0px 0px' }
		]
	});
	layoutCanvas.render();
	
	canvas1 = new YAHOO.widget.Module("canvas1", { visible: true });   
	canvas1.render("canvasContainer");
	canvas2 = new YAHOO.widget.Module("canvas2", { visible: false });   
	canvas2.render("canvasContainer");
	canvas3 = new YAHOO.widget.Module("canvas3", { visible: false });   
	canvas3.render("canvasContainer"); 
	canvas4 = new YAHOO.widget.Module("canvas4", { visible: false });   
	canvas4.render("canvasContainer"); 
	canvas5 = new YAHOO.widget.Module("canvas5", { visible: false });   
	canvas5.render("canvasContainer"); 
	canvas6 = new YAHOO.widget.Module("canvas6", { visible: false });   
	canvas6.render("canvasContainer"); 	
	canvas7 = new YAHOO.widget.Module("canvas7", { visible: false });   
	canvas7.render("canvasContainer");
}